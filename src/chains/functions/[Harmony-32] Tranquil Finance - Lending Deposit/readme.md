# Tranquil Finance - Lending Deposit
Deposit into Tranquil Finance lending pools.

* Module ID: 32
* Module Network: Harmony
* Module Protocol: Tranquil Finance
* Module Primary Focus: Lending Deposit (IE: Performs Transfer, Stake or Unstake)

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
          target: string,
          qtyType: string,
          qty: number,
        },
```

### otfSettings Explained
* target: ["1usdc", "1usdt", "1dai", "1eth", "1wbtc", "1btc", "one", "stone"] is which lending target you want.
* qtyType: ["max", "percent", "wei"] is how you want to measure the quantity to use.
* qty: number is the number to use specifically.  (max=0, wei=quantity of token measured in wei, percent=a number between 0 & 1 in decimal form)