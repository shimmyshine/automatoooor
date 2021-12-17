# Wagmi - Stake or Unstake
Stake your WAGMI or unstake your sWAGMI.

Module ID: 14
Module Network: Harmony

## Settings
Located in ./settings.ts
```
const moduleSettings: ModuleSettings = {
  active: true,
  showLog: false,
  setTimeoutInfo: {
    setTime: false,
    interval: 20 * 1000, // 1 * 1000 = 1 second
  },
  extras: {
    inTime: 120,
  },
};
```

## otfSettings
```
"GROUP:ORDER:MODULE_ID": {
  type: "", // unstake or stake
  qtyType: "", // max, percent, wei or percent_of_rebase_rewards
  qty: 0, // 0 for max, between 0 & 1 for percent, value in wei for wei, between 0 & 1 for percent_of_rebase_rewards
  timeAfterRebaseToUse: 3 * 60 * 60 * 1000, // 1 * 1000 = 1 second
},
```
It is important to remember, the otfSettings are entered in ./src/data/settings.ts and are independent for each time the module is loaded.