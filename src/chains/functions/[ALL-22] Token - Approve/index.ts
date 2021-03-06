import settings from "./settings";

const moduleInfo = {
  moduleID: 22,
  moduleName: "Token - Approve",
  moduleDescription: "Approve a contract to perform a transferFrom",
  moduleSettings: settings,
  moduleSettingsCheck: "settingsCheck.ts",
  chain: "ALL", // Harmony, Fantom, Binance_Smart_Chain, Ethereum, Avalanche, Aurora, Polygon, RSK, Telos
  protocol: "Tokens",
};

export default moduleInfo;
