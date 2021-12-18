# WAGMI - Rebase Rewards Counter
Tracks the rebase counter for WAGMI

Module ID: 1
Module Network: Harmony
Module Protocol: Euphoria/WAGMI
Module Primary Focus: Informational Display

## Settings
**Located in ./settings.ts**
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
**Located in ./src/data/settings.ts and are independent for each time the module is loaded.**
```
empty
```

### otfSettings Explained
empty