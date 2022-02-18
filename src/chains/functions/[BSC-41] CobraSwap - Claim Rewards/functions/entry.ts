import { BaseProvider, TransactionResponse } from "@ethersproject/providers";
import { Contract, Wallet } from "ethers";
import { Logger } from "tslog";
import moduleInfo from "..";
import { contracts } from "../data/contracts";
import { MasterBreederABI } from "../data/contract_abis/MasterBreeder";
import { CommunityPoolABI } from "../data/contract_abis/CommunityPool";
import { CobraABI } from "../data/contract_abis/Cobra";
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

  const cobraNestContracts = [contracts.xCobraToCobraAddress];
  if (
    otfSettings.claimType.toLowerCase() === "all" ||
    otfSettings.claimType.toLowerCase() === "cobranest"
  ) {
    for (let i = 0; i < Object.values(cobraNestContracts).length; i++) {
      const cobraNestContract = new Contract(
        cobraNestContracts[i],
        CommunityPoolABI,
        signer,
      );

      let pendingReward;
      try {
        pendingReward = await cobraNestContract.pendingReward(address);
      } catch (e) {}

      if (pendingReward > 0) {
        let rewardToken;
        try {
          rewardToken = await cobraNestContract.rewardToken();
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
          const tx: TransactionResponse = await cobraNestContract.deposit(0, {
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
              " from a CobraNest pool.",
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
    const cobraContract = new Contract(
      contracts.cobraAddress,
      CobraABI,
      signer,
    );

    let claimableBalance;
    try {
      claimableBalance = await cobraContract.canUnlockAmount(address);
    } catch (e) {
      log.warn(e);
    }

    if (claimableBalance > 0) {
      try {
        const tx: TransactionResponse = await cobraContract.unlock({
          ...systemGas,
        });
        await tx.wait(2);

        log.info(
          "[Module: " +
            thisInfo.moduleName +
            "]: Claimed " +
            claimableBalance / 10 ** 18 +
            " COBRA from the locked balance.",
        );
        totalClaimable += claimableBalance;
      } catch (e) {
        log.warn(e);
      }
    } else {
      log.info(
        "[Module: " +
          thisInfo.moduleName +
          "]: Failed claiming COBRA from your locked balance.  Balance < 0.",
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
            " COBRA from the following pool IDs: " +
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
          "]: Failed claiming COBRA from your staked LP Pools.  Balance < 0.",
      );
    }
  }

  if (totalClaimable > 0) {
    return true;
  } else {
    return false;
  }
};
