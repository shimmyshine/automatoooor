import { contracts } from "../data/contracts";
import { Contract, Wallet } from "ethers";
import { Logger } from "tslog";
import { StakingDistributorABI } from "../data/contract_abis/StakingDistributor";
import { BaseProvider } from "@ethersproject/providers";
import moduleSettings from "../settings";
import moduleInfo from "..";

export async function Main(
  log: Logger,
  address: string,
  provider: BaseProvider,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  signer: Wallet,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  systemGas: { gasPrice: number; gasLimit: number },
): Promise<void> {
  const thisSettings = moduleSettings;
  const info = moduleInfo;

  if (thisSettings.showLog)
    log.info("[Module: " + info.moduleName + "]: has been triggered to run.");

  if (thisSettings.showLog) {
    const interVal = setInterval(async () => {
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

      if (!thisSettings.setTimeoutInfo.setTime) {
        clearInterval(interVal);
      }
    }, thisSettings.setTimeoutInfo.interval);
  }
}
