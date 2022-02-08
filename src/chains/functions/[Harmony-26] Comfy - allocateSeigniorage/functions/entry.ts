import { BaseProvider, TransactionResponse } from "@ethersproject/providers";
import { Contract, Wallet } from "ethers";
import { Logger } from "tslog";
import moduleInfo from "..";
import { contracts } from "../data/contracts";
import { TreasuryABI } from "../data/contract_abis/Treasury";
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
  const treasuryContract = new Contract(
    contracts.TreasuryAddress,
    TreasuryABI,
    signer,
  );

  try {
    const tx: TransactionResponse = treasuryContract.allocateSeigniorage({
      ...systemGas,
    });
    await tx.wait(2);

    log.info(
      "[Module: " + thisInfo.moduleName + "]: Called allocateSeigniorage.",
    );

    return true;
  } catch (e) {
    log.warn(e);

    return false;
  }
};
