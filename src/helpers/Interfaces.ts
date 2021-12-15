export interface Settings {
  settingsCheck: {
    showWarns: boolean;
    showErrors: boolean;
    allowErrorsToKill: boolean;
  };
  networks: NetworkSettings;
}

export interface NetworkSettings {
  [key: string]: NetworkSettingsBO;
}

export interface NetworkSettingsBO {
  name: string;
  isActive: boolean;
  groups: number[];
  orders: {
    [key: number]: {
      [key: number]: number;
    };
  };
  showBlockNumber: boolean;
  blockNumberFreq: number;
  gasPriceDefault: number;
  gasPriceEnforced: number;
  gasLimitDefault: number;
  gasLimitEnforced: number;
}

export interface FunctionsSettings {
  [key: string]: {
    functionID: number;
    active: boolean;
    showLog: boolean;
    setTimeoutInfo: {
      setTime: boolean;
      interval: number;
    };
  };
}

export interface Account {
  [key: string]: {
    Private: string;
    Public: string;
  };
}

export interface Modules {
  [key: number]: {
    moduleID: number;
    moduleName: string;
    moduleDescription: string;
    moduleSettings: ModuleSettings;
    moduleSettingsCheck: string;
    chain: string;
    directory: string;
  };
}

export interface ModuleSettings {
  active: boolean;
  showLog: boolean;
  setTimeoutInfo: {
    setTime: boolean;
    interval: number;
  };
  extras?: unknown;
}
