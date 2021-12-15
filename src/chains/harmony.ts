import { getAddress } from "../helpers/getAddress";
import { getBlock } from "../helpers/getCurrentBlock";
import { getProvider } from "../helpers/getNetworkProvider";
import { getSigner } from "../helpers/getSigner";
import * as Networks from "../data/networks.json";
import { Logger } from "tslog";
import { NetworkSettingsBO } from "../helpers/Interfaces";
import { getFunctionByID } from "../data/functions";

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

  /* Blocknumber */
  if (networkSettings.showBlockNumber) {
    setInterval(async () => {
      log.info(Networks[0].name + ": Block: " + (await getBlock(provider)));
    }, networkSettings.blockNumberFreq);
  }

  groups.map((grp) => {
    const thisOrder = Object.values(order[grp]).sort((n1, n2) => n1 - n2);

    thisOrder.map(async (res) => {
      const specificFunctionData = await getFunctionByID(res);

      // eslint-disable-next-line @typescript-eslint/no-var-requires
      require("../." +
        specificFunctionData[res].directory +
        "/functions/main.ts").Main(log, address, provider, signer);
    });
  });

  /*let WAGMIRebaseCounter: RebaseCounter = {
    timeStamp: 0,
    nextRebaseTime: "",
    timeToNextRebase: 120,
  };

  if (settings.functions.WAGMI_RRC.active) {
    log.info(Networks[0].name + " - WAGMI: Rebase Rewards Counter is active");

    if (settings.functions.WAGMI_RRC.setTimeoutInfo.setTime) {
      setInterval(async () => {
        WAGMIRebaseCounter = await WAGMI_RRC(
          log,
          address,
          provider,
          settings.functions.WAGMI_RRC,
        );

        if (settings.functions.WAGMI_RRC.showLog) {
          log.info(
            "\nNext WAGMI rebase stamp: " +
              WAGMIRebaseCounter.timeStamp +
              "\nNext WAGMI rebase locale: " +
              WAGMIRebaseCounter.nextRebaseTime +
              "\nSeconds to next WAGMI rebase: " +
              WAGMIRebaseCounter.timeToNextRebase +
              "\nMinutes to next WAGMI rebase: " +
              WAGMIRebaseCounter.timeToNextRebase / 60 +
              "\nHours to next WAGMI rebase: " +
              WAGMIRebaseCounter.timeToNextRebase / 60 / 60,
          );
        }
      }, settings.functions.WAGMI_RRC.setTimeoutInfo.interval);
    } else {
      WAGMIRebaseCounter = await WAGMI_RRC(
        log,
        address,
        provider,
        settings.functions.WAGMI_RRC,
      );

      log.info(WAGMIRebaseCounter);
    }

    if (settings.functions.WAGMI_CBR.active) {
      log.info(Networks[0].name + " - WAGMI: Claim Before Rebase is active");

      if (
        WAGMIRebaseCounter.timeToNextRebase > 0 &&
        settings.functions.WAGMI_CBR.setTimeoutInfo.setTime &&
        WAGMIRebaseCounter.timeToNextRebase <= 120
      ) {
        setInterval(() => {
          WAGMI_CBR(
            log,
            address,
            provider,
            signer,
            settings.functions.WAGMI_CBR,
          );
        }, settings.functions.WAGMI_CBR.setTimeoutInfo.interval);
      } else if (
        WAGMIRebaseCounter.timeToNextRebase > 0 &&
        WAGMIRebaseCounter.timeToNextRebase <= 120
      ) {
        WAGMI_CBR(log, address, provider, signer, settings.functions.WAGMI_CBR);
      }
    }

    if (settings.functions.WAGMI_SAR.active) {
      log.info(Networks[0].name + " - WAGMI: Sell After Rebase is active");

      if (settings.functions.WAGMI_SAR.setTimeoutInfo.setTime) {
        setInterval(() => {
          WAGMI_SAR(log, address, provider, settings.functions.WAGMI_SAR);
        }, settings.functions.WAGMI_SAR.setTimeoutInfo.interval);
      } else {
        WAGMI_SAR(log, address, provider, settings.functions.WAGMI_SAR);
      }
    }
  }*/
};

export default Harmony;
