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
  const pool0 = 0; // the pool id for the comfy-one pool
  const comfyReward0Contract = new Contract(
    contracts.ComfyRewardPool,
    ComfyRewardPool,
    signer,
  );

  let pid0Rewards = 0;
  try {
    pid0Rewards = await comfyReward0Contract.pendingCOMFY([0], address);
  } catch (e) {
    log.warn(e);
  }

  if (pid0Rewards > 0) {
    try {
      const tx: TransactionResponse = await comfyReward0Contract.withdraw(
        0,
        Zero,
      );
      await tx.wait(2);
    } catch (e) {
      log.warn(e);
    }

    log.info(
      "[Module: " +
        thisInfo.moduleName +
        "]: Harvested " +
        formatUnits(pid0Rewards, 18) +
        " COMFY.",
    );
  }

  const pool1 = 1; // the pool id for the cshare-one pool
  const comfyReward1Contract = new Contract(
    contracts.CShareRewardPool,
    CShareRewardPool,
    signer,
  );

  let pid1Rewards = 0;
  try {
    pid1Rewards = await comfyReward1Contract.pendingShare([0], address);
  } catch (e) {
    log.warn(e);
  }

  if (pid1Rewards > 0) {
    try {
      const tx: TransactionResponse = await comfyReward0Contract.withdraw(
        1,
        Zero,
      );
      await tx.wait(2);
    } catch (e) {
      log.warn(e);
    }

    log.info(
      "[Module: " +
        thisInfo.moduleName +
        "]: Harvested " +
        formatUnits(pid1Rewards, 18) +
        " CSHARE.",
    );
  }

  return true;
};
