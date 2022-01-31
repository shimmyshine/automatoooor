import { settings } from "../../data/settings";
import { Telegraf, TelegrafContext } from "telegraf-ts";

let setOK = false;
let bot: Telegraf<TelegrafContext>;

function initiateBot(): void {
  bot = new Telegraf(
    settings.notifications.telegram.token !== ""
      ? settings.notifications.telegram.token
      : "",
  );

  bot.launch();

  setOK = true;
}

export function sendTelegramMessage(message: string): void {
  if (setOK && bot) {
    try {
      bot.telegram.sendMessage(settings.notifications.telegram.chatID, message);
    } catch (e) {
      console.log(e);
    }
  } else {
    if (
      settings.notifications.telegram.active &&
      settings.notifications.telegram.token !== "" &&
      settings.notifications.telegram.chatID !== ""
    ) {
      initiateBot();
      setTimeout(() => {
        sendTelegramMessage(message);
      }, 1 * 1000);
    }
  }
}
