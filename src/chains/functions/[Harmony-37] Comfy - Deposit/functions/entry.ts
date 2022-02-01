import { BaseProvider, TransactionResponse } from "@ethersproject/providers";
import { Contract, Wallet } from "ethers";
import { formatUnits } from "ethers/lib/utils";
import { Logger } from "tslog";
import moduleInfo from "..";
import { contracts } from "../data/contracts";
import { CShareRewardPool } from "../data/contract_abis/CShareRewardPool";
import { OTFSettings } from "../data/interfaces";
import moduleSettings from "../settings";
import { ComfyRewardPool } from "../data/contract_abis/ComfyRewardPool";
import { ComfyABI } from "../data/contract_abis/Comfy";
import { CShareABI } from "../data/contract_abis/CShare";

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
  let tokenContract, tokenName;
  let poolContract;

  if (otfSettings.contractPreference == "comfypool") {
    tokenContract = new Contract(contracts.ComfyOneLP, ComfyABI, signer);
    tokenName = "COMFY-ONE LP";
    poolContract = new Contract(
      contracts.ComfyRewardPool,
      ComfyRewardPool,
      signer,
    );
  } else if (otfSettings.contractPreference == "csharepool") {
    if (otfSettings.tokenToDeposit == "comfyonelp") {
      tokenContract = new Contract(contracts.ComfyOneLP, ComfyABI, signer);
      tokenName = "COMFY-ONE LP";
    } else if (otfSettings.tokenToDeposit == "cshareonelp") {
      tokenContract = new Contract(contracts.CShareOneLP, CShareABI, signer);
      tokenName = "CSHARE-ONE LP";
    } else {
      return false;
    }
    poolContract = new Contract(
      contracts.CShareRewardPool,
      CShareRewardPool,
      signer,
    );
  } else if (otfSettings.contractPreference == "zenden") {
    tokenContract = new Contract(contracts.CShare, CShareABI, signer);
    tokenName = "CSHARE";
  } else {
    return false;
  }

  let balanceOf;
  try {
    balanceOf = await tokenContract.balanceOf(address);
  } catch (e) {
    log.warn(e);
    return false;
  }

  if (balanceOf > 0) {
    if (poolContract) {
      let amountToUse = balanceOf;

      if (otfSettings.amtType == "wei") {
        if (otfSettings.amt <= amountToUse) {
          amountToUse = otfSettings.amt;
        }
      } else if (otfSettings.amtType == "percent") {
        amountToUse = amountToUse.mul(otfSettings.amt);
      }

      try {
        const tx: TransactionResponse = await poolContract.deposit(
          otfSettings.poolID,
          amountToUse,
          { ...systemGas },
        );
        await tx.wait(2);

        log.info(
          "[Module: " +
            thisInfo.moduleName +
            "]: Deposited " +
            formatUnits(amountToUse, 18) +
            " " +
            tokenName +
            ".",
        );
      } catch (e) {
        log.warn(e);
        return false;
      }

      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};
