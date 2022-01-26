import { BaseProvider, TransactionResponse } from "@ethersproject/providers";
import { Contract, Wallet } from "ethers";
import { formatUnits } from "ethers/lib/utils";
import { Logger } from "tslog";
import moduleInfo from "..";
import { contracts } from "../data/contracts";
import { CShareRewardPool } from "../data/contract_abis/CShareRewardPool";
import { OTFSettings } from "../data/interfaces";
import moduleSettings from "../settings";
import { Zero } from "@ethersproject/constants";
import { ComfyRewardPool } from "../data/contract_abis/ComfyRewardPool";
import { ComfyABI } from "../data/contract_abis/Comfy";

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
  const comfyOneLPContract = new Contract(
    contracts.ComfyOneLP,
    ComfyABI,
    signer,
  );
  const comfyRewardPoolContract = new Contract(
    contracts.ComfyRewardPool,
    ComfyRewardPool,
    signer,
  );

  let balanceOfComfyOneLP = 0;
  try {
    balanceOfComfyOneLP = await comfyOneLPContract.balanceOf(address);
  } catch (e) {
    log.warn(e);
  }

  if (balanceOfComfyOneLP > 0) {
    try {
      const tx: TransactionResponse = await comfyRewardPoolContract.deposit(
        0,
        balanceOfComfyOneLP,
      );
      await tx.wait(2);
    } catch (e) {
      log.warn(e);
    }

    log.info(
      "[Module: " +
        thisInfo.moduleName +
        "]: Deposited " +
        formatUnits(balanceOfComfyOneLP, 18) +
        " COMFY-ONE LP.",
    );
  }

  return true;
};
