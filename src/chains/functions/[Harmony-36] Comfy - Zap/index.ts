import settings from "./settings";

const moduleInfo = {
  moduleID: 36,
  moduleName: "Comfy - Zap",
  moduleDescription:
    "Zaps what is harvested into a token usable to deposit into a pool.",
  moduleSettings: settings,
  moduleSettingsCheck: "settingsCheck.ts",
  chain: "Harmony", // Harmony, Fantom, Binance_Smart_Chain, Ethereum, Avalanche, Aurora, Polygon, RSK, Telos
  protocol: "Comfy",
};

export default moduleInfo;
