# Wagmi - Unwrap or Wrap
Unwrap wsWAGMI or wrap sWAGMI.

Module ID: 15
Module Network: Harmony
Module Protocol: Euphoria/WAGMI
Module Primary Focus: Wrap or Unwrap

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

## otfSettings
**Located in ./src/data/settings.ts and are independent for each time the module is loaded.**
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
type: ["wrap", "unwrap"] is whether you want to perform a wrap or an unwrap
qtyType: ["max", "wei", "percent", "percent_of_rebase_rewards] is how you want to measure the quantity to use. (percent_of_rebase_rewards is measured at the time of the execution)
qty: number is the number to use specifically.  (max=0, wei=quantity of token measured in wei (9 for wrap and 18 for unwrap), percent=a number between 0 & 1 in decimal form, percent_of_rebase_rewards=a number between 0 & 1 in decimal form)
timeAfterRebaseToUse: number is the number to execute this action after a rebase was performed.  (if you want to perform it 4 times over that span for example, set a module interval for the appropriate time)  1 * 1000 = 1 second
intervalUsed: number is the number used for the smallest interval set on the module (either group interval or individual interval)  1 * 1000 = 1 second