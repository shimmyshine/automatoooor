import { getAddress } from "../helpers/getAddress";
import { getBlock } from "../helpers/getCurrentBlock";
import { getProvider } from "../helpers/getNetworkProvider";
import { getSigner } from "../helpers/getSigner";
import { Logger } from "tslog";
import { NetworkSettingsBO } from "../helpers/Interfaces";
import { getFunctionByID, getOTFSettings } from "../data/functions";

const NetworkRouter = async (
  log: Logger,
  networkSettings: NetworkSettingsBO,
  groups: number[],
  order: { [key: number]: { [key: number]: number } },
): Promise<void> => {
  const address = "";
  if (getAddress(networkSettings.name)) {
    getAddress(networkSettings.name);
  } else {
    log.error(networkSettings.name + ": No suitable account to use");
    process.exit(1);
  }

  const provider = getProvider(networkSettings.name);
  const signer = getSigner(networkSettings.name, provider);
  await provider.ready;

  const systemGas = {
    gasPrice:
      networkSettings.gasPriceEnforced == 0
        ? networkSettings.gasPriceDefault
        : networkSettings.gasPriceEnforced,
  };

  /* Blocknumber */
  if (networkSettings.showBlockNumber) {
    setInterval(async () => {
      log.info(networkSettings.name + ": Block: " + (await getBlock(provider)));
    }, networkSettings.blockNumberFreq);
  }

  groups.map((grp, i: number) => {
    const interVal = setInterval(
      () => {
        Object.values(order[grp]).map(async (res, z: number) => {
          const specificFunctionData = await getFunctionByID(res);

          if (specificFunctionData != null) {
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
          }
        });

        if (networkSettings.groupsInterval[grp] === 0) {
          clearInterval(interVal);
        }
      },
      networkSettings.groupsInterval[grp] > 0
        ? networkSettings.groupsInterval[grp]
        : 0,
    );
  });
};

export default NetworkRouter;
