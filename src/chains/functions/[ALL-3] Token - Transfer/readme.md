# Token - Transfer
Perform a transfer of a token or the chain coin (ONE, AVAX, ETH, etc...).

* Module ID: 3
* Module Network: ALL
* Module Protocol: Tokens/Coins
* Module Primary Focus: Perform a Transfer

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

## otfSettings
**Located in ./src/data/settings.ts and are independent for each time the module is loaded.**
```
"GROUP:ORDER:MODULE_ID": {
          type: string,
          address: string,
          quantity: number,
          decimal: number,
        },
```

### otfSettings Explained
* type: string["token", "chain_coin"] is whether you want to send a token or the chain coin (ONE, AVAX, ETH, etc...)
* address: string is the 0x address of where you want to send the asset
* quantity: number is the quantity in wei you want to send
* decimal: number is the decimal of the token your sending (enter 0 if the chain coin)
