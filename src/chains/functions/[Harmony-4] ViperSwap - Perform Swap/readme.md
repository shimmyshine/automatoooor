# ViperSwap - Perform Swap
Perform a swap between two tokens.

Module ID: 4
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
  intervalUsed: 20 * 1000,
},
```
It is important to remember, the otfSettings are entered in ./src/data/settings.ts and are independent for each time the module is loaded.