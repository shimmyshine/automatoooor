import { appendFileSync } from "fs";
import { ILogObject, Logger } from "tslog";
import { settings } from "../data/settings";
import fs from "fs";

export const log: Logger = new Logger({
  displayFunctionName: false,
  displayFilePath: "hidden",
});

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function logToTransport(logObject: ILogObject) {
  appendFileSync(
    settings.logs.logPath + "logs.txt",
    JSON.stringify(logObject) + "\n",
  );
}

if (settings.logs.writeLogToFile) {
  if (settings.logs.wipeLogsOnRestart) {
    const path = settings.logs.logPath + "logs.txt";

    try {
      if (fs.existsSync(path)) {
        try {
          fs.unlinkSync(path);
        } catch (e) {
          log.warn(e);
        }
      }
    } catch (e) {
      log.warn(e);
    }
  }

  log.attachTransport({
    silly: logToTransport,
    debug: logToTransport,
    trace: logToTransport,
    info: logToTransport,
    warn: logToTransport,
    error: logToTransport,
    fatal: logToTransport,
  });
}
