import settings from "./settings";

const moduleInfo = {
  moduleID: 32,
  moduleName: "Tranquil Finance - Lending Deposit",
  moduleDescription: "Deposit into Tranquil Finance lending pools.",
  moduleSettings: settings,
  moduleSettingsCheck: "settingsCheck.ts",
  chain: "Harmony", // Harmony, Fantom, Binance_Smart_Chain, Ethereum, Avalanche, Aurora, Polygon, RSK, Telos
  protocol: "Tranquil",
};

export default moduleInfo;
