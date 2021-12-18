import * as dotenv from "dotenv";
dotenv.config();

import { Logger } from "tslog";
import { settings } from "./data/settings";
import settingsCheck from "./helpers/settingsCheck";
import { getFunctions } from "./data/functions";
import NetworkRouter from "./chains/networkRouter";

const log: Logger = new Logger({
  displayFunctionName: false,
  displayFilePath: "hidden",
});

const main = async (): Promise<void> => {
  log.info("Program started.\n");

  const functions = getFunctions();

  settingsCheck(log, await functions);

  Object.values(settings.networks).map(async (res) => {
    if (res.isActive) {
      NetworkRouter(log, settings.networks[res.name], res.groups, res.orders);
    }
  });
};

main().catch((e) => {
  console.log(e);
  process.exit(1);
});
