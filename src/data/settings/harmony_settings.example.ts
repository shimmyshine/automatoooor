import { NetworkSettingsBO } from "helpers/Interfaces";
import * as networks from "../networks.json";

export const harmonySettings: NetworkSettingsBO = {
  name: "Harmony",
  chainId: networks[0].chainId,
  providerURL: networks[0].providerURL,
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