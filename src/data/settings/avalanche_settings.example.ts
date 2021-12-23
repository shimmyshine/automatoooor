import { NetworkSettingsBO } from "helpers/Interfaces";
import * as networks from "../networks.json";

export const avalancheSettings: NetworkSettingsBO = {
  name: "Avalanche",
  chainId: networks[2].chainId,
  providerURL: networks[2].providerURL,
  isActive: false,
  groups: [],
  orders: {},
  groupsInterval: {},
  otfSettings: {},
  showBlockNumber: true,
  blockNumberFreq: 10 * 60 * 1000,
  gasPriceEnforced: 2,
  gasLimitEnforced: 200000,
};