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
      ),
  };

  return ethers.getDefaultProvider(network);
};
