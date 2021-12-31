import { BaseProvider } from "@ethersproject/providers";
import { Contract, Wallet } from "ethers";
import { formatUnits } from "ethers/lib/utils";
import { Logger } from "tslog";
import moduleInfo from "..";
import { contracts } from "../data/contracts";
import { StakingABI } from "../data/contract_abis/Staking";
import { StakingDistributorABI } from "../data/contract_abis/StakingDistributor";
import { StakingHelperABI } from "../data/contract_abis/StakingHelper";
import { sWAGMIABI } from "../data/contract_abis/sWAGMI";
import { WAGMIABI } from "../data/contract_abis/WAGMI";
import { wsWAGMIABI } from "../data/contract_abis/wsWAGMI";
import { OTFSettings } from "../data/interfaces";
import { calculateWrappedAssWagmi } from "../helpers/calculateWrappedAsWAGMI";
import moduleSettings from "../settings";

export const entry = async (
  log: Logger,
  address: string,
  provider: BaseProvider,
  signer: Wallet,
  systemGas: { gasPrice?: number; gasLimit?: number },
  otfSettings: OTFSettings,
): Promise<void> => {
  const thisSettings = moduleSettings;
  const thisInfo = moduleInfo;

  let qtyToUse = 0;
  let clearToProceed = false;

  let balanceOf = 0;
  if (otfSettings.type.toLowerCase() == "stake") {
    try {
      balanceOf = await new Contract(
        contracts.WAGMI,
        WAGMIABI,
        provider,
      ).balanceOf(address);
    } catch (e) {
      log.warn(e);
    }
  } else if (otfSettings.type.toLowerCase() == "unstake") {
    try {
      balanceOf = await new Contract(
        contracts.sWAGMI,
        sWAGMIABI,
        provider,
      ).balanceOf(address);
    } catch (e) {
      log.warn(e);
    }
  }

  if (otfSettings.qtyType.toLowerCase() == "max") {
    qtyToUse = balanceOf;
    clearToProceed = true;
  } else if (otfSettings.qtyType.toLowerCase() == "percent") {
    qtyToUse = balanceOf * otfSettings.qty;
    clearToProceed = true;
  } else if (otfSettings.qtyType.toLowerCase() == "value") {
    if (balanceOf < otfSettings.qty) {
      log.warn(
        "[Module: " +
          thisInfo.moduleName +
          "]: You've set a number greater than your balance to perform a " +
          otfSettings.type.toLowerCase() +
          ".",
      );
      qtyToUse = balanceOf * 1;
      clearToProceed = true;
    } else if (balanceOf >= otfSettings.qty) {
      qtyToUse = otfSettings.qty;
      clearToProceed = true;
    }
  } else if (otfSettings.qtyType.toLowerCase() == "percent_of_rebase_rewards") {
    let epoch = null;
    try {
      epoch = await new Contract(
        contracts.Staking,
        StakingABI,
        provider,
      ).epoch();
    } catch (e) {
      log.warn(e);
    }

    const stakingReward = epoch.distribute;

    let circ = null;
    try {
      circ = await new Contract(
        contracts.sWAGMI,
        sWAGMIABI,
        provider,
      ).circulatingSupply();
    } catch (e) {
      log.warn(e);
    }

    const stakingRebase =
      Number(await stakingReward.toString()) / Number(await circ.toString());

    let sWAGMIBalance = null;
    try {
      sWAGMIBalance = await new Contract(
        contracts.sWAGMI,
        sWAGMIABI,
        provider,
      ).balanceOf(address);
    } catch (e) {
      log.warn(e);
    }

    let currentIndex = null;
    try {
      currentIndex = await new Contract(
        contracts.Staking,
        StakingABI,
        provider,
      ).index();
    } catch (e) {
      log.warn(e);
    }

    let wsWAGMIBalance = null;
    try {
      wsWAGMIBalance = await new Contract(
        contracts.wsWAGMI,
        wsWAGMIABI,
        provider,
      ).balanceOf(address);
    } catch (e) {
      log.warn(e);
    }

    const wsWAGMIBalanceCalculatedAssWAGMI = calculateWrappedAssWagmi(
      formatUnits(await wsWAGMIBalance, 18),
      formatUnits(await currentIndex, 9),
    );

    const trimmedBalance = Number(
      [formatUnits(sWAGMIBalance, 9), wsWAGMIBalanceCalculatedAssWAGMI]
        .filter(Boolean)
        .map((balance) => Number(balance))
        .reduce((a, b) => a + b, 0)
        .toFixed(4),
    );

    const stakingRebasePercentage = stakingRebase * 100;

    const nextRewardValue =
      (Number(stakingRebasePercentage) / 100) * trimmedBalance;

    qtyToUse = Math.trunc(nextRewardValue * otfSettings.qty * 10 ** 9);

    if (qtyToUse > balanceOf) {
      log.warn(
        "[Module: " +
          thisInfo.moduleName +
          "]: Your rebase rewards are greater than your balance to perform a " +
          otfSettings.type.toLowerCase() +
          ".",
      );

      qtyToUse = balanceOf;
    }

    clearToProceed = true;
  }

  if (clearToProceed) {
    let nextEpochTime = null;
    try {
      nextEpochTime = await new Contract(
        contracts.StakingDistributor,
        StakingDistributorABI,
        provider,
      ).nextEpochTime();
    } catch (e) {
      log.warn(e);
    }
    const epochDate = (await nextEpochTime) * 1000;
    const currentDate = new Date().valueOf();
    const nextApprovedTime = epochDate + otfSettings.timeAfterRebaseToUse;
    const approvedTimeBuffer =
      nextApprovedTime * 1000 + otfSettings.intervalUsed - 1;

    //if (currentDate >= nextApprovedTime && currentDate <= approvedTimeBuffer) {
    if (qtyToUse > 0) {
      if (otfSettings.type.toLowerCase() == "stake") {
        let attemptToStake = null;
        try {
          attemptToStake = await new Contract(
            contracts.StakingHelper,
            StakingHelperABI,
            signer,
          ).stake(qtyToUse, address);
        } catch (e) {
          log.warn(e);
        }

        await attemptToStake.wait(1);

        log.info(
          "[Module: " +
            thisInfo.moduleName +
            "]: Converted " +
            formatUnits(qtyToUse, 9) +
            " WAGMI to sWAGMI.",
        );
      } else if (otfSettings.type.toLowerCase() == "unstake") {
        let attemptToUnstake = null;
        try {
          attemptToUnstake = await new Contract(
            contracts.Staking,
            StakingABI,
            signer,
          ).unstake(qtyToUse, false);
        } catch (e) {
          log.warn(e);
        }

        await attemptToUnstake.wait(1);

        log.info(
          "[Module: " +
            thisInfo.moduleName +
            "]: Converted " +
            formatUnits(qtyToUse, 9) +
            " sWAGMI to WAGMI.",
        );
      }
    } else {
      log.warn("[Module: " + thisInfo.moduleName + "]: Insufficient Balance");
    }
    //}
  }
};
