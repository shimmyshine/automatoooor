# Wagmi - Unwrap or Wrap
Unwrap wsWAGMI or wrap sWAGMI.

* Module ID: 15
* Module Network: Harmony
* Module Protocol: Euphoria/WAGMI
* Module Primary Focus: Wrap or Unwrap

## Settings
**Located in ./settings.ts**
```
const moduleSettings: ModuleSettings = {
  active: true,
  showLog: false,
};
```

* active: boolean[true, false] is whether or not you want to active this module
* showLog: boolean[true, false] is whether you want log information to show (most will show regardless - but this will limit the spammy log information, like when a module is triggered to run)

## otfSettings
**Located in ./src/data/CHAIN_settings.ts and are independent for each time the module is loaded.**
```
"GROUP:ORDER:MODULE_ID": {
          type: string,
          qtyType: string,
          qty: number,
        },
```

### otfSettings Explained
* type: ["wrap", "unwrap"] is whether you want to perform a wrap or an unwrap
* qtyType: ["max", "wei", "percent", "percent_of_rebase_rewards"] is how you want to measure the quantity to use. (percent_of_rebase_rewards is measured at the time of the execution)
* qty: number is the number to use specifically.  (max=0, wei=quantity of token measured in wei (9 for wrap and 18 for unwrap), percent=a number between 0 & 1 in decimal form, percent_of_rebase_rewards=a number between 0 & 1 in decimal form)
