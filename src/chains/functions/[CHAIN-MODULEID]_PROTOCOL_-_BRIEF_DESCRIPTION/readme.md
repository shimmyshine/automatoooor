# MODULE NAME
MODULE DESCRIPTION

* Module ID: #
* Module Network: NETWORK
* Module Protocol: PROTOCOL
* Module Primary Focus: REAUSABILITY (IE: Performs Transfer, Stake or Unstake)

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
          key: value,
        },
```

### otfSettings Explained
* key: value is .... (IE: intervalSet: number is the value you used for the interval to ensure it safely runs within a specific window only once as desired)
* key: value2 is ....(IE: type: string["stake", "unstake"] is the type of action you want to perform, a stake or an unstake)
