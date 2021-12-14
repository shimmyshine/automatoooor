import { contracts } from "../data/contracts";
import { Contract } from "ethers";
import { RebaseCounter } from "../helpers/Interfaces";
import { Logger } from "tslog";
import { StakingDistributorABI } from "../data/contract_abis/WAGMI/StakingDistributor";
import { BaseProvider } from "@ethersproject/providers";

const WAGMI_RRC = async (
  log: Logger,
  address: string,
  provider: BaseProvider,
  settings?: {
    active: boolean;
    setTimeoutInfo: { setTime: boolean; interval: number };
  },
): Promise<RebaseCounter> => {
  const epoch = await new Contract(
    contracts.WAGMI.StakingDistributor,
    StakingDistributorABI,
    provider,
  ).nextEpochTime();
  const epochDate = epoch * 1000;
  const currentDate = new Date().valueOf();
  const delta = (epochDate - currentDate) / 1000;

  return {
    timeStamp: epoch,
    nextRebaseTime: new Date(epochDate).toLocaleString(),
    timeToNextRebase: delta,
  };
};

export default WAGMI_RRC;
