import { settings } from "../data/settings";

export interface gasInterface {
  [key: string]: string | number;
}

export const getGasSettings = (
  chainName: string,
): { gasPrice?: number; gasLimit?: number } => {
  const toReturn: gasInterface = {};

  if (settings.networks[chainName].gasPriceEnforced > 0) {
    toReturn.gasPrice = settings.networks[chainName].gasPriceEnforced;
  }

  if (settings.networks[chainName].gasLimitEnforced > 0) {
    toReturn.gasLimit = settings.networks[chainName].gasLimitEnforced;
  }

  return toReturn;
};
