import { getAddress } from "../helpers/getAddress";
import { getBlock } from "../helpers/getCurrentBlock";
import { getProvider } from "../helpers/getNetworkProvider";
import { getSigner } from "../helpers/getSigner";
import { Logger } from "tslog";
import { Modules, NetworkSettingsBO, OTFSettings } from "../helpers/Interfaces";
import { getFunctionByID, getOTFSettings } from "../data/functions";
import { getGasSettings } from "../helpers/getGasSet";
import {
  setIntervalAsync,
  clearIntervalAsync,
} from "set-interval-async/dynamic";

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

  const provider = getProvider(networkSettings.name);
  const signer = getSigner(networkSettings.name, provider);

  try {
    await provider.ready;
  } catch (e) {
    log.warn(e);
  }

  const enforcedGas = getGasSettings(networkSettings.name);

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
        : 10,
    );
  }

  for (const grp of groups) {
    const interVal = setIntervalAsync(
      async () => {
        let z = 1;
        const orderResults: OrderResults = {};
        for (const modu of Object.values(order[grp])) {
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
                "../." + specificFunctionData[modu].directory + "/settings.ts"
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
              ((networkSettings.requireAllTrue && !orderResults[z - 1]) ||
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

              try {
                moduleResult = await import(
                  "../." +
                    specificFunctionData[modu].directory +
                    "/functions/main.ts"
                );

                const modResult = await moduleResult.Main(
                  log,
                  address,
                  provider,
                  signer,
                  enforcedGas,
                  otfSettings,
                );

                orderResults[z] = modResult;
              } catch (e) {
                log.warn(e);
              }
            }

            z++;
          }
        }

        if (networkSettings.groupsInterval[grp] === 0) {
          clearIntervalAsync(interVal);
        }
      },
      networkSettings.groupsInterval[grp] > 0
        ? networkSettings.groupsInterval[grp]
        : 10,
    );
  }
};

export default NetworkRouter;
