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
  const comfyContract = new Contract(contracts.Comfy, ComfyABI, signer);

  let balanceOf = 0;
  try {
    balanceOf = await comfyContract.balanceOf(address);
  } catch (e) {
    log.warn(e);
  }

  if (balanceOf > 0) {
    try {
      const tx: TransactionResponse = await zapContract.zapInToken(
        contracts.Comfy,
        balanceOf,
        contracts.ComfyOneLP,
        contracts.ViperRouter,
        address,
      );
      await tx.wait(2);

      log.info(
        "[Module: " +
          thisInfo.moduleName +
          "]: Zapped " +
          formatUnits(balanceOf, 18) +
          " Comfy into Comfy-One LP.",
      );
    } catch (e) {
      log.warn(e);
    }
  }

  return true;
};
