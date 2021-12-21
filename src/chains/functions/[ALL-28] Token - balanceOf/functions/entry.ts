import { BaseProvider } from "@ethersproject/providers";
import { formatUnits } from "@ethersproject/units";
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

  if (otfSettings.type == "token") {
    const contractToUse = new Contract(
      otfSettings.tokenAddress,
      ERC20ABI,
      signer,
    );

    const decimals = await contractToUse.decimals();

    const tokenSymbol = await contractToUse.symbol();

    const balanceOfAttempt = await contractToUse.balanceOf(
      otfSettings.walletAddress,
    );

    log.info(
      "[Module: " +
        thisInfo.moduleName +
        "] " +
        otfSettings.walletAddress +
        " holds " +
        (await balanceOfAttempt) / 10 ** (await decimals) +
        " " +
        (await tokenSymbol),
    );
  } else if (otfSettings.type == "chain_coin") {
    const balance = await provider.getBalance(otfSettings.walletAddress);

    log.info(
      "[Module: " +
        thisInfo.moduleName +
        "] " +
        otfSettings.walletAddress +
        " holds " +
        formatUnits(balance, "ether"),
    );
  }
};
