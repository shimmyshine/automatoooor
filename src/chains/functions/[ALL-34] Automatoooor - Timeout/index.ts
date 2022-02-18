import settings from "./settings";

const moduleInfo = {
  moduleID: 34,
  moduleName: "Timeout",
  moduleDescription: "Set wait periods between modules of a group.",
  moduleSettings: settings,
  moduleSettingsCheck: "settingsCheck.ts",
  chain: "ALL", // Harmony, Fantom, Binance_Smart_Chain, Ethereum, Avalanche, Aurora, Polygon, RSK, Telos
  protocol: "ALL",
};

export default moduleInfo;
