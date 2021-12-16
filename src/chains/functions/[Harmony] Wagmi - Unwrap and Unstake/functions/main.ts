import { Contract, Wallet } from "ethers";
import { Logger } from "tslog";
import { BaseProvider } from "@ethersproject/providers";
import moduleSettings from "../settings";
import moduleInfo from "..";
import { contracts } from "../data/contracts";
import { StakingDistributorABI } from "../data/contract_abis/StakingDistributor";
import { StakingABI } from "../data/contract_abis/Staking";
import { sWAGMIABI } from "../data/contract_abis/sWAGMI";
import { calculateWrappedAssWagmi } from "../helpers/calculateWrappedAsWAGMI";
import { wsWAGMIABI } from "../data/contract_abis/wsWAGMI";
import { formatUnits, parseUnits } from "ethers/lib/utils";

export async function Main(
  log: Logger,
  address: string,
  provider: BaseProvider,
  signer: Wallet,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  systemGas: { gasPrice: number; gasLimit: number },
  otfSettings: { intervalToAbideBy: number },
): Promise<void> {
  const thisSettings = moduleSettings;
  const info = moduleInfo;

  if (thisSettings.showLog)
    log.info("[Module: " + info.moduleName + "]: has been triggered to run.");

  const interVal = setInterval(async () => {
    let nextEpochTime = null;
    try {
      nextEpochTime = await new Contract(
        contracts.StakingDistributor,
        StakingDistributorABI,
        provider,
      ).nextEpochTime();
    } catch (e) {
      log.warn(e);
    }
    const epochDate = nextEpochTime * 1000;
    const currentDate = new Date().valueOf();
    const nextApprovedTime =
      epochDate +
      Number(
        thisSettings.extras ? thisSettings.extras.timeToWaitAfterRebase : 0,
      );
    const approvedTimeBuffer =
      nextApprovedTime + (otfSettings.intervalToAbideBy - 1) * 1000;

    if (currentDate >= nextApprovedTime && currentDate <= approvedTimeBuffer) {
      let epoch = null;
      try {
        epoch = await new Contract(
          contracts.Staking,
          StakingABI,
          provider,
        ).epoch();
      } catch (e) {
        log.warn(e);
      }

      const stakingReward = epoch.distribute;

      //console.log("stakingReward: " + formatUnits(await stakingReward, 9));

      let circ = null;
      try {
        circ = await new Contract(
          contracts.sWAGMI,
          sWAGMIABI,
          provider,
        ).circulatingSupply();
      } catch (e) {
        log.warn(e);
      }

      //console.log("circ: " + formatUnits(await circ, 9));

      const stakingRebase =
        Number(await stakingReward.toString()) / Number(await circ.toString());

      //console.log("stakingRebase: " + stakingRebase);

      let sWAGMIBalance = null;
      try {
        sWAGMIBalance = await new Contract(
          contracts.sWAGMI,
          sWAGMIABI,
          provider,
        ).balanceOf(address);
      } catch (e) {
        log.warn(e);
      }

      //console.log("sWAGMIBalance: " + formatUnits(sWAGMIBalance, 9));

      let currentIndex = null;
      try {
        currentIndex = await new Contract(
          contracts.Staking,
          StakingABI,
          provider,
        ).index();
      } catch (e) {
        log.warn(e);
      }

      //console.log("currentIndex: " + formatUnits(await currentIndex, 9));

      let wsWAGMIBalance = null;
      try {
        wsWAGMIBalance = await new Contract(
          contracts.wsWAGMI,
          wsWAGMIABI,
          provider,
        ).balanceOf(address);
      } catch (e) {
        log.warn(e);
      }

      //console.log("wsWAGMIBalance: " + formatUnits(await wsWAGMIBalance, 18));

      const wsWAGMIBalanceCalculatedAssWAGMI = calculateWrappedAssWagmi(
        formatUnits(await wsWAGMIBalance, 18),
        formatUnits(await currentIndex, 9),
      );

      //console.log(
      //"wsWAGMIBalanceCalculated: " + wsWAGMIBalanceCalculatedAssWAGMI,
      //);

      const trimmedBalance = Number(
        [formatUnits(sWAGMIBalance, 9), wsWAGMIBalanceCalculatedAssWAGMI]
          .filter(Boolean)
          .map((balance) => Number(balance))
          .reduce((a, b) => a + b, 0)
          .toFixed(4),
      );

      //console.log("trimmedBalance: " + trimmedBalance);

      const percentToUnwrap = thisSettings.extras
        ? thisSettings.extras.percentToUnwrap
        : 0;

      //console.log("Percent to unwrap: " + percentToUnwrap);

      const stakingRebasePercentage = stakingRebase * 100;

      //console.log("stakingRebasePercentage: " + stakingRebasePercentage);

      const nextRewardValue =
        (Number(stakingRebasePercentage) / 100) * trimmedBalance;

      //console.log("nextRewardValue: " + nextRewardValue);

      //console.log(
      //"Unwrapped Amount: " + Number(percentToUnwrap) * nextRewardValue,
      //);

      const wrappedAmountToUnwrap =
        (Number(percentToUnwrap) * nextRewardValue) /
        Number(formatUnits(await currentIndex, 9));

      //console.log("wrappedAmountToUnwrap: " + wrappedAmountToUnwrap);

      //console.log(
      //"wrappedAmountToUnwrapInWei: " +
      //parseUnits(String(wrappedAmountToUnwrap), 18),
      //);

      if (wrappedAmountToUnwrap > 0) {
        let performUnwrapping = null;
        try {
          performUnwrapping = await new Contract(
            contracts.wsWAGMI,
            wsWAGMIABI,
            signer,
          ).unwrap(parseUnits(String(wrappedAmountToUnwrap), 18));
        } catch (e) {
          log.warn(e);
        }

        await performUnwrapping.wait(3);

        let newsWAGMIBalance = null;
        try {
          newsWAGMIBalance = new Contract(
            contracts.sWAGMI,
            sWAGMIABI,
            provider,
          ).balanceOf(address);
        } catch (e) {
          log.warn(e);
        }

        let performUnstaking = null;
        try {
          performUnstaking = await new Contract(
            contracts.Staking,
            StakingABI,
            signer,
          ).unstake(await newsWAGMIBalance, false);
        } catch (e) {
          log.warn(e);
        }

        await performUnstaking.wait(1);

        log.info(
          "[Module: " +
            info.moduleName +
            "]: Converted " +
            wrappedAmountToUnwrap +
            " wsWAGMI to " +
            formatUnits(await newsWAGMIBalance, 9) +
            " sWAGMI to " +
            formatUnits(await newsWAGMIBalance, 9) +
            " WAGMI",
        );
      }
    }

    if (!thisSettings.setTimeoutInfo.setTime) {
      clearInterval(interVal);
    }
  }, thisSettings.setTimeoutInfo.interval);
}
