import { ethers, getDefaultProvider } from "ethers";
import * as networks from "../data/networks.json";

export const getProvider = (networkToUse: number): ethers.providers.JsonRpcProvider => {
    return new ethers.providers.JsonRpcProvider(networks[networkToUse].providerURL);
}