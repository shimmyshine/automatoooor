import { NetworkSettingsBO } from "helpers/Interfaces";
import * as networks from "../networks.json";

export const ethereumSettings: NetworkSettingsBO = {
  name: "Ethereum",
  chainId: networks[4].chainId,
  providerURL: networks[4].providerURL,
  aggregateProviders: networks[4].aggregateProviders,
  port: 4204,
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
};
