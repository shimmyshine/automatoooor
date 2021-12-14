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
const getAddress_1 = require("./helpers/getAddress");
const getNetworkProvider_1 = require("./helpers/getNetworkProvider");
const Networks = __importStar(require("./data/networks.json"));
const tslog_1 = require("tslog");
const settings_1 = require("./data/settings");
const WAGMI_CBR_1 = __importDefault(require("./functions/WAGMI_CBR"));
const WAGMI_SAR_1 = __importDefault(require("./functions/WAGMI_SAR"));
const WAGMI_RRC_1 = __importDefault(require("./functions/WAGMI_RRC"));
const getCurrentBlock_1 = require("helpers/getCurrentBlock");
const log = new tslog_1.Logger({
    displayFunctionName: false,
    displayFilePath: "hidden",
});
const address = (0, getAddress_1.getAddress)(Networks[0].name);
const provider = (0, getNetworkProvider_1.getProvider)(0);
let rebaseCounter = {
    timeStamp: 0,
    nextRebaseTime: "",
    timeToNextRebase: 0,
};
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    log.info("Program started.\n");
    setInterval(() => {
        log.info((0, getCurrentBlock_1.getBlock)(provider));
    }, settings_1.settings.general.blockNumberFreq);
    if (settings_1.settings.functions.WAGMI_RRC.active) {
        log.info("WAGMI Rebase Rewards Counter is active");
        if (settings_1.settings.functions.WAGMI_RRC.setTimeoutInfo.setTime == true) {
            setInterval(() => __awaiter(void 0, void 0, void 0, function* () {
                rebaseCounter = yield (0, WAGMI_RRC_1.default)(log, address, provider, settings_1.settings.functions.WAGMI_RRC);
                log.info(rebaseCounter);
            }), settings_1.settings.functions.WAGMI_RRC.setTimeoutInfo.interval);
        }
        else {
            rebaseCounter = yield (0, WAGMI_RRC_1.default)(log, address, provider, settings_1.settings.functions.WAGMI_RRC);
            log.info(rebaseCounter);
        }
    }
    if (settings_1.settings.functions.WAGMI_CBR.active) {
        log.info("WAGMI Claim Before Rebase is active");
        if (settings_1.settings.functions.WAGMI_CBR.setTimeoutInfo.setTime == true) {
            setInterval(() => {
                (0, WAGMI_CBR_1.default)();
            }, settings_1.settings.functions.WAGMI_CBR.setTimeoutInfo.interval);
        }
        else {
            (0, WAGMI_CBR_1.default)();
        }
    }
    if (settings_1.settings.functions.WAGMI_SAR.active) {
        log.info("WAGMI Sell After Rebase is active");
        if (settings_1.settings.functions.WAGMI_SAR.setTimeoutInfo.setTime == true) {
            setInterval(() => {
                (0, WAGMI_SAR_1.default)();
            }, settings_1.settings.functions.WAGMI_SAR.setTimeoutInfo.interval);
        }
        else {
            (0, WAGMI_SAR_1.default)();
        }
    }
});
main().catch((e) => {
    console.log(e);
    process.exit(1);
});
