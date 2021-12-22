const glob = require("glob");
const path = require("path");
const fs = require("fs");

glob("./src/**/*.example.ts", function (_, matches) {
  for (const file of matches) {
    const dir = path.dirname(file);
    const base = path.basename(file, ".example.ts");
    const fname = `${dir}/${base}.ts`;
    if (!fs.existsSync(fname)) {
      fs.cpSync(file, fname);
    }
  }
});
