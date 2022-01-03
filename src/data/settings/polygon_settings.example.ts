import { NetworkSettingsBO } from "helpers/Interfaces";
import * as networks from "../networks.json";

export const polygonSettings: NetworkSettingsBO = {
  name: "Polygon",
  chainId: networks[6].chainId,
  providerURL: networks[6].providerURL,
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
