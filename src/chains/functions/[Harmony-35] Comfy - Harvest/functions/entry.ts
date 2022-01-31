import { BaseProvider, TransactionResponse } from "@ethersproject/providers";
import { Contract, Wallet } from "ethers";
import { Logger } from "tslog";
import moduleInfo from "..";
import { OTFSettings } from "../data/interfaces";
import moduleSettings from "../settings";
import { ComfyRewardPool } from "../data/contract_abis/ComfyRewardPool";
import { contracts } from "../data/contracts";
import { CShareRewardPool } from "../data/contract_abis/CShareRewardPool";
import { formatUnits } from "ethers/lib/utils";
import { Zero } from "@ethersproject/constants";

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
  const comfyPools = [0];
  const comfyRewardContract = new Contract(
    contracts.ComfyRewardPool,
    ComfyRewardPool,
    signer,
  );
  const csharePools = [0, 1];
  const cshareRewardContract = new Contract(
    contracts.CShareRewardPool,
    CShareRewardPool,
    signer,
  );

  let rewardsClaimed = 0;

  for await (const poolID of comfyPools) {
    let rewards = 0;
    try {
      rewards = await comfyRewardContract.pendingCOMFY([poolID], address);
    } catch (e) {
      log.warn(e);
    }

    if (rewards > 0) {
      try {
        const tx: TransactionResponse = await comfyRewardContract.withdraw(
          poolID,
          Zero,
          { ...systemGas },
        );
        await tx.wait(2);

        log.info(
          "[Module: " +
            thisInfo.moduleName +
            "]: Harvested " +
            formatUnits(rewards, 18) +
            " COMFY from pool ID: " +
            poolID +
            ".",
        );
        rewardsClaimed += rewards;
      } catch (e) {
        log.warn(e);
      }
    }
  }

  for await (const poolID of csharePools) {
    let rewards = 0;
    try {
      rewards = await cshareRewardContract.pendingShare([poolID], address);
    } catch (e) {
      log.warn(e);
    }

    if (rewards > 0) {
      try {
        const tx: TransactionResponse = await cshareRewardContract.withdraw(
          poolID,
          Zero,
          { ...systemGas },
        );
        await tx.wait(2);

        log.info(
          "[Module: " +
            thisInfo.moduleName +
            "]: Harvested " +
            formatUnits(rewards, 18) +
            " CSHARE from pool ID: " +
            poolID +
            ".",
        );
        rewardsClaimed += rewards;
      } catch (e) {
        log.warn(e);
      }
    }
  }

  if (rewardsClaimed > 0) {
    return true;
  } else {
    return false;
  }
};
