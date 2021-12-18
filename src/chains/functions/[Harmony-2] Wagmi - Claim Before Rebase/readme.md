# WAGMI - Claim Before Rebase
Auto claims any bonds you have before a rebase.

Module ID: 2
Module Network: Harmony
Module Protocol: Euphoria/WAGMI
Module Primary Focus: Claims Before Every Rebase

## Settings
**Located in ./settings.ts**
```
const moduleSettings: ModuleSettings = {
  active: true,
  showLog: false,
  setTimeoutInfo: {
    setTime: false,
    interval: 20 * 1000, // 1 * 1000 = 1 second
  },
```

## otfSettings
**Located in ./src/data/settings.ts and are independent for each time the module is loaded.**
```
"group:order:moduleID": {
          intervalUsed: number,
        },
```

### otfSettings Explained
intervalUsed: number is the value you used for the interval that runs it (group or order) to ensure it safely runs within a specific window only once as desired.  1 * 1000 = 1 second