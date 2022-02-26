import settings from "./settings";

const moduleInfo = {
  moduleID: 5,
  moduleName: "Tranquil Finance - Borrow",
  moduleDescription: "Borrow from your lent quantity on Tranq.",
  moduleSettings: settings,
  moduleSettingsCheck: "settingsCheck.ts",
  chain: "Harmony", // Harmony, Fantom, Binance_Smart_Chain, Ethereum, Avalanche, Aurora, Polygon, RSK, Telos
  protocol: "Tranquil",
};

export default moduleInfo;
