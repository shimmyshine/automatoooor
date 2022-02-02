import { getAddress } from "../helpers/getAddress";
import { getBlock } from "../helpers/getCurrentBlock";
import { getProvider, getProviderLocal } from "../helpers/getNetworkProvider";
import { getSigner } from "../helpers/getSigner";
import { Logger } from "tslog";
import { Modules, NetworkSettingsBO, OTFSettings } from "../helpers/Interfaces";
import { getFunctionByID, getOTFSettings } from "../data/functions";
import { getGasSettings } from "../helpers/getGasSet";
import {
  setIntervalAsync,
  clearIntervalAsync,
} from "set-interval-async/dynamic";
import { setupPrivateAggregator } from "../helpers/networkAggregator";
import { BaseProvider } from "@ethersproject/providers";

interface OrderResults {
  [key: number]: boolean;
}

const NetworkRouter = async (
  log: Logger,
  networkSettings: NetworkSettingsBO,
  groups: number[],
  order: { [key: number]: { [key: number]: number } },
): Promise<void> => {
  const address = getAddress(networkSettings.name);

  let provider: BaseProvider;

  if (networkSettings.runPersonalRPCAggregator === false) {
    provider = getProvider(networkSettings.name);

    if (networkSettings.runAggregatorButDontUse === true) {
      setupPrivateAggregator(
        log,
        networkSettings.aggregateProviders,
        networkSettings.port,
      );
    }
  } else if (networkSettings.runPersonalRPCAggregator === true) {
    setupPrivateAggregator(
      log,
      networkSettings.aggregateProviders,
      networkSettings.port,
    );
    provider = getProviderLocal(
      networkSettings.name,
      networkSettings.chainId,
      "http://localhost:" + networkSettings.port,
    );
  }

  setTimeout(async () => {
    const signer = getSigner(networkSettings.name, provider);

    try {
      await provider.ready;
      signer.connect(provider);
    } catch (e) {
      log.warn(e);
    }

    /* Blocknumber */
    if (networkSettings.showBlockNumber) {
      const blocksInterval = setInterval(
        async () => {
          try {
            log.info(
              networkSettings.name + ": Block: " + (await getBlock(provider)),
            );
          } catch (e) {
            log.warn(e);
          }

          if (networkSettings.blockNumberFreq === 0) {
            clearInterval(blocksInterval);
          }
        },
        networkSettings.blockNumberFreq >= 10
          ? networkSettings.blockNumberFreq
          : 60 * 1000,
      );
    }

    for await (const grp of groups) {
      if (Object.values(order[grp]).length >= 1) {
        const interVal = setIntervalAsync(
          async (): Promise<void> => {
            provider
              .getNetwork()
              .then(async () => {
                log.info("Attempting to execute group " + grp + ".");

                let z = 1;
                const orderResults: OrderResults = {};

                for await (const modu of Object.values(order[grp])) {
                  if (order[grp][z]) {
                    let specificFunctionData: Modules = {};
                    try {
                      specificFunctionData = await getFunctionByID(modu);
                    } catch (e) {
                      log.warn(e);
                    }

                    let functionSettings = null;
                    try {
                      functionSettings = await import(
                        "../." +
                          specificFunctionData[modu].directory +
                          "/settings.ts"
                      );
                    } catch (e) {
                      log.warn(e);
                    }

                    const otfSettings: OTFSettings = getOTFSettings(
                      networkSettings.name,
                      grp + ":" + z + ":" + modu,
                    );

                    let requirePreviousTrue = false;

                    try {
                      if (
                        typeof otfSettings !== "undefined" &&
                        typeof otfSettings.requirePreviousTrue !== "undefined"
                      ) {
                        requirePreviousTrue = otfSettings.requirePreviousTrue;
                      }
                    } catch (e) {
                      log.warn(e);
                    }

                    if (
                      z >= 1 &&
                      typeof networkSettings.requireAllTrue !== "undefined" &&
                      ((networkSettings.requireAllTrue &&
                        !orderResults[z - 1]) ||
                        (requirePreviousTrue && !orderResults[z - 1]))
                    ) {
                      orderResults[z] = false;

                      if (specificFunctionData[modu].moduleSettings.showLog) {
                        log.warn(
                          "[Module: " +
                            specificFunctionData[modu].moduleName +
                            "]: The previous module returned false, cancelling this module execution.",
                        );
                      }

                      z++;

                      break;
                    }

                    if (functionSettings.default.active) {
                      let moduleResult;

                      const otfOverrides: {
                        gasPrice?: number;
                        gasLimit?: number;
                      } = {
                        gasPrice: 0,
                        gasLimit: 0,
                      };
                      if (
                        typeof otfSettings !== "undefined" &&
                        typeof otfSettings.overridePrice !== "undefined"
                      ) {
                        otfOverrides.gasPrice = otfSettings.overridePrice;
                      }
                      if (
                        typeof otfSettings !== "undefined" &&
                        typeof otfSettings.overrideLimit !== "undefined"
                      ) {
                        otfOverrides.gasLimit = otfSettings.overrideLimit;
                        log.info(
                          "[Module: " +
                            specificFunctionData[modu].moduleName +
                            "]: Overriding gasLimit with " +
                            otfSettings.overridePrice +
                            " wei.",
                        );
                      }

                      const enforcedGas = getGasSettings(
                        networkSettings.name,
                        otfOverrides,
                      );

                      if (
                        typeof otfSettings !== "undefined" &&
                        typeof otfSettings.overridePrice !== "undefined"
                      ) {
                        log.info(
                          "[Module: " +
                            specificFunctionData[modu].moduleName +
                            "]: Overriding gasPrice with " +
                            enforcedGas.gasPrice +
                            " wei.",
                        );
                      }

                      try {
                        moduleResult = await import(
                          "../." +
                            specificFunctionData[modu].directory +
                            "/functions/main.ts"
                        );

                        let modResult = await moduleResult.Main(
                          log,
                          address,
                          provider,
                          signer,
                          enforcedGas,
                          otfSettings,
                        );

                        if (
                          otfSettings.retryOnFailure === true ||
                          networkSettings.retryOnFailureForAll === true
                        ) {
                          let p = 1;
                          while (
                            modResult === false &&
                            p <= networkSettings.retryLimiter
                          ) {
                            log.info(
                              "[Module: " +
                                specificFunctionData[modu].moduleName +
                                "]: Retrying attempt " +
                                p +
                                ".",
                            );

                            modResult = await moduleResult.Main(
                              log,
                              address,
                              provider,
                              signer,
                              enforcedGas,
                              otfSettings,
                            );

                            p++;
                          }
                        }

                        orderResults[z] = modResult;
                      } catch (e) {
                        log.warn(e);
                      }
                    }

                    z++;
                  }
                }
              })
              .catch((e) => {
                log.warn(e);
              });

            if (networkSettings.groupsInterval[grp] === 0) {
              clearIntervalAsync(interVal);
            }
          },
          networkSettings.groupsInterval[grp] > 0
            ? networkSettings.groupsInterval[grp]
            : 10,
        );
      }
    }
  }, 2 * 1000);
};

export default NetworkRouter;
