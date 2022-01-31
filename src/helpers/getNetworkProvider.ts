import { BaseProvider } from "@ethersproject/providers";
import { ethers } from "ethers";
import { settings } from "../data/settings";
import { Network } from "@ethersproject/networks";

export const getProvider = (networkToUse: string): BaseProvider => {
  const network: Network = {
    name: networkToUse,
    chainId: settings.networks[networkToUse].chainId,
    _defaultProvider: (providers) =>
      new providers.JsonRpcProvider(
        settings.networks[networkToUse].providerURL,
        { chainId: settings.networks[networkToUse].chainId },
      ),
  };

  return ethers.getDefaultProvider(network);
};

export const getProviderLocal = (
  nameTU: string,
  chainIDTU: number,
  urlTU: string,
): BaseProvider => {
  const network: Network = {
    name: nameTU,
    chainId: chainIDTU,
    _defaultProvider: (providers) =>
      new providers.JsonRpcProvider(urlTU, { chainId: chainIDTU }),
  };

  return ethers.getDefaultProvider(network);
};
