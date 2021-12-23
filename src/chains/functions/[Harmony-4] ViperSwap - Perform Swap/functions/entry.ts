/* eslint-disable no-empty */
import { BaseProvider } from "@ethersproject/providers";
import { Contract, Wallet } from "ethers";
import { Logger } from "tslog";
import moduleInfo from "..";
import { contracts } from "../data/contracts";
import { ERC20ABI } from "../data/contract_abis/erc20";
import { UniswapV2Router02 } from "../data/contract_abis/UniswapV2Router02";
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

  const router = new Contract(
    contracts.viperSwapRouter,
    UniswapV2Router02,
    signer,
  );

  const fromToken = new Contract(otfSettings.fromToken, ERC20ABI, signer);
  const toToken = new Contract(otfSettings.toToken, ERC20ABI, signer);
  const deadline = Math.floor(otfSettings.deadline / 1000) + 60 * 10;

  if (otfSettings.isDeflationary == "fromToken") {
    if (otfSettings.toToken == "chain_coin") {
      // from token to eth
      // swapExactTokensForETH

      let allowanceAmount = null;
      try {
        allowanceAmount = fromToken.allowance(
          address,
          contracts.viperSwapRouter,
        );
      } catch (e) {
        log.warn(e);
      }

      if (allowanceAmount < otfSettings.quantity) {
        log.warn("[Module: " + thisInfo.moduleName + "]: Allowance not set.");
      } else {
        //let swapAttempt = null;
        try {
          //router.swapETHForExactTokens(String(otfSettings.quantity), String(minimumReceived), )
        } catch (e) {
          log.warn(e);
        }
      }
    } else {
    }
  } else if (otfSettings.isDeflationary == "toToken") {
    if (otfSettings.fromToken == "chain_coin") {
      // from eth
    } else {
    }
  } else {
    if (otfSettings.toToken == "chain_coin") {
      // to eth
    } else if (otfSettings.fromToken == "chain_coin") {
      // from eth
    } else {
      // from token to token
    }
  }
};
