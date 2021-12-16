import { ContractInterface } from "ethers";

export const wsWAGMIABI: ContractInterface = [
  {
    stateMutability: "nonpayable",
    type: "constructor",
    inputs: [
      {
        type: "address",
        name: "_sWAGMI",
        internalType: "address",
      },
    ],
  },
  {
    anonymous: false,
    inputs: [
      {
        name: "owner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        type: "address",
        internalType: "address",
        name: "spender",
        indexed: true,
      },
      {
        internalType: "uint256",
        name: "value",
        indexed: false,
        type: "uint256",
      },
    ],
    type: "event",
    name: "Approval",
  },
  {
    anonymous: false,
    inputs: [
      {
        name: "from",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        type: "address",
        internalType: "address",
        name: "to",
        indexed: true,
      },
      {
        internalType: "uint256",
        name: "value",
        indexed: false,
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    stateMutability: "view",
    inputs: [
      {
        name: "owner",
        type: "address",
        internalType: "address",
      },
      {
        name: "spender",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "allowance",
    type: "function",
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      {
        type: "address",
        internalType: "address",
        name: "spender",
      },
      {
        type: "uint256",
        internalType: "uint256",
        name: "amount",
      },
    ],
    outputs: [
      {
        internalType: "bool",
        type: "bool",
        name: "",
      },
    ],
    name: "approve",
  },
  {
    outputs: [
      {
        internalType: "uint256",
        type: "uint256",
        name: "",
      },
    ],
    name: "balanceOf",
    stateMutability: "view",
    type: "function",
    inputs: [
      {
        name: "account",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    name: "decimals",
    stateMutability: "view",
    type: "function",
    inputs: [],
  },
  {
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
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
  },
  {
    name: "increaseAllowance",
    type: "function",
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        type: "uint256",
        name: "addedValue",
      },
    ],
    outputs: [
      {
        type: "bool",
        internalType: "bool",
        name: "",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    stateMutability: "view",
    name: "name",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "string",
        internalType: "string",
      },
    ],
    type: "function",
  },
  {
    inputs: [],
    stateMutability: "view",
    type: "function",
    outputs: [
      {
        name: "",
        internalType: "address",
        type: "address",
      },
    ],
    name: "sWAGMI",
  },
  {
    inputs: [],
    type: "function",
    stateMutability: "view",
    name: "symbol",
    outputs: [
      {
        type: "string",
        internalType: "string",
        name: "",
      },
    ],
  },
  {
    name: "totalSupply",
    type: "function",
    inputs: [],
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
    inputs: [
      {
        name: "recipient",
        type: "address",
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        internalType: "bool",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    name: "transfer",
    type: "function",
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    inputs: [
      {
        name: "sender",
        internalType: "address",
        type: "address",
      },
      {
        type: "address",
        internalType: "address",
        name: "recipient",
      },
      {
        name: "amount",
        internalType: "uint256",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
  },
  {
    name: "wrap",
    type: "function",
    inputs: [
      {
        internalType: "uint256",
        type: "uint256",
        name: "_amount",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    name: "unwrap",
    stateMutability: "nonpayable",
    inputs: [
      {
        type: "uint256",
        internalType: "uint256",
        name: "_amount",
      },
    ],
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
    name: "wsWAGMITosWAGMI",
    stateMutability: "view",
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    type: "function",
    inputs: [
      {
        type: "uint256",
        internalType: "uint256",
        name: "_amount",
      },
    ],
  },
  {
    inputs: [
      {
        internalType: "uint256",
        type: "uint256",
        name: "_amount",
      },
    ],
    stateMutability: "view",
    type: "function",
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    name: "sWAGMITowsWAGMI",
  },
];
