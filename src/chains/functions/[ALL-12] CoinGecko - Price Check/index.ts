import settings from "./settings";

const moduleInfo = {
  moduleID: 12,
  moduleName: "CoinGecko - Price Check",
  moduleDescription:
    "Either gets a price or gets a price and compares it to provided parameters.",
  moduleSettings: settings,
  moduleSettingsCheck: "settingsCheck.ts",
  chain: "ALL", // Harmony, Fantom, Binance_Smart_Chain, Ethereum, Avalanche, Aurora, Polygon, RSK, Telos
  protocol: "CoinGecko",
};

export default moduleInfo;
