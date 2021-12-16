import { Wallet } from "ethers";
import { Logger } from "tslog";
import { BaseProvider } from "@ethersproject/providers";
import moduleSettings from "../settings";
import moduleInfo from "..";

export async function Main(
  log: Logger,
  address: string,
  provider: BaseProvider,
  signer: Wallet,
  systemGas: { gasPrice: number; gasLimit: number },
): Promise<void> {
  const thisSettings = moduleSettings;
  const info = moduleInfo;

  if (thisSettings.showLog)
    log.info("[Module: " + info.moduleName + "]: has been triggered to run.");

  const interVal = setInterval(() => {
    // Begin module code here

    if (!thisSettings.setTimeoutInfo.setTime) {
      clearInterval(interVal);
    }
  }, thisSettings.setTimeoutInfo.interval);
}
