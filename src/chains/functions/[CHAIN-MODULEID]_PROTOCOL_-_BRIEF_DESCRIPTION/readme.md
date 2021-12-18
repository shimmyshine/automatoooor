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
  setTimeoutInfo: {
    setTime: false,
    interval: 20 * 1000, // 1 * 1000 = 1 second
  },
};
```

* active: boolean[true, false] is whether or not you want to active this module
* showLog: boolean[true, false] is whether you want log information to show (most will show regardless - but this will limit the spammy log information)
* setTime: boolean[true, false] is whether you want to run this module as an independent interval
* interval: number is how frequent you want it to loop (1 * 1000 = 1 second)

## otfSettings
**Located in ./src/data/settings.ts and are independent for each time the module is loaded.**
```
"GROUP:ORDER:MODULE_ID": {
          key: value,
        },
```

### otfSettings Explained
* key: value is .... (IE: intervalSet: number is the value you used for the interval to ensure it safely runs within a specific window only once as desired)
* key: value2 is ....(IE: type: string["stake", "unstake"] is the type of action you want to perform, a stake or an unstake)
