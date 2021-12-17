# WAGMI - Rebase Rewards Counter
Tracks the rebase counter for WAGMI and displays it in the console for easy reference.

Module ID: 1
Module Network: Harmony

## Settings
Located in ./settings.ts
```
const moduleSettings: ModuleSettings = {
  active: true,
  showLog: true,
  setTimeoutInfo: {
    setTime: true,
    interval: 60 * 60 * 1000, // 1 * 1000 = 1 second
  },
};
```

## otfSettings
```
None
```
It is important to remember, the otfSettings are entered in ./src/data/settings.ts and are independent for each time the module is loaded.