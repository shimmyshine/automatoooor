export interface Settings {
  general: GeneralSettings;
  functions: FunctionsSettings;
}

export interface GeneralSettings {
  showBlockNumber: boolean;
  blockNumberFreq: number;
}

export interface FunctionsSettings {
  [key: string]: {
    active: boolean;
    showLog: boolean;
    setTimeoutInfo: {
      setTime: boolean;
      interval: number;
    };
  };
}

export interface RebaseCounter {
  timeStamp: number;
  nextRebaseTime: string;
  timeToNextRebase: number;
}

export interface Account {
  [key: string]: {
    Private: string;
    Public: string;
  };
}

export interface Contracts {
  tokens: {
    WAGMI: string;
    sWAGMI: string;
    wsWAGMI: string;
  };
  WAGMI: {
    StakingDistributor: string;
    BondDepository: string;
    Staking: string;
    StakingHelper: string;
    Treasury: string;
    DAO: string;
    Bonds: {
      DAI: string;
      DAI_WAGMI: string;
      UST: string;
      UST_WAGMI: string;
      USDC: string;
      BUSD: string;
      ONE_WAGMI: string;
    };
  };
}
