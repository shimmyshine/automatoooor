import { contracts } from "../data/contracts";
import { Contract, Wallet } from "ethers";
import { Logger } from "tslog";
import { StakingDistributorABI } from "../data/contract_abis/StakingDistributor";
import { BaseProvider } from "@ethersproject/providers";
import moduleSettings from "../settings";

export async function Main(
  log: Logger,
  address: string,
  provider: BaseProvider,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  signer: Wallet,
): Promise<void> {
  const thisSettings = moduleSettings;

  let epoch = null;
  try {
    epoch = await new Contract(
      contracts.StakingDistributor,
      StakingDistributorABI,
      provider,
    ).nextEpochTime();
  } catch (e) {
    log.warn(e);
  }
  const epochDate = epoch * 1000;
  const currentDate = new Date().valueOf();
  const delta = (epochDate - currentDate) / 1000;

  if (thisSettings.showLog) {
    if (thisSettings.setTimeoutInfo.setTime) {
      setInterval(() => {
        log.info(
          "\nNext WAGMI rebase stamp: " +
            epochDate +
            "\nNext WAGMI rebase locale: " +
            new Date(epochDate).toLocaleString() +
            "\nSeconds to next WAGMI rebase: " +
            delta +
            "\nMinutes to next WAGMI rebase: " +
            delta / 60 +
            "\nHours to next WAGMI rebase: " +
            delta / 60 / 60,
        );
      }, thisSettings.setTimeoutInfo.interval);
    } else {
      log.info(
        "\nNext WAGMI rebase stamp: " +
          epochDate +
          "\nNext WAGMI rebase locale: " +
          new Date(epochDate).toLocaleString() +
          "\nSeconds to next WAGMI rebase: " +
          delta +
          "\nMinutes to next WAGMI rebase: " +
          delta / 60 +
          "\nHours to next WAGMI rebase: " +
          delta / 60 / 60,
      );
    }
  }
}
