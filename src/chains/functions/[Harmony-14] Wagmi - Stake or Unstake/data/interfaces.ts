export interface Contracts {
  StakingDistributor: string;
  sWAGMI: string;
  Staking: string;
  WAGMI: string;
  wsWAGMI: string;
  StakingHelper: string;
}

export interface OTFSettings {
  type: string;
  qtyType: string;
  qty: number;
  timeAfterRebaseToUse: number;
  intervalUsed: number;
}
