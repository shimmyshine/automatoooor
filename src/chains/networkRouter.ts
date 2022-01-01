import { getAddress } from "../helpers/getAddress";
import { getBlock } from "../helpers/getCurrentBlock";
import { getProvider } from "../helpers/getNetworkProvider";
import { getSigner } from "../helpers/getSigner";
import { Logger } from "tslog";
import { Modules, NetworkSettingsBO } from "../helpers/Interfaces";
import { getFunctionByID, getOTFSettings } from "../data/functions";
import { setIntervalAsync } from "set-interval-async/dynamic";
import { getGasSettings } from "../helpers/getGasSet";
import { Provider } from "@ethersproject/providers";
import { Signer } from "ethers";

interface GroupQueue {
  [key: number]: {
    modulePath: string;
    functionSettings: unknown;
    log: Logger;
    address: string;
    provider: Provider;
    signer: Signer;
    enforcedGas: { gasPrice?: number; gasLimit?: number };
    otfSettings: unknown;
  };
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
    setIntervalAsync(
      async () => {
        try {
          log.info(
            networkSettings.name + ": Block: " + (await getBlock(provider)),
          );
        } catch (e) {
          log.warn(e);
        }
      },
      networkSettings.blockNumberFreq >= 10
        ? networkSettings.blockNumberFreq
        : 10,
    );
  }

  for (const grp of groups) {
    const groupQueue: GroupQueue = {};

    let z = 1;
    for (const modu of Object.values(order[grp])) {
      if (order[grp][z]) {
        let specificFunctionData: Modules = {};
        try {
          specificFunctionData = await getFunctionByID(modu);
        } catch (e) {
          log.warn(e);
        }

        const functionSettings = await import(
          "../." + specificFunctionData[modu].directory + "/settings.ts"
        );

        if (functionSettings.default.active) {
          try {
            groupQueue[z] = {
              modulePath:
                "../." +
                specificFunctionData[modu].directory +
                "/functions/main.ts",
              functionSettings: functionSettings,
              log: log,
              address: address,
              provider: provider,
              signer: signer,
              enforcedGas: enforcedGas,
              otfSettings: getOTFSettings(
                networkSettings.name,
                grp + ":" + z + ":" + modu,
              ),
            };
          } catch (e) {
            log.warn(e);
          }
        }

        z++;
      }
    }

    for (const item of Object.values(groupQueue)) {
      const toOutput = await import(item.modulePath);

      //log.info(toOutput);

      const toOut = await toOutput.Main(
        item.log,
        item.address,
        item.provider,
        item.signer,
        item.enforcedGas,
        item.otfSettings,
      );

      log.info(toOut);
    }
  }

  /*for (const grp of groups) {
    let z = 1;
    const interVal = setIntervalAsync(async function (): Promise<void> {
      for await (const modu of Object.values(order[grp])) {
        if (order[grp][z]) {
          let specificFunctionData: Modules = {};
          try {
            specificFunctionData = await getFunctionByID(modu);
          } catch (e) {
            log.warn(e);
          }

          const functionSettings = await import(
            "../." + specificFunctionData[modu].directory + "/settings.ts"
          );

          if (functionSettings.default.active) {
            try {
              const modulePathCall = await import(
                "../." +
                  specificFunctionData[modu].directory +
                  "/functions/main.ts"
              );

              await modulePathCall.Main(
                log,
                address,
                provider,
                signer,
                enforcedGas,
                getOTFSettings(
                  networkSettings.name,
                  grp + ":" + z + ":" + modu,
                ),
              );
            } catch (e) {
              log.warn(e);
            }
          }
        }

        z++;
      }
    }, 10 * 1000);
  }*/
};

export default NetworkRouter;
