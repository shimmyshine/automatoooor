# WAGMI - Claim Before Rebase
Auto claims any bonds you have before a rebase.

* Module ID: 2
* Module Network: Harmony
* Module Protocol: Euphoria/WAGMI
* Module Primary Focus: Claims Before Every Rebase

## Settings
**Located in ./settings.ts**
```
const moduleSettings: ModuleSettings = {
  active: true,
  showLog: false,
  returnTrueClaimingNothing: true,
```

* active: boolean[true, false] is whether or not you want to active this module
* showLog: boolean[true, false] is whether you want log information to show (most will show regardless - but this will limit the spammy log information, like when a module is triggered to run)
* returnTrueClaimingNothing: boolean[true, false] is whether you want this module to return false if it claims 0 breaking module execution following it if they require a true.

## otfSettings
**Located in ./src/data/CHAIN_settings.ts and are independent for each time the module is loaded.**
```
"group:order:moduleID": {
          intervalUsed: number,
        },
```

### otfSettings Explained
* intervalUsed: number is the value you used for the interval that runs it (group or order) to ensure it safely runs within a specific window only once as desired.  1 * 1000 = 1 second
