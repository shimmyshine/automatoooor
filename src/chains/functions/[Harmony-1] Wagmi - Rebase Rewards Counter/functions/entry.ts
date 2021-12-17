import { BaseProvider } from "@ethersproject/providers";
import { Contract, Wallet } from "ethers";
import { Logger } from "tslog";
import moduleInfo from "..";
import { contracts } from "../data/contracts";
import { StakingDistributorABI } from "../data/contract_abis/StakingDistributor";
import { OTFSettings } from "../data/interfaces";
import moduleSettings from "../settings";

export const entry = async (
  log: Logger,
  address: string,
  provider: BaseProvider,
  signer: Wallet,
  systemGas: { gasPrice: number; gasLimit: number },
  otfSettings: OTFSettings,
): Promise<void> => {
  const thisSettings = moduleSettings;
  const thisInfo = moduleInfo;

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
};
