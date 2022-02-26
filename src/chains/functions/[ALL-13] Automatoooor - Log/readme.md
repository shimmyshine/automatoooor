# Automatoooor - Log
Log yourself a personalized message.

* Module ID: #13
* Module Network: ALL
* Module Protocol: Automatoooor
* Module Primary Focus: Log

## Settings
**Located in ./settings.ts**
```
const moduleSettings: ModuleSettings = {
  active: false,
  showLog: true,
};
```

* active: boolean[true, false] is whether or not you want to active this module
* showLog: boolean[true, false] is whether you want log information to show (most will show regardless - but this will limit the spammy log information, like when a module is triggered to run)

## otfSettings
**Located in ./src/data/CHAIN_settings.ts and are independent for each time the module is loaded.**
```
"GROUP:ORDER:MODULE_ID": {
          message: string,
        },
```

### otfSettings Explained
* message: string is whatever you want to read out to the log to yourself.  For example, there isn't a module to claim on a DEX but you want to remember, log a message.