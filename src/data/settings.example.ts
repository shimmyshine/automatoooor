import { Settings } from "../helpers/Interfaces";
import { auroraSettings } from "./settings/aurora_settings";
import { avalancheSettings } from "./settings/avalanche_settings";
import { binanceSmartChainSettings } from "./settings/binance_smart_chain_settings";
import { ethereumSettings } from "./settings/ethereum_settings";
import { fantomSettings } from "./settings/fantom_settings";
import { harmonySettings } from "./settings/harmony_settings";
import { polygonSettings } from "./settings/polygon_settings";
import { rskSettings } from "./settings/rsk_settings";
import { telosSettings } from "./settings/telos_settings";

export const settings: Settings = {
  settingsCheck: {
    showWarns: true,
    showErrors: true,
    allowErrorsToKill: true, // DO NOT TURN OFF UNLESS YOU KNOW WHAT YOU ARE DOING!
  },
  modulesOutput: false,
  logs: {
    writeLogToFile: true,
    wipeLogsOnRestart: true,
    logPath: "./src/data/logs/",
  },
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
  notifications: {
    telegram: {
      active: false,
      token:
        process.env.TELEGRAM_TOKEN !== undefined
          ? process.env.TELEGRAM_TOKEN
          : "",
      chatID: "",
      maxLength: 4000,
      commands: {
        commandsEnabled: true,
        individualCommands: {
          shutdownActive: true,
        },
      },
    },
    discord: {
      active: false,
      token:
        process.env.DISCORD_TOKEN !== undefined
          ? process.env.DISCORD_TOKEN
          : "",
      channelID: "",
      maxLength: 1900,
      commands: {
        commandsEnabled: true,
        commandsPrefix: "::",
        individualCommands: {
          shutdownActive: true,
        },
      },
    },
  },
};
