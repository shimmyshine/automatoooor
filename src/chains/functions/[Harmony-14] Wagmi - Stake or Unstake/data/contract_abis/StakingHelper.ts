import { ContractInterface } from "ethers";

export const StakingHelperABI: ContractInterface = [
  {
    inputs: [
      {
        name: "_staking",
        type: "address",
        internalType: "address",
      },
      {
        type: "address",
        internalType: "address",
        name: "_WAGMI",
      },
    ],
    type: "constructor",
    stateMutability: "nonpayable",
  },
  {
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    name: "WAGMI",
    inputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    type: "function",
    name: "staking",
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
    name: "stake",
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      {
        name: "_amount",
        type: "uint256",
        internalType: "uint256",
      },
      {
        internalType: "address",
        type: "address",
        name: "recipient",
      },
    ],
    outputs: [],
  },
];
