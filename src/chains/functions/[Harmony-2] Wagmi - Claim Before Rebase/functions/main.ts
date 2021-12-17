import { Logger } from "tslog";
import { BaseProvider } from "@ethersproject/providers";
import moduleSettings from "../settings";
import moduleInfo from "..";
import { entry } from "./entry";
import { OTFSettings } from "../data/interfaces";
import { Wallet } from "ethers";

export async function Main(
  log: Logger,
  address: string,
  provider: BaseProvider,
  signer: Wallet,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  systemGas: { gasPrice: number; gasLimit: number },
  otfSettings: OTFSettings,
): Promise<void> {
  const thisSettings = moduleSettings;
  const info = moduleInfo;

  if (thisSettings.showLog)
    log.info("[Module: " + info.moduleName + "]: has been triggered to run.");

  const interVal = setInterval(
    () => {
      entry(log, address, provider, signer, systemGas, otfSettings);

      if (!thisSettings.setTimeoutInfo.setTime) {
        clearInterval(interVal);
      }
    },
    thisSettings.setTimeoutInfo.setTime
      ? thisSettings.setTimeoutInfo.interval
      : 0,
  );
}
