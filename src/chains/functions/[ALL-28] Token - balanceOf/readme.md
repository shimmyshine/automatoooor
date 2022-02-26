# Token - balanceOf
View the balance of a wallet for a token.

* Module ID: 22
* Module Network: ALL
* Module Protocol: Tokens
* Module Primary Focus: Performs a balance check.

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
          walletAddress: string,
          type: string,
          tokenAddress: string,
        },
```

### otfSettings Explained
* walletAddress: string is the 0x address of the wallet you want to check
* type: string["token", "chain_coin"] is whether you're calling a token or the chain coin (ONE, AVAX, BNB, ETH, etc...)
* tokenAddress: string is the 0x address of the token you're approving the contract to transfer
