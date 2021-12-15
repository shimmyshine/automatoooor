import { getAddress } from "../helpers/getAddress";
import { getBlock } from "../helpers/getCurrentBlock";
import { getProvider } from "../helpers/getNetworkProvider";
import { getSigner } from "../helpers/getSigner";
import * as Networks from "../data/networks.json";
import { Logger } from "tslog";
import { NetworkSettingsBO } from "../helpers/Interfaces";
import { getFunctionByID } from "../data/functions";

const Fantom = async (
  log: Logger,
  networkSettings: NetworkSettingsBO,
  groups: number[],
  order: { [key: number]: { [key: number]: number } },
): Promise<void> => {
  const address: string = getAddress(Networks[1].name)
    ? getAddress(Networks[1].name)
    : log.error(Networks[1].name + ": No suitable account to use") &&
      process.exit(1);
  const provider = getProvider(1);
  const signer = getSigner(Networks[1].name, provider);

  /* Blocknumber */
  if (networkSettings.showBlockNumber) {
    setInterval(async () => {
      log.info(Networks[1].name + ": Block: " + (await getBlock(provider)));
    }, networkSettings.blockNumberFreq);
  }

  groups.map((grp) => {
    const thisOrder = Object.values(order[grp]).sort((n1, n2) => n1 - n2);

    if (networkSettings.groupsInterval[grp] > 0) {
      setInterval(() => {
        thisOrder.map(async (res) => {
          const specificFunctionData = await getFunctionByID(res);

          // eslint-disable-next-line @typescript-eslint/no-var-requires
          const functionSettings = require("../." +
            specificFunctionData[res].directory +
            "/settings.ts");

          if (functionSettings.default.active) {
            // eslint-disable-next-line @typescript-eslint/no-var-requires
            require("../." +
              specificFunctionData[res].directory +
              "/functions/main.ts").Main(log, address, provider, signer);
          }
        });
      }, networkSettings.groupsInterval[grp]);
    } else {
      thisOrder.map(async (res) => {
        const specificFunctionData = await getFunctionByID(res);

        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const functionSettings = require("../." +
          specificFunctionData[res].directory +
          "/settings.ts");

        if (functionSettings.default.active) {
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          require("../." +
            specificFunctionData[res].directory +
            "/functions/main.ts").Main(log, address, provider, signer);
        }
      });
    }
  });
};

export default Fantom;