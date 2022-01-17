import { BaseProvider } from "@ethersproject/providers";
import { ethers, Signer } from "ethers";
import { getPK } from "./getAddress";

export const getSigner = (network: string, provider: BaseProvider): Signer => {
  const signer = new ethers.Wallet(getPK(network), provider);

  return signer;
};
