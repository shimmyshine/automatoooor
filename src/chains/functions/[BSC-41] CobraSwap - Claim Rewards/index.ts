import settings from "./settings";

const moduleInfo = {
  moduleID: 41,
  moduleName: "CobraSwap - Claim Rewards",
  moduleDescription:
    "Claims rewards from any eligibile pools, xcobra or locked balance.",
  moduleSettings: settings,
  moduleSettingsCheck: "settingsCheck.ts",
  chain: "Binance_Smart_Chain", // Harmony, Fantom, Binance_Smart_Chain, Ethereum, Avalanche, Aurora, Polygon, RSK, Telos
};

export default moduleInfo;
