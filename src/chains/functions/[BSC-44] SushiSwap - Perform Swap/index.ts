import settings from "./settings";

const moduleInfo = {
  moduleID: 44,
  moduleName: "BSC SushiSwap - Perform Swap",
  moduleDescription: "Perform a swap between two tokens.",
  moduleSettings: settings,
  moduleSettingsCheck: "settingsCheck.ts",
  chain: "Binance_Smart_Chain", // Harmony, Fantom, Binance_Smart_Chain, Ethereum, Avalanche, Aurora, Polygon, RSK, Telos
  protocol: "SushiSwap",
};

export default moduleInfo;
