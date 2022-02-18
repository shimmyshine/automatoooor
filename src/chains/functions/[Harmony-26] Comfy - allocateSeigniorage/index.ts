import settings from "./settings";

const moduleInfo = {
  moduleID: 26,
  moduleName: "Comfy - allocateSeigniorage",
  moduleDescription: "Updates the contracts to transition to the next epoch.",
  moduleSettings: settings,
  moduleSettingsCheck: "settingsCheck.ts",
  chain: "Harmony", // Harmony, Fantom, Binance_Smart_Chain, Ethereum, Avalanche, Aurora, Polygon, RSK, Telos
  protocol: "Comfy",
};

export default moduleInfo;
