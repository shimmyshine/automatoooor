# Comfy - Zap
Zaps what is harvested into a token usable to deposit into a pool.

* Module ID: 36
* Module Network: Harmony
* Module Protocol: Comfy
* Module Primary Focus: Swaps (IE: Performs Transfer, Stake or Unstake)

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
          amtType: string,
          amt: number,
          tokenIn: string,
        },
```

### otfSettings Explained
* amtType: ["max", "percent", "wei"] is how you want to measure the quantity to use.
* amt: number is the number to use specifically.  (max=0, wei=quantity of token measured in wei, percent=a number between 0 & 1 in decimal form)
* tokenIn: ["comfy", "cshare"] is whether you'd like to zap comfy or cshare to comfy-one lp or cshare-one lp.
