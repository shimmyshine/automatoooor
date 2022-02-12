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
          swapMethod: string,
          fromToken: string,
          toToken: string,
          slippage: number,
          quantityType: string,
          quantity: number,
          customRoute?: string[],
          deadline?: number,
          alternateReceiver?: string,
        },
```

### otfSettings Explained
* swapMethod: string["swapexacttokensfortokens", "swapexactethfortokens", "swapexacttokensforeth", "swapexacttokensfortokenssupportingfeeontransfertokens", "swapexactethforokenssupportingfeeontransfertokens", "swapexacttokensforethsupportingfeeontransfertokens"] is the method to call to perform the swap.  Their explanations can be found starting [here](https://docs.uniswap.org/protocol/V2/reference/smart-contracts/router-02#swapexacttokensfortokens): 
* fromToken: string is the 0x address of the token you're swapping from.  Use "chain_coin" to swap the chain coin (ONE, AVAX, ETH, BNB, etc...)
* toToken: string is the 0x address of the token you're swapping to.  Use "chain_coin" to swap the chain coin (ONE, AVAX, ETH, BNB, etc...)
* slippage: number is the slippage you'll accept.  A percent between 0 and 1, where advised to never go above .5
* quantityType: string["max", "percent", "wei"] is how you would like to calculate the quantity to swap.
* quantity: number is the number you want to swap from or to.
* customRoute?: string[] is the exact path you want the swap to hop through.  When using this, put "WETH" in place of "chain_coin".  So for example to hop through the chain coin, it would look like: ["fromToken", "WETH", "toToken"]
* deadline?: number is the amount of time you're willing to wait before the contracts void the swap attempt.  This is tracked from the time the swap is made.  So: 20 * 60 * 1000 is 20 minutes and that would make it 20 minutes from the time the swap is made or transaction is sent.
* alternateReceiver?: string is an alternate 0x address to receive the swap other than your wallet.  Do not set this to leave it at your wallet address.