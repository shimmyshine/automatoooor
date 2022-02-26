# CoinGecko - GetData
Get any data with passed parameters from CoinGecko.

Check official documentation for this API [here (NPM Package)](https://www.npmjs.com/package/coingecko-api-v3) and [here (CoinGecko API Documentation)](https://github.com/samuraitruong/coingecko-api-v3).

* Module ID: 25
* Module Network: ALL
* Module Protocol: CoinGecko
* Module Primary Focus: Anything (IE: Performs Transfer, Stake or Unstake)

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
          functionToCall: string,
          parameters: {},
          timeout: number,
        },
```

### otfSettings Explained
* functionToCall: ["ping", "simplePrice", "simplePriceId", "simpleSupportedCurrencies", "coinList", "coinMarkets", "coinId", "coinIdTickers", "coinIdHistory", "coinIdMarketHistory", "coinIdMarketChart", "coinIdMarketChartRange", "coinIdStatusUpdates", "coinIdOHLC", "contract", "contractMarketChart", "contractMarketChartRange", "exchanges", "exchangeList", "exchangeIdTickers", "exchangeIdStatusUpdates", "exchangeIdVolumeChart", "financePlatforms", "financeProducts", "indexes", "indexesMarketId", "indexesList", "financeProducts", "/derivatives", "/derivativesExchanges", "/derivativesExchangesId", "statusUpdates", "events", "eventCountries", "eventsTypes", "exchangeRates", "searchTrending", "global", "globalDefi"] is the function from CoinGecko's API v3 that you want to call.
* parameters: {} is the parameters to pass through.  Each function will have their own parameters, best to check CoinGecko's website for what is required and optional.
* timeout: number is the number in milliseconds to timeout the query and return a failure.  1 second equals 1000 milliseconds, default is 30 seconds.