import { ModuleSettings } from "../../../helpers/Interfaces";

const start = 60 * 1000;
const end = 3 * 60 * 60 * 1000;

const moduleSettings: ModuleSettings = {
  active: false,
  showLog: true,
  setTimeoutInfo: {
    setTime: true,
    interval: 20 * 1000, // 1 * 1000 = 1 second
  },
  extras: {
    timeRange: Math.floor(Math.random() * (end - start)) + start,
  },
};

export default moduleSettings;
