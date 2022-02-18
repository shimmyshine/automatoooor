import { ContractInterface } from "ethers";

export const xJewelABI: ContractInterface = [
  {
    stateMutability: "nonpayable",
    type: "constructor",
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        name: "_symbol",
        internalType: "string",
        type: "string",
      },
      {
        type: "address",
        internalType: "contract IERC20",
        name: "_govToken",
      },
    ],
  },
  {
    type: "event",
    inputs: [
      {
        type: "address",
        name: "owner",
        indexed: true,
        internalType: "address",
      },
      {
        name: "spender",
        indexed: true,
        internalType: "address",
        type: "address",
      },
      {
        internalType: "uint256",
        type: "uint256",
        indexed: false,
        name: "value",
      },
    ],
    name: "Approval",
    anonymous: false,
  },
  {
    anonymous: false,
    name: "Transfer",
    type: "event",
    inputs: [
      {
        name: "from",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        type: "address",
        name: "to",
        internalType: "address",
        indexed: true,
      },
      {
        name: "value",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
  },
  {
    inputs: [
      {
        name: "owner",
        type: "address",
        internalType: "address",
      },
      {
        type: "address",
        name: "spender",
        internalType: "address",
      },
    ],
    stateMutability: "view",
    name: "allowance",
    type: "function",
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        name: "amount",
        type: "uint256",
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
    name: "approve",
    stateMutability: "nonpayable",
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
    name: "balanceOf",
    outputs: [
      {
        name: "",
        internalType: "uint256",
        type: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    outputs: [
      {
        name: "",
        internalType: "uint8",
        type: "uint8",
      },
    ],
    name: "decimals",
    inputs: [],
    stateMutability: "view",
  },
  {
    name: "decreaseAllowance",
    outputs: [
      {
        name: "",
        internalType: "bool",
        type: "bool",
      },
    ],
    type: "function",
    stateMutability: "nonpayable",
    inputs: [
      {
        type: "address",
        internalType: "address",
        name: "spender",
      },
      {
        type: "uint256",
        internalType: "uint256",
        name: "subtractedValue",
      },
    ],
  },
  {
    stateMutability: "view",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    name: "govToken",
    type: "function",
    inputs: [],
  },
  {
    stateMutability: "nonpayable",
    inputs: [
      {
        name: "spender",
        internalType: "address",
        type: "address",
      },
      {
        type: "uint256",
        internalType: "uint256",
        name: "addedValue",
      },
    ],
    outputs: [
      {
        type: "bool",
        name: "",
        internalType: "bool",
      },
    ],
    type: "function",
    name: "increaseAllowance",
  },
  {
    type: "function",
    stateMutability: "view",
    inputs: [],
    name: "name",
    outputs: [
      {
        name: "",
        internalType: "string",
        type: "string",
      },
    ],
  },
  {
    name: "symbol",
    type: "function",
    outputs: [
      {
        name: "",
        type: "string",
        internalType: "string",
      },
    ],
    stateMutability: "view",
    inputs: [],
  },
  {
    name: "totalSupply",
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    type: "function",
    stateMutability: "view",
    inputs: [],
  },
  {
    name: "transfer",
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    inputs: [
      {
        type: "address",
        name: "recipient",
        internalType: "address",
      },
      {
        type: "uint256",
        internalType: "uint256",
        name: "amount",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        type: "address",
        internalType: "address",
        name: "sender",
      },
      {
        type: "address",
        name: "recipient",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "amount",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    type: "function",
    stateMutability: "nonpayable",
    name: "transferFrom",
  },
  {
    stateMutability: "nonpayable",
    name: "enter",
    outputs: [],
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    type: "function",
  },
  {
    name: "leave",
    stateMutability: "nonpayable",
    type: "function",
    outputs: [],
    inputs: [
      {
        name: "_share",
        type: "uint256",
        internalType: "uint256",
      },
    ],
  },
];
