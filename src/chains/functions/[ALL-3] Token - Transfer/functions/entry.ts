import { BaseProvider } from "@ethersproject/providers";
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
  systemGas: { gasPrice: number; gasLimit: number },
  otfSettings: OTFSettings,
): Promise<void> => {
  const thisSettings = moduleSettings;
  const thisInfo = moduleInfo;

  if (otfSettings.type == "token") {
    const contractToUse = new Contract(
      otfSettings.tokenAddress,
      ERC20ABI,
      signer,
    );

    let transferAttempt = null;
    try {
      transferAttempt = await contractToUse.transfer(
        otfSettings.addressTo,
        otfSettings.quantity,
      );
    } catch (e) {
      log.warn(e);
    }

    await transferAttempt.wait(1);

    log.info(
      "[Module: " +
        thisInfo.moduleName +
        " sent " +
        otfSettings.quantity * 10 ** otfSettings.decimal +
        " tokens to " +
        otfSettings.addressTo,
    );
  } else if (otfSettings.type == "chain_coin") {
    let transferAttempt = null;
    try {
      transferAttempt = await signer.sendTransaction({
        to: otfSettings.addressTo,
        value: ethers.utils.parseEther(String(otfSettings.quantity)),
      });
    } catch (e) {
      log.warn(e);
    }

    await transferAttempt?.wait(1);

    log.info(
      "[Module: " +
        thisInfo.moduleName +
        " sent " +
        otfSettings.quantity * 10 * otfSettings.decimal +
        " coins to " +
        otfSettings.addressTo,
    );
  }
};
