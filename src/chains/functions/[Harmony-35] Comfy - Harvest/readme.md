# Comfy - Harvest
Harvests all balances greater than 0.

* Module ID: 35
* Module Network: Harmony
* Module Protocol: Comfy
* Module Primary Focus: Claiming (IE: Performs Transfer, Stake or Unstake)

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
          harvestPool: string,
        },
```

### otfSettings Explained
* harvestPool: ["comfy", "cshare", "zenden", "all"] is which token pools you want to harvest.
