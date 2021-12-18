import settings from "./settings";

const moduleInfo = {
  moduleID: 3,
  moduleName: "Transfer",
  moduleDescription: "Transfer tokens/ONE from your wallet to another.",
  moduleSettings: settings,
  moduleSettingsCheck: "settingsCheck.ts",
  chain: "Harmony", // Harmony, Fantom, Binance_Smart_Chain, Ethereum, Avalanche, Aurora, Polygon, RSK, Telos
};

export default moduleInfo;
