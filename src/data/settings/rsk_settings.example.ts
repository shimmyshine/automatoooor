import { NetworkSettingsBO } from "helpers/Interfaces";
import * as networks from "../networks.json";

export const rskSettings: NetworkSettingsBO = {
  name: "RSK",
  chainId: networks[7].chainId,
  providerURL: networks[7].providerURL,
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
