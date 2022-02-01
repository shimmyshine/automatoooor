import { NetworkSettingsBO } from "helpers/Interfaces";
import * as networks from "../networks.json";

export const telosSettings: NetworkSettingsBO = {
  name: "Telos",
  chainId: networks[8].chainId,
  providerURL: networks[8].providerURL,
  aggregateProviders: networks[8].aggregateProviders,
  port: 4208,
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
