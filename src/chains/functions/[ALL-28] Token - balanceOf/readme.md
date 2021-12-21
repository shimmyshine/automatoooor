# Token - balanceOf
View the balance of a wallet for a token.

* Module ID: 22
* Module Network: ALL
* Module Protocol: Tokens/Coins
* Module Primary Focus: Performs a balance check.

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
          walletAddress: string,
          type: string,
          tokenAddress: string,
        },
```

### otfSettings Explained
* walletAddress: string is the 0x address of the wallet you want to check
* type: string["token", "chain_coin"] is whether you're calling a token or the chain coin (ONE, AVAX, BNB, ETH, etc...)
* tokenAddress: string is the 0x address of the token you're approving the contract to transfer