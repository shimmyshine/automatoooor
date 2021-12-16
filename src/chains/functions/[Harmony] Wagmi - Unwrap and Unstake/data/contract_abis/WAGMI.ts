import { ContractInterface } from "ethers";

export const WAGMIABI: ContractInterface = [
  {
    type: "constructor",
    stateMutability: "nonpayable",
    inputs: [],
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
        indexed: true,
      },
      {
        indexed: true,
        type: "address",
        name: "spender",
        internalType: "address",
      },
      {
        type: "uint256",
        internalType: "uint256",
        indexed: false,
        name: "value",
      },
    ],
    anonymous: false,
    type: "event",
    name: "Approval",
  },
  {
    anonymous: false,
    name: "OwnershipTransferred",
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        name: "newOwner",
        type: "address",
        internalType: "address",
      },
    ],
    type: "event",
  },
  {
    name: "Transfer",
    anonymous: false,
    inputs: [
      {
        type: "address",
        indexed: true,
        name: "from",
        internalType: "address",
      },
      {
        type: "address",
        name: "to",
        indexed: true,
        internalType: "address",
      },
      {
        name: "value",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    type: "event",
  },
  {
    type: "function",
    inputs: [],
    stateMutability: "view",
    outputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    name: "DOMAIN_SEPARATOR",
  },
  {
    inputs: [],
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    type: "function",
    name: "PERMIT_TYPEHASH",
    stateMutability: "view",
  },
  {
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    type: "function",
    stateMutability: "view",
    inputs: [
      {
        name: "owner",
        internalType: "address",
        type: "address",
      },
      {
        type: "address",
        name: "spender",
        internalType: "address",
      },
    ],
  },
  {
    type: "function",
    name: "approve",
    stateMutability: "nonpayable",
    outputs: [
      {
        internalType: "bool",
        type: "bool",
        name: "",
      },
    ],
    inputs: [
      {
        name: "spender",
        internalType: "address",
        type: "address",
      },
      {
        type: "uint256",
        name: "amount",
        internalType: "uint256",
      },
    ],
  },
  {
    name: "balanceOf",
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
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
    type: "function",
  },
  {
    type: "function",
    inputs: [],
    outputs: [
      {
        type: "uint8",
        name: "",
        internalType: "uint8",
      },
    ],
    name: "decimals",
    stateMutability: "view",
  },
  {
    stateMutability: "nonpayable",
    inputs: [
      {
        name: "spender",
        type: "address",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "subtractedValue",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        internalType: "bool",
        type: "bool",
        name: "",
      },
    ],
    type: "function",
    name: "decreaseAllowance",
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    name: "increaseAllowance",
    inputs: [
      {
        internalType: "address",
        type: "address",
        name: "spender",
      },
      {
        name: "addedValue",
        internalType: "uint256",
        type: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
  },
  {
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    type: "function",
    stateMutability: "view",
    inputs: [],
  },
  {
    type: "function",
    inputs: [
      {
        name: "owner",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        internalType: "uint256",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    name: "nonces",
  },
  {
    outputs: [
      {
        internalType: "address",
        type: "address",
        name: "",
      },
    ],
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "owner",
  },
  {
    type: "function",
    stateMutability: "nonpayable",
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
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256",
      },
      {
        type: "uint256",
        internalType: "uint256",
        name: "deadline",
      },
      {
        type: "uint8",
        internalType: "uint8",
        name: "v",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        type: "bytes32",
        name: "s",
        internalType: "bytes32",
      },
    ],
    outputs: [],
    name: "permit",
  },
  {
    name: "renounceOwnership",
    type: "function",
    outputs: [],
    stateMutability: "nonpayable",
    inputs: [],
  },
  {
    name: "setVault",
    inputs: [
      {
        name: "vault_",
        type: "address",
        internalType: "address",
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
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "symbol",
    stateMutability: "view",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "string",
        internalType: "string",
      },
    ],
  },
  {
    type: "function",
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        type: "uint256",
        internalType: "uint256",
        name: "",
      },
    ],
    stateMutability: "view",
  },
  {
    stateMutability: "nonpayable",
    name: "transfer",
    type: "function",
    outputs: [
      {
        internalType: "bool",
        type: "bool",
        name: "",
      },
    ],
    inputs: [
      {
        type: "address",
        name: "recipient",
        internalType: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
  },
  {
    name: "transferFrom",
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    type: "function",
    stateMutability: "nonpayable",
    inputs: [
      {
        type: "address",
        name: "sender",
        internalType: "address",
      },
      {
        internalType: "address",
        type: "address",
        name: "recipient",
      },
      {
        type: "uint256",
        name: "amount",
        internalType: "uint256",
      },
    ],
  },
  {
    type: "function",
    inputs: [
      {
        name: "newOwner",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "nonpayable",
    name: "transferOwnership",
    outputs: [],
  },
  {
    type: "function",
    name: "vault",
    stateMutability: "view",
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    inputs: [],
  },
  {
    inputs: [
      {
        type: "address",
        name: "account_",
        internalType: "address",
      },
      {
        internalType: "uint256",
        name: "amount_",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
    outputs: [],
    name: "mint",
  },
  {
    type: "function",
    name: "burn",
    outputs: [],
    inputs: [
      {
        name: "amount",
        internalType: "uint256",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account_",
        type: "address",
      },
      {
        type: "uint256",
        name: "amount_",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
    name: "burnFrom",
  },
  {
    name: "_burnFrom",
    outputs: [],
    type: "function",
    inputs: [
      {
        type: "address",
        internalType: "address",
        name: "account_",
      },
      {
        name: "amount_",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
  },
];
