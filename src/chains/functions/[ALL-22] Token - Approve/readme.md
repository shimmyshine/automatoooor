# Token - Approve
Set an allowance for a contract to transfer on your behalf.

* Module ID: 22
* Module Network: ALL
* Module Protocol: Tokens/Coins
* Module Primary Focus: Perform an Approval

## Settings
**Located in ./settings.ts**
```
const moduleSettings: ModuleSettings = {
  active: false,
  showLog: true,
  setTimeoutInfo: {
    setTime: false,
    interval: 20 * 1000, // 1 * 1000 = 1 second
  },
};
```

* active: boolean[true, false] is whether or not you want to active this module
* showLog: boolean[true, false] is whether you want log information to show (most will show regardless - but this will limit the spammy log information)
* setTime: boolean[true, false] is whether you want to run this module as an independent interval
* interval: number is how frequent you want it to loop (1 * 1000 = 1 second)

## otfSettings
**Located in ./src/data/settings.ts and are independent for each time the module is loaded.**
```
"GROUP:ORDER:MODULE_ID": {
          contractAddress: string,
          tokenAddress: string,
          quantity: number,
          decimal: number,
        },
```

### otfSettings Explained
* contractAddress: string is the 0x address of the contract you want to approve
* tokenAddress: string is the 0x address of the token you're approving the contract to transfer
* quantity: number is the quantity in wei you want to send
* decimal: number is the decimal of the token your sending (enter 0 if the chain coin)
