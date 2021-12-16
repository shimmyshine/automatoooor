import { ModuleSettings } from "../../../helpers/Interfaces";

const moduleSettings: ModuleSettings = {
  active: true,
  showLog: true,
  setTimeoutInfo: {
    setTime: false,
    interval: 0, // 1 * 1000 = 1 second
  },
  extras: {
    timeToWaitAfterRebase: 3 * 60 * 60 * 1000, // 1 * 1000 = 1 second - this is 3 hours
    percentToUnwrap: 0.2,
  },
};

export default moduleSettings;
