export interface Settings {
    [key: string]: {
        active: boolean;
        setTimeoutInfo: {
            setTime: boolean;
            interval: number;
        }
    }
}

export interface RebaseCounter {
    timeStamp: number;
    nextRebaseTime: string;
    timeToNextRebase: string;
}

export interface Account {
    [key: string]: {
        Private: string;
        Public: string;
    }
}

export interface WAGMI_RRC_Settings {
    active: boolean;
    setTimeoutInfo: {
        setTime: boolean;
        interval: number;
    };
}