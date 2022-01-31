import { settings } from "../data/settings";

export interface gasInterface {
  [key: string]: string | number;
}

export const getGasSettings = (
  chainName: string,
  otfOverrides?: { gasPrice?: number; gasLimit?: number },
): { gasPrice?: number; gasLimit?: number } => {
  const toReturn: gasInterface = {};

  if (settings.networks[chainName].gasPriceEnforced > 0) {
    toReturn.gasPrice = settings.networks[chainName].gasPriceEnforced;
  }

  if (settings.networks[chainName].gasLimitEnforced > 0) {
    toReturn.gasLimit = settings.networks[chainName].gasLimitEnforced;
  }

  if (otfOverrides) {
    if (otfOverrides.gasPrice && otfOverrides.gasPrice > 0) {
      toReturn.gasPrice = otfOverrides.gasPrice;
    }

    if (otfOverrides.gasLimit && otfOverrides.gasLimit > 0) {
      toReturn.gasLimit = otfOverrides.gasLimit;
    }
  }

  return toReturn;
};
