import { Wallet } from "ethers";
import { Logger } from "tslog";
import { BaseProvider } from "@ethersproject/providers";
import moduleSettings from "../settings";

export async function Main(
  log: Logger,
  address: string,
  provider: BaseProvider,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  signer: Wallet,
): Promise<void> {
  const thisSettings = moduleSettings;
}
