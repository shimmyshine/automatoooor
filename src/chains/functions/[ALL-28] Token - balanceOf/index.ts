import settings from "./settings";

const moduleInfo = {
  moduleID: 28,
  moduleName: "Token - balanceOf",
  moduleDescription: "View the balance of a wallet for a token.",
  moduleSettings: settings,
  moduleSettingsCheck: "settingsCheck.ts",
  chain: "ALL", // Harmony, Fantom, Binance_Smart_Chain, Ethereum, Avalanche, Aurora, Polygon, RSK, Telos
  protocol: "Tokens",
};

export default moduleInfo;
