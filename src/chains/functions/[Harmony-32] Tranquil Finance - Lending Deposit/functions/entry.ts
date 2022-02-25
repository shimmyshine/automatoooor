import { BaseProvider, TransactionResponse } from "@ethersproject/providers";
import { BigNumber, Contract, ethers, Wallet } from "ethers";
import { formatUnits } from "ethers/lib/utils";
import { Logger } from "tslog";
import moduleInfo from "..";
import { contracts } from "../data/contracts";
import { ERC20ABI } from "../data/contract_abis/erc20";
import { TqERC20DelegatorABI } from "../data/contract_abis/TqERC20Delegator";
import { tqONEABI } from "../data/contract_abis/tqONE";
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

  // Code Execution Here
  const addressesArray: { [key: string]: string } = {
    "1usdc": contracts.tqERC20DelegatorUSDCAddress,
    "1btc": contracts.tqERC20Delegator1BTCAddress,
    "1wbtc": contracts.tqERC20Delegator1WBTCAddress,
    one: contracts.tqERC20DelegatorONEAddress,
    "1usdt": contracts.tqERC20Delegator1USDTAddress,
    "1dai": contracts.tqERC20Delegator1DAIAddress,
    "1eth": contracts.tqERC20Delegator1ETHAddress,
    stone: contracts.tqERC20DelegatorstONEAddress,
  };
  const tokensArray: { [key: string]: string } = {
    "1usdc": contracts["1USDCAddress"],
    "1btc": contracts["1BTCAddress"],
    "1wbtc": contracts["1WBTCAddress"],
    one: "",
    "1usdt": contracts["1USDTAddress"],
    "1dai": contracts["1DAIAddress"],
    "1eth": contracts["1ETHAddress"],
    stone: contracts.stONEAddress,
  };

  if (otfSettings.target.toLowerCase() !== "one") {
    // Is any aside from ONE
    const addressToUse = addressesArray[otfSettings.target.toLowerCase()];
    const tqPoolContract = new Contract(
      addressToUse,
      TqERC20DelegatorABI,
      signer,
    );
    const tokenAddressToUse = tokensArray[otfSettings.target.toLowerCase()];
    const tokenContract = new Contract(tokenAddressToUse, ERC20ABI, signer);

    let amountToUse;
    try {
      amountToUse = await tokenContract.balanceOf(address);
    } catch (e) {
      log.warn(e);
    }

    let decimalsToUse;
    try {
      decimalsToUse = await tokenContract.decimals();
    } catch (e) {
      log.warn(e);
    }

    let nameToUse;
    try {
      nameToUse = await tokenContract.symbol();
    } catch (e) {
      log.warn(e);
    }

    if (amountToUse > 0) {
      if (otfSettings.qtyType.toLowerCase() === "wei") {
        amountToUse = otfSettings.qty;
      } else if (otfSettings.qtyType.toLowerCase() === "percent") {
        amountToUse = amountToUse.sub(amountToUse.div(otfSettings.qty * 100));
      }

      try {
        const tx: TransactionResponse = await tqPoolContract.mint(amountToUse, {
          ...systemGas,
        });
        await tx.wait(2);

        log.info(
          "[Module: " +
            thisInfo.moduleName +
            "]: Deposited " +
            formatUnits(amountToUse, decimalsToUse) +
            " " +
            nameToUse +
            ".",
        );

        return true;
      } catch (e) {
        log.warn(e);

        return false;
      }
    } else {
      return false;
    }
  } else {
    // Is ONE
    const addressToUse = addressesArray[otfSettings.target.toLowerCase()];
    const tqPoolContract = new Contract(addressToUse, tqONEABI, signer);

    let amountToUse;
    try {
      amountToUse = await provider.getBalance(address);
    } catch (e) {
      log.warn(e);
    }
    const decimalsToUse = 18;
    const nameToUse = "ONE";

    if (amountToUse && amountToUse > BigNumber.from(0)) {
      if (otfSettings.qtyType.toLowerCase() === "wei") {
        amountToUse = otfSettings.qty;
      } else if (otfSettings.qtyType.toLowerCase() === "percent") {
        amountToUse = amountToUse.mul(otfSettings.qty);
      }

      try {
        const tx: TransactionResponse = await tqPoolContract.mint({
          to: addressToUse,
          value: ethers.utils.parseEther(String(amountToUse)),
          ...systemGas,
        });
        await tx.wait(2);

        log.info(
          "[Module: " +
            thisInfo.moduleName +
            "]: Deposited " +
            formatUnits(amountToUse, decimalsToUse) +
            " " +
            nameToUse +
            ".",
        );

        return true;
      } catch (e) {
        log.warn(e);

        return false;
      }
    } else {
      return false;
    }
  }
};
