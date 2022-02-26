import { BaseProvider, TransactionResponse } from "@ethersproject/providers";
import { Contract, Wallet } from "ethers";
import { Logger } from "tslog";
import moduleInfo from "..";
import { OTFSettings } from "../data/interfaces";
import moduleSettings from "../settings";
import { ComfyABI } from "../data/contract_abis/Comfy";
import { ZapABI } from "../data/contract_abis/Zap";
import { contracts } from "../data/contracts";
import { formatUnits } from "ethers/lib/utils";
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
  const zapContract = new Contract(contracts.Zap, ZapABI, signer);
  let contractIn, contractInName, contractInAddress;
  let contractOut, contractOutName, contractOutAddress;
  let balanceOf;

  if (otfSettings.tokenIn.toLowerCase() == "comfy") {
    contractIn = new Contract(contracts.Comfy, ComfyABI, signer);
    contractInName = "COMFY";
    contractInAddress = contracts.Comfy;
  } else if (otfSettings.tokenIn.toLowerCase() == "cshare") {
    contractIn = new Contract(contracts.CShare, CShareABI, signer);
    contractInName = "CSHARE";
    contractInAddress = contracts.CShare;
  } else {
    log.warn(
      "[Module: " + thisInfo.moduleName + "]: Incorrect tokenIn otfSetting!",
    );
    return false;
  }

  try {
    balanceOf = await contractIn.balanceOf(address);
  } catch (e) {
    log.warn(e);

    return false;
  }

  if (otfSettings.tokenOut.toLowerCase() == "comfyonelp") {
    contractOut = new Contract(contracts.ComfyOneLP, ComfyABI, signer);
    contractOutName = "COMFY-ONE LP";
    contractOutAddress = contracts.ComfyOneLP;
  } else if (otfSettings.tokenOut.toLowerCase() == "cshareonelp") {
    contractOut = new Contract(contracts.CShareOneLP, CShareABI, signer);
    contractOutName = "CSHARE-ONE LP";
    contractOutAddress = contracts.CShareOneLP;
  } else {
    log.warn(
      "[Module: " + thisInfo.moduleName + "]: Incorrect tokenOut otfSetting!",
    );
    return false;
  }

  if (balanceOf > 0) {
    let amountToUse = balanceOf;

    if (otfSettings.amtType.toLowerCase() == "wei") {
      if (otfSettings.amt <= amountToUse) {
        amountToUse = otfSettings.amt;
      }
    } else if (otfSettings.amtType.toLowerCase() == "percent") {
      amountToUse = amountToUse.mul(otfSettings.amt * 100).div(100);
    }

    try {
      const tx: TransactionResponse = await zapContract.zapInToken(
        contractInAddress,
        String(amountToUse),
        contractOutAddress,
        contracts.ViperRouter,
        address,
        { ...systemGas },
      );
      await tx.wait(2);

      log.info(
        "[Module: " +
          thisInfo.moduleName +
          "]: Zapped " +
          formatUnits(balanceOf, 18) +
          " " +
          contractInName +
          " into " +
          contractOutName +
          ".",
      );

      return true;
    } catch (e) {
      log.warn(e);

      return false;
    }
  } else {
    log.warn("[Module: " + thisInfo.moduleName + "]: balanceOf is 0 or less.");

    return false;
  }
};
