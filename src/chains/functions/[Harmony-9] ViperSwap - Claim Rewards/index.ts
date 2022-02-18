import settings from "./settings";

const moduleInfo = {
  moduleID: 9,
  moduleName: "ViperSwap - Claim Rewards",
  moduleDescription:
    "Claims rewards from any eligibile pools, xviper or locked balance.",
  moduleSettings: settings,
  moduleSettingsCheck: "settingsCheck.ts",
  chain: "Harmony", // Harmony, Fantom, Binance_Smart_Chain, Ethereum, Avalanche, Aurora, Polygon, RSK, Telos
  protocol: "ViperSwap",
};

export default moduleInfo;
