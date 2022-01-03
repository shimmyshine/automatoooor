import { NetworkSettingsBO } from "helpers/Interfaces";
import * as networks from "../networks.json";

export const auroraSettings: NetworkSettingsBO = {
  name: "Aurora",
  chainId: networks[5].chainId,
  providerURL: networks[5].providerURL,
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
};
