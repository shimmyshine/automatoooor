import { BaseProvider } from "@ethersproject/providers";

export const getBlock = async (provider: BaseProvider): Promise<string> => {
  return String(await provider.getBlockNumber());
};
