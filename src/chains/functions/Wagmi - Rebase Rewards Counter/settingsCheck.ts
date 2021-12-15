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
    if (!thisSettings.setTimeoutInfo.setTime) {
      triggerError(
        "[Module: " +
          info.moduleName +
          "]->active: WAGMI_RRC has active set to true, but it's setTimeoutInfo->setTime is set to false.  This must be true otherwise WAGMI_CBR & WAGMI_SAR will not run properly.",
        showErrors,
        log,
        allowErrorsToKill ? true : false,
      );
    } else {
      if (thisSettings.setTimeoutInfo.interval <= 0)
        triggerError(
          "[Module: " +
            info.moduleName +
            "]->setTimeoutInfo: setTime is set to true, but interval is 0.  It must be a value, ideally more than 10 seconds.",
          showErrors,
          log,
          allowErrorsToKill ? true : false,
        );
    }
  }
}
