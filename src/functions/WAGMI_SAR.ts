import { BaseProvider } from "@ethersproject/providers";
import { resolve } from "path";
import { Logger } from "tslog";

const WAGMI_SAR = async (
  log: Logger,
  address: string,
  provider: BaseProvider,
  settings?: {
    active: boolean;
    setTimeoutInfo: { setTime: boolean; interval: number };
  },
): Promise<unknown> => {
  return resolve("");
};

export default WAGMI_SAR;
