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
  const client = new CoinGeckoClient({
    timeout: otfSettings.timeout ? otfSettings.timeout : 30 * 1000,
  });

  if (otfSettings.checkAgainst) {
    let price, name;
    try {
      const call = await client.coinId({ id: otfSettings.tokenName });
      price = call.market_data?.current_price?.usd;
      name = call.name;
    } catch (e) {
      log.warn(e);

      return false;
    }

    if (price && name) {
      if (
        otfSettings.checkType.toLowerCase() === "equal" &&
        price === otfSettings.qty
      ) {
        log.info(
          "[Module: " +
            moduleInfo +
            "]: Exact match found, returning true.\n\nPrice Returned: " +
            price +
            "\nQty Parameter: " +
            otfSettings.qty,
        );

        return true;
      } else if (
        otfSettings.checkType.toLowerCase() === "greater" &&
        price < otfSettings.qty
      ) {
        log.info(
          "[Module: " +
            moduleInfo +
            "]: The qty parameter provided is greater than " +
            name +
            "'s price.\n\nPrice Returned: " +
            price +
            "\nQty Parameter: " +
            otfSettings.qty,
        );

        return true;
      } else if (
        otfSettings.checkType.toLowerCase() === "less" &&
        price > otfSettings.qty
      ) {
        log.info(
          "[Module: " +
            moduleInfo +
            "]: The qty parameter provided is less than " +
            name +
            "'s price.\n\nPrice Returned: " +
            price +
            "\nQty Parameter: " +
            otfSettings.qty,
        );

        return true;
      } else if (
        otfSettings.windowStart &&
        otfSettings.checkType.toLowerCase() === "window" &&
        price > otfSettings.windowStart - otfSettings.qty &&
        price < otfSettings.windowStart + otfSettings.qty
      ) {
        log.info(
          "[Module: " +
            moduleInfo +
            "The price falls within the window for " +
            name +
            "\n\nPrice Returned: " +
            price +
            "\nwindowStart Parameter: " +
            otfSettings.windowStart +
            "\nqty Parameter: " +
            otfSettings.qty +
            "\nWindow To Check: " +
            (otfSettings.windowStart - otfSettings.qty) +
            " - " +
            (otfSettings.windowStart + otfSettings.qty),
        );

        return true;
      } else {
        log.warn(
          "[Module: " +
            moduleInfo.moduleName +
            "]: None of the parameters were met.  Failing for safety.\n\nPrice Check For: " +
            name +
            "\nPrice Returned: " +
            price +
            "\ncheckType Provided: " +
            otfSettings.checkType +
            "\nqty Parameter: " +
            otfSettings.qty,
        );

        return false;
      }
    } else {
      log.warn(
        "[Module: " +
          moduleInfo.moduleName +
          "]: There was trouble requesting the data.  Failing for safety.",
      );
      return false;
    }
  } else {
    try {
      const call = await client.coinId({ id: otfSettings.tokenName });

      log.info(
        "[Module: " +
          moduleInfo.moduleName +
          "]: Current price for " +
          call.name +
          " is $" +
          call.market_data?.current_price?.usd,
      );

      return true;
    } catch (e) {
      log.warn(e);

      return false;
    }
  }
};
