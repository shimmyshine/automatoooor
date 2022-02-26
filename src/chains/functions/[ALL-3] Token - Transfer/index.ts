import settings from "./settings";

const moduleInfo = {
  moduleID: 3,
  moduleName: "Token - Transfer",
  moduleDescription: "Transfer a token or the chain coin.",
  moduleSettings: settings,
  moduleSettingsCheck: "settingsCheck.ts",
  chain: "ALL", // Harmony, Fantom, Binance_Smart_Chain, Ethereum, Avalanche, Aurora, Polygon, RSK, Telos
  protocol: "Tokens",
};

export default moduleInfo;
