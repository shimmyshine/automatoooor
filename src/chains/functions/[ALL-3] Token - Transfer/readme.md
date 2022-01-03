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
};
```

* active: boolean[true, false] is whether or not you want to active this module
* showLog: boolean[true, false] is whether you want log information to show (most will show regardless - but this will limit the spammy log information, like when a module is triggered to run)

## otfSettings
**Located in ./src/data/CHAIN_settings.ts and are independent for each time the module is loaded.**
```
"GROUP:ORDER:MODULE_ID": {
          type: string,
          addressTo: string,
          tokenAddress: string,
          quantity: number,
          decimal: number,
        },
```

### otfSettings Explained
type: string["token", "chain_coin"] is whether you want to send a token or the chain coin (ONE, AVAX, ETH, etc...)
addressTo: string is the 0x address of where you want to send the asset
tokenAddress: string is the 0x address of the token to send (leave "" if using chain_coin for type)
quantity: number is the quantity in wei you want to send
decimal: number is the decimal of the token your sending (enter 0 if the chain coin)
