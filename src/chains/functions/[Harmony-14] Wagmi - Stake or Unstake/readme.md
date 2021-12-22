# Wagmi - Stake or Unstake
Stake your WAGMI or unstake your sWAGMI.

* Module ID: 14
* Module Network: Harmony
* Module Protocol: Euphoria/WAGMI
* Module Primary Focus: Stake or Unstake

## Settings
**Located in ./settings.ts**
```
const moduleSettings: ModuleSettings = {
  active: true,
  showLog: false,
  setTimeoutInfo: {
    setTime: false,
    interval: 0, // 1 * 1000 = 1 second
  },
};
```

* active: boolean[true, false] is whether or not you want to active this module
* showLog: boolean[true, false] is whether you want log information to show (most will show regardless - but this will limit the spammy log information)
* setTime: boolean[true, false] is whether you want to run this module as an independent interval
* interval: number is how frequent you want it to loop (1 * 1000 = 1 second)

## otfSettings
**Located in ./src/data/CHAIN_settings.ts and are independent for each time the module is loaded.**
```
"GROUP:ORDER:MODULE_ID": {
          type: string,
          qtyType: string,
          qty: number,
          timeAfterRebaseToUse: number,
          intervalUsed: number,
        },
```

### otfSettings Explained
* type: ["stake", "unstake"] is whether you want to perform a stake or an unstake
* qtyType: ["max", "wei", "percent", "percent_of_rebase_rewards"] is how you want to measure the quantity to use. (percent_of_rebase_rewards is measured at the time of the execution)
* qty: number is the number to use specifically.  (max=0, wei=quantity of token measured in wei (9 for stake and 9 for unstake), percent=a number between 0 & 1 in decimal form, percent_of_rebase_rewards=a number between 0 & 1 in decimal form)
* timeAfterRebaseToUse: number is the number to execute this action after a rebase was performed.  (if you want to perform it 4 times over that span for example, set a module interval for the appropriate time)  1 * 1000 = 1 second
* intervalUsed: number is the number used for the smallest interval set on the module (either group interval or individual interval)  1 * 1000 = 1 second
