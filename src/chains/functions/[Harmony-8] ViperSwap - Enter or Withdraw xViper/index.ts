import settings from "./settings";

const moduleInfo = {
  moduleID: 8,
  moduleName: "ViperSwap - Enter or Withdraw xViper",
  moduleDescription:
    "Allows you to deposit your viper into the ViperPit or withdraw your viper from the ViperPit.",
  moduleSettings: settings,
  moduleSettingsCheck: "settingsCheck.ts",
  chain: "Harmony", // Harmony, Fantom, Binance_Smart_Chain, Ethereum, Avalanche, Aurora, Polygon, RSK, Telos
};

export default moduleInfo;
