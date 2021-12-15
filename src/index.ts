import * as dotenv from "dotenv";
dotenv.config();

import { Logger } from "tslog";
import { settings } from "./data/settings";
import Harmony from "./chains/harmony";
import Fantom from "./chains/fantom";
import settingsCheck from "./helpers/settingsCheck";
import { getFunctions } from "./data/functions";
import Aurora from "./chains/aurora";
import Avalanche from "./chains/avalanche";
import Binance_Smart_Chain from "./chains/bsc";
import Ethereum from "./chains/eth";
import Polygon from "./chains/polygon";
import RSK from "./chains/rsk";
import Telos from "./chains/telos";

const log: Logger = new Logger({
  displayFunctionName: false,
  displayFilePath: "hidden",
});

const main = async (): Promise<void> => {
  log.info("Program started.\n");

  const functions = await getFunctions();

  settingsCheck(log, functions);

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

  if (settings.networks["Avalanche"].isActive) {
    await Avalanche(
      log,
      settings.networks["Avalanche"],
      settings.networks["Avalanche"].groups,
      settings.networks["Avalanche"].orders,
    );
  }

  if (settings.networks["Binance_Smart_Chain"].isActive) {
    await Binance_Smart_Chain(
      log,
      settings.networks["Binance_Smart_Chain"],
      settings.networks["Binance_Smart_Chain"].groups,
      settings.networks["Binance_Smart_Chain"].orders,
    );
  }

  if (settings.networks["Ethereum"].isActive) {
    await Ethereum(
      log,
      settings.networks["Ethereum"],
      settings.networks["Ethereum"].groups,
      settings.networks["Ethereum"].orders,
    );
  }

  if (settings.networks["Aurora"].isActive) {
    await Aurora(
      log,
      settings.networks["Aurora"],
      settings.networks["Aurora"].groups,
      settings.networks["Aurora"].orders,
    );
  }

  if (settings.networks["Polygon"].isActive) {
    await Polygon(
      log,
      settings.networks["Polygon"],
      settings.networks["Polygon"].groups,
      settings.networks["Polygon"].orders,
    );
  }

  if (settings.networks["RSK"].isActive) {
    await RSK(
      log,
      settings.networks["RSK"],
      settings.networks["RSK"].groups,
      settings.networks["RSK"].orders,
    );
  }

  if (settings.networks["Telos"].isActive) {
    await Telos(
      log,
      settings.networks["Telos"],
      settings.networks["Telos"].groups,
      settings.networks["Telos"].orders,
    );
  }
};

main().catch((e) => {
  console.log(e);
  process.exit(1);
});
