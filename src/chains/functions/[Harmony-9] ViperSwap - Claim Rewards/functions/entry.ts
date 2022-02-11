import { BaseProvider, TransactionResponse } from "@ethersproject/providers";
import { Contract, Wallet } from "ethers";
import { Logger } from "tslog";
import moduleInfo from "..";
import { contracts } from "../data/contracts";
import { MasterBreederABI } from "../data/contract_abis/MasterBreeder";
import { CommunityPoolABI } from "../data/contract_abis/CommunityPool";
import { ViperABI } from "../data/contract_abis/Viper";
import { OTFSettings } from "../data/interfaces";
import { poolIDReadout } from "../helpers/poolIDReadout";
import moduleSettings from "../settings";
import { ERC20ABI } from "../data/contract_abis/erc20";

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

  const communityContracts = [
    contracts.immortlOneToImmortlAddress,
    contracts.immortlViperToImmortlAddress,
    contracts.hplayOneToHPLAYAddress,
  ];
  if (
    otfSettings.claimType.toLowerCase() === "all" ||
    otfSettings.claimType.toLowerCase() === "community"
  ) {
    for (let i = 0; i < Object.values(communityContracts).length; i++) {
      const communityContract = new Contract(
        communityContracts[i],
        CommunityPoolABI,
        signer,
      );

      let pendingReward;
      try {
        pendingReward = await communityContract.pendingReward(address);
      } catch (e) {
      }

      if (pendingReward > 0) {
        let rewardToken;
        try {
          rewardToken = await communityContract.rewardToken();
        } catch (e) {
          log.warn(e);
        }
        const rewardContract = new Contract(rewardToken, ERC20ABI, signer);
        let rewardDecimals;
        try {
          rewardDecimals = await rewardContract.decimals();
        } catch (e) {
          log.warn(e);
        }
        let rewardName;
        try {
          rewardName = await rewardContract.symbol();
        } catch (e) {
          log.warn(e);
        }

        try {
          const tx: TransactionResponse = await communityContract.deposit(0, {
            ...systemGas,
          });
          await tx.wait(2);

          log.info(
            "[Module: " +
              thisInfo.moduleName +
              "]: Claimed " +
              pendingReward / 10 ** rewardDecimals +
              " " +
              rewardName +
              " from a community pool.",
          );

          totalClaimable += pendingReward;
        } catch (e) {
          log.warn(e);
        }
      }
    }
  }

  const viperNestContracts = [
    contracts.xViperTowsWAGMIAddress,
    contracts.wsWAGMIToViperAddress,
    contracts.xViperToViperAddress,
    contracts.xViperToCSHAREAddress,
  ];
  if (
    otfSettings.claimType.toLowerCase() === "all" ||
    otfSettings.claimType.toLowerCase() === "vipernest"
  ) {
    for (let i = 0; i < Object.values(viperNestContracts).length; i++) {
      const viperNestContract = new Contract(
        viperNestContracts[i],
        CommunityPoolABI,
        signer,
      );

      let pendingReward;
      try {
        pendingReward = await viperNestContract.pendingReward(address);
      } catch (e) {
      }

      if (pendingReward > 0) {
        let rewardToken;
        try {
          rewardToken = await viperNestContract.rewardToken();
        } catch (e) {
          log.warn(e);
        }
        const rewardContract = new Contract(rewardToken, ERC20ABI, signer);
        let rewardDecimals;
        try {
          rewardDecimals = await rewardContract.decimals();
        } catch (e) {
          log.warn(e);
        }
        let rewardName;
        try {
          rewardName = await rewardContract.symbol();
        } catch (e) {
          log.warn(e);
        }

        try {
          const tx: TransactionResponse = await viperNestContract.deposit(0, {
            ...systemGas,
          });
          await tx.wait(2);

          log.info(
            "[Module: " +
              thisInfo.moduleName +
              "]: Claimed " +
              pendingReward / 10 ** rewardDecimals +
              " " +
              rewardName +
              " from a ViperNest pool.",
          );

          totalClaimable += pendingReward;
        } catch (e) {
          log.warn(e);
        }
      }
    }
  }

  if (
    otfSettings.claimType.toLowerCase() === "lockedbalance" ||
    otfSettings.claimType.toLowerCase() === "all"
  ) {
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
    otfSettings.claimType.toLowerCase() === "lppools" ||
    otfSettings.claimType.toLowerCase() === "all"
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
