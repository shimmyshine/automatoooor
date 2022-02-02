import { NetworkSettingsBO } from "helpers/Interfaces";
import * as networks from "../networks.json";

export const polygonSettings: NetworkSettingsBO = {
  name: "Polygon",
  chainId: networks[6].chainId,
  providerURL: networks[6].providerURL,
  aggregateProviders: networks[6].aggregateProviders,
  port: 4206,
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
  randomizeGas: [false, false],
  randomizeGasWindow: 0,
};
