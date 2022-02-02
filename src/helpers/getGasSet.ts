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
    if (settings.networks[chainName].randomizeGas[0]) {
      const min =
        settings.networks[chainName].gasPriceEnforced -
        settings.networks[chainName].randomizeGasWindow;
      const max =
        settings.networks[chainName].gasPriceEnforced +
        settings.networks[chainName].randomizeGasWindow;
      const gasToUse = Math.floor(min + Math.random() * (max + 1 - min));
      toReturn.gasPrice = gasToUse;
    } else {
      toReturn.gasPrice = settings.networks[chainName].gasPriceEnforced;
    }
  }

  if (settings.networks[chainName].gasLimitEnforced > 0) {
    toReturn.gasLimit = settings.networks[chainName].gasLimitEnforced;
  }

  if (otfOverrides) {
    if (otfOverrides.gasPrice && otfOverrides.gasPrice > 0) {
      if (settings.networks[chainName].randomizeGas[1]) {
        const min =
          otfOverrides.gasPrice -
          settings.networks[chainName].randomizeGasWindow;
        const max =
          otfOverrides.gasPrice +
          settings.networks[chainName].randomizeGasWindow;
        const gasToUse = Math.floor(min + Math.random() * (max + 1 - min));
        toReturn.gasPrice = gasToUse;
      } else {
        toReturn.gasPrice = otfOverrides.gasPrice;
      }
    }

    if (otfOverrides.gasLimit && otfOverrides.gasLimit > 0) {
      toReturn.gasLimit = otfOverrides.gasLimit;
    }
  }

  return toReturn;
};
