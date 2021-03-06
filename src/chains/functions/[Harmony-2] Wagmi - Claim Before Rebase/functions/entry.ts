import { TransactionResponse } from "@ethersproject/providers";
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
  systemGas: { gasPrice?: number; gasLimit?: number },
  otfSettings: OTFSettings,
): Promise<boolean> => {
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
  const delta = epochDate - currentDate;

  const bonds = contracts.Bonds;

  if (delta <= otfSettings.intervalUsed + 1) {
    let totalRedeemed = 0;
    Object.entries(bonds).map(async (bond) => {
      const contractToUse = new Contract(bond[1], BondDepositoryABI, signer);

      let bondTotal = 0;
      try {
        bondTotal = await contractToUse.pendingPayoutFor(address);
      } catch (e) {
        log.warn(e);

        return false;
      }

      if (Number(formatUnits(bondTotal, 9)) > 0) {
        try {
          const tx: TransactionResponse = await contractToUse.redeem(
            address,
            true,
            {
              ...systemGas,
            },
          );

          await tx.wait(2);
        } catch (e) {
          log.warn(e);

          return false;
        }

        log.info(
          "[Module: " +
            thisInfo.moduleName +
            "]: Redeemed " +
            formatUnits(bondTotal, 9) +
            " WAGMI for " +
            bond[0],
        );
        totalRedeemed += bondTotal;
      }
    });

    if (totalRedeemed > 0) {
      return true;
    } else {
      if (
        thisSettings.extras
          ? thisSettings.extras.returnTrueClaimingNothing
          : true
      ) {
        return true;
      } else {
        return false;
      }
    }
  } else {
    return false;
  }
};
