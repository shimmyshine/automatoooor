import { ContractInterface } from "ethers";

export const ComfyABI: ContractInterface = [
  {
    stateMutability: "nonpayable",
    type: "constructor",
    inputs: [],
  },
  {
    anonymous: false,
    name: "Approval",
    type: "event",
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
        indexed: true,
      },
      {
        type: "address",
        internalType: "address",
        indexed: true,
        name: "spender",
      },
      {
        indexed: false,
        name: "value",
        type: "uint256",
        internalType: "uint256",
      },
    ],
  },
  {
    anonymous: false,
    name: "OperatorTransferred",
    type: "event",
    inputs: [
      {
        internalType: "address",
        type: "address",
        indexed: true,
        name: "previousOperator",
      },
      {
        type: "address",
        name: "newOperator",
        indexed: true,
        internalType: "address",
      },
    ],
  },
  {
    anonymous: false,
    name: "OwnershipTransferred",
    inputs: [
      {
        type: "address",
        indexed: true,
        internalType: "address",
        name: "previousOwner",
      },
      {
        indexed: true,
        type: "address",
        name: "newOwner",
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
        internalType: "address",
        name: "from",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
        indexed: true,
      },
      {
        internalType: "uint256",
        indexed: false,
        name: "value",
        type: "uint256",
      },
    ],
    type: "event",
  },
  {
    outputs: [
      {
        name: "",
        internalType: "uint256",
        type: "uint256",
      },
    ],
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "INITIAL_AIRDROP_WALLET_DISTRIBUTION",
  },
  {
    name: "INITIAL_COMFY_POOL_DISTRIBUTION",
    inputs: [],
    type: "function",
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
    stateMutability: "view",
    name: "INITIAL_GENESIS_POOL_DISTRIBUTION",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    type: "function",
    inputs: [],
  },
  {
    name: "allowance",
    stateMutability: "view",
    type: "function",
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
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
        type: "uint256",
        name: "",
      },
    ],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        name: "amount",
        internalType: "uint256",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
  },
  {
    inputs: [
      {
        name: "account",
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
    name: "balanceOf",
    stateMutability: "view",
    type: "function",
  },
  {
    name: "decimals",
    stateMutability: "view",
    type: "function",
    inputs: [],
    outputs: [
      {
        type: "uint8",
        name: "",
        internalType: "uint8",
      },
    ],
  },
  {
    inputs: [
      {
        type: "address",
        name: "spender",
        internalType: "address",
      },
      {
        type: "uint256",
        internalType: "uint256",
        name: "subtractedValue",
      },
    ],
    type: "function",
    stateMutability: "nonpayable",
    outputs: [
      {
        name: "",
        internalType: "bool",
        type: "bool",
      },
    ],
    name: "decreaseAllowance",
  },
  {
    name: "increaseAllowance",
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        type: "uint256",
        internalType: "uint256",
        name: "addedValue",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
    outputs: [
      {
        internalType: "bool",
        type: "bool",
        name: "",
      },
    ],
  },
  {
    stateMutability: "view",
    outputs: [
      {
        internalType: "bool",
        type: "bool",
        name: "",
      },
    ],
    name: "isOperator",
    inputs: [],
    type: "function",
  },
  {
    type: "function",
    stateMutability: "view",
    inputs: [],
    name: "name",
    outputs: [
      {
        name: "",
        type: "string",
        internalType: "string",
      },
    ],
  },
  {
    stateMutability: "view",
    inputs: [],
    outputs: [
      {
        internalType: "address",
        type: "address",
        name: "",
      },
    ],
    type: "function",
    name: "operator",
  },
  {
    stateMutability: "view",
    inputs: [],
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    type: "function",
    name: "owner",
  },
  {
    stateMutability: "nonpayable",
    name: "renounceOwnership",
    type: "function",
    outputs: [],
    inputs: [],
  },
  {
    name: "rewardPoolDistributed",
    stateMutability: "view",
    type: "function",
    outputs: [
      {
        name: "",
        internalType: "bool",
        type: "bool",
      },
    ],
    inputs: [],
  },
  {
    inputs: [],
    outputs: [
      {
        name: "",
        type: "string",
        internalType: "string",
      },
    ],
    type: "function",
    name: "symbol",
    stateMutability: "view",
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
    type: "function",
    name: "totalSupply",
    inputs: [],
  },
  {
    inputs: [
      {
        type: "address",
        internalType: "address",
        name: "recipient",
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
        name: "",
        internalType: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "transfer",
  },
  {
    name: "transferOperator",
    stateMutability: "nonpayable",
    outputs: [],
    type: "function",
    inputs: [
      {
        internalType: "address",
        name: "newOperator_",
        type: "address",
      },
    ],
  },
  {
    name: "transferOwnership",
    outputs: [],
    type: "function",
    inputs: [
      {
        type: "address",
        name: "newOwner",
        internalType: "address",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    inputs: [
      {
        type: "address",
        internalType: "address",
        name: "recipient_",
      },
      {
        name: "amount_",
        internalType: "uint256",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "mint",
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
  },
  {
    name: "burn",
    type: "function",
    inputs: [
      {
        name: "amount",
        internalType: "uint256",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    outputs: [],
  },
  {
    inputs: [
      {
        type: "address",
        name: "account",
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    type: "function",
    stateMutability: "nonpayable",
  },
  {
    inputs: [
      {
        internalType: "address",
        type: "address",
        name: "sender",
      },
      {
        name: "recipient",
        type: "address",
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
        type: "bool",
        name: "",
        internalType: "bool",
      },
    ],
    type: "function",
    stateMutability: "nonpayable",
    name: "transferFrom",
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    name: "distributeReward",
    outputs: [],
    inputs: [
      {
        type: "address",
        internalType: "address",
        name: "_genesisPool",
      },
      {
        internalType: "address",
        name: "_comfyPool",
        type: "address",
      },
      {
        type: "address",
        name: "_airdropWallet",
        internalType: "address",
      },
    ],
  },
  {
    inputs: [
      {
        name: "_token",
        type: "address",
        internalType: "contract IERC20",
      },
      {
        type: "uint256",
        name: "_amount",
        internalType: "uint256",
      },
      {
        type: "address",
        internalType: "address",
        name: "_to",
      },
    ],
    type: "function",
    name: "governanceRecoverUnsupported",
    stateMutability: "nonpayable",
    outputs: [],
  },
];
