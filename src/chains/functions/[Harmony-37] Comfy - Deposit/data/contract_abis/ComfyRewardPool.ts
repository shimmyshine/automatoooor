import { ContractInterface } from "ethers";

export const ComfyRewardPool: ContractInterface = [
  {
    type: "constructor",
    stateMutability: "nonpayable",
    inputs: [
      {
        type: "address",
        internalType: "address",
        name: "_comfy",
      },
      {
        type: "uint256",
        name: "_poolStartTime",
        internalType: "uint256",
      },
    ],
  },
  {
    anonymous: false,
    name: "Deposit",
    inputs: [
      {
        internalType: "address",
        indexed: true,
        name: "user",
        type: "address",
      },
      {
        type: "uint256",
        internalType: "uint256",
        indexed: true,
        name: "pid",
      },
      {
        type: "uint256",
        indexed: false,
        name: "amount",
        internalType: "uint256",
      },
    ],
    type: "event",
  },
  {
    anonymous: false,
    type: "event",
    name: "EmergencyWithdraw",
    inputs: [
      {
        internalType: "address",
        type: "address",
        indexed: true,
        name: "user",
      },
      {
        internalType: "uint256",
        name: "pid",
        indexed: true,
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        indexed: false,
        type: "uint256",
      },
    ],
  },
  {
    type: "event",
    inputs: [
      {
        name: "user",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        indexed: false,
        type: "uint256",
        internalType: "uint256",
        name: "amount",
      },
    ],
    name: "RewardPaid",
    anonymous: false,
  },
  {
    anonymous: false,
    type: "event",
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
        indexed: true,
      },
      {
        type: "uint256",
        name: "pid",
        indexed: true,
        internalType: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        type: "uint256",
        name: "amount",
      },
    ],
    name: "Withdraw",
  },
  {
    stateMutability: "view",
    name: "comfy",
    type: "function",
    inputs: [],
    outputs: [
      {
        type: "address",
        internalType: "contract IERC20",
        name: "",
      },
    ],
  },
  {
    type: "function",
    name: "epochComfyPerSecond",
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
    inputs: [
      {
        name: "",
        internalType: "uint256",
        type: "uint256",
      },
    ],
  },
  {
    type: "function",
    inputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    name: "epochEndTimes",
    stateMutability: "view",
    outputs: [
      {
        type: "uint256",
        internalType: "uint256",
        name: "",
      },
    ],
  },
  {
    name: "epochTotalRewards",
    stateMutability: "view",
    type: "function",
    outputs: [
      {
        name: "",
        internalType: "uint256",
        type: "uint256",
      },
    ],
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
  },
  {
    name: "operator",
    inputs: [],
    outputs: [
      {
        name: "",
        internalType: "address",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    stateMutability: "view",
    name: "poolInfo",
    type: "function",
    outputs: [
      {
        internalType: "contract IERC20",
        type: "address",
        name: "token",
      },
      {
        internalType: "uint256",
        name: "allocPoint",
        type: "uint256",
      },
      {
        type: "uint256",
        internalType: "uint256",
        name: "lastRewardTime",
      },
      {
        type: "uint256",
        internalType: "uint256",
        name: "accComfyPerShare",
      },
      {
        name: "isStarted",
        type: "bool",
        internalType: "bool",
      },
    ],
    inputs: [
      {
        type: "uint256",
        internalType: "uint256",
        name: "",
      },
    ],
  },
  {
    stateMutability: "view",
    inputs: [],
    outputs: [
      {
        internalType: "uint256",
        type: "uint256",
        name: "",
      },
    ],
    name: "poolStartTime",
    type: "function",
  },
  {
    name: "totalAllocPoint",
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    inputs: [],
    type: "function",
    stateMutability: "view",
  },
  {
    name: "userInfo",
    inputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
    outputs: [
      {
        type: "uint256",
        internalType: "uint256",
        name: "amount",
      },
      {
        internalType: "uint256",
        type: "uint256",
        name: "rewardDebt",
      },
    ],
  },
  {
    type: "function",
    name: "poolLength",
    inputs: [],
    outputs: [
      {
        name: "pools",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    outputs: [],
    stateMutability: "nonpayable",
    inputs: [
      {
        internalType: "uint256",
        name: "_allocPoint",
        type: "uint256",
      },
      {
        internalType: "contract IERC20",
        name: "_token",
        type: "address",
      },
      {
        type: "bool",
        name: "_withUpdate",
        internalType: "bool",
      },
      {
        type: "uint256",
        name: "_lastRewardTime",
        internalType: "uint256",
      },
    ],
    name: "add",
    type: "function",
  },
  {
    stateMutability: "nonpayable",
    outputs: [],
    type: "function",
    inputs: [
      {
        name: "_pid",
        type: "uint256",
        internalType: "uint256",
      },
      {
        internalType: "uint256",
        name: "_allocPoint",
        type: "uint256",
      },
    ],
    name: "set",
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
    type: "function",
    inputs: [
      {
        name: "_fromTime",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_toTime",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    name: "getGeneratedReward",
  },
  {
    name: "pendingCOMFY",
    type: "function",
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
    inputs: [
      {
        name: "_pid",
        type: "uint256",
        internalType: "uint256",
      },
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
  },
  {
    inputs: [],
    type: "function",
    outputs: [],
    name: "massUpdatePools",
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    inputs: [
      {
        internalType: "uint256",
        type: "uint256",
        name: "_pid",
      },
    ],
    name: "updatePool",
    outputs: [],
  },
  {
    outputs: [],
    name: "deposit",
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      {
        internalType: "uint256",
        type: "uint256",
        name: "_pid",
      },
      {
        name: "_amount",
        internalType: "uint256",
        type: "uint256",
      },
    ],
  },
  {
    type: "function",
    outputs: [],
    name: "withdraw",
    stateMutability: "nonpayable",
    inputs: [
      {
        name: "_pid",
        internalType: "uint256",
        type: "uint256",
      },
      {
        type: "uint256",
        name: "_amount",
        internalType: "uint256",
      },
    ],
  },
  {
    stateMutability: "nonpayable",
    inputs: [
      {
        internalType: "uint256[]",
        type: "uint256[]",
        name: "_pids",
      },
    ],
    outputs: [],
    name: "claimRewards",
    type: "function",
  },
  {
    stateMutability: "nonpayable",
    outputs: [],
    name: "emergencyWithdraw",
    type: "function",
    inputs: [
      {
        name: "_pid",
        type: "uint256",
        internalType: "uint256",
      },
    ],
  },
  {
    outputs: [],
    type: "function",
    stateMutability: "nonpayable",
    name: "setOperator",
    inputs: [
      {
        internalType: "address",
        name: "_operator",
        type: "address",
      },
    ],
  },
  {
    outputs: [],
    name: "governanceRecoverUnsupported",
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      {
        name: "_token",
        internalType: "contract IERC20",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        type: "address",
        name: "to",
        internalType: "address",
      },
    ],
  },
];
