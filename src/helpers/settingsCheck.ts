import { settings } from "../data/settings";
import { Logger } from "tslog";
import { Modules } from "./Interfaces";

const triggerWarning = (
  message: string,
  showWarns: boolean,
  log: Logger,
): void => {
  if (showWarns) {
    log.warn(message);
  }
};

const triggerError = (
  message: string,
  showErrors: boolean,
  log: Logger,
  kill: boolean,
): void => {
  if (showErrors) {
    log.error(message);
    if (kill) process.exit(1);
  }
};

const settingsCheck = (log: Logger, functions: Modules): void => {
  const moduleSettings = settings.settingsCheck;
  const showWarns = moduleSettings.showWarns;
  const allowErrorsToKill = moduleSettings.allowErrorsToKill;
  const showErrors = moduleSettings.showErrors;

  if (!showWarns)
    triggerWarning(
      "Settings->settingsCheck->showWarns: Warnings for settings check is set to false.",
      true,
      log,
    );

  if (!showErrors)
    triggerWarning(
      "Settings->settingsCheck->showErrors: Errors for settings check is set to false.",
      true,
      log,
    );

  if (!allowErrorsToKill)
    triggerError(
      "Settings->settingsCheck->allowErrorsToKill: Allowing errors to kill the program is set to false.  Something could go very wrong.",
      true,
      log,
      true,
    );

  Object.values(settings.networks).map((setts) => {
    if (setts.isActive) {
      if (setts.showBlockNumber) {
        if (setts.blockNumberFreq <= 0)
          triggerError(
            "Settings->networks->" +
              setts.name +
              "->blockNumberFreq: You must set the block number frequency if you're going to show the block number",
            showErrors,
            log,
            allowErrorsToKill ? true : false,
          );
      }

      if (setts.groups.length >= 1) {
        if (Object.entries(setts.orders).length <= 0)
          triggerError(
            "Settings->networks->" +
              setts.name +
              "->orders: If you have a group, it must have orders.",
            showErrors,
            log,
            allowErrorsToKill ? true : false,
          );
        Object.entries(setts.orders).map((order) => {
          if (Object.entries(order[1]).length <= 0)
            triggerError(
              "Settings->networks->" +
                setts.name +
                "->orders: You have set an order key, it must have an object associated.",
              showErrors,
              log,
              allowErrorsToKill ? true : false,
            );
        });
      } else {
        triggerWarning(
          "Settings->networks->" +
            setts.name +
            "->groups: You have not set any groups.",
          showWarns,
          log,
        );
      }
    }

    Object.values(functions).map((functionValues) => {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      require("../." +
        functionValues["directory"] +
        "/" +
        functionValues.moduleSettingsCheck).settingsCheck(
        log,
        triggerWarning,
        triggerError,
        showWarns,
        allowErrorsToKill,
        showErrors,
      );
    });
  });
};

export default settingsCheck;
