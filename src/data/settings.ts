import { Settings } from "../helpers/Interfaces";

export const settings: Settings = {
    WAGMI_CBR: {
        active: false, // Claim Before Rebase
        setTimeoutInfo: {
            setTime: false,
            interval: 0
        },
    },
    WAGMI_SAR: {
        active: false, // Sell After Rebase
        setTimeoutInfo: {
            setTime: false,
            interval: 0
        },
    },
    WAGMI_RRC: {
        active: true, // Rebase Rewards Counter
        setTimeoutInfo: {
            setTime: true,
            interval: 20 * 1000
        },
    }
}