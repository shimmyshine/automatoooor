import { ContractInterface } from "ethers";

export const CShareABI: ContractInterface = [
  {
    inputs: [
      {
        name: "_startTime",
        internalType: "uint256",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_communityFund",
        type: "address",
      },
      {
        type: "address",
        internalType: "address",
        name: "_devFund",
      },
    ],
    type: "constructor",
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    inputs: [
      {
        indexed: true,
        type: "address",
        internalType: "address",
        name: "owner",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        name: "value",
        indexed: false,
        type: "uint256",
        internalType: "uint256",
      },
    ],
    name: "Approval",
    anonymous: false,
  },
  {
    inputs: [
      {
        internalType: "address",
        indexed: true,
        name: "previousOperator",
        type: "address",
      },
      {
        name: "newOperator",
        internalType: "address",
        indexed: true,
        type: "address",
      },
    ],
    type: "event",
    name: "OperatorTransferred",
    anonymous: false,
  },
  {
    type: "event",
    inputs: [
      {
        type: "address",
        indexed: true,
        name: "previousOwner",
        internalType: "address",
      },
      {
        internalType: "address",
        type: "address",
        name: "newOwner",
        indexed: true,
      },
    ],
    name: "OwnershipTransferred",
    anonymous: false,
  },
  {
    name: "Transfer",
    type: "event",
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        name: "to",
        type: "address",
        internalType: "address",
        indexed: true,
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
    stateMutability: "view",
    outputs: [
      {
        internalType: "uint256",
        type: "uint256",
        name: "",
      },
    ],
    type: "function",
    inputs: [],
    name: "COMMUNITY_FUND_POOL_ALLOCATION",
  },
  {
    name: "DEV_FUND_POOL_ALLOCATION",
    inputs: [],
    stateMutability: "view",
    type: "function",
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
  },
  {
    name: "FARMING_POOL_REWARD_ALLOCATION",
    type: "function",
    stateMutability: "view",
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    inputs: [],
  },
  {
    stateMutability: "view",
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    name: "VESTING_DURATION",
    inputs: [],
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        type: "address",
        name: "owner",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
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
    stateMutability: "view",
    name: "allowance",
  },
  {
    inputs: [
      {
        type: "address",
        internalType: "address",
        name: "spender",
      },
      {
        type: "uint256",
        name: "amount",
        internalType: "uint256",
      },
    ],
    name: "approve",
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
    name: "balanceOf",
    type: "function",
    stateMutability: "view",
    inputs: [
      {
        type: "address",
        internalType: "address",
        name: "account",
      },
    ],
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
  },
  {
    outputs: [],
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
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    type: "function",
    name: "communityFund",
    inputs: [],
    outputs: [
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
    type: "function",
    stateMutability: "view",
    name: "communityFundLastClaimed",
    outputs: [
      {
        internalType: "uint256",
        type: "uint256",
        name: "",
      },
    ],
  },
  {
    inputs: [],
    stateMutability: "view",
    name: "communityFundRewardRate",
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
    name: "decimals",
    inputs: [],
    outputs: [
      {
        name: "",
        internalType: "uint8",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    name: "decreaseAllowance",
    outputs: [
      {
        type: "bool",
        name: "",
        internalType: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      {
        internalType: "address",
        type: "address",
        name: "spender",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
  },
  {
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    name: "devFund",
    inputs: [],
    type: "function",
    stateMutability: "view",
  },
  {
    outputs: [
      {
        type: "uint256",
        internalType: "uint256",
        name: "",
      },
    ],
    name: "devFundLastClaimed",
    type: "function",
    stateMutability: "view",
    inputs: [],
  },
  {
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
    name: "devFundRewardRate",
    type: "function",
    inputs: [],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "endTime",
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    name: "increaseAllowance",
    inputs: [
      {
        name: "spender",
        type: "address",
        internalType: "address",
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
  },
  {
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
    name: "isOperator",
    inputs: [],
    type: "function",
  },
  {
    name: "name",
    outputs: [
      {
        type: "string",
        name: "",
        internalType: "string",
      },
    ],
    type: "function",
    stateMutability: "view",
    inputs: [],
  },
  {
    name: "operator",
    inputs: [],
    outputs: [
      {
        type: "address",
        internalType: "address",
        name: "",
      },
    ],
    type: "function",
    stateMutability: "view",
  },
  {
    name: "owner",
    inputs: [],
    type: "function",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    outputs: [],
    name: "renounceOwnership",
    inputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    name: "rewardPoolDistributed",
    inputs: [],
    type: "function",
    stateMutability: "view",
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
  },
  {
    type: "function",
    name: "startTime",
    inputs: [],
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    inputs: [],
    type: "function",
    name: "symbol",
    outputs: [
      {
        name: "",
        type: "string",
        internalType: "string",
      },
    ],
    stateMutability: "view",
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
    stateMutability: "view",
    inputs: [],
    type: "function",
  },
  {
    outputs: [
      {
        type: "bool",
        internalType: "bool",
        name: "",
      },
    ],
    name: "transfer",
    type: "function",
    stateMutability: "nonpayable",
    inputs: [
      {
        internalType: "address",
        type: "address",
        name: "recipient",
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256",
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
    name: "transferFrom",
    stateMutability: "nonpayable",
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        name: "amount",
        internalType: "uint256",
        type: "uint256",
      },
    ],
    type: "function",
  },
  {
    name: "transferOperator",
    inputs: [
      {
        type: "address",
        name: "newOperator_",
        internalType: "address",
      },
    ],
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
  },
  {
    name: "transferOwnership",
    stateMutability: "nonpayable",
    outputs: [],
    type: "function",
    inputs: [
      {
        name: "newOwner",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    inputs: [
      {
        type: "address",
        name: "_communityFund",
        internalType: "address",
      },
    ],
    outputs: [],
    name: "setTreasuryFund",
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    name: "setDevFund",
    stateMutability: "nonpayable",
    type: "function",
    outputs: [],
    inputs: [
      {
        name: "_devFund",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    name: "unclaimedTreasuryFund",
    stateMutability: "view",
    outputs: [
      {
        name: "_pending",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    inputs: [],
    type: "function",
  },
  {
    name: "unclaimedDevFund",
    type: "function",
    inputs: [],
    outputs: [
      {
        internalType: "uint256",
        name: "_pending",
        type: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    outputs: [],
    type: "function",
    stateMutability: "nonpayable",
    name: "claimRewards",
    inputs: [],
  },
  {
    stateMutability: "nonpayable",
    inputs: [
      {
        type: "address",
        internalType: "address",
        name: "_farmingIncentiveFund",
      },
    ],
    name: "distributeReward",
    type: "function",
    outputs: [],
  },
  {
    stateMutability: "nonpayable",
    inputs: [
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    type: "function",
    name: "burn",
  },
  {
    type: "function",
    name: "governanceRecoverUnsupported",
    inputs: [
      {
        name: "_token",
        internalType: "contract IERC20",
        type: "address",
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
    stateMutability: "nonpayable",
    outputs: [],
  },
];
