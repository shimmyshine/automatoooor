import { contracts } from "../data/contracts";
import { Contract, ethers, ContractInterface } from "ethers";
import { RebaseCounter, WAGMI_RRC_Settings } from "../helpers/Interfaces";
import { Logger } from "tslog";
import { StakingDistributorABI } from "../data/contract_abis/WAGMI/StakingDistributor";

const WAGMI_RRC = async (log: Logger, address: string, provider: ethers.providers.JsonRpcProvider, settings: WAGMI_RRC_Settings): Promise<RebaseCounter> => {
    log.info("WAGMI Rebase Rewards Counter has begun.");

    const epoch = await new Contract(contracts.WAGMI.StakingDistributor, StakingDistributorABI, provider).nextEpochTime();
    const time = new Date().valueOf() / 1000;

    console.log(time);
    console.log(new Date(epoch).toUTCString());
    console.log(new Date(epoch - (new Date().valueOf()/1000)).toUTCString());

    return {timeStamp: epoch, nextRebaseTime: new Date(epoch).toUTCString(), timeToNextRebase: new Date(epoch - (Date.now()/1000)).toUTCString()};
}

export default WAGMI_RRC;