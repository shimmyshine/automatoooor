import { ContractInterface } from "ethers";

export const ViperABI: ContractInterface = [
  {
    type: "constructor",
    stateMutability: "nonpayable",
    inputs: [
      {
        name: "_name",
        type: "string",
        internalType: "string",
      },
      {
        name: "_symbol",
        internalType: "string",
        type: "string",
      },
      {
        name: "cap_",
        type: "uint256",
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "_manualMintLimit",
        internalType: "uint256",
      },
      {
        name: "_lockFromBlock",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_lockToBlock",
        internalType: "uint256",
        type: "uint256",
      },
    ],
  },
  {
    type: "event",
    name: "Approval",
    anonymous: false,
    inputs: [
      {
        name: "owner",
        indexed: true,
        type: "address",
        internalType: "address",
      },
      {
        name: "spender",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        indexed: false,
        type: "uint256",
        name: "value",
        internalType: "uint256",
      },
    ],
  },
  {
    anonymous: false,
    name: "DelegateChanged",
    type: "event",
    inputs: [
      {
        internalType: "address",
        type: "address",
        name: "delegator",
        indexed: true,
      },
      {
        internalType: "address",
        type: "address",
        name: "fromDelegate",
        indexed: true,
      },
      {
        name: "toDelegate",
        type: "address",
        internalType: "address",
        indexed: true,
      },
    ],
  },
  {
    type: "event",
    anonymous: false,
    name: "DelegateVotesChanged",
    inputs: [
      {
        internalType: "address",
        indexed: true,
        name: "delegate",
        type: "address",
      },
      {
        internalType: "uint256",
        indexed: false,
        type: "uint256",
        name: "previousBalance",
      },
      {
        name: "newBalance",
        internalType: "uint256",
        indexed: false,
        type: "uint256",
      },
    ],
  },
  {
    anonymous: false,
    inputs: [
      {
        name: "to",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "value",
        type: "uint256",
        internalType: "uint256",
        indexed: false,
      },
    ],
    name: "Lock",
    type: "event",
  },
  {
    anonymous: false,
    type: "event",
    name: "OwnershipTransferred",
    inputs: [
      {
        internalType: "address",
        indexed: true,
        name: "previousOwner",
        type: "address",
      },
      {
        internalType: "address",
        indexed: true,
        type: "address",
        name: "newOwner",
      },
    ],
  },
  {
    name: "Transfer",
    anonymous: false,
    type: "event",
    inputs: [
      {
        type: "address",
        name: "from",
        internalType: "address",
        indexed: true,
      },
      {
        indexed: true,
        internalType: "address",
        type: "address",
        name: "to",
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
    type: "function",
    inputs: [],
    stateMutability: "view",
    name: "DELEGATION_TYPEHASH",
    outputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
  },
  {
    outputs: [
      {
        type: "bytes32",
        name: "",
        internalType: "bytes32",
      },
    ],
    name: "DOMAIN_TYPEHASH",
    type: "function",
    inputs: [],
    stateMutability: "view",
  },
  {
    outputs: [],
    name: "addAuthorized",
    type: "function",
    inputs: [
      {
        name: "_toAdd",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    stateMutability: "view",
    inputs: [
      {
        name: "owner",
        type: "address",
        internalType: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        name: "",
        internalType: "uint256",
        type: "uint256",
      },
    ],
    type: "function",
  },
  {
    type: "function",
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
    stateMutability: "nonpayable",
    outputs: [
      {
        type: "bool",
        name: "",
        internalType: "bool",
      },
    ],
    name: "approve",
  },
  {
    type: "function",
    name: "authorized",
    outputs: [
      {
        type: "bool",
        name: "",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
    inputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    stateMutability: "view",
    name: "balanceOf",
    outputs: [
      {
        name: "",
        internalType: "uint256",
        type: "uint256",
      },
    ],
    type: "function",
    inputs: [
      {
        type: "address",
        name: "account",
        internalType: "address",
      },
    ],
  },
  {
    stateMutability: "view",
    type: "function",
    outputs: [
      {
        type: "uint32",
        name: "fromBlock",
        internalType: "uint32",
      },
      {
        name: "votes",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    name: "checkpoints",
    inputs: [
      {
        type: "address",
        name: "",
        internalType: "address",
      },
      {
        type: "uint32",
        internalType: "uint32",
        name: "",
      },
    ],
  },
  {
    outputs: [
      {
        name: "",
        type: "uint8",
        internalType: "uint8",
      },
    ],
    stateMutability: "view",
    inputs: [],
    name: "decimals",
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
    name: "decreaseAllowance",
    type: "function",
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        type: "uint256",
        name: "subtractedValue",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
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
        name: "addedValue",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "increaseAllowance",
    outputs: [
      {
        name: "",
        internalType: "bool",
        type: "bool",
      },
    ],
  },
  {
    name: "lockFromBlock",
    inputs: [],
    stateMutability: "view",
    outputs: [
      {
        internalType: "uint256",
        type: "uint256",
        name: "",
      },
    ],
    type: "function",
  },
  {
    stateMutability: "view",
    inputs: [],
    type: "function",
    name: "lockToBlock",
    outputs: [
      {
        internalType: "uint256",
        type: "uint256",
        name: "",
      },
    ],
  },
  {
    name: "manualMintLimit",
    inputs: [],
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    name: "manualMinted",
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
  },
  {
    name: "name",
    stateMutability: "view",
    type: "function",
    inputs: [],
    outputs: [
      {
        type: "string",
        name: "",
        internalType: "string",
      },
    ],
  },
  {
    inputs: [
      {
        internalType: "address",
        type: "address",
        name: "",
      },
    ],
    stateMutability: "view",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    type: "function",
    name: "nonces",
  },
  {
    type: "function",
    name: "numCheckpoints",
    stateMutability: "view",
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint32",
        internalType: "uint32",
      },
    ],
  },
  {
    type: "function",
    name: "owner",
    stateMutability: "view",
    outputs: [
      {
        type: "address",
        internalType: "address",
        name: "",
      },
    ],
    inputs: [],
  },
  {
    stateMutability: "nonpayable",
    outputs: [],
    name: "removeAuthorized",
    type: "function",
    inputs: [
      {
        name: "_toRemove",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    name: "renounceOwnership",
    stateMutability: "nonpayable",
    inputs: [],
    type: "function",
    outputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    inputs: [],
    outputs: [
      {
        internalType: "string",
        type: "string",
        name: "",
      },
    ],
    name: "symbol",
  },
  {
    type: "function",
    name: "totalSupply",
    inputs: [],
    outputs: [
      {
        internalType: "uint256",
        type: "uint256",
        name: "",
      },
    ],
    stateMutability: "view",
  },
  {
    stateMutability: "nonpayable",
    inputs: [
      {
        name: "recipient",
        internalType: "address",
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
        name: "",
        internalType: "bool",
        type: "bool",
      },
    ],
    type: "function",
    name: "transfer",
  },
  {
    type: "function",
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
    outputs: [
      {
        type: "bool",
        internalType: "bool",
        name: "",
      },
    ],
    name: "transferFrom",
  },
  {
    name: "transferOwnership",
    type: "function",
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    outputs: [],
  },
  {
    name: "cap",
    inputs: [],
    type: "function",
    stateMutability: "view",
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_newCap",
        type: "uint256",
      },
    ],
    name: "capUpdate",
    stateMutability: "nonpayable",
    type: "function",
    outputs: [],
  },
  {
    outputs: [],
    stateMutability: "nonpayable",
    name: "lockFromUpdate",
    type: "function",
    inputs: [
      {
        type: "uint256",
        name: "_newLockFrom",
        internalType: "uint256",
      },
    ],
  },
  {
    type: "function",
    inputs: [
      {
        internalType: "uint256",
        name: "_newLockTo",
        type: "uint256",
      },
    ],
    outputs: [],
    name: "lockToUpdate",
    stateMutability: "nonpayable",
  },
  {
    stateMutability: "view",
    name: "unlockedSupply",
    type: "function",
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
    name: "lockedSupply",
    type: "function",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    name: "circulatingSupply",
    type: "function",
    outputs: [
      {
        type: "uint256",
        internalType: "uint256",
        name: "",
      },
    ],
    stateMutability: "view",
    inputs: [],
  },
  {
    type: "function",
    outputs: [
      {
        internalType: "uint256",
        type: "uint256",
        name: "",
      },
    ],
    stateMutability: "view",
    name: "totalLock",
    inputs: [],
  },
  {
    type: "function",
    inputs: [
      {
        type: "address",
        internalType: "address",
        name: "_to",
      },
      {
        name: "_amount",
        internalType: "uint256",
        type: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
    name: "mint",
  },
  {
    name: "manualMint",
    outputs: [],
    type: "function",
    stateMutability: "nonpayable",
    inputs: [
      {
        type: "address",
        name: "_to",
        internalType: "address",
      },
      {
        name: "_amount",
        type: "uint256",
        internalType: "uint256",
      },
    ],
  },
  {
    inputs: [
      {
        type: "address",
        name: "_holder",
        internalType: "address",
      },
    ],
    name: "totalBalanceOf",
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    type: "function",
    stateMutability: "view",
  },
  {
    name: "lockOf",
    stateMutability: "view",
    type: "function",
    inputs: [
      {
        name: "_holder",
        internalType: "address",
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
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      {
        name: "",
        internalType: "uint256",
        type: "uint256",
      },
    ],
    name: "lastUnlockBlock",
    inputs: [
      {
        type: "address",
        internalType: "address",
        name: "_holder",
      },
    ],
  },
  {
    type: "function",
    name: "lock",
    stateMutability: "nonpayable",
    outputs: [],
    inputs: [
      {
        type: "address",
        internalType: "address",
        name: "_holder",
      },
      {
        type: "uint256",
        name: "_amount",
        internalType: "uint256",
      },
    ],
  },
  {
    name: "canUnlockAmount",
    stateMutability: "view",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    type: "function",
    inputs: [
      {
        type: "address",
        internalType: "address",
        name: "_holder",
      },
    ],
  },
  {
    stateMutability: "nonpayable",
    name: "unlock",
    outputs: [],
    type: "function",
    inputs: [],
  },
  {
    outputs: [],
    type: "function",
    inputs: [
      {
        name: "_to",
        internalType: "address",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    name: "transferAll",
  },
  {
    inputs: [
      {
        type: "address",
        name: "delegator",
        internalType: "address",
      },
    ],
    name: "delegates",
    type: "function",
    stateMutability: "view",
    outputs: [
      {
        name: "",
        internalType: "address",
        type: "address",
      },
    ],
  },
  {
    outputs: [],
    inputs: [
      {
        type: "address",
        name: "delegatee",
        internalType: "address",
      },
    ],
    type: "function",
    stateMutability: "nonpayable",
    name: "delegate",
  },
  {
    outputs: [],
    stateMutability: "nonpayable",
    name: "delegateBySig",
    type: "function",
    inputs: [
      {
        name: "delegatee",
        type: "address",
        internalType: "address",
      },
      {
        internalType: "uint256",
        type: "uint256",
        name: "nonce",
      },
      {
        internalType: "uint256",
        name: "expiry",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        name: "r",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "s",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
  },
  {
    type: "function",
    stateMutability: "view",
    name: "getCurrentVotes",
    inputs: [
      {
        type: "address",
        name: "account",
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
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    type: "function",
    inputs: [
      {
        name: "account",
        internalType: "address",
        type: "address",
      },
      {
        name: "blockNumber",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    name: "getPriorVotes",
    stateMutability: "view",
  },
];
