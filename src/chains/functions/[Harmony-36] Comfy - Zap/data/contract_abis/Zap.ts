import { ContractInterface } from "ethers";

export const ZapABI: ContractInterface = [
  {
    stateMutability: "nonpayable",
    inputs: [
      {
        type: "address",
        name: "_WNATIVE",
        internalType: "address",
      },
    ],
    type: "constructor",
  },
  {
    type: "event",
    name: "FeeChange",
    inputs: [
      {
        internalType: "address",
        name: "fee_to",
        indexed: false,
        type: "address",
      },
      {
        type: "uint16",
        internalType: "uint16",
        name: "rate",
        indexed: false,
      },
      {
        type: "uint16",
        internalType: "uint16",
        name: "min",
        indexed: false,
      },
    ],
    anonymous: false,
  },
  {
    inputs: [
      {
        type: "address",
        name: "previousOwner",
        internalType: "address",
        indexed: true,
      },
      {
        type: "address",
        internalType: "address",
        indexed: true,
        name: "newOwner",
      },
    ],
    anonymous: false,
    type: "event",
    name: "OwnershipTransferred",
  },
  {
    stateMutability: "view",
    inputs: [],
    name: "owner",
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
    type: "function",
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      {
        type: "address",
        internalType: "address",
        name: "newOwner",
      },
    ],
    outputs: [],
    name: "transferOwnership",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
  {
    stateMutability: "nonpayable",
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        name: "_to",
        type: "address",
        internalType: "address",
      },
      {
        internalType: "address",
        type: "address",
        name: "routerAddr",
      },
      {
        internalType: "address",
        type: "address",
        name: "_recipient",
      },
    ],
    name: "zapInToken",
    outputs: [],
    type: "function",
  },
  {
    type: "function",
    stateMutability: "view",
    inputs: [
      {
        name: "_from",
        internalType: "address",
        type: "address",
      },
      {
        name: "_to",
        internalType: "address",
        type: "address",
      },
      {
        name: "_router",
        type: "address",
        internalType: "address",
      },
      {
        type: "uint256",
        internalType: "uint256",
        name: "_amt",
      },
    ],
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    name: "estimateZapInToken",
  },
  {
    name: "zapIn",
    outputs: [],
    inputs: [
      {
        name: "_to",
        type: "address",
        internalType: "address",
      },
      {
        name: "routerAddr",
        type: "address",
        internalType: "address",
      },
      {
        internalType: "address",
        type: "address",
        name: "_recipient",
      },
    ],
    type: "function",
    stateMutability: "payable",
  },
  {
    type: "function",
    stateMutability: "view",
    inputs: [
      {
        name: "_LP",
        type: "address",
        internalType: "address",
      },
      {
        name: "_router",
        type: "address",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "_amt",
        internalType: "uint256",
      },
    ],
    name: "estimateZapIn",
    outputs: [
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
    ],
  },
  {
    type: "function",
    outputs: [],
    stateMutability: "nonpayable",
    name: "zapAcross",
    inputs: [
      {
        name: "_from",
        type: "address",
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256",
      },
      {
        type: "address",
        internalType: "address",
        name: "_toRouter",
      },
      {
        internalType: "address",
        type: "address",
        name: "_recipient",
      },
    ],
  },
  {
    name: "zapOut",
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    inputs: [
      {
        name: "_from",
        type: "address",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "amount",
        internalType: "uint256",
      },
      {
        name: "routerAddr",
        type: "address",
        internalType: "address",
      },
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
    ],
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        type: "uint256",
        name: "amount",
        internalType: "uint256",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        name: "routerAddr",
        internalType: "address",
        type: "address",
      },
      {
        name: "_recipient",
        internalType: "address",
        type: "address",
      },
    ],
    outputs: [],
    type: "function",
    name: "zapOutToken",
    stateMutability: "nonpayable",
  },
  {
    outputs: [],
    name: "swapToken",
    type: "function",
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        type: "uint256",
        internalType: "uint256",
        name: "amount",
      },
      {
        type: "address",
        name: "_to",
        internalType: "address",
      },
      {
        name: "routerAddr",
        internalType: "address",
        type: "address",
      },
      {
        name: "_recipient",
        internalType: "address",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    name: "swapToNative",
    outputs: [],
    inputs: [
      {
        name: "_from",
        type: "address",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "amount",
        internalType: "uint256",
      },
      {
        name: "routerAddr",
        type: "address",
        internalType: "address",
      },
      {
        type: "address",
        internalType: "address",
        name: "_recipient",
      },
    ],
  },
  {
    stateMutability: "nonpayable",
    outputs: [],
    name: "setTokenBridgeForRouter",
    type: "function",
    inputs: [
      {
        name: "token",
        type: "address",
        internalType: "address",
      },
      {
        internalType: "address",
        type: "address",
        name: "router",
      },
      {
        internalType: "address",
        name: "bridgeToken",
        type: "address",
      },
    ],
  },
  {
    stateMutability: "nonpayable",
    outputs: [],
    inputs: [
      {
        name: "token",
        internalType: "address",
        type: "address",
      },
    ],
    name: "withdraw",
    type: "function",
  },
  {
    outputs: [],
    name: "setFee",
    type: "function",
    stateMutability: "nonpayable",
    inputs: [
      {
        type: "address",
        name: "addr",
        internalType: "address",
      },
      {
        type: "uint16",
        name: "rate",
        internalType: "uint16",
      },
      {
        name: "min",
        type: "uint16",
        internalType: "uint16",
      },
    ],
  },
];
