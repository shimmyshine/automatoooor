import { ContractInterface } from "ethers";

export const sWAGMIABI: ContractInterface = [
  {
    type: "constructor",
    inputs: [],
    stateMutability: "nonpayable",
  },
  {
    name: "Approval",
    type: "event",
    anonymous: false,
    inputs: [
      {
        internalType: "address",
        type: "address",
        indexed: true,
        name: "owner",
      },
      {
        indexed: true,
        name: "spender",
        type: "address",
        internalType: "address",
      },
      {
        name: "value",
        internalType: "uint256",
        indexed: false,
        type: "uint256",
      },
    ],
  },
  {
    name: "LogRebase",
    anonymous: false,
    type: "event",
    inputs: [
      {
        internalType: "uint256",
        indexed: true,
        name: "epoch",
        type: "uint256",
      },
      {
        indexed: false,
        name: "rebase",
        type: "uint256",
        internalType: "uint256",
      },
      {
        internalType: "uint256",
        indexed: false,
        name: "index",
        type: "uint256",
      },
    ],
  },
  {
    inputs: [
      {
        type: "address",
        internalType: "address",
        name: "stakingContract",
        indexed: false,
      },
    ],
    anonymous: false,
    name: "LogStakingContractUpdated",
    type: "event",
  },
  {
    name: "LogSupply",
    inputs: [
      {
        indexed: true,
        type: "uint256",
        name: "epoch",
        internalType: "uint256",
      },
      {
        name: "timestamp",
        internalType: "uint256",
        indexed: false,
        type: "uint256",
      },
      {
        type: "uint256",
        name: "totalSupply",
        internalType: "uint256",
        indexed: false,
      },
    ],
    anonymous: false,
    type: "event",
  },
  {
    name: "OwnershipTransferred",
    type: "event",
    inputs: [
      {
        type: "address",
        name: "previousOwner",
        internalType: "address",
        indexed: true,
      },
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
        indexed: true,
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "from",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        indexed: true,
        type: "address",
        name: "to",
        internalType: "address",
      },
      {
        name: "value",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    name: "Transfer",
  },
  {
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "DOMAIN_SEPARATOR",
    stateMutability: "view",
    inputs: [],
    type: "function",
  },
  {
    inputs: [],
    name: "INDEX",
    type: "function",
    stateMutability: "view",
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
    stateMutability: "view",
    name: "PERMIT_TYPEHASH",
    inputs: [],
    outputs: [
      {
        type: "bytes32",
        internalType: "bytes32",
        name: "",
      },
    ],
  },
  {
    name: "decimals",
    inputs: [],
    stateMutability: "view",
    outputs: [
      {
        name: "",
        type: "uint8",
        internalType: "uint8",
      },
    ],
    type: "function",
  },
  {
    type: "function",
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    name: "initializer",
    inputs: [],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "name",
    outputs: [
      {
        type: "string",
        name: "",
        internalType: "string",
      },
    ],
    inputs: [],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "nonces",
    outputs: [
      {
        name: "",
        internalType: "uint256",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    inputs: [
      {
        internalType: "address",
        type: "address",
        name: "owner",
      },
    ],
  },
  {
    outputs: [],
    name: "permit",
    inputs: [
      {
        type: "address",
        internalType: "address",
        name: "owner",
      },
      {
        type: "address",
        internalType: "address",
        name: "spender",
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "deadline",
        internalType: "uint256",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        type: "bytes32",
        internalType: "bytes32",
        name: "r",
      },
      {
        type: "bytes32",
        name: "s",
        internalType: "bytes32",
      },
    ],
    type: "function",
    stateMutability: "nonpayable",
  },
  {
    name: "policy",
    inputs: [],
    stateMutability: "view",
    outputs: [
      {
        type: "address",
        internalType: "address",
        name: "",
      },
    ],
    type: "function",
  },
  {
    name: "pullPolicy",
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    name: "pushPolicy",
    inputs: [
      {
        name: "newPolicy_",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
  },
  {
    outputs: [
      {
        internalType: "uint256",
        name: "epoch",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rebase",
        type: "uint256",
      },
      {
        name: "totalStakedBefore",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "totalStakedAfter",
        internalType: "uint256",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountRebased",
        type: "uint256",
      },
      {
        internalType: "uint256",
        type: "uint256",
        name: "index",
      },
      {
        name: "timeOccured",
        type: "uint32",
        internalType: "uint32",
      },
    ],
    inputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
    name: "rebases",
    type: "function",
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    inputs: [],
    name: "renouncePolicy",
    outputs: [],
  },
  {
    stateMutability: "view",
    inputs: [],
    name: "stakingContract",
    type: "function",
    outputs: [
      {
        type: "address",
        internalType: "address",
        name: "",
      },
    ],
  },
  {
    inputs: [],
    outputs: [
      {
        type: "string",
        name: "",
        internalType: "string",
      },
    ],
    name: "symbol",
    type: "function",
    stateMutability: "view",
  },
  {
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    name: "totalSupply",
    type: "function",
    stateMutability: "view",
    inputs: [],
  },
  {
    name: "initialize",
    type: "function",
    inputs: [
      {
        type: "address",
        name: "stakingContract_",
        internalType: "address",
      },
    ],
    stateMutability: "nonpayable",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
  },
  {
    outputs: [
      {
        name: "",
        internalType: "bool",
        type: "bool",
      },
    ],
    name: "setIndex",
    type: "function",
    stateMutability: "nonpayable",
    inputs: [
      {
        name: "_INDEX",
        internalType: "uint256",
        type: "uint256",
      },
    ],
  },
  {
    type: "function",
    name: "rebase",
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    inputs: [
      {
        name: "profit_",
        type: "uint256",
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "epoch_",
        internalType: "uint256",
      },
    ],
  },
  {
    name: "balanceOf",
    type: "function",
    inputs: [
      {
        type: "address",
        internalType: "address",
        name: "who",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    name: "gonsForBalance",
    inputs: [
      {
        type: "uint256",
        internalType: "uint256",
        name: "amount",
      },
    ],
    type: "function",
    stateMutability: "view",
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
    name: "balanceForGons",
    stateMutability: "view",
    inputs: [
      {
        internalType: "uint256",
        name: "gons",
        type: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
  },
  {
    inputs: [],
    outputs: [
      {
        type: "uint256",
        internalType: "uint256",
        name: "",
      },
    ],
    type: "function",
    name: "circulatingSupply",
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    outputs: [
      {
        internalType: "uint256",
        type: "uint256",
        name: "",
      },
    ],
    name: "index",
    stateMutability: "view",
  },
  {
    name: "transfer",
    outputs: [
      {
        type: "bool",
        name: "",
        internalType: "bool",
      },
    ],
    inputs: [
      {
        name: "to",
        internalType: "address",
        type: "address",
      },
      {
        internalType: "uint256",
        type: "uint256",
        name: "value",
      },
    ],
    type: "function",
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      {
        type: "address",
        name: "owner_",
        internalType: "address",
      },
      {
        type: "address",
        internalType: "address",
        name: "spender",
      },
    ],
    stateMutability: "view",
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    name: "allowance",
  },
  {
    stateMutability: "nonpayable",
    name: "transferFrom",
    type: "function",
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        type: "address",
        name: "to",
        internalType: "address",
      },
      {
        type: "uint256",
        internalType: "uint256",
        name: "value",
      },
    ],
    outputs: [
      {
        type: "bool",
        internalType: "bool",
        name: "",
      },
    ],
  },
  {
    outputs: [
      {
        type: "bool",
        name: "",
        internalType: "bool",
      },
    ],
    type: "function",
    name: "approve",
    stateMutability: "nonpayable",
    inputs: [
      {
        type: "address",
        internalType: "address",
        name: "spender",
      },
      {
        type: "uint256",
        name: "value",
        internalType: "uint256",
      },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    name: "increaseAllowance",
    inputs: [
      {
        internalType: "address",
        type: "address",
        name: "spender",
      },
      {
        type: "uint256",
        name: "addedValue",
        internalType: "uint256",
      },
    ],
  },
  {
    outputs: [
      {
        name: "",
        internalType: "bool",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    inputs: [
      {
        name: "spender",
        internalType: "address",
        type: "address",
      },
      {
        type: "uint256",
        name: "subtractedValue",
        internalType: "uint256",
      },
    ],
    name: "decreaseAllowance",
    type: "function",
  },
];
