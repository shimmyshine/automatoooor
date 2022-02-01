import { BaseProvider } from "@ethersproject/providers";
import { Wallet } from "ethers";
import { Logger } from "tslog";
import moduleInfo from "..";
import { OTFSettings } from "../data/interfaces";
import moduleSettings from "../settings";
import { CoinGeckoClient } from "coingecko-api-v3";

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
  if (otfSettings.functionToCall && otfSettings.parameters) {
    const client = new CoinGeckoClient({
      timeout: otfSettings.timeout ? otfSettings.timeout : 30 * 1000,
    });

    try {
      const call = await eval(
        "client." +
          otfSettings.functionToCall +
          "(" +
          { ...otfSettings.parameters } +
          ")",
      );

      log.info(call);

      return true;
    } catch (e) {
      log.warn(e);

      return false;
    }
  } else {
    return false;
  }
};
