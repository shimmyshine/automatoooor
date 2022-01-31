import { BaseProvider, TransactionResponse } from "@ethersproject/providers";
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
): Promise<boolean> => {
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
    if (qtyToUse > 0) {
      if (otfSettings.type.toLowerCase() == "stake") {
        try {
          const tx: TransactionResponse = await new Contract(
            contracts.StakingHelper,
            StakingHelperABI,
            signer,
          ).stake(qtyToUse, address, { ...systemGas });

          await tx.wait(2);
        } catch (e) {
          log.warn(e);
        }

        log.info(
          "[Module: " +
            thisInfo.moduleName +
            "]: Converted " +
            formatUnits(qtyToUse, 9) +
            " WAGMI to sWAGMI.",
        );

        return true;
      } else if (otfSettings.type.toLowerCase() == "unstake") {
        try {
          const tx: TransactionResponse = await new Contract(
            contracts.Staking,
            StakingABI,
            signer,
          ).unstake(qtyToUse, false, { ...systemGas });

          await tx.wait(2);
        } catch (e) {
          log.warn(e);
        }

        log.info(
          "[Module: " +
            thisInfo.moduleName +
            "]: Converted " +
            formatUnits(qtyToUse, 9) +
            " sWAGMI to WAGMI.",
        );

        return true;
      } else {
        return false;
      }
    } else {
      log.warn("[Module: " + thisInfo.moduleName + "]: Insufficient Balance");

      return false;
    }
  } else {
    return false;
  }
};
