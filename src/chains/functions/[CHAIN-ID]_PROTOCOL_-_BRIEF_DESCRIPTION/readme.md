# MODULE NAME
MODULE DESCRIPTION

## Settings
```
import { ModuleSettings } from "../../../helpers/Interfaces";

const moduleSettings: ModuleSettings = {
  active: false,
  showLog: true,
  setTimeoutInfo: {
    setTime: false,
    interval: 20 * 1000, // 1 * 1000 = 1 second
  },
};

export default moduleSettings;
```

## otfSettings
```
"GROUP:ORDER:MODULE_ID": {
          key: value,
        },
```
It is important to remember, the otfSettings are entered in ./src/data/settings.ts and are independent for each time the module is loaded.