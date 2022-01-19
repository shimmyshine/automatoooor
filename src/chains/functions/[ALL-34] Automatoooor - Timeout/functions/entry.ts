import { BaseProvider } from "@ethersproject/providers";
import { Wallet } from "ethers";
import { Logger } from "tslog";
import moduleInfo from "..";
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

  log.info(
    "[Module: " +
      thisInfo.moduleName +
      "]: pausing for " +
      otfSettings.interval / 1000 +
      " seconds.",
  );

  return new Promise((resolve) => setTimeout(resolve, otfSettings.interval));
};
