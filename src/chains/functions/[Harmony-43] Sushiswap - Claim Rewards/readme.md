# SushiSwap - Claim Rewards
Claims rewards from any eligibile pools

* Module ID: 43
* Module Network: Harmony
* Module Protocol: SushiSwap
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
          claimType: string,
        },
```

### otfSettings Explained
* claimType: string["lppools", "all"] is which rewards system specifically to claim, or "all" to attempt to claim each one.