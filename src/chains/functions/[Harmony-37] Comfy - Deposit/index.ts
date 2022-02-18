import settings from "./settings";

const moduleInfo = {
  moduleID: 37,
  moduleName: "Comfy - Deposit",
  moduleDescription: "Deposit into a pool.",
  moduleSettings: settings,
  moduleSettingsCheck: "settingsCheck.ts",
  chain: "Harmony", // Harmony, Fantom, Binance_Smart_Chain, Ethereum, Avalanche, Aurora, Polygon, RSK, Telos
  protocol: "Comfy",
};

export default moduleInfo;
