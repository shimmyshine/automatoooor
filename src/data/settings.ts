import { Settings } from "../helpers/Interfaces";

export const settings: Settings = {
  settingsCheck: {
    showWarns: true,
    showErrors: true,
    allowErrorsToKill: true, // DO NOT TURN OFF UNLESS YOU KNOW WHAT YOU ARE DOING!
  },
  networks: {
    Harmony: {
      name: "Harmony",
      isActive: true,
      groups: [1], // For 2 groups: [1, 2] or for 3 groups: [1, 2, 3]
      orders: {
        // eslint-disable-next-line prettier/prettier
        1: { // group id
          1: 1, // order: module id --- so for 3 modules, you might have { 1: 1, 2: 3, 3: 2 } meaning module 1 will get executed 1st, module 3 will get executed 2nd and module 2 will get executed 3rd
          2: 2,
        },
      },
      groupsInterval: {
        1: 0, // group id: interval duration (1 * 1000 = 1 second)
      },
      showBlockNumber: true,
      blockNumberFreq: 10 * 1000,
      gasPriceDefault: 10,
      gasPriceEnforced: 2,
      gasLimitDefault: 882841,
      gasLimitEnforced: 200000,
    },
    Fantom: {
      name: "Fantom",
      isActive: false,
      groups: [],
      orders: {},
      groupsInterval: {},
      showBlockNumber: true,
      blockNumberFreq: 10 * 1000,
      gasPriceDefault: 10,
      gasPriceEnforced: 2,
      gasLimitDefault: 882841,
      gasLimitEnforced: 200000,
    },
  },
};
