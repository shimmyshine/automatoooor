import { BaseProvider, TransactionResponse } from "@ethersproject/providers";
import { Contract, Wallet } from "ethers";
import { Logger } from "tslog";
import moduleInfo from "..";
import { contracts } from "../data/contracts";
import { TreasuryABI } from "../data/contract_abis/Treasury";
import { ZenDenABI } from "../data/contract_abis/ZenDen";
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
  const zenDenContract = new Contract(
    contracts.ZenDenAddress,
    ZenDenABI,
    signer,
  );

  const currentUTCTimestamp = Math.floor(new Date().getTime() / 1000);
  let nextEpoch;
  try {
    nextEpoch = await zenDenContract.nextEpochPoint();
  } catch (e) {
    log.warn(e);
  }

  if (nextEpoch - currentUTCTimestamp < 0) {
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
  } else {
    return false;
  }
};
