import * as dotenv from "dotenv";
dotenv.config();

import { settings } from "./data/settings";
import settingsCheck from "./helpers/settingsCheck";
import { getFunctions } from "./data/functions";
import NetworkRouter from "./chains/networkRouter";

import { log } from "./helpers/logAssistor";

async function main(): Promise<void> {
  log.info("Automatoooor started.\n");

  let functions = {};
  try {
    functions = getFunctions();
  } catch (e) {
    log.warn(e);
  }

  settingsCheck(log, functions);

  Object.values(settings.networks).map(async (res) => {
    if (res.isActive) {
      try {
        await NetworkRouter(
          log,
          settings.networks[res.name],
          res.groups,
          res.orders,
        );
      } catch (e) {
        log.warn(e);
      }
    }
  });
}

main().catch((e) => {
  console.log(e);
});
