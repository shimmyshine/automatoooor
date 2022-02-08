import { ContractInterface } from "ethers";

export const ZenDenABI: ContractInterface = [
  {
    name: "Initialized",
    type: "event",
    anonymous: false,
    inputs: [
      {
        internalType: "address",
        type: "address",
        indexed: true,
        name: "executor",
      },
      {
        indexed: false,
        name: "at",
        type: "uint256",
        internalType: "uint256",
      },
    ],
  },
  {
    inputs: [
      {
        indexed: true,
        type: "address",
        name: "user",
        internalType: "address",
      },
      {
        name: "reward",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    anonymous: false,
    name: "RewardAdded",
    type: "event",
  },
  {
    name: "RewardPaid",
    type: "event",
    inputs: [
      {
        name: "user",
        type: "address",
        internalType: "address",
        indexed: true,
      },
      {
        indexed: false,
        type: "uint256",
        name: "reward",
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    inputs: [
      {
        indexed: true,
        name: "user",
        type: "address",
        internalType: "address",
      },
      {
        indexed: false,
        name: "amount",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    name: "Staked",
    anonymous: false,
    type: "event",
  },
  {
    anonymous: false,
    name: "Withdrawn",
    type: "event",
    inputs: [
      {
        name: "user",
        type: "address",
        internalType: "address",
        indexed: true,
      },
      {
        internalType: "uint256",
        type: "uint256",
        name: "amount",
        indexed: false,
      },
    ],
  },
  {
    inputs: [
      {
        type: "address",
        name: "account",
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
    type: "function",
    stateMutability: "view",
    name: "balanceOf",
  },
  {
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    type: "function",
    inputs: [],
    stateMutability: "view",
    name: "comfy",
  },
  {
    type: "function",
    outputs: [
      {
        internalType: "uint256",
        name: "lastSnapshotIndex",
        type: "uint256",
      },
      {
        name: "rewardEarned",
        type: "uint256",
        internalType: "uint256",
      },
      {
        internalType: "uint256",
        type: "uint256",
        name: "epochTimerStart",
      },
    ],
    name: "enjoyers",
    inputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    inputs: [],
    stateMutability: "view",
    outputs: [
      {
        type: "bool",
        internalType: "bool",
        name: "",
      },
    ],
    name: "initialized",
    type: "function",
  },
  {
    inputs: [],
    stateMutability: "view",
    name: "operator",
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
    name: "rewardLockupEpochs",
    type: "function",
    stateMutability: "view",
    inputs: [],
    outputs: [
      {
        name: "",
        internalType: "uint256",
        type: "uint256",
      },
    ],
  },
  {
    stateMutability: "view",
    inputs: [],
    name: "share",
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IERC20",
      },
    ],
    type: "function",
  },
  {
    name: "totalSupply",
    type: "function",
    outputs: [
      {
        name: "",
        internalType: "uint256",
        type: "uint256",
      },
    ],
    inputs: [],
    stateMutability: "view",
  },
  {
    stateMutability: "view",
    inputs: [],
    name: "treasury",
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract ITreasury",
      },
    ],
    type: "function",
  },
  {
    inputs: [],
    outputs: [
      {
        name: "",
        internalType: "uint256",
        type: "uint256",
      },
    ],
    name: "withdrawLockupEpochs",
    type: "function",
    stateMutability: "view",
  },
  {
    stateMutability: "view",
    name: "zenDenHistory",
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    outputs: [
      {
        name: "time",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "rewardReceived",
        internalType: "uint256",
        type: "uint256",
      },
      {
        name: "rewardPerShare",
        internalType: "uint256",
        type: "uint256",
      },
    ],
    type: "function",
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    name: "initialize",
    outputs: [],
    inputs: [
      {
        type: "address",
        name: "_comfy",
        internalType: "contract IERC20",
      },
      {
        name: "_share",
        internalType: "contract IERC20",
        type: "address",
      },
      {
        internalType: "contract ITreasury",
        name: "_treasury",
        type: "address",
      },
    ],
  },
  {
    type: "function",
    outputs: [],
    inputs: [
      {
        name: "_operator",
        type: "address",
        internalType: "address",
      },
    ],
    name: "setOperator",
    stateMutability: "nonpayable",
  },
  {
    name: "setLockUp",
    type: "function",
    inputs: [
      {
        type: "uint256",
        internalType: "uint256",
        name: "_withdrawLockupEpochs",
      },
      {
        name: "_rewardLockupEpochs",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    outputs: [],
  },
  {
    name: "latestSnapshotIndex",
    inputs: [],
    stateMutability: "view",
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "enjoyer",
        type: "address",
      },
    ],
    type: "function",
    stateMutability: "view",
    outputs: [
      {
        internalType: "uint256",
        type: "uint256",
        name: "",
      },
    ],
    name: "getLastSnapshotIndexOf",
  },
  {
    inputs: [
      {
        name: "enjoyer",
        internalType: "address",
        type: "address",
      },
    ],
    type: "function",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    name: "canWithdraw",
  },
  {
    type: "function",
    name: "canClaimReward",
    stateMutability: "view",
    outputs: [
      {
        type: "bool",
        name: "",
        internalType: "bool",
      },
    ],
    inputs: [
      {
        type: "address",
        internalType: "address",
        name: "enjoyer",
      },
    ],
  },
  {
    outputs: [
      {
        type: "uint256",
        internalType: "uint256",
        name: "",
      },
    ],
    inputs: [],
    name: "epoch",
    type: "function",
    stateMutability: "view",
  },
  {
    name: "nextEpochPoint",
    type: "function",
    inputs: [],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    stateMutability: "view",
    inputs: [],
    type: "function",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "getComfyPrice",
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
    inputs: [],
    name: "rewardPerShare",
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
    type: "function",
    stateMutability: "view",
    name: "earned",
    inputs: [
      {
        type: "address",
        internalType: "address",
        name: "enjoyer",
      },
    ],
  },
  {
    type: "function",
    inputs: [
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
    name: "stake",
  },
  {
    name: "withdraw",
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      {
        internalType: "uint256",
        type: "uint256",
        name: "amount",
      },
    ],
    outputs: [],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    inputs: [],
    outputs: [],
    name: "exit",
  },
  {
    name: "claimReward",
    type: "function",
    outputs: [],
    stateMutability: "nonpayable",
    inputs: [],
  },
  {
    inputs: [
      {
        internalType: "uint256",
        type: "uint256",
        name: "amount",
      },
    ],
    name: "allocateSeigniorage",
    type: "function",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      {
        internalType: "contract IERC20",
        type: "address",
        name: "_token",
      },
      {
        name: "_amount",
        type: "uint256",
        internalType: "uint256",
      },
      {
        type: "address",
        name: "_to",
        internalType: "address",
      },
    ],
    outputs: [],
    name: "governanceRecoverUnsupported",
    stateMutability: "nonpayable",
  },
];
