export interface UpcomingModules {
  chain: string;
  protocol: string;
  name: string;
  description: string;
}

export interface Settings {
  settingsCheck: {
    showWarns: boolean;
    showErrors: boolean;
    allowErrorsToKill: boolean;
  };
  modulesOutput: boolean;
  logs: Logs;
  networks: NetworkSettings;
  notifications: Notifications;
}

export interface Notifications {
  telegram: {
    active: boolean;
    token: string;
    chatID: string;
    maxLength: number;
    commands: {
      commandsEnabled: boolean;
      individualCommands: {
        shutdownActive: boolean;
      };
    };
  };
  discord: {
    active: boolean;
    token: string;
    channelID: string;
    maxLength: number;
    commands: {
      commandsEnabled: boolean;
      commandsPrefix: string;
      individualCommands: {
        shutdownActive: boolean;
      };
    };
  };
}

export interface Logs {
  writeLogToFile: boolean;
  wipeLogsOnRestart: boolean;
  logPath: string;
}

export interface NetworkSettings {
  [key: string]: NetworkSettingsBO;
}

export interface NetworkSettingsBO {
  name: string;
  chainId: number;
  providerURL: string;
  aggregateProviders: string[];
  port: number;
  isActive: boolean;
  groups: number[];
  orders: {
    [key: number]: {
      [key: number]: number;
    };
  };
  groupsInterval: {
    [key: number]: number;
  };
  otfSettings: OTFSettings;
  showBlockNumber: boolean;
  blockNumberFreq: number;
  gasPriceEnforced: number;
  gasLimitEnforced: number;
  requireAllTrue: boolean;
  retryOnFailureForAll: boolean;
  retryLimiter: number;
  runPersonalRPCAggregator: boolean;
  runAggregatorButDontUse: boolean;
  randomizeGas: [boolean, boolean];
  randomizeGasWindow: number;
}

export interface OTFSettings {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
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
  [key: number]: Module;
}

export interface Module {
  moduleID: number;
  moduleName: string;
  moduleDescription: string;
  moduleSettings: ModuleSettings;
  moduleSettingsCheck: string;
  chain: string;
  protocol: string;
  directory: string;
}

export interface ModuleSettings {
  active: boolean;
  showLog: boolean;
  extras?: {
    [key: string]: unknown;
  };
}

export interface SystemGas {
  gasPrice: number;
  gasLimit: number;
}
