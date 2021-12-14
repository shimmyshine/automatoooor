import { Settings } from "../helpers/Interfaces";

export const settings: Settings = {
  general: { showBlockNumber: true, blockNumberFreq: 10 * 1000 },
  functions: {
    WAGMI_RRC: {
      active: true, // Rebase Rewards Counter
      showLog: true,
      setTimeoutInfo: {
        setTime: true, // Not many reasons not to set this the same as active
        interval: 20 * 1000, // 1 * 1000 = 1 second
      },
    },
    WAGMI_CBR: {
      active: true, // Claim Before Rebase - Requires Rebase Rewards Counter Set To Active
      showLog: true,
      setTimeoutInfo: {
        setTime: true, // Not many reasons not to set this the same as active
        interval: 5 * 1000, // 1 * 1000 = 1 second
      },
    },
    WAGMI_SAR: {
      active: false, // Sell After Rebase - Requires Rebase Rewards Counter Set To Active
      showLog: true,
      setTimeoutInfo: {
        setTime: false, // Not many reasons not to set this the same as active
        interval: 20 * 1000, // 1 * 1000 = 1 second
      },
    },
  },
};
