import { NetworkSettingsBO } from "helpers/Interfaces";
import * as networks from "../networks.json";

export const binanceSmartChainSettings: NetworkSettingsBO = {
  name: "Binance_Smart_Chain",
  chainId: networks[3].chainId,
  providerURL: networks[3].providerURL,
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
