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
  Fantom: {
    Private:
      process.env.PRIVATE_KEY_FANTOM !== undefined
        ? process.env.PRIVATE_KEY_FANTOM
        : "",
    Public:
      process.env.PUBLIC_KEY_FANTOM !== undefined
        ? process.env.PUBLIC_KEY_FANTOM
        : "",
  },
  Avalanche: {
    Private:
      process.env.PRIVATE_KEY_AVAX !== undefined
        ? process.env.PRIVATE_KEY_AVAX
        : "",
    Public:
      process.env.PUBLIC_KEY_AVAX !== undefined
        ? process.env.PUBLIC_KEY_AVAX
        : "",
  },
  Binance_Smart_Chain: {
    Private:
      process.env.PRIVATE_KEY_BSC !== undefined
        ? process.env.PRIVATE_KEY_BSC
        : "",
    Public:
      process.env.PUBLIC_KEY_BSC !== undefined
        ? process.env.PUBLIC_KEY_BSC
        : "",
  },
  Ethereum: {
    Private:
      process.env.PRIVATE_KEY_ETH !== undefined
        ? process.env.PRIVATE_KEY_ETH
        : "",
    Public:
      process.env.PUBLIC_KEY_ETH !== undefined
        ? process.env.PUBLIC_KEY_ETH
        : "",
  },
  Aurora: {
    Private:
      process.env.PRIVATE_KEY_AURORA !== undefined
        ? process.env.PRIVATE_KEY_AURORA
        : "",
    Public:
      process.env.PUBLIC_KEY_AURORA !== undefined
        ? process.env.PUBLIC_KEY_AURORA
        : "",
  },
  Polygon: {
    Private:
      process.env.PRIVATE_KEY_POLY !== undefined
        ? process.env.PRIVATE_KEY_POLY
        : "",
    Public:
      process.env.PUBLIC_KEY_POLY !== undefined
        ? process.env.PUBLIC_KEY_POLY
        : "",
  },
  zkSync: {
    Private:
      process.env.PRIVATE_KEY_zkSync !== undefined
        ? process.env.PRIVATE_KEY_zkSync
        : "",
    Public:
      process.env.PUBLIC_KEY_zkSync !== undefined
        ? process.env.PUBLIC_KEY_zkSync
        : "",
  },
  RSK: {
    Private:
      process.env.PRIVATE_KEY_RSK !== undefined
        ? process.env.PRIVATE_KEY_RSK
        : "",
    Public:
      process.env.PUBLIC_KEY_RSK !== undefined
        ? process.env.PUBLIC_KEY_RSK
        : "",
  },
  Telos: {
    Private:
      process.env.PRIVATE_KEY_TELOS !== undefined
        ? process.env.PRIVATE_KEY_TELOS
        : "",
    Public:
      process.env.PUBLIC_KEY_TELOS !== undefined
        ? process.env.PUBLIC_KEY_TELOS
        : "",
  },
};
