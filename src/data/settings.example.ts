import { Settings } from "../helpers/Interfaces";
import { auroraSettings } from "./settings/settings_aurora";
import { avalancheSettings } from "./settings/settings_avalanche";
import { binanceSmartChainSettings } from "./settings/settings_binance_smart_chain";
import { ethereumSettings } from "./settings/settings_ethereum";
import { fantomSettings } from "./settings/settings_fantom";
import { harmonySettings } from "./settings/settings_harmony";
import { polygonSettings } from "./settings/settings_polygon";
import { rskSettings } from "./settings/settings_rsk";
import { telosSettings } from "./settings/settings_telos";

export const settings: Settings = {
  settingsCheck: {
    showWarns: true,
    showErrors: true,
    allowErrorsToKill: true, // DO NOT TURN OFF UNLESS YOU KNOW WHAT YOU ARE DOING!
  },
  modulesOutput: false,
  networks: {
    Harmony: harmonySettings,
    Fantom: fantomSettings,
    Avalanche: avalancheSettings,
    Binance_Smart_Chain: binanceSmartChainSettings,
    Ethereum: ethereumSettings,
    Aurora: auroraSettings,
    Polygon: polygonSettings,
    RSK: rskSettings,
    Telos: telosSettings,
  },
};
