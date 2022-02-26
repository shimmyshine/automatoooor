import { BaseProvider, TransactionResponse } from "@ethersproject/providers";
import { BigNumber, Contract, ethers, Wallet } from "ethers";
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

  if (otfSettings.type.toLowerCase() == "token") {
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
      amountToUse = (balanceOf * (otfSettings.quantity * 100)) / 100;
    }

    try {
      const tx: TransactionResponse = await contractToUse.transfer(
        otfSettings.addressTo,
        String(amountToUse),
        {
          ...systemGas,
        },
      );

      await tx.wait(2);

      log.info(
        "[Module: " +
          thisInfo.moduleName +
          "] sent " +
          otfSettings.quantity / 10 ** otfSettings.decimal +
          " tokens to " +
          otfSettings.addressTo,
      );

      return true;
    } catch (e) {
      log.warn(e);

      return false;
    }
  } else if (otfSettings.type.toLowerCase() == "chain_coin") {
    const contractToUse = new Contract(
      otfSettings.tokenAddress,
      ERC20ABI,
      signer,
    );

    let balanceOf;
    try {
      balanceOf = await provider.getBalance(address);
    } catch (e) {
      log.warn(e);
    }

    let amountToUse;
    if (otfSettings.quantityType.toLowerCase() === "max") {
      amountToUse = balanceOf;
    } else if (otfSettings.quantityType.toLowerCase() === "wei") {
      amountToUse = otfSettings.quantity;
    } else if (otfSettings.quantityType.toLowerCase() === "percent") {
      amountToUse = (Number(balanceOf) * (otfSettings.quantity * 100)) / 100;
      amountToUse = balanceOf
        ? balanceOf.mul(otfSettings.quantity * 100).div(100)
        : 0;
    }

    try {
      const tx: TransactionResponse = await signer.sendTransaction({
        to: otfSettings.addressTo,
        value: ethers.utils.parseEther(String(amountToUse)),
        ...systemGas,
      });
      await tx.wait(2);

      log.info(
        "[Module: " +
          thisInfo.moduleName +
          "] sent " +
          Number(amountToUse) / 10 ** otfSettings.decimal +
          " coins to " +
          otfSettings.addressTo,
      );

      return true;
    } catch (e) {
      log.warn(e);

      return false;
    }
  } else {
    return false;
  }
};
