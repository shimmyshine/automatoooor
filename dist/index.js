"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const tslog_1 = require("tslog");
const settings_1 = require("./data/settings");
const harmony_1 = __importDefault(require("./chains/harmony"));
const fantom_1 = __importDefault(require("./chains/fantom"));
const settingsCheck_1 = __importDefault(require("./helpers/settingsCheck"));
const functions_1 = require("./data/functions");
const log = new tslog_1.Logger({
    displayFunctionName: false,
    displayFilePath: "hidden",
});
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    log.info("Program started.\n");
    const functions = yield (0, functions_1.getFunctions)();
    (0, settingsCheck_1.default)(log, functions);
    (0, functions_1.isFunctionActive)(1);
    yield (0, harmony_1.default)(log, settings_1.settings.networks["Harmony"], settings_1.settings.networks["Harmony"].groups, settings_1.settings.networks["Harmony"].orders);
    yield (0, fantom_1.default)(log, settings_1.settings.networks["Fantom"], settings_1.settings.networks["Fantom"].groups, settings_1.settings.networks["Fantom"].orders);
});
main().catch((e) => {
    console.log(e);
    process.exit(1);
});
