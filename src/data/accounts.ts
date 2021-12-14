import * as dotenv from "dotenv";
import { Account } from "helpers/Interfaces";
dotenv.config();

export const accounts: Account = {
    Harmony: {
        Private: (process.env.PRIVATE_KEY_HARMONY !== undefined ? process.env.PRIVATE_KEY_HARMONY : ""),
        Public: (process.env.PUBLIC_ADDRESS_HARMONY !== undefined ? process.env.PUBLIC_ADDRESS_HARMONY : ""),
    },
};