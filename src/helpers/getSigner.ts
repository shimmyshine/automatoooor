import { BaseProvider } from "@ethersproject/providers";
import { ethers, Signer } from "ethers";
import { getPK } from "./getAddress";
import { NonceManager } from "@ethersproject/experimental";

export const getSigner = (network: string, provider: BaseProvider): Signer => {
  const signer = new ethers.Wallet(getPK(network), provider);

  return new NonceManager(signer);
};
