import { isBigNumberish } from "@ethersproject/bignumber/lib/bignumber";
import { BaseProvider } from "@ethersproject/providers";
import { formatUnits } from "@ethersproject/units";
import { BigNumber, Contract, Wallet } from "ethers";
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
): Promise<void> => {
  const thisSettings = moduleSettings;
  const thisInfo = moduleInfo;

  if (otfSettings.type.toLowerCase() == "token") {
    const contractToUse = new Contract(
      otfSettings.tokenAddress,
      ERC20ABI,
      signer,
    );

    let decimals;
    try {
      decimals = await contractToUse.decimals();
    } catch (e) {
      log.warn(e);
    }

    let tokenSymbol;
    try {
      tokenSymbol = await contractToUse.symbol();
    } catch (e) {
      log.warn(e);
    }

    let balanceOfAttempt;
    try {
      balanceOfAttempt = await contractToUse.balanceOf(
        otfSettings.walletAddress,
      );
    } catch (e) {
      log.warn(e);
    }

    if (decimals && tokenSymbol && balanceOfAttempt) {
      log.info(
        "[Module: " +
          thisInfo.moduleName +
          "] " +
          otfSettings.walletAddress +
          " holds " +
          balanceOfAttempt / 10 ** decimals +
          " " +
          tokenSymbol,
      );
    }
  } else if (otfSettings.type.toLowerCase() == "chain_coin") {
    let balance;
    try {
      balance = await provider.getBalance(otfSettings.walletAddress);
    } catch (e) {
      log.warn(e);
    }

    if (isBigNumberish(balance)) {
      log.info(
        "[Module: " +
          thisInfo.moduleName +
          "] " +
          otfSettings.walletAddress +
          " holds " +
          formatUnits(balance, "ether"),
      );
    }
  }
};
