import { getAddress } from "../helpers/getAddress";
import { getBlock } from "../helpers/getCurrentBlock";
import { getProvider } from "../helpers/getNetworkProvider";
import { getSigner } from "../helpers/getSigner";
import { Logger } from "tslog";
import { Modules, NetworkSettingsBO } from "../helpers/Interfaces";
import { getFunctionByID, getOTFSettings } from "../data/functions";
import { setIntervalAsync } from "set-interval-async/dynamic";
import { clearIntervalAsync } from "set-interval-async";

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

  const systemGas = {
    gasPrice:
      networkSettings.gasPriceEnforced == 0
        ? networkSettings.gasPriceDefault
        : networkSettings.gasPriceEnforced,
  };

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

  groups.map((grp, i: number) => {
    const interVal = setIntervalAsync(
      () => {
        Object.values(order[grp]).map(async (res, z: number) => {
          let specificFunctionData: Modules = {};
          try {
            specificFunctionData = await getFunctionByID(res);
          } catch (e) {
            log.warn(e);
          }

          // eslint-disable-next-line @typescript-eslint/no-var-requires
          const functionSettings = require("../." +
            specificFunctionData[res].directory +
            "/settings.ts");

          if (functionSettings.default.active) {
            // eslint-disable-next-line @typescript-eslint/no-var-requires
            require("../." +
              specificFunctionData[res].directory +
              "/functions/main.ts").Main(
              log,
              address,
              provider,
              signer,
              systemGas,
              getOTFSettings(
                networkSettings.name,
                i + 1 + ":" + (z + 1) + ":" + res,
              ),
            );
          }
        });

        if (networkSettings.groupsInterval[grp] === 0) {
          clearIntervalAsync(interVal);
        }
      },
      networkSettings.groupsInterval[grp] > 0
        ? networkSettings.groupsInterval[grp]
        : 10,
    );
  });
};

export default NetworkRouter;
