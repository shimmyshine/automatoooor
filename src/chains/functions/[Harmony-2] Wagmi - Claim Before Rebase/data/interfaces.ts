export interface Contracts {
  StakingDistributor: string;
  BondDepository: string;
  Bonds: {
    [key: string]: string;
  };
}

export interface OTFSettings {
  intervalUsed: number;
}
