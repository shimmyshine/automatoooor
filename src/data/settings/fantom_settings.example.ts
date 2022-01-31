import { NetworkSettingsBO } from "helpers/Interfaces";
import * as networks from "../networks.json";

export const fantomSettings: NetworkSettingsBO = {
  name: "Fantom",
  chainId: networks[1].chainId,
  providerURL: networks[1].providerURL,
  aggregateProviders: networks[1].aggregateProviders,
  port: 4201,
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
  runPersonalRPCAggregator: false,
  runAggregatorButDontUse: false,
};
