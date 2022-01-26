import { ContractInterface } from "ethers";

export const CShareRewardPool: ContractInterface = [
  {
    type: "constructor",
    stateMutability: "nonpayable",
    inputs: [
      {
        name: "_cshare",
        type: "address",
        internalType: "address",
      },
      {
        internalType: "uint256",
        name: "_poolStartTime",
        type: "uint256",
      },
    ],
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        indexed: true,
        type: "address",
      },
      {
        name: "pid",
        internalType: "uint256",
        indexed: true,
        type: "uint256",
      },
      {
        type: "uint256",
        name: "amount",
        internalType: "uint256",
        indexed: false,
      },
    ],
    name: "Deposit",
    anonymous: false,
    type: "event",
  },
  {
    name: "EmergencyWithdraw",
    type: "event",
    inputs: [
      {
        internalType: "address",
        type: "address",
        name: "user",
        indexed: true,
      },
      {
        indexed: true,
        name: "pid",
        type: "uint256",
        internalType: "uint256",
      },
      {
        type: "uint256",
        indexed: false,
        name: "amount",
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    inputs: [
      {
        internalType: "address",
        type: "address",
        indexed: true,
        name: "user",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "RewardPaid",
    type: "event",
    anonymous: false,
  },
  {
    inputs: [
      {
        type: "address",
        internalType: "address",
        indexed: true,
        name: "user",
      },
      {
        indexed: true,
        name: "pid",
        internalType: "uint256",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        type: "uint256",
        name: "amount",
      },
    ],
    name: "Withdraw",
    anonymous: false,
    type: "event",
  },
  {
    type: "function",
    name: "TOTAL_REWARDS",
    stateMutability: "view",
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
    stateMutability: "view",
    inputs: [],
    outputs: [
      {
        name: "",
        internalType: "uint256",
        type: "uint256",
      },
    ],
    type: "function",
    name: "cSharePerSecond",
  },
  {
    stateMutability: "view",
    outputs: [
      {
        name: "",
        internalType: "contract IERC20",
        type: "address",
      },
    ],
    name: "cshare",
    inputs: [],
    type: "function",
  },
  {
    type: "function",
    outputs: [
      {
        type: "address",
        name: "",
        internalType: "address",
      },
    ],
    stateMutability: "view",
    inputs: [],
    name: "operator",
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
    name: "poolEndTime",
    inputs: [],
  },
  {
    stateMutability: "view",
    type: "function",
    name: "poolInfo",
    outputs: [
      {
        type: "address",
        name: "token",
        internalType: "contract IERC20",
      },
      {
        name: "allocPoint",
        type: "uint256",
        internalType: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastRewardTime",
        type: "uint256",
      },
      {
        type: "uint256",
        name: "accCSharePerShare",
        internalType: "uint256",
      },
      {
        type: "bool",
        name: "isStarted",
        internalType: "bool",
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
    outputs: [
      {
        internalType: "uint256",
        type: "uint256",
        name: "",
      },
    ],
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "poolStartTime",
  },
  {
    type: "function",
    stateMutability: "view",
    inputs: [],
    name: "runningTime",
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
  },
  {
    name: "totalAllocPoint",
    stateMutability: "view",
    inputs: [],
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    type: "function",
  },
  {
    stateMutability: "view",
    type: "function",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        name: "rewardDebt",
        internalType: "uint256",
        type: "uint256",
      },
    ],
    name: "userInfo",
    inputs: [
      {
        internalType: "uint256",
        type: "uint256",
        name: "",
      },
      {
        internalType: "address",
        type: "address",
        name: "",
      },
    ],
  },
  {
    name: "poolLength",
    inputs: [],
    stateMutability: "view",
    type: "function",
    outputs: [
      {
        name: "pools",
        type: "uint256",
        internalType: "uint256",
      },
    ],
  },
  {
    name: "add",
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    inputs: [
      {
        name: "_allocPoint",
        type: "uint256",
        internalType: "uint256",
      },
      {
        type: "address",
        name: "_token",
        internalType: "contract IERC20",
      },
      {
        internalType: "bool",
        name: "_withUpdate",
        type: "bool",
      },
      {
        name: "_lastRewardTime",
        internalType: "uint256",
        type: "uint256",
      },
    ],
  },
  {
    type: "function",
    name: "set",
    stateMutability: "nonpayable",
    inputs: [
      {
        name: "_pid",
        type: "uint256",
        internalType: "uint256",
      },
      {
        type: "uint256",
        internalType: "uint256",
        name: "_allocPoint",
      },
    ],
    outputs: [],
  },
  {
    outputs: [
      {
        type: "uint256",
        internalType: "uint256",
        name: "",
      },
    ],
    stateMutability: "view",
    type: "function",
    inputs: [
      {
        internalType: "uint256",
        name: "_fromTime",
        type: "uint256",
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
        name: "_pid",
      },
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    stateMutability: "view",
    name: "pendingShare",
  },
  {
    inputs: [],
    outputs: [],
    name: "massUpdatePools",
    type: "function",
    stateMutability: "nonpayable",
  },
  {
    name: "updatePool",
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      {
        name: "_pid",
        internalType: "uint256",
        type: "uint256",
      },
    ],
    outputs: [],
  },
  {
    inputs: [
      {
        name: "_pid",
        type: "uint256",
        internalType: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    outputs: [],
    type: "function",
    stateMutability: "nonpayable",
    name: "deposit",
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    inputs: [
      {
        type: "uint256",
        name: "_pid",
        internalType: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    outputs: [],
    name: "withdraw",
  },
  {
    inputs: [
      {
        name: "_pid",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    name: "emergencyWithdraw",
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    name: "claimRewards",
    inputs: [
      {
        internalType: "uint256[]",
        type: "uint256[]",
        name: "_pids",
      },
    ],
    outputs: [],
    type: "function",
    stateMutability: "nonpayable",
  },
  {
    inputs: [
      {
        type: "address",
        internalType: "address",
        name: "_operator",
      },
    ],
    name: "setOperator",
    stateMutability: "nonpayable",
    type: "function",
    outputs: [],
  },
  {
    name: "governanceRecoverUnsupported",
    inputs: [
      {
        name: "_token",
        internalType: "contract IERC20",
        type: "address",
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256",
      },
      {
        internalType: "address",
        type: "address",
        name: "to",
      },
    ],
    stateMutability: "nonpayable",
    outputs: [],
    type: "function",
  },
];
