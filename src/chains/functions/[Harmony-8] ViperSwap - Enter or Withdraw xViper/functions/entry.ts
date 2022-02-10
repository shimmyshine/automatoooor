import { BaseProvider, TransactionResponse } from "@ethersproject/providers";
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
  const viperContract = new Contract(contracts.viperContract, ERC20ABI, signer);

  let viperBalance;
  try {
    viperBalance = await viperContract.balanceOf(address);
  } catch (e) {
    log.warn(e);
  }

  if (viperBalance > 0) {
    let quantityToUse;

    if (otfSettings.qtyType.toLowerCase() === "max") {
      quantityToUse = viperBalance;
    } else if (otfSettings.qtyType.toLowerCase() === "wei") {
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
    } else if (otfSettings.qtyType.toLowerCase() === "percent") {
      quantityToUse = viperBalance.mul(otfSettings.qty);
    }

    if (quantityToUse > 0) {
      if (otfSettings.to.toLowerCase() === "to") {
        try {
          const tx: TransactionResponse = xViperContractToUse.enter(
            quantityToUse,
            {
              ...systemGas,
            },
          );
          await tx.wait(2);

          log.info(
            "[Module: " +
              thisInfo.moduleName +
              "]: has deposited " +
              quantityToUse * 10 ** 18 +
              " VIPER into the ViperPit",
          );

          return true;
        } catch (e) {
          log.warn(e);

          return false;
        }
      } else if (otfSettings.to.toLowerCase() === "from") {
        try {
          const tx: TransactionResponse = xViperContractToUse.leave(
            quantityToUse,
            {
              ...systemGas,
            },
          );
          await tx.wait(2);

          log.info(
            "[Module: " +
              thisInfo.moduleName +
              "]: has withdrawn " +
              quantityToUse * 10 ** 18 +
              " xVIPER from the ViperPit",
          );

          return true;
        } catch (e) {
          log.warn(e);

          return false;
        }
      } else {
        log.info(
          "[Module: " + thisInfo.moduleName + "]: unrecognized 'to' command.",
        );

        return false;
      }
    } else {
      log.info("[Module: " + thisInfo.moduleName + "]: balance < 0.");

      return false;
    }
  } else {
    log.info("[Module: " + thisInfo.moduleName + "]: balance < 0.");

    return false;
  }
};
