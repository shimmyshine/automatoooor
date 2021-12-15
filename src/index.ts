import * as dotenv from "dotenv";
dotenv.config();

import { Logger } from "tslog";
import { settings } from "./data/settings";
import Harmony from "./chains/harmony";
import Fantom from "./chains/fantom";
import settingsCheck from "./helpers/settingsCheck";
import { getFunctions, isFunctionActive } from "./data/functions";

const log: Logger = new Logger({
  displayFunctionName: false,
  displayFilePath: "hidden",
});

const main = async (): Promise<void> => {
  log.info("Program started.\n");

  const functions = await getFunctions();

  settingsCheck(log, functions);

  isFunctionActive(1);

  if (settings.networks["Harmony"].isActive) {
    await Harmony(
      log,
      settings.networks["Harmony"],
      settings.networks["Harmony"].groups,
      settings.networks["Harmony"].orders,
    );
  }

  if (settings.networks["Fantom"].isActive) {
    await Fantom(
      log,
      settings.networks["Fantom"],
      settings.networks["Fantom"].groups,
      settings.networks["Fantom"].orders,
    );
  }
};

main().catch((e) => {
  console.log(e);
  process.exit(1);
});
