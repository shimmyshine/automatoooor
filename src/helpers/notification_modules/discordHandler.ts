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

function checkSubstr(str: string, size: number): any {
  const numChunks = Math.ceil(str.length / size);
  const chunks = new Array(numChunks);

  for (let i = 0, o = 0; i < numChunks; i++, o += size) {
    chunks[i] = str.substr(o, size);
  }

  return chunks;
}

export function sendDiscordMessage(message: string): void {
  if (setOK && bot) {
    if (message.length >= settings.notifications.discord.maxLength) {
      const messageChunks = checkSubstr(
        message,
        settings.notifications.discord.maxLength,
      );
      console.log(messageChunks);
      if (messageChunks) {
        for (let i = 0; i < messageChunks.length; i++) {
          setTimeout(() => {
            try {
              bot.channels
                .fetch(settings.notifications.discord.channelID)
                .then((channel) => {
                  if (channel !== null) {
                    (channel as TextChannel).send(messageChunks[i]);
                  }
                });
            } catch (e) {
              log.warn(e);
            }
          }, 0.5 * 1000);
        }
      }
    } else {
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
