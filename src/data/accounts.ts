import { Account } from "helpers/Interfaces";

export const accounts: Account = {
  Harmony: {
    Private:
      process.env.PRIVATE_KEY_HARMONY !== undefined
        ? process.env.PRIVATE_KEY_HARMONY
        : "",
    Public:
      process.env.PUBLIC_KEY_HARMONY !== undefined
        ? process.env.PUBLIC_KEY_HARMONY
        : "",
  },
};
