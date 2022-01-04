import fs from "fs";
import { Logger } from "tslog";
import { settings } from "../data/settings";

interface LogsView {
  [key: number]: any;
}

const getLogs = (log: Logger): LogsView => {
  const path = settings.logs.logPath + "logs.txt";

  let logsFileExists = false;

  try {
    if (fs.existsSync(path)) {
      logsFileExists = true;
    }
  } catch (e) {
    log.warn(e);
  }

  if (logsFileExists) {
    const toReturn: LogsView = {};
    const data = fs.readFileSync(path, { encoding: "utf8", flag: "r" });

    const splitted = data.toString().split("\n");
    for (let i = 0; i < splitted.length; i++) {
      if (splitted[i] !== "") {
        toReturn[i] = JSON.parse(splitted[i]);
      }
    }

    return toReturn;
  } else {
    return {};
  }
};

export default getLogs;
