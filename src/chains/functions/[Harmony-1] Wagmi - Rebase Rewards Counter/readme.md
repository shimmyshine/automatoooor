# WAGMI - Rebase Rewards Counter
Tracks the rebase counter for WAGMI

* Module ID: 1
* Module Network: Harmony
* Module Protocol: Euphoria/WAGMI
* Module Primary Focus: Informational Display

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

* active: boolean[true, false] is whether or not you want to active this module
* showLog: boolean[true, false] is whether you want log information to show (most will show regardless - but this will limit the spammy log information)
* setTime: boolean[true, false] is whether you want to run this module as an independent interval
* interval: number is how frequent you want it to loop (1 * 1000 = 1 second)

## otfSettings
**Located in ./src/data/CHAIN_settings.ts and are independent for each time the module is loaded.**
```
empty
```

### otfSettings Explained
empty
