import { getAddress } from "../helpers/getAddress";
import { getBlock } from "../helpers/getCurrentBlock";
import { getProvider } from "../helpers/getNetworkProvider";
import { getSigner } from "../helpers/getSigner";
import * as Networks from "../data/networks.json";
import { Logger } from "tslog";
import { NetworkSettingsBO } from "../helpers/Interfaces";
import { getFunctionByID, getOTFSettings } from "../data/functions";

const Binance_Smart_Chain = async (
  log: Logger,
  networkSettings: NetworkSettingsBO,
  groups: number[],
  order: { [key: number]: { [key: number]: number } },
): Promise<void> => {
  const address: string = getAddress(Networks[3].name)
    ? getAddress(Networks[3].name)
    : log.error(Networks[3].name + ": No suitable account to use") &&
      process.exit(1);
  const provider = getProvider(3);
  const signer = getSigner(Networks[3].name, provider);
  const systemGas = {
    gasPrice:
      networkSettings.gasPriceEnforced == 0
        ? networkSettings.gasPriceDefault
        : networkSettings.gasPriceEnforced,
  };

  /* Blocknumber */
  if (networkSettings.showBlockNumber) {
    setInterval(async () => {
      log.info(Networks[3].name + ": Block: " + (await getBlock(provider)));
    }, networkSettings.blockNumberFreq);
  }

  groups.map((grp, i: number) => {
    const interVal = setInterval(() => {
      Object.values(order[grp]).map(async (res, z: number) => {
        const specificFunctionData = await getFunctionByID(res);

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
        clearInterval(interVal);
      }
    }, networkSettings.groupsInterval[grp]);
  });
};

export default Binance_Smart_Chain;
