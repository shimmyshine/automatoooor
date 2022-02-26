import { BaseProvider, TransactionResponse } from "@ethersproject/providers";
import { Contract, Wallet } from "ethers";
import { Logger } from "tslog";
import moduleInfo from "..";
import { ERC20ABI } from "../data/contract_abis/erc20";
import { OTFSettings } from "../data/interfaces";
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

  const contractToUse = new Contract(
    otfSettings.tokenAddress,
    ERC20ABI,
    signer,
  );

  let balanceOf;
  try {
    balanceOf = await contractToUse.balanceOf(address);
  } catch (e) {
    log.warn(e);
  }

  let amountToUse;
  if (otfSettings.quantityType.toLowerCase() === "max") {
    amountToUse = balanceOf;
  } else if (otfSettings.quantityType.toLowerCase() === "wei") {
    amountToUse = otfSettings.quantity;
  } else if (otfSettings.quantityType.toLowerCase() === "percent") {
    amountToUse = balanceOf.mul(otfSettings.quantity * 100).div(100);
  }

  try {
    const tx: TransactionResponse = await contractToUse.approve(
      otfSettings.contractAddress,
      String(amountToUse),
      {
        ...systemGas,
      },
    );
    await tx.wait(2);

    log.info(
      "[Module: " +
        thisInfo.moduleName +
        "] approved " +
        otfSettings.contractAddress +
        " to transfer " +
        amountToUse / 10 ** otfSettings.decimal +
        " tokens",
    );

    return true;
  } catch (e) {
    log.warn(e);

    return false;
  }
};
