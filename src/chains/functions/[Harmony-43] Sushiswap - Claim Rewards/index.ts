import settings from "./settings";

const moduleInfo = {
  moduleID: 43,
  moduleName: "SushiSwap - Claim Rewards",
  moduleDescription: "Claims rewards from any eligible pools",
  moduleSettings: settings,
  moduleSettingsCheck: "settingsCheck.ts",
  chain: "Harmony", // Harmony, Fantom, Binance_Smart_Chain, Ethereum, Avalanche, Aurora, Polygon, RSK, Telos
};

export default moduleInfo;
