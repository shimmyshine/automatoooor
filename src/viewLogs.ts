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
}

viewLogs().catch((e) => {
  console.log(e);
  process.exit(1);
});
