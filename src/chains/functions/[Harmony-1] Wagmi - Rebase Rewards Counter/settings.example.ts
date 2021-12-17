import { ModuleSettings } from "../../../helpers/Interfaces";

const moduleSettings: ModuleSettings = {
  active: true,
  showLog: true,
  setTimeoutInfo: {
    setTime: true,
    interval: 60 * 60 * 1000, // 1 * 1000 = 1 second
  },
};

export default moduleSettings;
