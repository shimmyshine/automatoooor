import { accounts } from "../data/accounts";

export const getAddress = (networkToUseName: string): string => {
    return accounts[networkToUseName].Public;
}

export const getPK = (networkToUseName: string): string => {
    return accounts[networkToUseName].Private;
}