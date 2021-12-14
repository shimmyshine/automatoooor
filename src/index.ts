import { getAddress } from "./helpers/getAddress";
import { getProvider } from "./helpers/getNetworkProvider";
import * as Networks from "./data/networks.json";
import { Logger } from "tslog";
import { settings } from "./data/settings";
import WAGMI_CBR from "./functions/WAGMI_CBR";
import WAGMI_SAR from "./functions/WAGMI_SAR";
import WAGMI_RRC from "./functions/WAGMI_RRC";
import { RebaseCounter } from "./helpers/Interfaces";
import { getSigner } from "./helpers/getSigner";

const log: Logger = new Logger({
    displayFunctionName: false,
    displayFilePath: "hidden",
});

const address: string = getAddress(Networks[0].name);
const provider = getProvider(0);

let rebaseCounter: RebaseCounter = {
    timeStamp: 0,
    nextRebaseTime: "",
    timeToNextRebase: ""
}

const main = async () => {
    log.info("Program started.\n");

    if(settings.WAGMI_RRC.active) {
        log.info("WAGMI Rebase Rewards Counter is active");
        rebaseCounter = await WAGMI_RRC(log, address, provider, settings.WAGMI_RRC);
    }

    if(settings.WAGMI_CBR.active) {
        log.info("WAGMI Claim Before Rebase is active");
        WAGMI_CBR();
    }

    if(settings.WAGMI_SAR.active) {
        log.info("WAGMI Sell After Rebase is active");
        WAGMI_SAR();
    }
};

main().catch((e) => {
    console.log(e);
    process.exit(1);
});