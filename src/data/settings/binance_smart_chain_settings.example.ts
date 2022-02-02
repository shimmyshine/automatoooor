import { NetworkSettingsBO } from "helpers/Interfaces";
import * as networks from "../networks.json";

export const binanceSmartChainSettings: NetworkSettingsBO = {
  name: "Binance_Smart_Chain",
  chainId: networks[3].chainId,
  providerURL: networks[3].providerURL,
  aggregateProviders: networks[3].aggregateProviders,
  port: 4203,
  isActive: false,
  groups: [],
  orders: {},
  groupsInterval: {},
  otfSettings: {},
  showBlockNumber: true,
  blockNumberFreq: 10 * 60 * 1000,
  gasPriceEnforced: 2,
  gasLimitEnforced: 200000,
  requireAllTrue: false,
  retryOnFailureForAll: false,
  retryLimiter: 3,
  runPersonalRPCAggregator: false,
  runAggregatorButDontUse: false,
  randomizeGas: [false, false],
  randomizeGasWindow: 0,
};
