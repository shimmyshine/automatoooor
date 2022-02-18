import { BaseProvider, TransactionResponse } from "@ethersproject/providers";
import { Contract, Wallet } from "ethers";
import { formatUnits } from "ethers/lib/utils";
import { Logger } from "tslog";
import moduleInfo from "..";
import { contracts } from "../data/contracts";
import { OTFSettings } from "../data/interfaces";
import moduleSettings from "../settings";
import { MasterBreederABI } from "../data/contract_abis/Masterbreeder";
import { CommunityPoolABI} from "../data/contract_abis/CommunityPool";


export const entry = async (
  log: Logger,
  address: string,
  provider: BaseProvider,
  signer: Wallet,
  systemGas: { gasPrice?: number; gasLimit?: number },
  otfSettings: OTFSettings,
) : Promise<boolean> => 
{
  const thisSettings = moduleSettings;
  const thisInfo = moduleInfo;

  // Code Execution Here
  let tokenContract, tokenName;
  let poolContract;

  if (otfSettings.contractPreference.toLowerCase() == "Masterbreeder") {
    tokenContract = new Contract(contracts.MasterBreeder, MasterBreederABI, signer);
    tokenName = "VENOM LP";
    poolContract = new Contract(
      contracts.MasterBreeder,
      MasterBreederABI,
      signer,
    );
  }
    else if (otfSettings.tokenToDeposit == "ViperOneLP") {
    
      tokenContract = new Contract(contracts.ViperOneLP, MasterBreederABI, signer);
      tokenName = "VENOM LP";
    } else if (otfSettings.tokenToDeposit.toLowerCase() == "ViperWAGMILP") {
      tokenContract = new Contract(contracts.WswagmiViperLP, MasterBreederABI, signer);
      tokenName = "VENOM LP";
    } 
    else if (otfSettings.tokenToDeposit.toLowerCase() == "WAGMIOneLP") {
      tokenContract = new Contract(contracts.WswagmiOneLP, MasterBreederABI, signer);
      tokenName = "VENOM LP";
    } 
    
  
          else {
  return false;
          }


  let balanceOf;
  try {
    balanceOf = await tokenContract.balanceOf(address);
  } catch (e) {
    log.warn(e);
    return false;
  }

  if (balanceOf > 0) {
    if (poolContract) {
      let amountToUse = balanceOf;
     

      if (otfSettings.amtType.toLowerCase() == "wei") {
        if (otfSettings.amt <= amountToUse) {
          amountToUse = otfSettings.amt;
        }
      } else if (otfSettings.amtType.toLowerCase() == "percent") {
        amountToUse = amountToUse.mul(otfSettings.amt);
      }

      try {
        if (otfSettings.contractPreference.toLowerCase() == "Vipernest") {
          const tx: TransactionResponse = await poolContract.stake(
            amountToUse,
            { ...systemGas },
          );
          await tx.wait(2);

          log.info(
            "[Module: " +
              thisInfo.moduleName +
              "]: Staked " +
              formatUnits(amountToUse, 18) +
              " " +
              tokenName +
              " in the Zen Den.",
          );
        } else {
          const tx: TransactionResponse = await poolContract.deposit(
            otfSettings.poolID,
            amountToUse,
            { ...systemGas },
          );
          await tx.wait(2);

          log.info(
            "[Module: " +
              thisInfo.moduleName +
              "]: Deposited " +
              formatUnits(amountToUse, 18) +
              " " +
              tokenName +
              ".",
          );
        }
      } catch (e) {
        log.warn(e);
        return false;
      }

      return true;
    } else {
      return false;
    }
  } else {
    return false;
  } 
 };
