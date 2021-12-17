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
  systemGas: { gasPrice: number; gasLimit: number },
  otfSettings: OTFSettings,
): Promise<void> => {
  const thisSettings = moduleSettings;
  const thisInfo = moduleInfo;

  // Code Execution Here
};
