# Enter or Withdraw xCobra
Allows you to deposit your cobra into the CobraPit or withdraw your cobra from the CobraPit.

* Module ID: 40
* Module Network: Binance_Smart_chain
* Module Protocol: CobraSwap
* Module Primary Focus: Deposits & Withdraws xCobra

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
          to: string,
          qtyType: string,
          qty: number,
        },
```

### otfSettings Explained
* to: string["to", "from"] is identifying whether you want to wrap to xCobra or unwrap from xCobra
* qtyType: string["max", "wei", "percent"] is how you want to measure the quantity to use.
* qty: number is the number to use specifically.  (max=0, wei=quantity of token measured in wei (9 for stake and 9 for unstake), percent=a number between 0 & 1 in decimal form, percent_of_rebase_rewards=a number between 0 & 1 in decimal form)