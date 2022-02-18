import settings from "./settings";

const moduleInfo = {
  moduleID: 42,
  moduleName: "HMY SushiSwap - Perform Swap",
  moduleDescription: "Perform a swap between two tokens.",
  moduleSettings: settings,
  moduleSettingsCheck: "settingsCheck.ts",
  chain: "Harmony", // Harmony, Fantom, Binance_Smart_Chain, Ethereum, Avalanche, Aurora, Polygon, RSK, Telos
  protocol: "SushiSwap",
};

export default moduleInfo;
