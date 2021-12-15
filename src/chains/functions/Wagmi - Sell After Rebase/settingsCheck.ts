import { Logger } from "tslog";

export function settingsCheck(
  log: Logger,
  triggerWarning: (message: string, showWarns: boolean, log: Logger) => void,
  triggerError: (
    message: string,
    showErrors: boolean,
    log: Logger,
    kill: boolean,
  ) => void,
  showWarns: boolean,
  showErrors: boolean,
  allowErrorsToKill: boolean,
): void {
  console.log("sar");
}
