import { getAddress } from "../helpers/getAddress";
import { getBlock } from "../helpers/getCurrentBlock";
import { getProvider } from "../helpers/getNetworkProvider";
import { getSigner } from "../helpers/getSigner";
import * as Networks from "../data/networks.json";
import { Logger } from "tslog";
import { NetworkSettingsBO } from "../helpers/Interfaces";
import { getFunctionByID, getOTFSettings } from "../data/functions";

const Harmony = async (
  log: Logger,
  networkSettings: NetworkSettingsBO,
  groups: number[],
  order: { [key: number]: { [key: number]: number } },
): Promise<void> => {
  const address: string = getAddress(Networks[0].name)
    ? getAddress(Networks[0].name)
    : log.error(Networks[0].name + ": No suitable account to use") &&
      process.exit(1);
  const provider = getProvider(0);
  const signer = getSigner(Networks[0].name, provider);
  const systemGas = {
    gasPrice:
      networkSettings.gasPriceEnforced == 0
        ? networkSettings.gasPriceDefault
        : networkSettings.gasPriceEnforced,
  };

  /* Blocknumber */
  if (networkSettings.showBlockNumber) {
    setInterval(async () => {
      try {
        log.info(Networks[0].name + ": Block: " + (await getBlock(provider)));
      } catch (e) {
        log.warn(e);
      }
    }, networkSettings.blockNumberFreq);
  }

  groups.map((grp, i: number) => {
    const interVal = setInterval(() => {
      Object.values(order[grp]).map(async (res, z: number) => {
        let specificFunctionData = null;
        let ctp = false;
        try {
          specificFunctionData = await getFunctionByID(res);
          ctp = true;
        } catch (e) {
          log.warn(e);
        }

        if (ctp && specificFunctionData != null) {
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          const functionSettings = require("../." +
            specificFunctionData[res].directory +
            "/settings.ts");

          if (functionSettings.default.active) {
            try {
              // eslint-disable-next-line @typescript-eslint/no-var-requires
              await require("../." +
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
            } catch (e) {
              log.warn(e);
            }
          }
        }
      });

      if (networkSettings.groupsInterval[grp] === 0) {
        clearInterval(interVal);
      }
    }, networkSettings.groupsInterval[grp]);
  });
};

export default Harmony;
