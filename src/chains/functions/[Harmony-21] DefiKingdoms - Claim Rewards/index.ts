import settings from "./settings";

const moduleInfo = {
  moduleID: 21,
  moduleName: "DefiKingdoms - Claim Rewards",
  moduleDescription:
    "Claims rewards from any eligibile pools or locked balance.",
  moduleSettings: settings,
  moduleSettingsCheck: "settingsCheck.ts",
  chain: "Harmony", // Harmony, Fantom, Binance_Smart_Chain, Ethereum, Avalanche, Aurora, Polygon, RSK, Telos
  protocol: "DefiKingdoms",
};

export default moduleInfo;
