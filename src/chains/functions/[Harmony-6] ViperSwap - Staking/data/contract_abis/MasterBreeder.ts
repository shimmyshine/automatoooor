import { ContractInterface } from "ethers";

export const MasterBreederABI: ContractInterface = [
  {
    inputs: [
      {
        internalType: "contract GovernanceToken",
        name: "_govToken",
        type: "address",
      },
      {
        name: "_devaddr",
        internalType: "address",
        type: "address",
      },
      {
        internalType: "address",
        type: "address",
        name: "_liquidityaddr",
      },
      {
        internalType: "address",
        name: "_comfundaddr",
        type: "address",
      },
      {
        name: "_founderaddr",
        type: "address",
        internalType: "address",
      },
      {
        internalType: "uint256",
        type: "uint256",
        name: "_rewardPerBlock",
      },
      {
        name: "_startBlock",
        internalType: "uint256",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_halvingAfterBlock",
        type: "uint256",
      },
      {
        name: "_userDepFee",
        internalType: "uint256",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_devDepFee",
        type: "uint256",
      },
      {
        type: "uint256[]",
        internalType: "uint256[]",
        name: "_rewardMultiplier",
      },
      {
        type: "uint256[]",
        internalType: "uint256[]",
        name: "_blockDeltaStartStage",
      },
      {
        name: "_blockDeltaEndStage",
        type: "uint256[]",
        internalType: "uint256[]",
      },
      {
        name: "_userFeeStage",
        type: "uint256[]",
        internalType: "uint256[]",
      },
      {
        name: "_devFeeStage",
        type: "uint256[]",
        internalType: "uint256[]",
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
        name: "user",
        type: "address",
        internalType: "address",
      },
      {
        internalType: "uint256",
        indexed: true,
        type: "uint256",
        name: "pid",
      },
      {
        internalType: "uint256",
        indexed: false,
        name: "amount",
        type: "uint256",
      },
    ],
    anonymous: false,
    name: "Deposit",
  },
  {
    name: "EmergencyWithdraw",
    anonymous: false,
    type: "event",
    inputs: [
      {
        internalType: "address",
        indexed: true,
        type: "address",
        name: "user",
      },
      {
        name: "pid",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        indexed: false,
        type: "uint256",
        name: "amount",
        internalType: "uint256",
      },
    ],
  },
  {
    name: "OwnershipTransferred",
    anonymous: false,
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
    name: "SendGovernanceTokenReward",
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
        type: "uint256",
        indexed: true,
      },
      {
        indexed: false,
        name: "amount",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "lockAmount",
        type: "uint256",
        internalType: "uint256",
        indexed: false,
      },
    ],
    anonymous: false,
    type: "event",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "user",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "pid",
        indexed: true,
        internalType: "uint256",
        type: "uint256",
      },
      {
        internalType: "uint256",
        type: "uint256",
        indexed: false,
        name: "amount",
      },
    ],
    name: "Withdraw",
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
    type: "function",
    inputs: [],
    name: "FINISH_BONUS_AT_BLOCK",
  },
  {
    stateMutability: "view",
    name: "HALVING_AT_BLOCK",
    inputs: [
      {
        name: "",
        internalType: "uint256",
        type: "uint256",
      },
    ],
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
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
    name: "PERCENT_FOR_COM",
    type: "function",
    inputs: [],
  },
  {
    name: "PERCENT_FOR_DEV",
    type: "function",
    inputs: [],
    stateMutability: "view",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
  },
  {
    inputs: [],
    type: "function",
    stateMutability: "view",
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    name: "PERCENT_FOR_FOUNDERS",
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
    name: "PERCENT_FOR_LP",
    type: "function",
    inputs: [],
  },
  {
    inputs: [],
    stateMutability: "view",
    name: "PERCENT_LOCK_BONUS_REWARD",
    type: "function",
    outputs: [
      {
        internalType: "uint256",
        type: "uint256",
        name: "",
      },
    ],
  },
  {
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    type: "function",
    stateMutability: "view",
    name: "REWARD_MULTIPLIER",
    inputs: [
      {
        name: "",
        internalType: "uint256",
        type: "uint256",
      },
    ],
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
    inputs: [],
    stateMutability: "view",
    name: "REWARD_PER_BLOCK",
  },
  {
    name: "START_BLOCK",
    type: "function",
    outputs: [
      {
        internalType: "uint256",
        type: "uint256",
        name: "",
      },
    ],
    stateMutability: "view",
    inputs: [],
  },
  {
    stateMutability: "nonpayable",
    inputs: [
      {
        name: "_toAdd",
        type: "address",
        internalType: "address",
      },
    ],
    name: "addAuthorized",
    type: "function",
    outputs: [],
  },
  {
    type: "function",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    name: "authorized",
    stateMutability: "view",
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
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
    stateMutability: "view",
    type: "function",
    name: "blockDeltaEndStage",
    inputs: [
      {
        name: "",
        internalType: "uint256",
        type: "uint256",
      },
    ],
  },
  {
    name: "blockDeltaStartStage",
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    type: "function",
    stateMutability: "view",
    inputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
  },
  {
    name: "comfundaddr",
    type: "function",
    stateMutability: "view",
    inputs: [],
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
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    name: "devDepFee",
    stateMutability: "view",
    inputs: [],
  },
  {
    name: "devFeeStage",
    stateMutability: "view",
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
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
    stateMutability: "view",
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    type: "function",
    name: "devaddr",
    inputs: [],
  },
  {
    inputs: [],
    type: "function",
    stateMutability: "view",
    outputs: [
      {
        type: "address",
        name: "",
        internalType: "address",
      },
    ],
    name: "founderaddr",
  },
  {
    inputs: [],
    name: "govToken",
    type: "function",
    outputs: [
      {
        type: "address",
        name: "",
        internalType: "contract GovernanceToken",
      },
    ],
    stateMutability: "view",
  },
  {
    inputs: [],
    name: "liquidityaddr",
    stateMutability: "view",
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
    name: "owner",
    stateMutability: "view",
    inputs: [],
    type: "function",
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    name: "poolExistence",
    inputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IERC20",
      },
    ],
    outputs: [
      {
        name: "",
        internalType: "bool",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
    name: "poolId1",
    type: "function",
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
  },
  {
    name: "poolInfo",
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "lpToken",
        type: "address",
      },
      {
        internalType: "uint256",
        type: "uint256",
        name: "allocPoint",
      },
      {
        name: "lastRewardBlock",
        type: "uint256",
        internalType: "uint256",
      },
      {
        internalType: "uint256",
        type: "uint256",
        name: "accGovTokenPerShare",
      },
    ],
    type: "function",
  },
  {
    name: "removeAuthorized",
    stateMutability: "nonpayable",
    type: "function",
    outputs: [],
    inputs: [
      {
        type: "address",
        internalType: "address",
        name: "_toRemove",
      },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    inputs: [],
    name: "renounceOwnership",
  },
  {
    type: "function",
    inputs: [],
    stateMutability: "view",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "totalAllocPoint",
  },
  {
    inputs: [
      {
        type: "address",
        internalType: "address",
        name: "newOwner",
      },
    ],
    type: "function",
    name: "transferOwnership",
    stateMutability: "nonpayable",
    outputs: [],
  },
  {
    outputs: [
      {
        type: "address",
        name: "",
        internalType: "address",
      },
    ],
    inputs: [],
    name: "usdOracle",
    type: "function",
    stateMutability: "view",
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
    name: "userDepFee",
    type: "function",
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
    type: "function",
    inputs: [
      {
        internalType: "uint256",
        type: "uint256",
        name: "",
      },
    ],
    name: "userFeeStage",
  },
  {
    name: "userGlobalInfo",
    outputs: [
      {
        internalType: "uint256",
        type: "uint256",
        name: "globalAmount",
      },
      {
        internalType: "uint256",
        type: "uint256",
        name: "totalReferals",
      },
      {
        type: "uint256",
        internalType: "uint256",
        name: "globalRefAmount",
      },
    ],
    type: "function",
    stateMutability: "view",
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
  },
  {
    type: "function",
    name: "userInfo",
    inputs: [
      {
        name: "",
        internalType: "uint256",
        type: "uint256",
      },
      {
        type: "address",
        internalType: "address",
        name: "",
      },
    ],
    outputs: [
      {
        type: "uint256",
        name: "amount",
        internalType: "uint256",
      },
      {
        name: "rewardDebt",
        internalType: "uint256",
        type: "uint256",
      },
      {
        type: "uint256",
        internalType: "uint256",
        name: "rewardDebtAtBlock",
      },
      {
        name: "lastWithdrawBlock",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "firstDepositBlock",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "blockdelta",
        type: "uint256",
        internalType: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastDepositBlock",
        type: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "poolLength",
    inputs: [],
    stateMutability: "view",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
  },
  {
    type: "function",
    inputs: [
      {
        internalType: "uint256",
        name: "_allocPoint",
        type: "uint256",
      },
      {
        name: "_lpToken",
        internalType: "contract IERC20",
        type: "address",
      },
      {
        name: "_withUpdate",
        internalType: "bool",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    name: "add",
    outputs: [],
  },
  {
    inputs: [
      {
        type: "uint256",
        name: "_pid",
        internalType: "uint256",
      },
      {
        internalType: "uint256",
        name: "_allocPoint",
        type: "uint256",
      },
      {
        type: "bool",
        name: "_withUpdate",
        internalType: "bool",
      },
    ],
    type: "function",
    name: "set",
    stateMutability: "nonpayable",
    outputs: [],
  },
  {
    name: "massUpdatePools",
    type: "function",
    outputs: [],
    stateMutability: "nonpayable",
    inputs: [],
  },
  {
    stateMutability: "nonpayable",
    outputs: [],
    inputs: [
      {
        name: "_pid",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    name: "updatePool",
    type: "function",
  },
  {
    inputs: [
      {
        name: "_from",
        type: "uint256",
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "_to",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "uint256",
        internalType: "uint256",
        name: "",
      },
    ],
    name: "getMultiplier",
    type: "function",
    stateMutability: "view",
  },
  {
    name: "getPoolReward",
    type: "function",
    stateMutability: "view",
    outputs: [
      {
        type: "uint256",
        name: "forDev",
        internalType: "uint256",
      },
      {
        name: "forFarmer",
        internalType: "uint256",
        type: "uint256",
      },
      {
        type: "uint256",
        name: "forLP",
        internalType: "uint256",
      },
      {
        name: "forCom",
        type: "uint256",
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "forFounders",
        internalType: "uint256",
      },
    ],
    inputs: [
      {
        type: "uint256",
        internalType: "uint256",
        name: "_from",
      },
      {
        internalType: "uint256",
        name: "_to",
        type: "uint256",
      },
      {
        type: "uint256",
        name: "_allocPoint",
        internalType: "uint256",
      },
    ],
  },
  {
    name: "pendingReward",
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    inputs: [
      {
        type: "uint256",
        name: "_pid",
        internalType: "uint256",
      },
      {
        type: "address",
        internalType: "address",
        name: "_user",
      },
    ],
    type: "function",
    stateMutability: "view",
  },
  {
    type: "function",
    outputs: [],
    name: "claimRewards",
    inputs: [
      {
        type: "uint256[]",
        name: "_pids",
        internalType: "uint256[]",
      },
    ],
    stateMutability: "nonpayable",
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
    ],
    outputs: [],
    name: "claimReward",
  },
  {
    stateMutability: "view",
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    type: "function",
    name: "getGlobalAmount",
    outputs: [
      {
        type: "uint256",
        internalType: "uint256",
        name: "",
      },
    ],
  },
  {
    inputs: [
      {
        type: "address",
        name: "_user",
        internalType: "address",
      },
    ],
    name: "getGlobalRefAmount",
    type: "function",
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
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    type: "function",
    stateMutability: "view",
    inputs: [
      {
        name: "_user",
        type: "address",
        internalType: "address",
      },
    ],
    name: "getTotalRefs",
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    inputs: [
      {
        type: "address",
        name: "_user",
        internalType: "address",
      },
      {
        name: "_user2",
        type: "address",
        internalType: "address",
      },
    ],
    name: "getRefValueOf",
  },
  {
    outputs: [],
    type: "function",
    inputs: [
      {
        name: "_pid",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_amount",
        internalType: "uint256",
        type: "uint256",
      },
      {
        name: "_ref",
        type: "address",
        internalType: "address",
      },
    ],
    name: "deposit",
    stateMutability: "nonpayable",
  },
  {
    stateMutability: "nonpayable",
    outputs: [],
    inputs: [
      {
        type: "uint256",
        internalType: "uint256",
        name: "_pid",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        name: "_ref",
        type: "address",
        internalType: "address",
      },
    ],
    type: "function",
    name: "withdraw",
  },
  {
    stateMutability: "nonpayable",
    inputs: [
      {
        type: "uint256",
        name: "_pid",
        internalType: "uint256",
      },
    ],
    outputs: [],
    type: "function",
    name: "emergencyWithdraw",
  },
  {
    type: "function",
    name: "dev",
    inputs: [
      {
        type: "address",
        name: "_devaddr",
        internalType: "address",
      },
    ],
    stateMutability: "nonpayable",
    outputs: [],
  },
  {
    name: "bonusFinishUpdate",
    type: "function",
    stateMutability: "nonpayable",
    inputs: [
      {
        name: "_newFinish",
        internalType: "uint256",
        type: "uint256",
      },
    ],
    outputs: [],
  },
  {
    type: "function",
    name: "halvingUpdate",
    stateMutability: "nonpayable",
    outputs: [],
    inputs: [
      {
        name: "_newHalving",
        internalType: "uint256[]",
        type: "uint256[]",
      },
    ],
  },
  {
    name: "lpUpdate",
    type: "function",
    inputs: [
      {
        type: "address",
        internalType: "address",
        name: "_newLP",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    stateMutability: "nonpayable",
    name: "comUpdate",
    inputs: [
      {
        type: "address",
        name: "_newCom",
        internalType: "address",
      },
    ],
    type: "function",
    outputs: [],
  },
  {
    type: "function",
    outputs: [],
    name: "founderUpdate",
    stateMutability: "nonpayable",
    inputs: [
      {
        name: "_newFounder",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    name: "rewardUpdate",
    inputs: [
      {
        name: "_newReward",
        internalType: "uint256",
        type: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    name: "rewardMulUpdate",
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      {
        internalType: "uint256[]",
        type: "uint256[]",
        name: "_newMulReward",
      },
    ],
    outputs: [],
  },
  {
    stateMutability: "nonpayable",
    outputs: [],
    name: "lockUpdate",
    inputs: [
      {
        type: "uint256",
        name: "_newlock",
        internalType: "uint256",
      },
    ],
    type: "function",
  },
  {
    name: "lockdevUpdate",
    stateMutability: "nonpayable",
    outputs: [],
    type: "function",
    inputs: [
      {
        type: "uint256",
        name: "_newdevlock",
        internalType: "uint256",
      },
    ],
  },
  {
    stateMutability: "nonpayable",
    inputs: [
      {
        type: "uint256",
        name: "_newlplock",
        internalType: "uint256",
      },
    ],
    type: "function",
    name: "locklpUpdate",
    outputs: [],
  },
  {
    stateMutability: "nonpayable",
    name: "lockcomUpdate",
    inputs: [
      {
        internalType: "uint256",
        name: "_newcomlock",
        type: "uint256",
      },
    ],
    outputs: [],
    type: "function",
  },
  {
    name: "lockfounderUpdate",
    outputs: [],
    inputs: [
      {
        type: "uint256",
        internalType: "uint256",
        name: "_newfounderlock",
      },
    ],
    type: "function",
    stateMutability: "nonpayable",
  },
  {
    name: "starblockUpdate",
    type: "function",
    inputs: [
      {
        name: "_newstarblock",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    outputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    name: "getNewRewardPerBlock",
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    inputs: [
      {
        name: "pid1",
        type: "uint256",
        internalType: "uint256",
      },
    ],
  },
  {
    inputs: [
      {
        type: "uint256",
        name: "_pid",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
    outputs: [
      {
        type: "uint256",
        internalType: "uint256",
        name: "",
      },
    ],
    name: "userDelta",
    type: "function",
  },
  {
    type: "function",
    outputs: [],
    name: "reviseWithdraw",
    inputs: [
      {
        name: "_pid",
        internalType: "uint256",
        type: "uint256",
      },
      {
        name: "_user",
        internalType: "address",
        type: "address",
      },
      {
        name: "_block",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    stateMutability: "nonpayable",
    outputs: [],
    inputs: [
      {
        type: "uint256",
        internalType: "uint256",
        name: "_pid",
      },
      {
        internalType: "address",
        type: "address",
        name: "_user",
      },
      {
        name: "_block",
        internalType: "uint256",
        type: "uint256",
      },
    ],
    type: "function",
    name: "reviseDeposit",
  },
  {
    inputs: [
      {
        type: "uint256[]",
        internalType: "uint256[]",
        name: "_blockStarts",
      },
    ],
    stateMutability: "nonpayable",
    outputs: [],
    name: "setStageStarts",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "_blockEnds",
        type: "uint256[]",
      },
    ],
    name: "setStageEnds",
    type: "function",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      {
        type: "uint256[]",
        name: "_userFees",
        internalType: "uint256[]",
      },
    ],
    stateMutability: "nonpayable",
    name: "setUserFeeStage",
    outputs: [],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    name: "setDevFeeStage",
    inputs: [
      {
        type: "uint256[]",
        name: "_devFees",
        internalType: "uint256[]",
      },
    ],
    outputs: [],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    name: "setDevDepFee",
    outputs: [],
    inputs: [
      {
        internalType: "uint256",
        name: "_devDepFees",
        type: "uint256",
      },
    ],
  },
  {
    type: "function",
    name: "setUserDepFee",
    inputs: [
      {
        name: "_usrDepFees",
        internalType: "uint256",
        type: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    name: "reclaimTokenOwnership",
    stateMutability: "nonpayable",
    inputs: [
      {
        name: "_newOwner",
        type: "address",
        internalType: "address",
      },
    ],
    type: "function",
    outputs: [],
  },
];
