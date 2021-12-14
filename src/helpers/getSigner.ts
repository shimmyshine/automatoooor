import { ethers } from "ethers";
import { getAddress } from "./getAddress";

export const getSigner = (network: string, provider: ethers.providers.JsonRpcProvider) => {
    return provider.getSigner(getAddress(network));
}