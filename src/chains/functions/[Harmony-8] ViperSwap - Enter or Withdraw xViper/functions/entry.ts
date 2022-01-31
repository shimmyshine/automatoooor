import { BaseProvider } from "@ethersproject/providers";
import { Contract, Wallet } from "ethers";
import { Logger } from "tslog";
import moduleInfo from "..";
import { contracts } from "../data/contracts";
import { ERC20ABI } from "../data/contract_abis/erc20";
import { xViperABI } from "../data/contract_abis/xViper";
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

  const xViperContractToUse = new Contract(
    contracts.xViperContract,
    xViperABI,
    provider,
  );

  if (otfSettings.to.toLowerCase() == "to") {
    const viperBalance = new Contract(
      contracts.viperContract,
      ERC20ABI,
      provider,
    ).balanceOf(address);

    let quantityToUse = 0;

    if (otfSettings.qtyType.toLowerCase() == "max") {
      quantityToUse = viperBalance;
    } else if (otfSettings.qtyType.toLowerCase() == "wei") {
      if (otfSettings.qty > viperBalance) {
        quantityToUse = viperBalance;

        log.warn(
          "[Module: " +
            thisInfo.moduleName +
            "]: The balance told to be used was greater than what's available for VIPER.",
        );
      } else {
        quantityToUse = otfSettings.qty;
      }
    } else if (otfSettings.qtyType.toLowerCase() == "percent") {
      quantityToUse = viperBalance * otfSettings.qty;
    }

    if (quantityToUse > 0) {
      let attemptToEnter = null;
      try {
        attemptToEnter = xViperContractToUse.enter(quantityToUse, {
          ...systemGas,
        });
      } catch (e) {
        log.warn(e);
      }

      await attemptToEnter.wait(1);

      log.info(
        "[Module: " +
          thisInfo.moduleName +
          "]: has deposited " +
          quantityToUse * 10 ** 18 +
          " VIPER into the ViperPit",
      );

      return true;
    } else {
      return false;
    }
  } else if (otfSettings.to.toLowerCase() == "from") {
    const xViperBalance = xViperContractToUse.balanceOf(address);

    let quantityToUse = 0;

    if (otfSettings.qtyType.toLowerCase() == "max") {
      quantityToUse = xViperBalance;
    } else if (otfSettings.qtyType.toLowerCase() == "wei") {
      if (otfSettings.qty > xViperBalance) {
        quantityToUse = xViperBalance;

        log.warn(
          "[Module: " +
            thisInfo.moduleName +
            "]: The balance told to be used was greater than what's available for xVIPER.",
        );
      } else {
        quantityToUse = otfSettings.qty;
      }
    } else if (otfSettings.qtyType.toLowerCase() == "percent") {
      quantityToUse = xViperBalance * otfSettings.qty;
    }

    if (quantityToUse > 0) {
      let attemptToLeave = null;
      try {
        attemptToLeave = xViperContractToUse.leave(quantityToUse, {
          ...systemGas,
        });
      } catch (e) {
        log.warn(e);
      }

      await attemptToLeave.wait(1);

      log.info(
        "[Module: " +
          thisInfo.moduleName +
          "]: has withdrawn " +
          quantityToUse * 10 ** 18 +
          " xVIPER from the ViperPit",
      );

      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};
