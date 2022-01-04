import * as dotenv from "dotenv";
import { Logger } from "tslog";
import getLogs from "./helpers/getLogs";
dotenv.config();

async function viewLogs(): Promise<void> {
  const log: Logger = new Logger({
    displayFunctionName: false,
    displayFilePath: "hidden",
  });

  log.info("Automatoooor log viewer started.\n");

  let logs = {};
  try {
    logs = getLogs(log);
  } catch (e) {
    log.warn(e);
  }

  if (Object.values(logs).length >= 1) {
    Object.values(logs).map((logEntry: any, z: number) => {
      log.info(
        "Entry " +
          z +
          ": [Date: " +
          logEntry.date +
          "] [Type: " +
          logEntry.logLevel +
          "] " +
          logEntry.argumentsArray[0],
      );
    });
  } else {
    log.info("There aren't any logs to view.");
  }
}

viewLogs().catch((e) => {
  console.log(e);
  process.exit(1);
});
