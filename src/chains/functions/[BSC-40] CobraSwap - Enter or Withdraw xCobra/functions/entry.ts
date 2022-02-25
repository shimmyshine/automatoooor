import { BaseProvider, TransactionResponse } from "@ethersproject/providers";
import { Contract, Wallet } from "ethers";
import { Logger } from "tslog";
import moduleInfo from "..";
import { contracts } from "../data/contracts";
import { ERC20ABI } from "../data/contract_abis/erc20";
import { xCobraABI } from "../data/contract_abis/xCobra";
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

  const xCobraContractToUse = new Contract(
    contracts.xCobraContract,
    xCobraABI,
    signer,
  );
  const cobraContract = new Contract(contracts.cobraContract, ERC20ABI, signer);

  let cobraBalance;
  try {
    cobraBalance = await cobraContract.balanceOf(address);
  } catch (e) {
    log.warn(e);
  }

  if (cobraBalance > 0) {
    let quantityToUse;

    if (otfSettings.qtyType.toLowerCase() === "max") {
      quantityToUse = cobraBalance;
    } else if (otfSettings.qtyType.toLowerCase() === "wei") {
      if (otfSettings.qty > cobraBalance) {
        quantityToUse = cobraBalance;

        log.warn(
          "[Module: " +
            thisInfo.moduleName +
            "]: The balance told to be used was greater than what's available for COBRA.",
        );
      } else {
        quantityToUse = otfSettings.qty;
      }
    } else if (otfSettings.qtyType.toLowerCase() === "percent") {
      quantityToUse = cobraBalance.sub(cobraBalance.div(otfSettings.qty * 100));
    }

    if (quantityToUse > 0) {
      if (otfSettings.to.toLowerCase() === "to") {
        try {
          const tx: TransactionResponse = await xCobraContractToUse.enter(
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
              " COBRA into the CobraPit",
          );

          return true;
        } catch (e) {
          log.warn(e);

          return false;
        }
      } else if (otfSettings.to.toLowerCase() === "from") {
        try {
          const tx: TransactionResponse = await xCobraContractToUse.leave(
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
              " xCOBRA from the CobraPit",
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
