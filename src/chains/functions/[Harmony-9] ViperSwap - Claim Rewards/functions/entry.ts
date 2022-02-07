import { BaseProvider, TransactionResponse } from "@ethersproject/providers";
import { formatUnits } from "@ethersproject/units";
import { BigNumber, Contract, Wallet } from "ethers";
import { Logger } from "tslog";
import moduleInfo from "..";
import { contracts } from "../data/contracts";
import { MasterBreederABI } from "../data/contract_abis/MasterBreeder";
import { ViperABI } from "../data/contract_abis/Viper";
import { OTFSettings } from "../data/interfaces";
import moduleSettings from "../settings";

function poolIDReadout(poolIDs: number[]): string {
  let readout = "";
  for (let i = 0; i < poolIDs.length; i++) {
    if (i === 0) {
      readout += poolIDs[i];
    } else if (i > 0) {
      readout += ", " + poolIDs[i];
    }
  }
  return readout;
}

export const entry = async (
  log: Logger,
  address: string,
  provider: BaseProvider,
  signer: Wallet,
  systemGas: { gasPrice?: number; gasLimit?: number },
  otfSettings: OTFSettings,
): Promise<boolean> => {
  const thisSettings = moduleSettings;
  const thisInfo = moduleInfo;

  // Code Execution Here
  let totalClaimable = 0;

  if (otfSettings.claimType === "lppools" || otfSettings.claimType === "all") {
    const viperContract = new Contract(
      contracts.viperAddress,
      ViperABI,
      signer,
    );

    let claimableBalance;
    try {
      claimableBalance = await viperContract.canUnlockAmount(address);
    } catch (e) {
      log.warn(e);
    }

    if (claimableBalance > 0) {
      try {
        const tx: TransactionResponse = await viperContract.unlock({
          ...systemGas,
        });
        await tx.wait(2);

        log.info(
          "[Module: " +
            thisInfo.moduleName +
            "]: Claimed " +
            claimableBalance / 10 ** 18 +
            " VIPER from the locked balance.",
        );
        totalClaimable += claimableBalance;
      } catch (e) {
        log.warn(e);
      }
    } else {
      log.info(
        "[Module: " +
          thisInfo.moduleName +
          "]: Failed claiming VIPER from your locked balance.  Balance < 0.",
      );
    }
  }

  if (
    otfSettings.claimType === "lockedbalance" ||
    otfSettings.claimType === "all"
  ) {
    const masterBreederContract = new Contract(
      contracts.masterBreederAddress,
      MasterBreederABI,
      signer,
    );

    let poolLength = 0;
    try {
      poolLength = await masterBreederContract.poolLength();
    } catch (e) {
      log.warn(e);
    }

    const rewardsCount = [];
    let claimedRewards = 0;

    for (let i = 1; i < poolLength; i++) {
      let poolReward;
      try {
        poolReward = await masterBreederContract.pendingReward(i, address);
      } catch (e) {
        log.warn(e);
      }

      if (poolReward > 0) {
        rewardsCount.push(i);
        claimedRewards += poolReward * (10 ^ 18);
      }
    }

    if (rewardsCount.length > 0) {
      try {
        const tx: TransactionResponse =
          await masterBreederContract.claimRewards(rewardsCount, {
            ...systemGas,
          });
        await tx.wait(2);

        log.info(
          "[Module: " +
            thisInfo.moduleName +
            "]: Claimed " +
            claimedRewards / 10 ** 18 +
            " VIPER from the following pool IDs: " +
            poolIDReadout(rewardsCount) +
            ".",
        );
        totalClaimable += claimedRewards;
      } catch (e) {
        log.warn(e);
      }
    } else {
      log.info(
        "[Module: " +
          thisInfo.moduleName +
          "]: Failed claiming VIPER from your staked LP Pools.  Balance < 0.",
      );
    }
  }

  if (totalClaimable > 0) {
    return true;
  } else {
    return false;
  }
};
