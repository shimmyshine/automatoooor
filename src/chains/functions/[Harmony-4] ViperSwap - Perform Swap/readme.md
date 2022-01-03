# ViperSwap - Perform Swap
MODULE DESCRIPTION

* Module ID: 4
* Module Network: Harmony
* Module Protocol: ViperSwap
* Module Primary Focus: Performs A Swap

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
          fromToken: string,
          fromTokenDecimals: number,
          toToken: string,
          toTokenDecimals: number,
          firmToken: string,
          slippage: number,
          quantity: number,
          deadline: number;
          isDeflationary?: string;
          alternateReceiver?: string;
        },
```

### otfSettings Explained
* fromToken: string is the 0x address of the token you're swapping from.  Use "chain_coin" to swap the chain coin (ONE, AVAX, ETH, BNB, etc...)
* fromTokenDecimals: number is the decimal of the from token.  Use 0 for "chain_coin".
* toToken: string is the 0x address of the token you're swapping to.  Use "chain_coin" to swap the chain coin (ONE, AVAX, ETH, BNB, etc...)
* toTokenDecimals: number is the decimal of the to token.  Use 0 for "chain_coin".
* firmToken: string["fromToken", "toToken"] is the token you want the absolute amount of.  For example, you want 1000 ONE, then you're willing to swap however much jewel for it.  Or you want 1000 jewel, then you're willing to swap however much ONE for it.
* slippage: number is the slippage you'll accept.  A percent between 0 and 1, where advised to never go above .5
* quantity: number is the number you want to swap from or to in wei.
* deadline: number is the amount of time you're willing to wait before the contracts void the swap attempt.  This is tracked from the time the swap is made.  So: 20 * 60 * 1000 is 20 minutes and that would make it 20 minutes from the time the swap is made or transaction is sent.
* isDeflationary?: string["fromToken", "toToken"] is to tell whether either or both tokens are deflationary (have a tax of some sort).  The (?) means that this can be unset in your otfSettings.
* alternateReceiver?: string is an alternate 0x address to receive the swap other than your wallet.  Do not set this to leave it at your wallet address.