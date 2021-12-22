import { glob } from "glob";
import { path } from "path";
import { fs } from "fs";

glob("./src/**/settings.example.ts", function (_, matches) {
  for (const file of matches) {
    const base = path.dirname(file);
    if (!fs.existsSync(`${base}/settings.ts`)) {
      fs.cpSync(file, `${base}/settings.ts`);
    }
  }
});
