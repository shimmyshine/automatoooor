import { ContractInterface } from "ethers";

export const tqONEABI: ContractInterface = [
  {
    payable: false,
    type: "constructor",
    stateMutability: "nonpayable",
    inputs: [
      {
        name: "comptroller_",
        type: "address",
        internalType: "contract ComptrollerInterface",
      },
      {
        type: "address",
        internalType: "contract InterestRateModel",
        name: "interestRateModel_",
      },
      {
        internalType: "uint256",
        name: "initialExchangeRateMantissa_",
        type: "uint256",
      },
      {
        type: "string",
        internalType: "string",
        name: "name_",
      },
      {
        type: "string",
        internalType: "string",
        name: "symbol_",
      },
      {
        name: "decimals_",
        internalType: "uint8",
        type: "uint8",
      },
      {
        name: "admin_",
        internalType: "address payable",
        type: "address",
      },
    ],
  },
  {
    name: "AccrueInterest",
    anonymous: false,
    inputs: [
      {
        internalType: "uint256",
        name: "cashPrior",
        type: "uint256",
        indexed: false,
      },
      {
        name: "interestAccumulated",
        indexed: false,
        type: "uint256",
        internalType: "uint256",
      },
      {
        type: "uint256",
        internalType: "uint256",
        name: "borrowIndex",
        indexed: false,
      },
      {
        internalType: "uint256",
        name: "totalBorrows",
        indexed: false,
        type: "uint256",
      },
    ],
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        internalType: "address",
        indexed: true,
        name: "owner",
        type: "address",
      },
      {
        name: "spender",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256",
        indexed: false,
      },
    ],
    type: "event",
    name: "Approval",
  },
  {
    type: "event",
    name: "Borrow",
    anonymous: false,
    inputs: [
      {
        type: "address",
        indexed: false,
        name: "borrower",
        internalType: "address",
      },
      {
        type: "uint256",
        internalType: "uint256",
        indexed: false,
        name: "borrowAmount",
      },
      {
        type: "uint256",
        internalType: "uint256",
        name: "accountBorrows",
        indexed: false,
      },
      {
        name: "totalBorrows",
        indexed: false,
        internalType: "uint256",
        type: "uint256",
      },
    ],
  },
  {
    anonymous: false,
    inputs: [
      {
        internalType: "uint256",
        indexed: false,
        name: "error",
        type: "uint256",
      },
      {
        type: "uint256",
        name: "info",
        internalType: "uint256",
        indexed: false,
      },
      {
        type: "uint256",
        name: "detail",
        internalType: "uint256",
        indexed: false,
      },
    ],
    type: "event",
    name: "Failure",
  },
  {
    anonymous: false,
    name: "LiquidateBorrow",
    type: "event",
    inputs: [
      {
        name: "liquidator",
        internalType: "address",
        indexed: false,
        type: "address",
      },
      {
        type: "address",
        internalType: "address",
        name: "borrower",
        indexed: false,
      },
      {
        indexed: false,
        name: "repayAmount",
        type: "uint256",
        internalType: "uint256",
      },
      {
        internalType: "address",
        type: "address",
        name: "tqTokenCollateral",
        indexed: false,
      },
      {
        name: "seizeTokens",
        type: "uint256",
        internalType: "uint256",
        indexed: false,
      },
    ],
  },
  {
    anonymous: false,
    name: "Mint",
    type: "event",
    inputs: [
      {
        name: "minter",
        internalType: "address",
        indexed: false,
        type: "address",
      },
      {
        name: "mintAmount",
        type: "uint256",
        internalType: "uint256",
        indexed: false,
      },
      {
        type: "uint256",
        indexed: false,
        internalType: "uint256",
        name: "mintTokens",
      },
    ],
  },
  {
    name: "NewAdmin",
    inputs: [
      {
        type: "address",
        name: "oldAdmin",
        internalType: "address",
        indexed: false,
      },
      {
        type: "address",
        name: "newAdmin",
        internalType: "address",
        indexed: false,
      },
    ],
    anonymous: false,
    type: "event",
  },
  {
    type: "event",
    anonymous: false,
    name: "NewComptroller",
    inputs: [
      {
        name: "oldComptroller",
        internalType: "contract ComptrollerInterface",
        type: "address",
        indexed: false,
      },
      {
        name: "newComptroller",
        indexed: false,
        type: "address",
        internalType: "contract ComptrollerInterface",
      },
    ],
  },
  {
    name: "NewMarketInterestRateModel",
    anonymous: false,
    type: "event",
    inputs: [
      {
        name: "oldInterestRateModel",
        indexed: false,
        type: "address",
        internalType: "contract InterestRateModel",
      },
      {
        type: "address",
        internalType: "contract InterestRateModel",
        name: "newInterestRateModel",
        indexed: false,
      },
    ],
  },
  {
    name: "NewPendingAdmin",
    type: "event",
    inputs: [
      {
        indexed: false,
        type: "address",
        internalType: "address",
        name: "oldPendingAdmin",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newPendingAdmin",
        type: "address",
      },
    ],
    anonymous: false,
  },
  {
    anonymous: false,
    inputs: [
      {
        type: "uint256",
        indexed: false,
        name: "oldProtocolSeizeShareMantissa",
        internalType: "uint256",
      },
      {
        name: "newProtocolSeizeShareMantissa",
        type: "uint256",
        internalType: "uint256",
        indexed: false,
      },
    ],
    type: "event",
    name: "NewProtocolSeizeShare",
  },
  {
    anonymous: false,
    inputs: [
      {
        name: "oldReserveFactorMantissa",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "newReserveFactorMantissa",
        indexed: false,
        type: "uint256",
        internalType: "uint256",
      },
    ],
    name: "NewReserveFactor",
    type: "event",
  },
  {
    inputs: [
      {
        name: "redeemer",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        type: "uint256",
        indexed: false,
        name: "redeemAmount",
        internalType: "uint256",
      },
      {
        internalType: "uint256",
        name: "redeemTokens",
        indexed: false,
        type: "uint256",
      },
    ],
    name: "Redeem",
    anonymous: false,
    type: "event",
  },
  {
    anonymous: false,
    type: "event",
    inputs: [
      {
        indexed: false,
        name: "payer",
        internalType: "address",
        type: "address",
      },
      {
        name: "borrower",
        internalType: "address",
        indexed: false,
        type: "address",
      },
      {
        name: "repayAmount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        internalType: "uint256",
        name: "accountBorrows",
        type: "uint256",
        indexed: false,
      },
      {
        name: "totalBorrows",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "RepayBorrow",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "benefactor",
        type: "address",
      },
      {
        name: "addAmount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        indexed: false,
        name: "newTotalReserves",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    type: "event",
    name: "ReservesAdded",
  },
  {
    anonymous: false,
    type: "event",
    name: "ReservesReduced",
    inputs: [
      {
        internalType: "address",
        indexed: false,
        type: "address",
        name: "admin",
      },
      {
        name: "reduceAmount",
        indexed: false,
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "newTotalReserves",
        type: "uint256",
        internalType: "uint256",
        indexed: false,
      },
    ],
  },
  {
    name: "Transfer",
    inputs: [
      {
        name: "from",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        indexed: true,
        internalType: "address",
        type: "address",
        name: "to",
      },
      {
        internalType: "uint256",
        indexed: false,
        name: "amount",
        type: "uint256",
      },
    ],
    anonymous: false,
    type: "event",
  },
  {
    stateMutability: "payable",
    payable: true,
    type: "fallback",
  },
  {
    type: "function",
    name: "_acceptAdmin",
    payable: false,
    stateMutability: "nonpayable",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    constant: false,
    inputs: [],
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "reduceAmount",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    outputs: [
      {
        name: "",
        internalType: "uint256",
        type: "uint256",
      },
    ],
    constant: false,
    payable: false,
    name: "_reduceReserves",
    type: "function",
  },
  {
    name: "_setComptroller",
    outputs: [
      {
        name: "",
        internalType: "uint256",
        type: "uint256",
      },
    ],
    inputs: [
      {
        type: "address",
        name: "newComptroller",
        internalType: "contract ComptrollerInterface",
      },
    ],
    payable: false,
    type: "function",
    constant: false,
    stateMutability: "nonpayable",
  },
  {
    stateMutability: "nonpayable",
    constant: false,
    type: "function",
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    inputs: [
      {
        type: "address",
        internalType: "contract InterestRateModel",
        name: "newInterestRateModel",
      },
    ],
    name: "_setInterestRateModel",
    payable: false,
  },
  {
    type: "function",
    inputs: [
      {
        name: "newPendingAdmin",
        type: "address",
        internalType: "address payable",
      },
    ],
    constant: false,
    payable: false,
    stateMutability: "nonpayable",
    outputs: [
      {
        type: "uint256",
        internalType: "uint256",
        name: "",
      },
    ],
    name: "_setPendingAdmin",
  },
  {
    name: "_setProtocolSeizeShare",
    outputs: [
      {
        type: "uint256",
        internalType: "uint256",
        name: "",
      },
    ],
    stateMutability: "nonpayable",
    payable: false,
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        type: "uint256",
        name: "newProtocolSeizeShareMantissa",
      },
    ],
    type: "function",
  },
  {
    constant: false,
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    name: "_setReserveFactor",
    inputs: [
      {
        name: "newReserveFactorMantissa",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    type: "function",
    payable: false,
    stateMutability: "nonpayable",
  },
  {
    constant: true,
    outputs: [
      {
        name: "",
        internalType: "uint256",
        type: "uint256",
      },
    ],
    inputs: [],
    stateMutability: "view",
    payable: false,
    name: "accrualBlockTimestamp",
    type: "function",
  },
  {
    type: "function",
    constant: false,
    inputs: [],
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    name: "accrueInterest",
    stateMutability: "nonpayable",
  },
  {
    inputs: [],
    payable: false,
    constant: true,
    stateMutability: "view",
    outputs: [
      {
        name: "",
        internalType: "address payable",
        type: "address",
      },
    ],
    type: "function",
    name: "admin",
  },
  {
    outputs: [
      {
        type: "uint256",
        internalType: "uint256",
        name: "",
      },
    ],
    payable: false,
    inputs: [
      {
        name: "owner",
        internalType: "address",
        type: "address",
      },
      {
        name: "spender",
        internalType: "address",
        type: "address",
      },
    ],
    constant: true,
    stateMutability: "view",
    type: "function",
    name: "allowance",
  },
  {
    name: "approve",
    outputs: [
      {
        name: "",
        internalType: "bool",
        type: "bool",
      },
    ],
    constant: false,
    stateMutability: "nonpayable",
    payable: false,
    inputs: [
      {
        name: "spender",
        type: "address",
        internalType: "address",
      },
      {
        type: "uint256",
        internalType: "uint256",
        name: "amount",
      },
    ],
    type: "function",
  },
  {
    name: "balanceOf",
    constant: true,
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    inputs: [
      {
        name: "owner",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
    payable: false,
  },
  {
    inputs: [
      {
        name: "owner",
        type: "address",
        internalType: "address",
      },
    ],
    constant: false,
    stateMutability: "nonpayable",
    name: "balanceOfUnderlying",
    payable: false,
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    type: "function",
  },
  {
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    constant: false,
    payable: false,
    inputs: [
      {
        type: "address",
        internalType: "address",
        name: "account",
      },
    ],
    name: "borrowBalanceCurrent",
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "view",
    payable: false,
    inputs: [
      {
        name: "account",
        type: "address",
        internalType: "address",
      },
    ],
    name: "borrowBalanceStored",
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    constant: true,
    type: "function",
  },
  {
    inputs: [],
    constant: true,
    stateMutability: "view",
    type: "function",
    payable: false,
    name: "borrowIndex",
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
  },
  {
    type: "function",
    name: "borrowRatePerTimestamp",
    inputs: [],
    constant: true,
    payable: false,
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    name: "comptroller",
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract ComptrollerInterface",
      },
    ],
    payable: false,
    inputs: [],
    type: "function",
    stateMutability: "view",
    constant: true,
  },
  {
    name: "decimals",
    inputs: [],
    payable: false,
    outputs: [
      {
        name: "",
        type: "uint8",
        internalType: "uint8",
      },
    ],
    stateMutability: "view",
    constant: true,
    type: "function",
  },
  {
    outputs: [
      {
        name: "",
        internalType: "uint256",
        type: "uint256",
      },
    ],
    constant: false,
    inputs: [],
    stateMutability: "nonpayable",
    name: "exchangeRateCurrent",
    type: "function",
    payable: false,
  },
  {
    stateMutability: "view",
    outputs: [
      {
        internalType: "uint256",
        type: "uint256",
        name: "",
      },
    ],
    inputs: [],
    name: "exchangeRateStored",
    payable: false,
    constant: true,
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        type: "address",
        name: "account",
      },
    ],
    type: "function",
    name: "getAccountSnapshot",
    outputs: [
      {
        type: "uint256",
        internalType: "uint256",
        name: "",
      },
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
      {
        type: "uint256",
        internalType: "uint256",
        name: "",
      },
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    constant: true,
    stateMutability: "view",
    payable: false,
  },
  {
    stateMutability: "view",
    payable: false,
    inputs: [],
    outputs: [
      {
        name: "",
        internalType: "uint256",
        type: "uint256",
      },
    ],
    type: "function",
    name: "getCash",
    constant: true,
  },
  {
    outputs: [],
    payable: false,
    inputs: [
      {
        type: "address",
        internalType: "contract ComptrollerInterface",
        name: "comptroller_",
      },
      {
        type: "address",
        name: "interestRateModel_",
        internalType: "contract InterestRateModel",
      },
      {
        type: "uint256",
        name: "initialExchangeRateMantissa_",
        internalType: "uint256",
      },
      {
        type: "string",
        internalType: "string",
        name: "name_",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
      {
        type: "uint8",
        name: "decimals_",
        internalType: "uint8",
      },
    ],
    stateMutability: "nonpayable",
    name: "initialize",
    type: "function",
    constant: false,
  },
  {
    payable: false,
    name: "interestRateModel",
    constant: true,
    stateMutability: "view",
    type: "function",
    outputs: [
      {
        internalType: "contract InterestRateModel",
        type: "address",
        name: "",
      },
    ],
    inputs: [],
  },
  {
    outputs: [
      {
        name: "",
        internalType: "bool",
        type: "bool",
      },
    ],
    constant: true,
    type: "function",
    inputs: [],
    payable: false,
    name: "isTqToken",
    stateMutability: "view",
  },
  {
    payable: false,
    name: "name",
    stateMutability: "view",
    outputs: [
      {
        name: "",
        type: "string",
        internalType: "string",
      },
    ],
    type: "function",
    constant: true,
    inputs: [],
  },
  {
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    name: "pendingAdmin",
    stateMutability: "view",
    type: "function",
    payable: false,
    constant: true,
    inputs: [],
  },
  {
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "protocolSeizeShareMantissa",
    inputs: [],
    type: "function",
    constant: true,
    payable: false,
    stateMutability: "view",
  },
  {
    stateMutability: "view",
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    inputs: [],
    name: "reserveFactorMantissa",
    type: "function",
    constant: true,
    payable: false,
  },
  {
    constant: false,
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    type: "function",
    stateMutability: "nonpayable",
    name: "seize",
    inputs: [
      {
        name: "liquidator",
        type: "address",
        internalType: "address",
      },
      {
        name: "borrower",
        internalType: "address",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "seizeTokens",
        type: "uint256",
      },
    ],
    payable: false,
  },
  {
    type: "function",
    constant: true,
    stateMutability: "view",
    outputs: [
      {
        type: "uint256",
        internalType: "uint256",
        name: "",
      },
    ],
    inputs: [],
    name: "supplyRatePerTimestamp",
    payable: false,
  },
  {
    payable: false,
    type: "function",
    constant: true,
    name: "symbol",
    outputs: [
      {
        name: "",
        internalType: "string",
        type: "string",
      },
    ],
    inputs: [],
    stateMutability: "view",
  },
  {
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    inputs: [],
    payable: false,
    stateMutability: "view",
    name: "totalBorrows",
    constant: true,
    type: "function",
  },
  {
    stateMutability: "nonpayable",
    name: "totalBorrowsCurrent",
    payable: false,
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    constant: false,
    type: "function",
    inputs: [],
  },
  {
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    type: "function",
    name: "totalReserves",
    stateMutability: "view",
    inputs: [],
    payable: false,
    constant: true,
  },
  {
    outputs: [
      {
        type: "uint256",
        internalType: "uint256",
        name: "",
      },
    ],
    name: "totalSupply",
    constant: true,
    payable: false,
    type: "function",
    stateMutability: "view",
    inputs: [],
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        internalType: "uint256",
        type: "uint256",
        name: "amount",
      },
    ],
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "transfer",
    payable: false,
  },
  {
    inputs: [
      {
        internalType: "address",
        type: "address",
        name: "src",
      },
      {
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    name: "transferFrom",
    payable: false,
    type: "function",
    outputs: [
      {
        type: "bool",
        internalType: "bool",
        name: "",
      },
    ],
    constant: false,
    stateMutability: "nonpayable",
  },
  {
    payable: true,
    inputs: [],
    name: "mint",
    outputs: [],
    constant: false,
    stateMutability: "payable",
    type: "function",
  },
  {
    payable: false,
    type: "function",
    stateMutability: "nonpayable",
    inputs: [
      {
        internalType: "uint256",
        name: "redeemTokens",
        type: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        internalType: "uint256",
        type: "uint256",
      },
    ],
    name: "redeem",
    constant: false,
  },
  {
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    constant: false,
    type: "function",
    stateMutability: "nonpayable",
    payable: false,
    inputs: [
      {
        type: "uint256",
        internalType: "uint256",
        name: "redeemAmount",
      },
    ],
    name: "redeemUnderlying",
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    outputs: [
      {
        name: "",
        internalType: "uint256",
        type: "uint256",
      },
    ],
    constant: false,
    payable: false,
    name: "borrow",
    inputs: [
      {
        name: "borrowAmount",
        type: "uint256",
        internalType: "uint256",
      },
    ],
  },
  {
    stateMutability: "payable",
    payable: true,
    constant: false,
    outputs: [],
    type: "function",
    name: "repayBorrow",
    inputs: [],
  },
  {
    name: "repayBorrowBehalf",
    inputs: [
      {
        name: "borrower",
        type: "address",
        internalType: "address",
      },
    ],
    payable: true,
    stateMutability: "payable",
    outputs: [],
    constant: false,
    type: "function",
  },
  {
    inputs: [
      {
        type: "address",
        name: "borrower",
        internalType: "address",
      },
      {
        type: "address",
        name: "tqTokenCollateral",
        internalType: "contract TqToken",
      },
    ],
    outputs: [],
    payable: true,
    constant: false,
    stateMutability: "payable",
    name: "liquidateBorrow",
    type: "function",
  },
  {
    stateMutability: "payable",
    constant: false,
    inputs: [],
    type: "function",
    payable: true,
    name: "_addReserves",
    outputs: [
      {
        type: "uint256",
        internalType: "uint256",
        name: "",
      },
    ],
  },
];
