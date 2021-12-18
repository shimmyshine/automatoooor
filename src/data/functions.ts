import { promisify } from "util";
import _glob from "glob";
import { Modules } from "../helpers/interfaces";
import { settings } from "./settings";

const glob = promisify(_glob);

const getDirectories = async (src: string): Promise<string[]> => {
  return glob(src + "/*");
};

export const getFunctions = async (): Promise<Modules> => {
  // eslint-disable-next-line prefer-const
  let functions: Modules = {};

  const res = await getDirectories("./src/chains/functions/");

  res.map((dir) => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const functionValues = require("../." + dir + "/index.ts");
    functions[functionValues.default.moduleName] = {
      ...functionValues.default,
      directory: dir,
    };
  });

  return functions;
};

export const getFunctionsByChain = async (
  chainMatch: string,
): Promise<Modules> => {
  // eslint-disable-next-line prefer-const
  let functions: Modules = {};

  const res = await getDirectories("./src/chains/functions/");

  res.map((dir) => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const functionValues = require("../." + dir + "/index.ts");
    if (
      functionValues.default.chain == chainMatch ||
      functionValues.default.chain == "ALL"
    ) {
      functions[functionValues.default.moduleName] = {
        ...functionValues.default,
        directory: dir,
      };
    }
  });

  return functions;
};

export const getFunctionByID = async (idMatch: number): Promise<Modules> => {
  // eslint-disable-next-line prefer-const
  let functions: Modules = {};

  const res = await getDirectories("./src/chains/functions/");

  res.map((dir) => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const functionValues = require("../." + dir + "/index.ts");

    if (functionValues.default.moduleID === idMatch) {
      functions[functionValues.default.moduleID] = {
        ...functionValues.default,
        directory: dir,
      };
    }
  });

  return functions;
};

export const isFunctionActive = async (idMatch: number): Promise<boolean> => {
  const funcSettings: Modules = await getFunctionByID(idMatch);

  return funcSettings[idMatch].moduleSettings.active;
};

export const getOTFSettings = (
  networkToUse: string,
  match: string,
): unknown => {
  return settings.networks[networkToUse].otfSettings[match];
};
