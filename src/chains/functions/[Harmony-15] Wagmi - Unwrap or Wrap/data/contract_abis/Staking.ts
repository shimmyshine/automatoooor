import { ContractInterface } from "ethers";

export const StakingABI: ContractInterface = [
  {
    type: "constructor",
    stateMutability: "nonpayable",
    inputs: [
      {
        name: "_WAGMI",
        type: "address",
        internalType: "address",
      },
      {
        name: "_sWAGMI",
        internalType: "address",
        type: "address",
      },
      {
        name: "_duration",
        type: "uint32",
        internalType: "uint32",
      },
      {
        type: "uint256",
        name: "_firstEpochNumber",
        internalType: "uint256",
      },
      {
        internalType: "uint32",
        name: "_firstEpochTime",
        type: "uint32",
      },
    ],
  },
  {
    anonymous: false,
    type: "event",
    name: "OwnershipTransferred",
    inputs: [
      {
        type: "address",
        indexed: true,
        name: "previousOwner",
        internalType: "address",
      },
      {
        name: "newOwner",
        indexed: true,
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    stateMutability: "view",
    inputs: [],
    name: "WAGMI",
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    type: "function",
  },
  {
    name: "distributor",
    stateMutability: "view",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    type: "function",
  },
  {
    outputs: [
      {
        internalType: "uint256",
        type: "uint256",
        name: "number",
      },
      {
        type: "uint256",
        internalType: "uint256",
        name: "distribute",
      },
      {
        name: "duration",
        internalType: "uint32",
        type: "uint32",
      },
      {
        name: "endTime",
        type: "uint32",
        internalType: "uint32",
      },
    ],
    name: "epoch",
    inputs: [],
    type: "function",
    stateMutability: "view",
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    name: "locker",
  },
  {
    outputs: [
      {
        name: "",
        internalType: "address",
        type: "address",
      },
    ],
    type: "function",
    inputs: [],
    name: "policy",
    stateMutability: "view",
  },
  {
    name: "pullPolicy",
    type: "function",
    outputs: [],
    inputs: [],
    stateMutability: "nonpayable",
  },
  {
    inputs: [
      {
        internalType: "address",
        type: "address",
        name: "newPolicy_",
      },
    ],
    outputs: [],
    type: "function",
    stateMutability: "nonpayable",
    name: "pushPolicy",
  },
  {
    name: "renouncePolicy",
    stateMutability: "nonpayable",
    outputs: [],
    type: "function",
    inputs: [],
  },
  {
    name: "sWAGMI",
    inputs: [],
    type: "function",
    stateMutability: "view",
    outputs: [
      {
        internalType: "address",
        type: "address",
        name: "",
      },
    ],
  },
  {
    stateMutability: "view",
    outputs: [
      {
        type: "uint256",
        internalType: "uint256",
        name: "",
      },
    ],
    name: "totalBonus",
    inputs: [],
    type: "function",
  },
  {
    name: "warmupContract",
    stateMutability: "view",
    type: "function",
    outputs: [
      {
        type: "address",
        name: "",
        internalType: "address",
      },
    ],
    inputs: [],
  },
  {
    name: "warmupInfo",
    inputs: [
      {
        type: "address",
        name: "",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "deposit",
        type: "uint256",
        internalType: "uint256",
      },
      {
        type: "uint256",
        internalType: "uint256",
        name: "gons",
      },
      {
        name: "expiry",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "lock",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    name: "warmupPeriod",
    stateMutability: "view",
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
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
    type: "function",
    inputs: [
      {
        type: "uint256",
        internalType: "uint256",
        name: "_amount",
      },
      {
        type: "address",
        internalType: "address",
        name: "_recipient",
      },
    ],
    name: "stake",
    stateMutability: "nonpayable",
  },
  {
    inputs: [
      {
        type: "address",
        name: "_recipient",
        internalType: "address",
      },
    ],
    name: "claim",
    type: "function",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    name: "forfeit",
    outputs: [],
    stateMutability: "nonpayable",
    inputs: [],
    type: "function",
  },
  {
    stateMutability: "nonpayable",
    name: "toggleDepositLock",
    outputs: [],
    type: "function",
    inputs: [],
  },
  {
    name: "unstake",
    stateMutability: "nonpayable",
    inputs: [
      {
        internalType: "uint256",
        type: "uint256",
        name: "_amount",
      },
      {
        type: "bool",
        internalType: "bool",
        name: "_trigger",
      },
    ],
    type: "function",
    outputs: [],
  },
  {
    type: "function",
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    name: "index",
    stateMutability: "view",
    inputs: [],
  },
  {
    name: "rebase",
    inputs: [],
    outputs: [],
    type: "function",
    stateMutability: "nonpayable",
  },
  {
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    type: "function",
    stateMutability: "view",
    name: "contractBalance",
    inputs: [],
  },
  {
    type: "function",
    inputs: [
      {
        internalType: "uint256",
        type: "uint256",
        name: "_amount",
      },
    ],
    stateMutability: "nonpayable",
    outputs: [],
    name: "giveLockBonus",
  },
  {
    outputs: [],
    type: "function",
    name: "returnLockBonus",
    stateMutability: "nonpayable",
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
  },
  {
    inputs: [
      {
        type: "uint8",
        name: "_contract",
        internalType: "enum Staking.CONTRACTS",
      },
      {
        name: "_address",
        type: "address",
        internalType: "address",
      },
    ],
    name: "setContract",
    type: "function",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      {
        internalType: "uint256",
        name: "_warmupPeriod",
        type: "uint256",
      },
    ],
    outputs: [],
    name: "setWarmup",
  },
];
