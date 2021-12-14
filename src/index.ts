import * as dotenv from "dotenv";
dotenv.config();

import { getAddress } from "./helpers/getAddress";
import { getProvider } from "./helpers/getNetworkProvider";
import * as Networks from "./data/networks.json";
import { Logger } from "tslog";
import { settings } from "./data/settings";
import WAGMI_CBR from "./functions/WAGMI_CBR";
import WAGMI_SAR from "./functions/WAGMI_SAR";
import WAGMI_RRC from "./functions/WAGMI_RRC";
import { RebaseCounter } from "./helpers/Interfaces";
import { getSigner } from "./helpers/getSigner";
import { getBlock } from "./helpers/getCurrentBlock";

const log: Logger = new Logger({
  displayFunctionName: false,
  displayFilePath: "hidden",
});

const address: string = getAddress(Networks[0].name);
const provider = getProvider(0);
const signer = getSigner(Networks[0].name, provider);

let rebaseCounter: RebaseCounter = {
  timeStamp: 0,
  nextRebaseTime: "",
  timeToNextRebase: 0,
};

const main = async (): Promise<void> => {
  log.info("Program started.\n");

  /* Blocknumber */
  if (settings.general.showBlockNumber) {
    setInterval(async () => {
      log.info("Block: " + (await getBlock(provider)));
    }, settings.general.blockNumberFreq);
  }

  /* Rebase Rewards Counter */
  if (settings.functions.WAGMI_RRC.active) {
    log.info("WAGMI Rebase Rewards Counter is active");

    if (settings.functions.WAGMI_RRC.setTimeoutInfo.setTime) {
      setInterval(async () => {
        rebaseCounter = await WAGMI_RRC(
          log,
          address,
          provider,
          settings.functions.WAGMI_RRC,
        );

        if (settings.functions.WAGMI_RRC.showLog) {
          log.info(
            "\nNext rebase stamp: " +
              rebaseCounter.timeStamp +
              "\nNext rebase locale: " +
              rebaseCounter.nextRebaseTime +
              "\nSeconds to next rebase: " +
              rebaseCounter.timeToNextRebase +
              "\nMinutes to next rebase: " +
              rebaseCounter.timeToNextRebase / 60 +
              "\nHours to next rebase: " +
              rebaseCounter.timeToNextRebase / 60 / 60,
          );
        }
      }, settings.functions.WAGMI_RRC.setTimeoutInfo.interval);
    } else {
      rebaseCounter = await WAGMI_RRC(
        log,
        address,
        provider,
        settings.functions.WAGMI_RRC,
      );

      log.info(rebaseCounter);
    }

    /* Claim Before Rebase */
    if (
      settings.functions.WAGMI_CBR.active &&
      rebaseCounter.timeToNextRebase <= 120
    ) {
      log.info("WAGMI Claim Before Rebase is active");

      if (settings.functions.WAGMI_CBR.setTimeoutInfo.setTime) {
        setInterval(() => {
          WAGMI_CBR(
            log,
            address,
            provider,
            signer,
            settings.functions.WAGMI_CBR,
          );
        }, settings.functions.WAGMI_CBR.setTimeoutInfo.interval);
      } else {
        WAGMI_CBR(log, address, provider, signer, settings.functions.WAGMI_CBR);
      }
    }

    /* Sell After Rebase */
    if (settings.functions.WAGMI_SAR.active) {
      log.info("WAGMI Sell After Rebase is active");

      if (settings.functions.WAGMI_SAR.setTimeoutInfo.setTime) {
        setInterval(() => {
          WAGMI_SAR(log, address, provider, settings.functions.WAGMI_SAR);
        }, settings.functions.WAGMI_SAR.setTimeoutInfo.interval);
      } else {
        WAGMI_SAR(log, address, provider, settings.functions.WAGMI_SAR);
      }
    }
  }
};

main().catch((e) => {
  console.log(e);
  process.exit(1);
});
