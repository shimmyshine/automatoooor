# Comfy - allocateSeigniorage
Updates the contracts to transition to the next epoch.

* Module ID: 26
* Module Network: Harmony
* Module Protocol: Comfy
* Module Primary Focus: Update (IE: Performs Transfer, Stake or Unstake)

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