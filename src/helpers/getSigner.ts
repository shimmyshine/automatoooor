import { BaseProvider } from "@ethersproject/providers";
import { ethers, Wallet } from "ethers";
import { getAddress, getPK } from "./getAddress";

export const getSigner = (network: string, provider: BaseProvider): Wallet => {
  const signer: Wallet = new ethers.Wallet(getPK(network), provider);

  return signer;
};
