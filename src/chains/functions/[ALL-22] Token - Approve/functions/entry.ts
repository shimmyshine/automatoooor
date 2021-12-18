import { BaseProvider } from "@ethersproject/providers";
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
  systemGas: { gasPrice: number; gasLimit: number },
  otfSettings: OTFSettings,
): Promise<void> => {
  const thisSettings = moduleSettings;
  const thisInfo = moduleInfo;

  const contractToUse = new Contract(
    otfSettings.tokenAddress,
    ERC20ABI,
    signer,
  );

  let allowanceAttempt = null;
  try {
    allowanceAttempt = await contractToUse.approve(
      otfSettings.contractAddress,
      otfSettings.quantity,
    );
  } catch (e) {
    log.warn(e);
  }

  await allowanceAttempt.wait(1);

  log.info(
    "[Module: " +
      thisInfo.moduleName +
      " approved " +
      otfSettings.contractAddress +
      " to transfer " +
      otfSettings.quantity * 10 ** otfSettings.decimal +
      " tokens",
  );
};
