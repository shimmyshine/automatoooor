import { BaseProvider, TransactionResponse } from "@ethersproject/providers";
import { formatUnits } from "@ethersproject/units";
import { Contract, Wallet } from "ethers";
import { Logger } from "tslog";
import moduleInfo from "..";
import { contracts } from "../data/contracts";
import { ERC20ABI } from "../data/contract_abis/erc20";
import { xJewelABI } from "../data/contract_abis/xJewel";
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

  const xJewelContractToUse = new Contract(
    contracts.xJewelContract,
    xJewelABI,
    signer,
  );
  const jewelContract = new Contract(contracts.jewelContract, ERC20ABI, signer);

  let jewelBalance;
  try {
    jewelBalance = await jewelContract.balanceOf(address);
  } catch (e) {
    log.warn(e);
  }

  if (jewelBalance > 0) {
    let quantityToUse;

    if (otfSettings.qtyType.toLowerCase() === "max") {
      quantityToUse = jewelBalance;
    } else if (otfSettings.qtyType.toLowerCase() === "wei") {
      if (otfSettings.qty > jewelBalance) {
        quantityToUse = jewelBalance;

        log.warn(
          "[Module: " +
            thisInfo.moduleName +
            "]: The balance told to be used was greater than what's available for JEWEL.",
        );
      } else {
        quantityToUse = otfSettings.qty;
      }
    } else if (otfSettings.qtyType.toLowerCase() === "percent") {
      quantityToUse = jewelBalance.sub(jewelBalance.div(otfSettings.qty * 100));
    }

    if (quantityToUse > 0) {
      if (otfSettings.to.toLowerCase() === "to") {
        try {
          const tx: TransactionResponse = await xJewelContractToUse.enter(
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
              formatUnits(quantityToUse, 18) +
              " JEWEL into the Jeweler",
          );

          return true;
        } catch (e) {
          log.warn(e);

          return false;
        }
      } else if (otfSettings.to.toLowerCase() === "from") {
        try {
          const tx: TransactionResponse = await xJewelContractToUse.leave(
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
              formatUnits(quantityToUse, 18) +
              " xJEWEL from the Jeweler",
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
