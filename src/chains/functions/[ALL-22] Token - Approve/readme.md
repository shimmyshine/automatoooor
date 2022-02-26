# Token - Approve
Set an allowance for a contract to transfer on your behalf.

* Module ID: 22
* Module Network: ALL
* Module Protocol: Tokens
* Module Primary Focus: Perform an Approval

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
