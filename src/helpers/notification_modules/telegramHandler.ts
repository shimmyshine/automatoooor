import { settings } from "../../data/settings";
import { Telegraf, TelegrafContext } from "telegraf-ts";
import { log } from "../logAssistor";

let setOK = false;
let bot: Telegraf<TelegrafContext>;

function initiateBot(): void {
  bot = new Telegraf(
    settings.notifications.telegram.token !== ""
      ? settings.notifications.telegram.token
      : "",
  );

  bot.command("shutdown", async (ctx, next) => {
    try {
      if (!settings.notifications.telegram.commands.commandsEnabled) return;

      if (
        settings.notifications.telegram.commands.individualCommands
          .shutdownActive
      ) {
        log.info("Shutting down Automatoooor.");

        setTimeout(() => {
          process.kill(0);
        }, 1 * 1000);
      }
      await next();
    } catch (e) {
      log.warn(e);
      ctx.reply("Error");
    }
  });

  bot.launch();

  setOK = true;
}

function checkSubstr(str: string, size: number): any {
  const numChunks = Math.ceil(str.length / size);
  const chunks = new Array(numChunks);

  for (let i = 0, o = 0; i < numChunks; i++, o += size) {
    chunks[i] = str.substr(o, size);
  }

  return chunks;
}

export function sendTelegramMessage(message: string): void {
  if (setOK && bot) {
    if (message.length >= settings.notifications.telegram.maxLength) {
      const messageChunks = checkSubstr(
        message,
        settings.notifications.telegram.maxLength,
      );
      console.log(messageChunks);
      if (messageChunks) {
        for (let i = 0; i < messageChunks.length; i++) {
          setTimeout(() => {
            try {
              bot.telegram.sendMessage(
                settings.notifications.telegram.chatID,
                messageChunks[i],
              );
            } catch (e) {
              log.warn(e);
            }
          }, 0.5 * 1000);
        }
      }
    } else {
      try {
        bot.telegram.sendMessage(
          settings.notifications.telegram.chatID,
          message,
        );
      } catch (e) {
        console.log(e);
      }
    }
  } else {
    if (
      settings.notifications.telegram.active &&
      settings.notifications.telegram.token !== "" &&
      settings.notifications.telegram.chatID !== ""
    ) {
      try {
        initiateBot();
      } catch (e) {
        log.warn(e);
      }

      setTimeout(() => {
        sendTelegramMessage(message);
      }, 1 * 1000);
    }
  }
}
