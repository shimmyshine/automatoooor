import { settings } from "../../data/settings";
import { Client, TextChannel } from "discord.js";
import { log } from "../logAssistor";

let setOK = false;
let bot: Client<boolean>;

function initiateBot(): void {
  bot = new Client({
    intents: ["GUILDS", "GUILD_MESSAGES"],
  });

  bot.on("ready", () => {
    setOK = true;
  });

  bot.on("messageCreate", (message) => {
    if (message.author.bot) return;
    if (!settings.notifications.discord.commands.commandsEnabled) return;
    if (
      !message.content.startsWith(
        settings.notifications.discord.commands.commandsPrefix,
      )
    )
      return;

    const commandBody = message.content.slice(
      settings.notifications.discord.commands.commandsPrefix.length,
    );
    const args = commandBody.split(" ");
    const command = args.shift()?.toLowerCase();

    if (
      command === "shutdown" &&
      settings.notifications.discord.commands.individualCommands.shutdownActive
    ) {
      log.info("Shutting down Automatoooor.");

      setTimeout(() => {
        process.kill(0);
      }, 1 * 1000);
    }
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
