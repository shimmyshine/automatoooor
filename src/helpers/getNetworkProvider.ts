import { BaseProvider } from "@ethersproject/providers";
import { ethers } from "ethers";
import * as networks from "../data/networks.json";

export const getProvider = (networkToUse: number): BaseProvider => {
  return ethers.getDefaultProvider({
    name: networks[networkToUse].name,
    chainId: networks[networkToUse].chainId,
    _defaultProvider: (providers) =>
      new providers.JsonRpcProvider(networks[networkToUse].providerURL),
  });
};
