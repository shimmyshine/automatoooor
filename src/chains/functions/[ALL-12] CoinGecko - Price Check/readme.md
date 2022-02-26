# CoinGecko - Price Check
Either gets a price or gets a price and compares it to provided parameters.

* Module ID: 12
* Module Network: ALL
* Module Protocol: CoinGecko
* Module Primary Focus: Pricing (IE: Performs Transfer, Stake or Unstake)

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
          tokenName: string,
          checkAgainst: boolean,
          checkType: string,
          qty: number,
          windowStart?: number,
          timeout: number,
        },
```

### otfSettings Explained
* tokenName: string is the exact match token id that CoinGecko uses.
* checkAgainst: boolean is whether you want it to check against the price and return a true or false if it meets the parameters, or just want it to print out the price.
* checkType: ["equal", "greater", "less", "window"] is how you want to check against it.  Equal = equal to (exact), greater = greater than your provided qty, less = less than your provided quantity, window = a provided quantity and if it falls in the window then it's true.
* qty: number is the value to provide for the checkType.  To be entered without a dollar sign in decimal form (IE: $12.55 would be 12.55).
* windowStart?: number is the price you want the window to check against.  If you want to know if the current price falls between $10 and $15, then qty would be 2.5 and windowStart would be 12.5.  Only necessary when checkType is set to "window".
* timeout: number is the number in milliseconds to timeout the query and return a failure.  1 second equals 1000 milliseconds, default is 30 seconds.