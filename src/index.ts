import * as dotenv from "dotenv";
dotenv.config();

import { Logger } from "tslog";
import { settings } from "./data/settings";
import settingsCheck from "./helpers/settingsCheck";
import { getFunctions } from "./data/functions";
import NetworkRouter from "./chains/networkRouter";
import printModules from "./helpers/printModules";

const log: Logger = new Logger({
  displayFunctionName: false,
  displayFilePath: "hidden",
});

async function main(): Promise<void> {
  log.info("Program started.\n");

  let functions = {};
  try {
    functions = getFunctions();
  } catch (e) {
    log.warn(e);
  }

  settingsCheck(log, functions);

  if (settings.modulesOutput) printModules(log, functions);

  Object.values(settings.networks).map(async (res) => {
    if (res.isActive) {
      await NetworkRouter(
        log,
        settings.networks[res.name],
        res.groups,
        res.orders,
      );
    }
  });
}

main().catch((e) => {
  console.log(e);
  process.exit(1);
});
