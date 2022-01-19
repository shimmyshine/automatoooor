# Automatoooor - Timeout
Force automatoooor to wait a set period of time before proceeding to the next module of a group.

* Module ID: #34
* Module Network: ALL
* Module Protocol: Automatoooor
* Module Primary Focus: Set wait periods between modules of a group.

## Settings
**Located in ./settings.ts**
```
const moduleSettings: ModuleSettings = {
  active: false,
  showLog: true,
};
```

* active: boolean[true, false] is whether or not you want to active this module
* showLog: boolean[true, false] is whether you want log information to show (most will show regardless - but this will limit the spammy log information, like when a module is triggered to run)

## otfSettings
**Located in ./src/data/CHAIN_settings.ts and are independent for each time the module is loaded.**
```
"GROUP:ORDER:MODULE_ID": {
          interval: number,
        },
```

### otfSettings Explained
* interval: number is the desired wait period to pause things.