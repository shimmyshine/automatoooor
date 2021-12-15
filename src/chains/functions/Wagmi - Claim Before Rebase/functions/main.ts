import { contracts } from "../data/contracts";
import { Contract, Wallet } from "ethers";
import { Logger } from "tslog";
import { StakingDistributorABI } from "../data/contract_abis/StakingDistributor";
import { BondDepositoryABI } from "../data/contract_abis/BondDepository";
import { BaseProvider } from "@ethersproject/providers";
import moduleSettings from "../settings";
import { formatUnits } from "ethers/lib/utils";
import moduleInfo from "..";

export async function Main(
  log: Logger,
  address: string,
  provider: BaseProvider,
  signer: Wallet,
): Promise<void> {
  const thisSettings = moduleSettings;
  const info = moduleInfo;

  let epoch = null;
  try {
    epoch = await new Contract(
      contracts.StakingDistributor,
      StakingDistributorABI,
      provider,
    ).nextEpochTime();
  } catch (e) {
    log.warn(e);
  }
  const epochDate = epoch * 1000;
  const currentDate = new Date().valueOf();
  const delta = (epochDate - currentDate) / 1000;

  const bonds = contracts.Bonds;

  if (delta < (thisSettings.extras ? thisSettings.extras.inTime : 0)) {
    Object.entries(bonds).map(async (bond): Promise<void> => {
      const contractToUse = new Contract(bond[1], BondDepositoryABI, signer);

      let bondTotal = 0;

      try {
        bondTotal = await contractToUse.pendingPayoutFor(address, {});
      } catch (e) {
        log.error(e);
      }

      if (Number(formatUnits(bondTotal, 9)) > 0) {
        try {
          await contractToUse.redeem(address, true);
        } catch (e) {
          log.error(e);
        }

        log.info(
          "[Module: " +
            info.moduleName +
            "]: Redeemed " +
            formatUnits(bondTotal, 9) +
            " WAGMI for " +
            bond[0],
        );
      }
    });
  }
}
