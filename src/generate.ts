import { promisify } from "util";
import _glob from "glob";
import { Module, Modules, UpcomingModules } from "./helpers/Interfaces";
import * as upcomingModules from "./data/planned_modules.json";

const chainLongToShort: { [key: string]: string } = {
  ALL: "ALL",
  Harmony: "Harmony",
  Fantom: "Fantom",
  Binance_Smart_Chain: "BSC",
  Ethereum: "ETH",
  Avalance: "AVAX",
  Aurora: "Aurora",
  Polygon: "POLY",
  RSK: "RSK",
  Telos: "Telos",
};

const glob = promisify(_glob);

const getDirectories = async (src: string): Promise<string[]> => {
  return glob(src + "/*");
};

async function getFunctions(): Promise<Modules> {
  // eslint-disable-next-line prefer-const
  let functions: Modules = {};

  const res = await getDirectories("./src/chains/functions");

  res.map((dir) => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const functionValues = require("." + dir + "/index.ts");
    functions[functionValues.default.moduleName] = {
      ...functionValues.default,
      directory: dir,
    };
  });

  return functions;
}

function sortFunctions(functions: Modules): Module[] {
  const toSort: Module[] = [];

  Object.values(functions).map((index) => {
    if (index.moduleID !== 0) {
      toSort.push(index);
    }
  });

  toSort.sort((a: Module, b: Module) => {
    if (b.chain < a.chain) return 1;
    if (b.chain > a.chain) return -1;
    else {
      if (b.protocol < a.protocol) return 1;
      if (b.protocol > a.protocol) return -1;
      else {
        if (b.moduleID < a.moduleID) return 1;
        if (b.moduleID > a.moduleID) return -1;
        return 0;
      }
    }
  });

  return toSort;
}

function generateURL(folderName: string): string {
  return (
    "https://github.com/shimmyshine/automatoooor/blob/working/src/chains/functions/" +
    encodeURIComponent(folderName) +
    "/readme.md"
  );
}

function formatFunctions(
  functions: Module[],
  moduleCount: number,
  unusedModuleIDs: string,
): string {
  let toReturn =
    "# Modules Integrated:\n\nTotal Modules: **" +
    (moduleCount - 1) +
    "** (unused: " +
    unusedModuleIDs +
    ")\n\n";

  for (let i = 0; i < functions.length; i++) {
    /* Output Chain Information */
    if (i > 0 && functions[i].chain !== functions[i - 1].chain) {
      toReturn += "\n## " + functions[i].chain + " Modules";
    } else if (i === 0) {
      toReturn += "## ALL Modules";
    }

    /* Output Protocol Information */
    if (i > 0 && functions[i].protocol !== functions[i - 1].protocol) {
      toReturn += "\n\n### " + functions[i].protocol + "\n\n";
    } else if (i === 0) {
      toReturn += "\n\n### " + functions[i].protocol + "\n\n";
    }

    /* Output Individual Module Information */
    toReturn +=
      "* [[" +
      chainLongToShort[functions[i].chain] +
      "] " +
      functions[i].moduleName +
      " (ID: " +
      functions[i].moduleID +
      ")](" +
      generateURL(
        "[" +
          chainLongToShort[functions[i].chain] +
          "-" +
          functions[i].moduleID +
          "] " +
          functions[i].moduleName,
      ) +
      ") - " +
      functions[i].moduleDescription +
      "\n";
  }

  return toReturn;
}

function getUnusedModuleIDs(functions: Module[], maxModuleID: number): string {
  let toReturn = "";

  const numbers: number[] = [];
  functions.map((mod) => {
    numbers.push(mod.moduleID);
  });

  for (let i = 1; i < maxModuleID; i++) {
    if (numbers.indexOf(i) == -1) {
      toReturn += i + ", ";
    }
  }

  toReturn += maxModuleID + 1 + "+";

  return toReturn;
}

function getLatestModuleID(functions: Module[]): number {
  let numToReturn = 0;

  for (let i = 0; i < functions.length; i++) {
    if (functions[i].moduleID > numToReturn) {
      numToReturn = functions[i].moduleID;
    }
  }

  return numToReturn;
}

function getUpcomingModules(modules: UpcomingModules[]): string {
  let toReturn =
    "\n\n# Upcoming Modules\n\nCount: **" +
    (Object.values(modules).length - 1) +
    "**\n\n";

  for (let i = 0; i < Object.values(modules).length - 1; i++) {
    toReturn +=
      "* [" +
      chainLongToShort[Object.values(modules)[i].chain] +
      "] " +
      Object.values(modules)[i].protocol +
      " - " +
      Object.values(modules)[i].name +
      ": " +
      Object.values(modules)[i].description +
      "\n";
  }

  return toReturn;
}

async function main(): Promise<void> {
  const functions = await getFunctions(); // Auto generate modules based on existing folders in the src/chains/functions directory
  const functionsSorted = sortFunctions(functions); // Sort them by chain -> protocol -> moduleID
  let formattedOutput = formatFunctions(
    functionsSorted,
    functionsSorted.length + 1,
    getUnusedModuleIDs(functionsSorted, getLatestModuleID(functionsSorted)),
  ); // Output the generated modules
  formattedOutput += getUpcomingModules(upcomingModules); // Output upcoming modules

  console.log(formattedOutput);
}

main();
