import { settings } from "../../data/settings";
import { Client, TextChannel } from "discord.js";
import { log } from "../logAssistor";

let setOK = false;
let bot: Client<boolean>;

function initiateBot(): void {
  bot = new Client({
    intents: [],
  });

  bot.on("ready", () => {
    setOK = true;
  });

  bot.login(settings.notifications.discord.token);
}

export function sendDiscordMessage(message: string): void {
  if (setOK && bot) {
    try {
      bot.channels
        .fetch(settings.notifications.discord.channelID)
        .then((channel) => {
          if (channel !== null) {
            (channel as TextChannel).send(message);
          }
        });
    } catch (e) {
      console.log(e);
    }
  } else {
    try {
      initiateBot();
    } catch (e) {
      log.warn(e);
    }

    setTimeout(() => {
      sendDiscordMessage(message);
    }, 2 * 1000);
  }
}
