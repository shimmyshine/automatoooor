import { BaseProvider, TransactionResponse } from "@ethersproject/providers";
import { Contract, ethers, Wallet } from "ethers";
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

    try {
      const tx: TransactionResponse = await contractToUse.transfer(
        otfSettings.addressTo,
        String(otfSettings.quantity),
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
    try {
      const tx: TransactionResponse = await signer.sendTransaction({
        to: otfSettings.addressTo,
        value: ethers.utils.parseEther(String(otfSettings.quantity)),
        ...systemGas,
      });
      await tx.wait(2);

      log.info(
        "[Module: " +
          thisInfo.moduleName +
          "] sent " +
          (otfSettings.quantity / 10) ** otfSettings.decimal +
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
