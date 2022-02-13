import { Logger } from "tslog";
import moduleInfo from ".";
import moduleSettings from "./settings";

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
  allowErrorsToKill: boolean,
  showErrors: boolean,
): void {
  const thisSettings = moduleSettings;
  const info = moduleInfo;

  if (thisSettings.active) {
    // Check Settings Here
  }
}
