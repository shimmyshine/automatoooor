import { ModuleSettings } from "../../../helpers/Interfaces";

const moduleSettings: ModuleSettings = {
  active: true,
  showLog: true,
  setTimeoutInfo: {
    setTime: true,
    interval: 20 * 1000, // 1 * 1000 = 1 second
  },
  extras: {
    inTime: 24000,
  },
};

export default moduleSettings;
