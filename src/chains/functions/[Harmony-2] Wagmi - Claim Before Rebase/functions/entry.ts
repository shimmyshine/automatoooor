import { Contract, Wallet, providers } from "ethers";
import { formatUnits } from "ethers/lib/utils";
import { Logger } from "tslog";
import moduleInfo from "..";
import { contracts } from "../data/contracts";
import { BondDepositoryABI } from "../data/contract_abis/BondDepository";
import { StakingDistributorABI } from "../data/contract_abis/StakingDistributor";
import { OTFSettings } from "../data/interfaces";
import moduleSettings from "../settings";

export const entry = async (
  log: Logger,
  address: string,
  provider: providers.BaseProvider,
  signer: Wallet,
  systemGas: { gasPrice: number; gasLimit: number },
  otfSettings: OTFSettings,
): Promise<void> => {
  const thisSettings = moduleSettings;
  const thisInfo = moduleInfo;

  let epoch = 0;
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

  if (delta <= epochDate - otfSettings.intervalUsed + 1) {
    Object.entries(bonds).map(async (bond) => {
      const contractToUse = new Contract(bond[1], BondDepositoryABI, signer);

      let bondTotal = null;
      try {
        bondTotal = await contractToUse.pendingPayoutFor(address);
      } catch (e) {
        log.warn(e);
      }

      if (Number(formatUnits(await bondTotal, 9)) > 0) {
        let redeem = null;
        try {
          redeem = contractToUse.redeem(address, true);
        } catch (e) {
          log.warn(e);
        }

        await redeem.wait(1);

        log.info(
          "[Module: " +
            thisInfo.moduleName +
            "]: Redeemed " +
            formatUnits(bondTotal, 9) +
            " WAGMI for " +
            bond[0],
        );
      }
    });
  }
};
