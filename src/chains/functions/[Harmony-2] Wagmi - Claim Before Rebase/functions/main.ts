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
  systemGas: { gasPrice?: number; gasLimit?: number },
  otfSettings: OTFSettings,
): Promise<boolean> {
  const thisSettings = moduleSettings;
  const info = moduleInfo;

  if (thisSettings.showLog)
    log.info("[Module: " + info.moduleName + "]: has been triggered to run.");

  try {
    const entrie = await entry(
      log,
      address,
      provider,
      signer,
      systemGas,
      otfSettings,
    );

    if (typeof entrie !== "boolean") {
      return true;
    } else {
      return entrie;
    }
  } catch (e) {
    log.warn(e);

    return false;
  }
}
