import { contracts } from "../data/contracts";
import { Contract, ethers } from "ethers";
import { Logger } from "tslog";
import { BondDepositoryABI } from "../data/contract_abis/WAGMI/BondDepository";
import { BaseProvider } from "@ethersproject/providers";

const WAGMI_CBR = (
  log: Logger,
  address: string,
  provider: BaseProvider,
  signer: ethers.Wallet,
  settings?: {
    active: boolean;
    setTimeoutInfo: { setTime: boolean; interval: number };
  },
): void => {
  const bonds = contracts.WAGMI.Bonds;

  Object.entries(bonds).map(async (bond): Promise<void> => {
    const contractToUse = new Contract(bond[1], BondDepositoryABI, signer);

    let bondTotal = 0;

    try {
      bondTotal = await contractToUse.pendingPayoutFor(address);
    } catch (e) {
      log.error(e);
    }

    if (bondTotal > 1) {
      try {
        await contractToUse.redeem(address, true);
      } catch (e) {
        log.error(e);
      }

      log.info("Redeemed " + bondTotal * 1 + " for " + bond[0]);
    }
  });
};

export default WAGMI_CBR;
