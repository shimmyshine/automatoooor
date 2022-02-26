import settings from "./settings";

const moduleInfo = {
  moduleID: 25,
  moduleName: "CoinGecko - GetData",
  moduleDescription:
    "Get various types of data from CoinGecko's public API v3.",
  moduleSettings: settings,
  moduleSettingsCheck: "settingsCheck.ts",
  chain: "ALL", // Harmony, Fantom, Binance_Smart_Chain, Ethereum, Avalanche, Aurora, Polygon, RSK, Telos
  protocol: "CoinGecko",
};

export default moduleInfo;
