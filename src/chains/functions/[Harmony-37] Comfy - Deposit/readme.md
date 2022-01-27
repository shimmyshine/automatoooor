# Comfy - Deposit
Deposit Comfy-One LP, Cshare-One LP or Cshare into available pools.

* Module ID: 37
* Module Network: Harmony
* Module Protocol: Comfy
* Module Primary Focus: Stake (IE: Performs Transfer, Stake or Unstake)

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
          tokenToDeposit: string,
          contractPreference: string,
          poolID: number,
        },
```

### otfSettings Explained
* amtType: ["max", "percent", "wei"] is how you want to measure the quantity to use.
* amt: number is the number to use specifically.  (max=0, wei=quantity of token measured in wei, percent=a number between 0 & 1 in decimal form)
* tokenToDeposit: ["comfyonelp", "cshareonelp"] is which token you're depositing.  This setting only needs set when using "csharepool" for contractPreference.
* contractPreference: ["comfypool", "csharepool", "zenden"] is setting which pool to deposit into.
* poolID: number is the id of the pool for that specific contract to deposit into.
