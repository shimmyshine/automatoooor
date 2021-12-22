const glob = require("glob");
const path = require("path");
const fs = require("fs");

glob("./src/**/*settings.example.ts", function (_, matches) {
  for (const file of matches) {
    const base = path.dirname(file);
    if (!fs.existsSync(`${base}/settings.ts`)) {
      fs.cpSync(file, `${base}/settings.ts`);
    }
  }
});
