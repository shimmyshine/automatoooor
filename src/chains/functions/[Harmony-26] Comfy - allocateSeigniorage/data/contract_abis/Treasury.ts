import { ContractInterface } from "ethers";

export const TreasuryABI: ContractInterface = [
  {
    name: "BoughtBonds",
    type: "event",
    inputs: [
      {
        name: "from",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "comfyAmount",
        type: "uint256",
        internalType: "uint256",
        indexed: false,
      },
      {
        type: "uint256",
        name: "bondAmount",
        internalType: "uint256",
        indexed: false,
      },
    ],
    anonymous: false,
  },
  {
    inputs: [
      {
        name: "from",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        internalType: "uint256",
        type: "uint256",
        name: "bondAmount",
        indexed: false,
      },
    ],
    anonymous: false,
    type: "event",
    name: "BurnedBonds",
  },
  {
    anonymous: false,
    inputs: [
      {
        type: "uint256",
        name: "timestamp",
        indexed: false,
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "seigniorage",
        internalType: "uint256",
        indexed: false,
      },
    ],
    name: "DaoFundFunded",
    type: "event",
  },
  {
    anonymous: false,
    name: "DevFundFunded",
    type: "event",
    inputs: [
      {
        type: "uint256",
        indexed: false,
        name: "timestamp",
        internalType: "uint256",
      },
      {
        indexed: false,
        name: "seigniorage",
        internalType: "uint256",
        type: "uint256",
      },
    ],
  },
  {
    inputs: [
      {
        type: "address",
        internalType: "address",
        name: "executor",
        indexed: true,
      },
      {
        type: "uint256",
        internalType: "uint256",
        name: "at",
        indexed: false,
      },
    ],
    type: "event",
    name: "Initialized",
    anonymous: false,
  },
  {
    anonymous: false,
    name: "RedeemedBonds",
    type: "event",
    inputs: [
      {
        type: "address",
        internalType: "address",
        indexed: true,
        name: "from",
      },
      {
        name: "comfyAmount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        type: "uint256",
        internalType: "uint256",
        name: "bondAmount",
        indexed: false,
      },
    ],
  },
  {
    inputs: [
      {
        name: "timestamp",
        type: "uint256",
        internalType: "uint256",
        indexed: false,
      },
      {
        name: "seigniorage",
        internalType: "uint256",
        indexed: false,
        type: "uint256",
      },
    ],
    anonymous: false,
    type: "event",
    name: "TreasuryFunded",
  },
  {
    anonymous: false,
    type: "event",
    name: "ZenDenFunded",
    inputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        indexed: false,
        type: "uint256",
      },
      {
        indexed: false,
        type: "uint256",
        internalType: "uint256",
        name: "seigniorage",
      },
    ],
  },
  {
    stateMutability: "view",
    name: "PERIOD",
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
    stateMutability: "view",
    type: "function",
    inputs: [],
    outputs: [
      {
        type: "uint256",
        internalType: "uint256",
        name: "",
      },
    ],
    name: "bondDepletionFloorPercent",
  },
  {
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "bootstrapEpochs",
    stateMutability: "view",
    type: "function",
    inputs: [],
  },
  {
    stateMutability: "view",
    type: "function",
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    name: "bootstrapSupplyExpansionPercent",
    inputs: [],
  },
  {
    stateMutability: "view",
    outputs: [
      {
        type: "address",
        name: "",
        internalType: "address",
      },
    ],
    name: "cbond",
    type: "function",
    inputs: [],
  },
  {
    inputs: [],
    name: "comfy",
    outputs: [
      {
        internalType: "address",
        type: "address",
        name: "",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    name: "comfyOracle",
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    inputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    name: "comfyPriceCeiling",
    type: "function",
    inputs: [],
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
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    type: "function",
    name: "comfyPriceOne",
    stateMutability: "view",
    inputs: [],
  },
  {
    type: "function",
    name: "cshare",
    inputs: [],
    outputs: [
      {
        type: "address",
        name: "",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    stateMutability: "view",
    name: "daoFund",
    type: "function",
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
    stateMutability: "view",
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    type: "function",
    name: "daoFundSharedPercent",
    inputs: [],
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
    name: "devFund",
    stateMutability: "view",
    inputs: [],
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
    name: "devFundSharedPercent",
  },
  {
    stateMutability: "view",
    outputs: [
      {
        name: "",
        internalType: "uint256",
        type: "uint256",
      },
    ],
    type: "function",
    name: "discountPercent",
    inputs: [],
  },
  {
    name: "epoch",
    type: "function",
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    name: "epochSupplyContractionLeft",
    inputs: [],
  },
  {
    name: "excludedFromTotalSupply",
    outputs: [
      {
        type: "address",
        name: "",
        internalType: "address",
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
    type: "function",
    outputs: [
      {
        type: "bool",
        name: "",
        internalType: "bool",
      },
    ],
    name: "initialized",
    stateMutability: "view",
    inputs: [],
  },
  {
    stateMutability: "view",
    outputs: [
      {
        name: "",
        internalType: "uint256",
        type: "uint256",
      },
    ],
    inputs: [],
    type: "function",
    name: "maxDebtRatioPercent",
  },
  {
    name: "maxDiscountRate",
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
  },
  {
    name: "maxExpansionTiers",
    outputs: [
      {
        name: "",
        internalType: "uint256",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    inputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
  },
  {
    name: "maxPremiumRate",
    type: "function",
    stateMutability: "view",
    inputs: [],
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
    name: "maxSupplyContractionPercent",
    stateMutability: "view",
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    type: "function",
  },
  {
    type: "function",
    inputs: [],
    stateMutability: "view",
    name: "maxSupplyExpansionPercent",
    outputs: [
      {
        type: "uint256",
        internalType: "uint256",
        name: "",
      },
    ],
  },
  {
    type: "function",
    name: "mintingFactorForPayingDebt",
    inputs: [],
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
    stateMutability: "view",
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    inputs: [],
    name: "operator",
    type: "function",
  },
  {
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "premiumPercent",
    type: "function",
    stateMutability: "view",
    inputs: [],
  },
  {
    type: "function",
    name: "premiumThreshold",
    outputs: [
      {
        name: "",
        internalType: "uint256",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    inputs: [],
  },
  {
    inputs: [],
    name: "previousEpochComfyPrice",
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
    type: "function",
    inputs: [],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    name: "seigniorageExpansionFloorPercent",
    stateMutability: "view",
  },
  {
    type: "function",
    name: "seigniorageSaved",
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
    inputs: [],
    name: "startTime",
    stateMutability: "view",
    type: "function",
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
  },
  {
    inputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    name: "supplyTiers",
    type: "function",
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
    type: "function",
    inputs: [],
    outputs: [
      {
        type: "address",
        internalType: "address",
        name: "",
      },
    ],
    name: "zenDen",
    stateMutability: "view",
  },
  {
    name: "isInitialized",
    type: "function",
    inputs: [],
    stateMutability: "view",
    outputs: [
      {
        type: "bool",
        name: "",
        internalType: "bool",
      },
    ],
  },
  {
    name: "nextEpochPoint",
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    type: "function",
    stateMutability: "view",
    inputs: [],
  },
  {
    name: "getComfyPrice",
    inputs: [],
    outputs: [
      {
        name: "comfyPrice",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    type: "function",
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getComfyUpdatedPrice",
    stateMutability: "view",
    outputs: [
      {
        type: "uint256",
        name: "_comfyPrice",
        internalType: "uint256",
      },
    ],
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
    type: "function",
    name: "getReserve",
    inputs: [],
  },
  {
    stateMutability: "view",
    inputs: [],
    outputs: [
      {
        type: "uint256",
        name: "_burnableComfyLeft",
        internalType: "uint256",
      },
    ],
    name: "getBurnableComfyLeft",
    type: "function",
  },
  {
    outputs: [
      {
        type: "uint256",
        internalType: "uint256",
        name: "_redeemableBonds",
      },
    ],
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "getRedeemableBonds",
  },
  {
    stateMutability: "view",
    outputs: [
      {
        name: "_rate",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    type: "function",
    inputs: [],
    name: "getBondDiscountRate",
  },
  {
    outputs: [
      {
        internalType: "uint256",
        name: "_rate",
        type: "uint256",
      },
    ],
    inputs: [],
    type: "function",
    name: "getBondPremiumRate",
    stateMutability: "view",
  },
  {
    outputs: [],
    type: "function",
    stateMutability: "nonpayable",
    name: "initialize",
    inputs: [
      {
        internalType: "address",
        name: "_comfy",
        type: "address",
      },
      {
        internalType: "address",
        name: "_cbond",
        type: "address",
      },
      {
        name: "_cshare",
        type: "address",
        internalType: "address",
      },
      {
        type: "address",
        name: "_comfyOracle",
        internalType: "address",
      },
      {
        internalType: "address",
        name: "_zenDen",
        type: "address",
      },
      {
        internalType: "uint256",
        type: "uint256",
        name: "_startTime",
      },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    name: "setOperator",
    inputs: [
      {
        internalType: "address",
        type: "address",
        name: "_operator",
      },
    ],
    outputs: [],
  },
  {
    type: "function",
    outputs: [],
    name: "setZenDen",
    inputs: [
      {
        name: "_zenDen",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    outputs: [],
    stateMutability: "nonpayable",
    name: "setComfyOracle",
    type: "function",
    inputs: [
      {
        name: "_comfyOracle",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    stateMutability: "nonpayable",
    inputs: [
      {
        name: "_comfyPriceCeiling",
        internalType: "uint256",
        type: "uint256",
      },
    ],
    name: "setComfyPriceCeiling",
    type: "function",
    outputs: [],
  },
  {
    name: "setMaxSupplyExpansionPercents",
    stateMutability: "nonpayable",
    outputs: [],
    inputs: [
      {
        name: "_maxSupplyExpansionPercent",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    type: "function",
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      {
        name: "_index",
        type: "uint8",
        internalType: "uint8",
      },
      {
        internalType: "uint256",
        type: "uint256",
        name: "_value",
      },
    ],
    name: "setSupplyTiersEntry",
    outputs: [
      {
        type: "bool",
        name: "",
        internalType: "bool",
      },
    ],
  },
  {
    type: "function",
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    name: "setMaxExpansionTiersEntry",
    stateMutability: "nonpayable",
    inputs: [
      {
        name: "_index",
        type: "uint8",
        internalType: "uint8",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
  },
  {
    name: "setBondDepletionFloorPercent",
    stateMutability: "nonpayable",
    outputs: [],
    inputs: [
      {
        name: "_bondDepletionFloorPercent",
        internalType: "uint256",
        type: "uint256",
      },
    ],
    type: "function",
  },
  {
    name: "setMaxSupplyContractionPercent",
    type: "function",
    outputs: [],
    stateMutability: "nonpayable",
    inputs: [
      {
        type: "uint256",
        internalType: "uint256",
        name: "_maxSupplyContractionPercent",
      },
    ],
  },
  {
    inputs: [
      {
        type: "uint256",
        name: "_maxDebtRatioPercent",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    name: "setMaxDebtRatioPercent",
    type: "function",
    outputs: [],
  },
  {
    inputs: [
      {
        name: "_bootstrapEpochs",
        type: "uint256",
        internalType: "uint256",
      },
      {
        type: "uint256",
        internalType: "uint256",
        name: "_bootstrapSupplyExpansionPercent",
      },
    ],
    name: "setBootstrap",
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
  },
  {
    type: "function",
    name: "setExtraFunds",
    stateMutability: "nonpayable",
    inputs: [
      {
        internalType: "address",
        name: "_daoFund",
        type: "address",
      },
      {
        name: "_daoFundSharedPercent",
        internalType: "uint256",
        type: "uint256",
      },
      {
        type: "address",
        name: "_devFund",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "_devFundSharedPercent",
        internalType: "uint256",
      },
    ],
    outputs: [],
  },
  {
    outputs: [],
    type: "function",
    stateMutability: "nonpayable",
    inputs: [
      {
        internalType: "uint256",
        type: "uint256",
        name: "_maxDiscountRate",
      },
    ],
    name: "setMaxDiscountRate",
  },
  {
    name: "setMaxPremiumRate",
    type: "function",
    inputs: [
      {
        type: "uint256",
        name: "_maxPremiumRate",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    outputs: [],
  },
  {
    outputs: [],
    name: "setDiscountPercent",
    type: "function",
    stateMutability: "nonpayable",
    inputs: [
      {
        internalType: "uint256",
        name: "_discountPercent",
        type: "uint256",
      },
    ],
  },
  {
    stateMutability: "nonpayable",
    inputs: [
      {
        internalType: "uint256",
        name: "_premiumThreshold",
        type: "uint256",
      },
    ],
    type: "function",
    outputs: [],
    name: "setPremiumThreshold",
  },
  {
    name: "setPremiumPercent",
    type: "function",
    stateMutability: "nonpayable",
    inputs: [
      {
        internalType: "uint256",
        type: "uint256",
        name: "_premiumPercent",
      },
    ],
    outputs: [],
  },
  {
    stateMutability: "nonpayable",
    name: "setMintingFactorForPayingDebt",
    inputs: [
      {
        type: "uint256",
        internalType: "uint256",
        name: "_mintingFactorForPayingDebt",
      },
    ],
    outputs: [],
    type: "function",
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    name: "getComfyCirculatingSupply",
    inputs: [],
  },
  {
    stateMutability: "nonpayable",
    name: "buyBonds",
    type: "function",
    inputs: [
      {
        type: "uint256",
        internalType: "uint256",
        name: "_comfyAmount",
      },
      {
        name: "targetPrice",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
  },
  {
    inputs: [
      {
        internalType: "uint256",
        type: "uint256",
        name: "_bondAmount",
      },
      {
        type: "uint256",
        name: "targetPrice",
        internalType: "uint256",
      },
    ],
    type: "function",
    name: "redeemBonds",
    stateMutability: "nonpayable",
    outputs: [],
  },
  {
    inputs: [],
    stateMutability: "nonpayable",
    name: "allocateSeigniorage",
    type: "function",
    outputs: [],
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        type: "uint256",
        name: "_amount",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
    ],
    type: "function",
    name: "governanceRecoverUnsupported",
    stateMutability: "nonpayable",
    outputs: [],
  },
  {
    name: "zenDenSetOperator",
    stateMutability: "nonpayable",
    inputs: [
      {
        internalType: "address",
        name: "_operator",
        type: "address",
      },
    ],
    outputs: [],
    type: "function",
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    inputs: [
      {
        name: "_withdrawLockupEpochs",
        internalType: "uint256",
        type: "uint256",
      },
      {
        name: "_rewardLockupEpochs",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    name: "zenDenSetLockUp",
    outputs: [],
  },
  {
    type: "function",
    outputs: [],
    name: "zenDenAllocateSeigniorage",
    stateMutability: "nonpayable",
    inputs: [
      {
        name: "amount",
        internalType: "uint256",
        type: "uint256",
      },
    ],
  },
  {
    name: "zenDenGovernanceRecoverUnsupported",
    stateMutability: "nonpayable",
    inputs: [
      {
        type: "address",
        name: "_token",
        internalType: "address",
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
    outputs: [],
    type: "function",
  },
];
