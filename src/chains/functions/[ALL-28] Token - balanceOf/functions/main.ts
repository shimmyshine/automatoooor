import { Logger } from "tslog";
import { BaseProvider } from "@ethersproject/providers";
import moduleSettings from "../settings";
import moduleInfo from "..";
import { entry } from "./entry";
import { OTFSettings } from "../data/interfaces";
import { Wallet } from "ethers";
import { setIntervalAsync } from "set-interval-async/dynamic";
import { clearIntervalAsync } from "set-interval-async";

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

  const interVal = setIntervalAsync(
    async () => {
      await entry(log, address, provider, signer, systemGas, otfSettings);

      if (!thisSettings.setTimeoutInfo.setTime) {
        clearIntervalAsync(interVal);
      }
    },
    thisSettings.setTimeoutInfo.setTime
      ? thisSettings.setTimeoutInfo.interval
      : 10,
  );
}
