/* eslint-disable no-empty */
import { BaseProvider, TransactionResponse } from "@ethersproject/providers";
import { Contract, ethers, Wallet } from "ethers";
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
): Promise<boolean> => {
  const thisSettings = moduleSettings;
  const thisInfo = moduleInfo;

  let timestamp = 0;
  try {
    timestamp = (await provider.getBlock(provider.blockNumber)).timestamp;
  } catch (e) {
    log.warn(e);
  }

  const router = new Contract(
    contracts.sushiSwapRouter,
    UniswapV2Router02,
    signer,
  );

  let balanceOfFrom;
  let fromTokenName;
  let fromTokenDecimals;
  if (otfSettings.fromToken.toLowerCase() === "chain_coin") {
    fromTokenDecimals = 18;
    fromTokenName = "ONE";
    try {
      balanceOfFrom = provider.getBalance(address);
    } catch (e) {
      log.warn(e);
    }
  } else {
    const fromToken = new Contract(otfSettings.fromToken, ERC20ABI, signer);
    try {
      fromTokenDecimals = await fromToken.decimals();
    } catch (e) {
      log.warn(e);
    }
    try {
      fromTokenName = await fromToken.symbol();
    } catch (e) {
      log.warn(e);
    }
    try {
      balanceOfFrom = await fromToken.balanceOf(address);
    } catch (e) {
      log.warn(e);
    }
  }

  let toTokenName;
  let toTokenDecimals;
  if (otfSettings.toToken.toLowerCase() === "chain_coin") {
    toTokenDecimals = 18;
    toTokenName = "ONE";
  } else {
    const toToken = new Contract(otfSettings.toToken, ERC20ABI, signer);
    try {
      toTokenDecimals = await toToken.decimals();
    } catch (e) {
      log.warn(e);
    }
    try {
      toTokenName = await toToken.symbol();
    } catch (e) {
      log.warn(e);
    }
  }

  let deadline;
  otfSettings.deadline
    ? (deadline = timestamp + otfSettings.deadline)
    : (deadline = timestamp + 20 * 60 * 1000);
  let toAddress;
  otfSettings.alternateReceiver
    ? (toAddress = otfSettings.alternateReceiver)
    : (toAddress = address);

  let qtyToUse;
  if (otfSettings.quantityType.toLowerCase() === "max") {
    qtyToUse = balanceOfFrom;
  } else if (otfSettings.quantityType.toLowerCase() === "wei") {
    if (otfSettings.quantity > balanceOfFrom) {
      qtyToUse = otfSettings.quantity;
    } else {
      qtyToUse = balanceOfFrom;
    }
  } else if (otfSettings.quantityType.toLowerCase() === "percent") {
    qtyToUse = balanceOfFrom.sub(balanceOfFrom.div(otfSettings.quantity * 100));
  }

  let route;
  if (otfSettings.customRoute) {
    route = otfSettings.customRoute;
  } else {
    let weth;
    try {
      weth = await router.WETH();
    } catch (e) {
      log.warn(e);
    }

    if (otfSettings.fromToken.toLowerCase() === "chain_coin") {
      route = [weth, otfSettings.toToken];
    } else if (otfSettings.toToken.toLowerCase() === "chain_coin") {
      route = [otfSettings.fromToken, weth];
    } else {
      route = [otfSettings.fromToken, otfSettings.toToken];
    }
  }

  let amountOut;
  try {
    amountOut = await router.getAmountsOut(qtyToUse, route);
  } catch (e) {
    log.warn(e);
  }
  const minimumAccepted = amountOut[1].sub(
    amountOut[1].div(otfSettings.slippage * 100),
  );

  if (qtyToUse > 0) {
    if (otfSettings.swapMethod.toLowerCase() === "swapexacttokensfortokens") {
      try {
        const tx: TransactionResponse = await router.swapExactTokensForTokens(
          qtyToUse,
          minimumAccepted,
          route,
          toAddress,
          deadline,
          { ...systemGas },
        );
        await tx.wait(2);

        log.info(
          "[Module: " +
            thisInfo.moduleName +
            "]: has swapped " +
            qtyToUse / 10 ** fromTokenDecimals +
            " " +
            fromTokenName +
            " to ~" +
            amountOut[1] / 10 ** toTokenDecimals +
            " " +
            toTokenName +
            ".",
        );

        return true;
      } catch (e) {
        log.warn(e);

        return false;
      }
    } else if (
      otfSettings.swapMethod.toLowerCase() === "swapexactethfortokens"
    ) {
      try {
        const tx: TransactionResponse = await router.swapExactETHForTokens(
          minimumAccepted,
          route,
          toAddress,
          deadline,
          {
            to: contracts.sushiSwapRouter,
            value: ethers.utils.parseEther(String(qtyToUse)),
            ...systemGas,
          },
        );
        await tx.wait(2);

        log.info(
          "[Module: " +
            thisInfo.moduleName +
            "]: has swapped " +
            qtyToUse / 10 ** fromTokenDecimals +
            " " +
            fromTokenName +
            " to ~" +
            amountOut[1] / 10 ** toTokenDecimals +
            " " +
            toTokenName +
            ".",
        );

        return true;
      } catch (e) {
        log.warn(e);

        return false;
      }
    } else if (
      otfSettings.swapMethod.toLowerCase() === "swapexacttokensforeth"
    ) {
      try {
        const tx: TransactionResponse = await router.swapExactTokensForETH(
          qtyToUse,
          minimumAccepted,
          route,
          toAddress,
          deadline,
          { ...systemGas },
        );
        await tx.wait(2);

        log.info(
          "[Module: " +
            thisInfo.moduleName +
            "]: has swapped " +
            qtyToUse / 10 ** fromTokenDecimals +
            " " +
            fromTokenName +
            " to ~" +
            amountOut[1] / 10 ** toTokenDecimals +
            " " +
            toTokenName +
            ".",
        );

        return true;
      } catch (e) {
        log.warn(e);

        return false;
      }
    } else if (
      otfSettings.swapMethod.toLowerCase() ===
      "swapexacttokensfortokenssupportingfeeontransfertokens"
    ) {
      try {
        const tx: TransactionResponse =
          await router.swapExactTokensForTokensSupportingFeeOnTransferTokens(
            qtyToUse,
            minimumAccepted,
            route,
            toAddress,
            deadline,
            { ...systemGas },
          );
        await tx.wait(2);

        log.info(
          "[Module: " +
            thisInfo.moduleName +
            "]: has swapped " +
            qtyToUse / 10 ** fromTokenDecimals +
            " " +
            fromTokenName +
            " to ~" +
            amountOut[1] / 10 ** toTokenDecimals +
            " " +
            toTokenName +
            ".",
        );

        return true;
      } catch (e) {
        log.warn(e);

        return false;
      }
    } else if (
      otfSettings.swapMethod.toLowerCase() ===
      "swapexactethfortokenssupportingfeeontransfertokens"
    ) {
      try {
        const tx: TransactionResponse =
          await router.swapExactETHForTokensSupportingFeeOnTransferTokens(
            minimumAccepted,
            route,
            toAddress,
            deadline,
            {
              to: contracts.sushiSwapRouter,
              value: ethers.utils.parseEther(String(qtyToUse)),
              ...systemGas,
            },
          );
        await tx.wait(2);

        log.info(
          "[Module: " +
            thisInfo.moduleName +
            "]: has swapped " +
            qtyToUse / 10 ** fromTokenDecimals +
            " " +
            fromTokenName +
            " to ~" +
            amountOut[1] / 10 ** toTokenDecimals +
            " " +
            toTokenName +
            ".",
        );

        return true;
      } catch (e) {
        log.warn(e);

        return false;
      }
    } else if (
      otfSettings.swapMethod.toLowerCase() ===
      "swapexacttokensforethsupportingfeeontransfertokens"
    ) {
      try {
        const tx: TransactionResponse =
          await router.swapExactTokensForETHSupportingFeeOnTransferTokens(
            qtyToUse,
            minimumAccepted,
            route,
            toAddress,
            deadline,
            { ...systemGas },
          );
        await tx.wait(2);

        log.info(
          "[Module: " +
            thisInfo.moduleName +
            "]: has swapped " +
            qtyToUse / 10 ** fromTokenDecimals +
            " " +
            fromTokenName +
            " to ~" +
            amountOut[1] / 10 ** toTokenDecimals +
            " " +
            toTokenName +
            ".",
        );

        return true;
      } catch (e) {
        log.warn(e);

        return false;
      }
    } else {
      log.info(
        "[Module: " +
          thisInfo.moduleName +
          "]: unrecognized 'swapMethod' command.",
      );

      return false;
    }
  } else {
    log.info(
      "[Module: " +
        thisInfo.moduleName +
        "]: unrecognized 'swapMethod' command.",
    );

    return false;
  }
};
