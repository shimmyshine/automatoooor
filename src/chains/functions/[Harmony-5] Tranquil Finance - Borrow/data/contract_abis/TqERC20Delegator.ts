import { ContractInterface } from "ethers";

export const TqERC20DelegatorABI: ContractInterface = [
  {
    payable: false,
    stateMutability: "nonpayable",
    inputs: [
      {
        internalType: "address",
        name: "underlying_",
        type: "address",
      },
      {
        internalType: "contract ComptrollerInterface",
        name: "comptroller_",
        type: "address",
      },
      {
        name: "interestRateModel_",
        type: "address",
        internalType: "contract InterestRateModel",
      },
      {
        type: "uint256",
        internalType: "uint256",
        name: "initialExchangeRateMantissa_",
      },
      {
        name: "name_",
        type: "string",
        internalType: "string",
      },
      {
        name: "symbol_",
        type: "string",
        internalType: "string",
      },
      {
        type: "uint8",
        name: "decimals_",
        internalType: "uint8",
      },
      {
        name: "admin_",
        internalType: "address payable",
        type: "address",
      },
      {
        type: "address",
        name: "implementation_",
        internalType: "address",
      },
      {
        internalType: "bytes",
        name: "becomeImplementationData",
        type: "bytes",
      },
    ],
    type: "constructor",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        type: "uint256",
        indexed: false,
        name: "cashPrior",
        internalType: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "interestAccumulated",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "borrowIndex",
        type: "uint256",
        indexed: false,
      },
      {
        type: "uint256",
        indexed: false,
        name: "totalBorrows",
        internalType: "uint256",
      },
    ],
    name: "AccrueInterest",
  },
  {
    name: "Approval",
    inputs: [
      {
        name: "owner",
        type: "address",
        internalType: "address",
        indexed: true,
      },
      {
        name: "spender",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        internalType: "uint256",
        indexed: false,
        name: "amount",
        type: "uint256",
      },
    ],
    type: "event",
    anonymous: false,
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "borrower",
        type: "address",
        indexed: false,
      },
      {
        name: "borrowAmount",
        internalType: "uint256",
        indexed: false,
        type: "uint256",
      },
      {
        name: "accountBorrows",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        internalType: "uint256",
        indexed: false,
        name: "totalBorrows",
        type: "uint256",
      },
    ],
    anonymous: false,
    name: "Borrow",
    type: "event",
  },
  {
    inputs: [
      {
        name: "error",
        indexed: false,
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "info",
        type: "uint256",
        internalType: "uint256",
        indexed: false,
      },
      {
        type: "uint256",
        internalType: "uint256",
        name: "detail",
        indexed: false,
      },
    ],
    anonymous: false,
    name: "Failure",
    type: "event",
  },
  {
    type: "event",
    inputs: [
      {
        name: "liquidator",
        type: "address",
        internalType: "address",
        indexed: false,
      },
      {
        name: "borrower",
        type: "address",
        internalType: "address",
        indexed: false,
      },
      {
        internalType: "uint256",
        indexed: false,
        type: "uint256",
        name: "repayAmount",
      },
      {
        indexed: false,
        type: "address",
        internalType: "address",
        name: "tqTokenCollateral",
      },
      {
        internalType: "uint256",
        name: "seizeTokens",
        type: "uint256",
        indexed: false,
      },
    ],
    anonymous: false,
    name: "LiquidateBorrow",
  },
  {
    name: "Mint",
    inputs: [
      {
        indexed: false,
        name: "minter",
        internalType: "address",
        type: "address",
      },
      {
        internalType: "uint256",
        type: "uint256",
        indexed: false,
        name: "mintAmount",
      },
      {
        type: "uint256",
        internalType: "uint256",
        indexed: false,
        name: "mintTokens",
      },
    ],
    type: "event",
    anonymous: false,
  },
  {
    anonymous: false,
    inputs: [
      {
        internalType: "address",
        indexed: false,
        name: "oldAdmin",
        type: "address",
      },
      {
        internalType: "address",
        indexed: false,
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "NewAdmin",
    type: "event",
  },
  {
    name: "NewComptroller",
    anonymous: false,
    inputs: [
      {
        type: "address",
        internalType: "contract ComptrollerInterface",
        name: "oldComptroller",
        indexed: false,
      },
      {
        internalType: "contract ComptrollerInterface",
        type: "address",
        indexed: false,
        name: "newComptroller",
      },
    ],
    type: "event",
  },
  {
    anonymous: false,
    name: "NewImplementation",
    inputs: [
      {
        internalType: "address",
        indexed: false,
        name: "oldImplementation",
        type: "address",
      },
      {
        indexed: false,
        type: "address",
        name: "newImplementation",
        internalType: "address",
      },
    ],
    type: "event",
  },
  {
    anonymous: false,
    name: "NewMarketInterestRateModel",
    type: "event",
    inputs: [
      {
        name: "oldInterestRateModel",
        type: "address",
        internalType: "contract InterestRateModel",
        indexed: false,
      },
      {
        type: "address",
        name: "newInterestRateModel",
        indexed: false,
        internalType: "contract InterestRateModel",
      },
    ],
  },
  {
    name: "NewPendingAdmin",
    type: "event",
    inputs: [
      {
        name: "oldPendingAdmin",
        internalType: "address",
        indexed: false,
        type: "address",
      },
      {
        internalType: "address",
        name: "newPendingAdmin",
        type: "address",
        indexed: false,
      },
    ],
    anonymous: false,
  },
  {
    anonymous: false,
    inputs: [
      {
        name: "oldProtocolSeizeShareMantissa",
        indexed: false,
        internalType: "uint256",
        type: "uint256",
      },
      {
        name: "newProtocolSeizeShareMantissa",
        indexed: false,
        type: "uint256",
        internalType: "uint256",
      },
    ],
    type: "event",
    name: "NewProtocolSeizeShare",
  },
  {
    anonymous: false,
    inputs: [
      {
        internalType: "uint256",
        name: "oldReserveFactorMantissa",
        type: "uint256",
        indexed: false,
      },
      {
        type: "uint256",
        indexed: false,
        internalType: "uint256",
        name: "newReserveFactorMantissa",
      },
    ],
    type: "event",
    name: "NewReserveFactor",
  },
  {
    name: "Redeem",
    anonymous: false,
    type: "event",
    inputs: [
      {
        indexed: false,
        internalType: "address",
        type: "address",
        name: "redeemer",
      },
      {
        name: "redeemAmount",
        indexed: false,
        type: "uint256",
        internalType: "uint256",
      },
      {
        type: "uint256",
        indexed: false,
        name: "redeemTokens",
        internalType: "uint256",
      },
    ],
  },
  {
    anonymous: false,
    type: "event",
    inputs: [
      {
        name: "payer",
        indexed: false,
        type: "address",
        internalType: "address",
      },
      {
        name: "borrower",
        indexed: false,
        internalType: "address",
        type: "address",
      },
      {
        type: "uint256",
        internalType: "uint256",
        indexed: false,
        name: "repayAmount",
      },
      {
        type: "uint256",
        indexed: false,
        internalType: "uint256",
        name: "accountBorrows",
      },
      {
        internalType: "uint256",
        name: "totalBorrows",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "RepayBorrow",
  },
  {
    anonymous: false,
    name: "ReservesAdded",
    type: "event",
    inputs: [
      {
        internalType: "address",
        indexed: false,
        name: "benefactor",
        type: "address",
      },
      {
        indexed: false,
        name: "addAmount",
        type: "uint256",
        internalType: "uint256",
      },
      {
        type: "uint256",
        indexed: false,
        name: "newTotalReserves",
        internalType: "uint256",
      },
    ],
  },
  {
    name: "ReservesReduced",
    type: "event",
    inputs: [
      {
        type: "address",
        indexed: false,
        name: "admin",
        internalType: "address",
      },
      {
        internalType: "uint256",
        indexed: false,
        type: "uint256",
        name: "reduceAmount",
      },
      {
        type: "uint256",
        name: "newTotalReserves",
        internalType: "uint256",
        indexed: false,
      },
    ],
    anonymous: false,
  },
  {
    name: "Transfer",
    anonymous: false,
    type: "event",
    inputs: [
      {
        name: "from",
        internalType: "address",
        indexed: true,
        type: "address",
      },
      {
        indexed: true,
        type: "address",
        name: "to",
        internalType: "address",
      },
      {
        name: "amount",
        indexed: false,
        type: "uint256",
        internalType: "uint256",
      },
    ],
  },
  {
    type: "fallback",
    payable: true,
    stateMutability: "payable",
  },
  {
    name: "accrualBlockTimestamp",
    payable: false,
    inputs: [],
    stateMutability: "view",
    type: "function",
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    constant: true,
  },
  {
    stateMutability: "view",
    payable: false,
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    type: "function",
    inputs: [],
    name: "admin",
    constant: true,
  },
  {
    type: "function",
    constant: true,
    stateMutability: "view",
    inputs: [],
    payable: false,
    name: "borrowIndex",
    outputs: [
      {
        type: "uint256",
        internalType: "uint256",
        name: "",
      },
    ],
  },
  {
    constant: true,
    inputs: [],
    type: "function",
    name: "comptroller",
    stateMutability: "view",
    outputs: [
      {
        name: "",
        internalType: "contract ComptrollerInterface",
        type: "address",
      },
    ],
    payable: false,
  },
  {
    inputs: [],
    name: "decimals",
    stateMutability: "view",
    type: "function",
    constant: true,
    outputs: [
      {
        name: "",
        type: "uint8",
        internalType: "uint8",
      },
    ],
    payable: false,
  },
  {
    type: "function",
    outputs: [
      {
        type: "address",
        internalType: "address",
        name: "",
      },
    ],
    payable: false,
    stateMutability: "view",
    name: "implementation",
    constant: true,
    inputs: [],
  },
  {
    type: "function",
    inputs: [],
    constant: true,
    payable: false,
    stateMutability: "view",
    outputs: [
      {
        internalType: "contract InterestRateModel",
        name: "",
        type: "address",
      },
    ],
    name: "interestRateModel",
  },
  {
    name: "isTqToken",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    inputs: [],
    payable: false,
    type: "function",
    constant: true,
  },
  {
    outputs: [
      {
        name: "",
        type: "string",
        internalType: "string",
      },
    ],
    inputs: [],
    stateMutability: "view",
    payable: false,
    type: "function",
    name: "name",
    constant: true,
  },
  {
    constant: true,
    name: "pendingAdmin",
    inputs: [],
    stateMutability: "view",
    type: "function",
    payable: false,
    outputs: [
      {
        internalType: "address payable",
        type: "address",
        name: "",
      },
    ],
  },
  {
    payable: false,
    outputs: [
      {
        internalType: "uint256",
        type: "uint256",
        name: "",
      },
    ],
    constant: true,
    name: "protocolSeizeShareMantissa",
    stateMutability: "view",
    inputs: [],
    type: "function",
  },
  {
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
    stateMutability: "view",
    payable: false,
  },
  {
    payable: false,
    type: "function",
    constant: true,
    stateMutability: "view",
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    inputs: [],
  },
  {
    payable: false,
    inputs: [],
    name: "totalBorrows",
    type: "function",
    outputs: [
      {
        type: "uint256",
        internalType: "uint256",
        name: "",
      },
    ],
    constant: true,
    stateMutability: "view",
  },
  {
    constant: true,
    stateMutability: "view",
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    inputs: [],
    name: "totalReserves",
    payable: false,
    type: "function",
  },
  {
    constant: true,
    payable: false,
    inputs: [],
    stateMutability: "view",
    outputs: [
      {
        type: "uint256",
        internalType: "uint256",
        name: "",
      },
    ],
    name: "totalSupply",
    type: "function",
  },
  {
    name: "underlying",
    type: "function",
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    constant: true,
    stateMutability: "view",
    payable: false,
    inputs: [],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    payable: false,
    outputs: [],
    constant: false,
    name: "_setImplementation",
    inputs: [
      {
        name: "implementation_",
        type: "address",
        internalType: "address",
      },
      {
        internalType: "bool",
        name: "allowResign",
        type: "bool",
      },
      {
        type: "bytes",
        internalType: "bytes",
        name: "becomeImplementationData",
      },
    ],
  },
  {
    constant: false,
    stateMutability: "nonpayable",
    payable: false,
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    inputs: [
      {
        type: "uint256",
        name: "mintAmount",
        internalType: "uint256",
      },
    ],
    name: "mint",
    type: "function",
  },
  {
    payable: false,
    name: "redeem",
    type: "function",
    constant: false,
    stateMutability: "nonpayable",
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    inputs: [
      {
        name: "redeemTokens",
        type: "uint256",
        internalType: "uint256",
      },
    ],
  },
  {
    type: "function",
    outputs: [
      {
        internalType: "uint256",
        type: "uint256",
        name: "",
      },
    ],
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        type: "uint256",
        name: "redeemAmount",
      },
    ],
    stateMutability: "nonpayable",
    payable: false,
    name: "redeemUnderlying",
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
    inputs: [
      {
        internalType: "uint256",
        type: "uint256",
        name: "borrowAmount",
      },
    ],
    stateMutability: "nonpayable",
    name: "borrow",
    payable: false,
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
    stateMutability: "nonpayable",
    payable: false,
    constant: false,
    inputs: [
      {
        name: "repayAmount",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    type: "function",
    name: "repayBorrow",
  },
  {
    name: "repayBorrowBehalf",
    type: "function",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    constant: false,
    inputs: [
      {
        name: "borrower",
        type: "address",
        internalType: "address",
      },
      {
        name: "repayAmount",
        internalType: "uint256",
        type: "uint256",
      },
    ],
    payable: false,
  },
  {
    constant: false,
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    payable: false,
    name: "liquidateBorrow",
    inputs: [
      {
        name: "borrower",
        type: "address",
        internalType: "address",
      },
      {
        type: "uint256",
        internalType: "uint256",
        name: "repayAmount",
      },
      {
        internalType: "contract TqTokenInterface",
        name: "tqTokenCollateral",
        type: "address",
      },
    ],
    type: "function",
    stateMutability: "nonpayable",
  },
  {
    outputs: [
      {
        type: "bool",
        name: "",
        internalType: "bool",
      },
    ],
    stateMutability: "nonpayable",
    name: "transfer",
    constant: false,
    payable: false,
    inputs: [
      {
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        name: "amount",
        internalType: "uint256",
        type: "uint256",
      },
    ],
    type: "function",
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    name: "transferFrom",
    payable: false,
    inputs: [
      {
        internalType: "address",
        type: "address",
        name: "src",
      },
      {
        type: "address",
        internalType: "address",
        name: "dst",
      },
      {
        type: "uint256",
        name: "amount",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "bool",
        internalType: "bool",
        name: "",
      },
    ],
    constant: false,
  },
  {
    type: "function",
    inputs: [
      {
        name: "spender",
        internalType: "address",
        type: "address",
      },
      {
        name: "amount",
        internalType: "uint256",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    name: "approve",
    payable: false,
    constant: false,
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
  },
  {
    payable: false,
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    constant: true,
    inputs: [
      {
        name: "owner",
        type: "address",
        internalType: "address",
      },
      {
        name: "spender",
        internalType: "address",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    payable: false,
    inputs: [
      {
        type: "address",
        name: "owner",
        internalType: "address",
      },
    ],
    type: "function",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    constant: true,
    name: "balanceOf",
    stateMutability: "view",
  },
  {
    outputs: [
      {
        internalType: "uint256",
        type: "uint256",
        name: "",
      },
    ],
    stateMutability: "nonpayable",
    inputs: [
      {
        internalType: "address",
        type: "address",
        name: "owner",
      },
    ],
    type: "function",
    name: "balanceOfUnderlying",
    payable: false,
    constant: false,
  },
  {
    outputs: [
      {
        name: "",
        internalType: "uint256",
        type: "uint256",
      },
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
      {
        type: "uint256",
        internalType: "uint256",
        name: "",
      },
    ],
    name: "getAccountSnapshot",
    stateMutability: "view",
    constant: true,
    type: "function",
    payable: false,
    inputs: [
      {
        name: "account",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    payable: false,
    inputs: [],
    stateMutability: "view",
    outputs: [
      {
        type: "uint256",
        internalType: "uint256",
        name: "",
      },
    ],
    constant: true,
    type: "function",
    name: "borrowRatePerTimestamp",
  },
  {
    payable: false,
    stateMutability: "view",
    type: "function",
    constant: true,
    name: "supplyRatePerTimestamp",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
  },
  {
    payable: false,
    type: "function",
    constant: false,
    name: "totalBorrowsCurrent",
    stateMutability: "nonpayable",
    outputs: [
      {
        type: "uint256",
        internalType: "uint256",
        name: "",
      },
    ],
    inputs: [],
  },
  {
    constant: false,
    outputs: [
      {
        name: "",
        internalType: "uint256",
        type: "uint256",
      },
    ],
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "borrowBalanceCurrent",
    stateMutability: "nonpayable",
    payable: false,
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
    stateMutability: "view",
    type: "function",
    inputs: [
      {
        type: "address",
        internalType: "address",
        name: "account",
      },
    ],
    name: "borrowBalanceStored",
    payable: false,
    constant: true,
  },
  {
    name: "exchangeRateCurrent",
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    inputs: [],
    type: "function",
    payable: false,
    constant: false,
  },
  {
    stateMutability: "view",
    payable: false,
    outputs: [
      {
        type: "uint256",
        internalType: "uint256",
        name: "",
      },
    ],
    type: "function",
    name: "exchangeRateStored",
    constant: true,
    inputs: [],
  },
  {
    constant: true,
    type: "function",
    payable: false,
    stateMutability: "view",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    name: "getCash",
  },
  {
    type: "function",
    name: "accrueInterest",
    inputs: [],
    stateMutability: "nonpayable",
    payable: false,
    outputs: [
      {
        name: "",
        internalType: "uint256",
        type: "uint256",
      },
    ],
    constant: false,
  },
  {
    payable: false,
    type: "function",
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    constant: false,
    name: "seize",
    inputs: [
      {
        internalType: "address",
        name: "liquidator",
        type: "address",
      },
      {
        type: "address",
        internalType: "address",
        name: "borrower",
      },
      {
        name: "seizeTokens",
        internalType: "uint256",
        type: "uint256",
      },
    ],
  },
  {
    inputs: [
      {
        type: "address",
        internalType: "contract EIP20NonStandardInterface",
        name: "token",
      },
    ],
    constant: false,
    outputs: [],
    type: "function",
    name: "sweepToken",
    stateMutability: "nonpayable",
    payable: false,
  },
  {
    constant: false,
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
        name: "newPendingAdmin",
        internalType: "address payable",
        type: "address",
      },
    ],
    type: "function",
    stateMutability: "nonpayable",
    name: "_setPendingAdmin",
  },
  {
    constant: false,
    stateMutability: "nonpayable",
    payable: false,
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    name: "_setComptroller",
    inputs: [
      {
        name: "newComptroller",
        internalType: "contract ComptrollerInterface",
        type: "address",
      },
    ],
    type: "function",
  },
  {
    outputs: [
      {
        type: "uint256",
        internalType: "uint256",
        name: "",
      },
    ],
    inputs: [
      {
        type: "uint256",
        internalType: "uint256",
        name: "newReserveFactorMantissa",
      },
    ],
    name: "_setReserveFactor",
    stateMutability: "nonpayable",
    type: "function",
    payable: false,
    constant: false,
  },
  {
    payable: false,
    constant: false,
    inputs: [],
    name: "_acceptAdmin",
    stateMutability: "nonpayable",
    type: "function",
    outputs: [
      {
        name: "",
        internalType: "uint256",
        type: "uint256",
      },
    ],
  },
  {
    inputs: [
      {
        name: "addAmount",
        internalType: "uint256",
        type: "uint256",
      },
    ],
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
    stateMutability: "nonpayable",
    name: "_addReserves",
  },
  {
    inputs: [
      {
        type: "uint256",
        internalType: "uint256",
        name: "reduceAmount",
      },
    ],
    name: "_reduceReserves",
    stateMutability: "nonpayable",
    constant: false,
    outputs: [
      {
        name: "",
        internalType: "uint256",
        type: "uint256",
      },
    ],
    type: "function",
    payable: false,
  },
  {
    name: "_setInterestRateModel",
    stateMutability: "nonpayable",
    payable: false,
    inputs: [
      {
        name: "newInterestRateModel",
        internalType: "contract InterestRateModel",
        type: "address",
      },
    ],
    constant: false,
    type: "function",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
  },
  {
    name: "_setProtocolSeizeShare",
    payable: false,
    inputs: [
      {
        type: "uint256",
        internalType: "uint256",
        name: "newProtocolSeizeShareMantissa",
      },
    ],
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
  },
  {
    outputs: [
      {
        name: "",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    constant: false,
    inputs: [
      {
        name: "data",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "delegateToImplementation",
    payable: false,
  },
  {
    payable: false,
    inputs: [
      {
        internalType: "bytes",
        type: "bytes",
        name: "data",
      },
    ],
    stateMutability: "view",
    name: "delegateToViewImplementation",
    outputs: [
      {
        name: "",
        internalType: "bytes",
        type: "bytes",
      },
    ],
    type: "function",
    constant: true,
  },
];
