import { ContractInterface } from "ethers";

export const UniswapV2Router02: ContractInterface = [
  {
    stateMutability: "nonpayable",
    type: "constructor",
    inputs: [
      {
        type: "address",
        name: "_factory",
        internalType: "address",
      },
      {
        name: "_WETH",
        internalType: "address",
        type: "address",
      },
    ],
  },
  {
    inputs: [],
    outputs: [
      {
        type: "address",
        name: "",
        internalType: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
    name: "WETH",
  },
  {
    type: "function",
    stateMutability: "view",
    name: "factory",
    outputs: [
      {
        internalType: "address",
        type: "address",
        name: "",
      },
    ],
    inputs: [],
  },
  {
    type: "receive",
    stateMutability: "payable",
  },
  {
    inputs: [
      {
        name: "tokenA",
        internalType: "address",
        type: "address",
      },
      {
        name: "tokenB",
        internalType: "address",
        type: "address",
      },
      {
        name: "amountADesired",
        internalType: "uint256",
        type: "uint256",
      },
      {
        type: "uint256",
        name: "amountBDesired",
        internalType: "uint256",
      },
      {
        type: "uint256",
        internalType: "uint256",
        name: "amountAMin",
      },
      {
        name: "amountBMin",
        internalType: "uint256",
        type: "uint256",
      },
      {
        name: "to",
        type: "address",
        internalType: "address",
      },
      {
        name: "deadline",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    name: "addLiquidity",
    type: "function",
    outputs: [
      {
        type: "uint256",
        name: "amountA",
        internalType: "uint256",
      },
      {
        name: "amountB",
        internalType: "uint256",
        type: "uint256",
      },
      {
        name: "liquidity",
        internalType: "uint256",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    stateMutability: "payable",
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountTokenDesired",
        type: "uint256",
      },
      {
        type: "uint256",
        internalType: "uint256",
        name: "amountTokenMin",
      },
      {
        name: "amountETHMin",
        internalType: "uint256",
        type: "uint256",
      },
      {
        internalType: "address",
        type: "address",
        name: "to",
      },
      {
        internalType: "uint256",
        type: "uint256",
        name: "deadline",
      },
    ],
    outputs: [
      {
        name: "amountToken",
        type: "uint256",
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "amountETH",
        internalType: "uint256",
      },
      {
        internalType: "uint256",
        type: "uint256",
        name: "liquidity",
      },
    ],
    name: "addLiquidityETH",
  },
  {
    outputs: [
      {
        internalType: "uint256",
        type: "uint256",
        name: "amountA",
      },
      {
        name: "amountB",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    inputs: [
      {
        name: "tokenA",
        internalType: "address",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenB",
        type: "address",
      },
      {
        name: "liquidity",
        internalType: "uint256",
        type: "uint256",
      },
      {
        type: "uint256",
        internalType: "uint256",
        name: "amountAMin",
      },
      {
        type: "uint256",
        internalType: "uint256",
        name: "amountBMin",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        type: "uint256",
        internalType: "uint256",
        name: "deadline",
      },
    ],
    name: "removeLiquidity",
    type: "function",
  },
  {
    outputs: [
      {
        internalType: "uint256",
        type: "uint256",
        name: "amountToken",
      },
      {
        internalType: "uint256",
        type: "uint256",
        name: "amountETH",
      },
    ],
    type: "function",
    stateMutability: "nonpayable",
    inputs: [
      {
        type: "address",
        internalType: "address",
        name: "token",
      },
      {
        name: "liquidity",
        type: "uint256",
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "amountTokenMin",
        internalType: "uint256",
      },
      {
        name: "amountETHMin",
        internalType: "uint256",
        type: "uint256",
      },
      {
        type: "address",
        name: "to",
        internalType: "address",
      },
      {
        type: "uint256",
        internalType: "uint256",
        name: "deadline",
      },
    ],
    name: "removeLiquidityETH",
  },
  {
    inputs: [
      {
        type: "address",
        name: "tokenA",
        internalType: "address",
      },
      {
        type: "address",
        name: "tokenB",
        internalType: "address",
      },
      {
        type: "uint256",
        internalType: "uint256",
        name: "liquidity",
      },
      {
        name: "amountAMin",
        internalType: "uint256",
        type: "uint256",
      },
      {
        type: "uint256",
        name: "amountBMin",
        internalType: "uint256",
      },
      {
        type: "address",
        name: "to",
        internalType: "address",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "approveMax",
        type: "bool",
      },
      {
        name: "v",
        internalType: "uint8",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        type: "bytes32",
        name: "r",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    outputs: [
      {
        name: "amountA",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "amountB",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    type: "function",
    name: "removeLiquidityWithPermit",
    stateMutability: "nonpayable",
  },
  {
    name: "removeLiquidityETHWithPermit",
    inputs: [
      {
        type: "address",
        name: "token",
        internalType: "address",
      },
      {
        internalType: "uint256",
        name: "liquidity",
        type: "uint256",
      },
      {
        internalType: "uint256",
        type: "uint256",
        name: "amountTokenMin",
      },
      {
        type: "uint256",
        name: "amountETHMin",
        internalType: "uint256",
      },
      {
        type: "address",
        name: "to",
        internalType: "address",
      },
      {
        type: "uint256",
        internalType: "uint256",
        name: "deadline",
      },
      {
        name: "approveMax",
        type: "bool",
        internalType: "bool",
      },
      {
        type: "uint8",
        name: "v",
        internalType: "uint8",
      },
      {
        name: "r",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    outputs: [
      {
        type: "uint256",
        name: "amountToken",
        internalType: "uint256",
      },
      {
        type: "uint256",
        internalType: "uint256",
        name: "amountETH",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        type: "address",
        name: "token",
        internalType: "address",
      },
      {
        type: "uint256",
        internalType: "uint256",
        name: "liquidity",
      },
      {
        name: "amountTokenMin",
        internalType: "uint256",
        type: "uint256",
      },
      {
        name: "amountETHMin",
        type: "uint256",
        internalType: "uint256",
      },
      {
        type: "address",
        name: "to",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "deadline",
        internalType: "uint256",
      },
    ],
    type: "function",
    name: "removeLiquidityETHSupportingFeeOnTransferTokens",
    stateMutability: "nonpayable",
    outputs: [
      {
        type: "uint256",
        name: "amountETH",
        internalType: "uint256",
      },
    ],
  },
  {
    outputs: [
      {
        internalType: "uint256",
        name: "amountETH",
        type: "uint256",
      },
    ],
    name: "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens",
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      {
        type: "address",
        internalType: "address",
        name: "token",
      },
      {
        name: "liquidity",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "amountTokenMin",
        internalType: "uint256",
        type: "uint256",
      },
      {
        name: "amountETHMin",
        type: "uint256",
        internalType: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        type: "uint256",
        internalType: "uint256",
        name: "deadline",
      },
      {
        name: "approveMax",
        type: "bool",
        internalType: "bool",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        type: "bytes32",
        name: "r",
      },
      {
        name: "s",
        internalType: "bytes32",
        type: "bytes32",
      },
    ],
  },
  {
    name: "swapExactTokensForTokens",
    stateMutability: "nonpayable",
    inputs: [
      {
        name: "amountIn",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "amountOutMin",
        type: "uint256",
        internalType: "uint256",
      },
      {
        type: "address[]",
        name: "path",
        internalType: "address[]",
      },
      {
        type: "address",
        internalType: "address",
        name: "to",
      },
      {
        type: "uint256",
        name: "deadline",
        internalType: "uint256",
      },
    ],
    type: "function",
    outputs: [
      {
        name: "amounts",
        type: "uint256[]",
        internalType: "uint256[]",
      },
    ],
  },
  {
    outputs: [
      {
        name: "amounts",
        type: "uint256[]",
        internalType: "uint256[]",
      },
    ],
    stateMutability: "nonpayable",
    name: "swapTokensForExactTokens",
    type: "function",
    inputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
      {
        name: "amountInMax",
        type: "uint256",
        internalType: "uint256",
      },
      {
        type: "address[]",
        name: "path",
        internalType: "address[]",
      },
      {
        type: "address",
        internalType: "address",
        name: "to",
      },
      {
        type: "uint256",
        name: "deadline",
        internalType: "uint256",
      },
    ],
  },
  {
    outputs: [
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    name: "swapExactETHForTokens",
    inputs: [
      {
        internalType: "uint256",
        name: "amountOutMin",
        type: "uint256",
      },
      {
        name: "path",
        type: "address[]",
        internalType: "address[]",
      },
      {
        name: "to",
        type: "address",
        internalType: "address",
      },
      {
        internalType: "uint256",
        type: "uint256",
        name: "deadline",
      },
    ],
    type: "function",
    stateMutability: "payable",
  },
  {
    outputs: [
      {
        type: "uint256[]",
        name: "amounts",
        internalType: "uint256[]",
      },
    ],
    type: "function",
    stateMutability: "nonpayable",
    name: "swapTokensForExactETH",
    inputs: [
      {
        name: "amountOut",
        type: "uint256",
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "amountInMax",
        internalType: "uint256",
      },
      {
        internalType: "address[]",
        type: "address[]",
        name: "path",
      },
      {
        name: "to",
        type: "address",
        internalType: "address",
      },
      {
        internalType: "uint256",
        type: "uint256",
        name: "deadline",
      },
    ],
  },
  {
    outputs: [
      {
        type: "uint256[]",
        internalType: "uint256[]",
        name: "amounts",
      },
    ],
    name: "swapExactTokensForETH",
    type: "function",
    inputs: [
      {
        name: "amountIn",
        type: "uint256",
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "amountOutMin",
        internalType: "uint256",
      },
      {
        type: "address[]",
        internalType: "address[]",
        name: "path",
      },
      {
        type: "address",
        internalType: "address",
        name: "to",
      },
      {
        type: "uint256",
        internalType: "uint256",
        name: "deadline",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    name: "swapETHForExactTokens",
    stateMutability: "payable",
    outputs: [
      {
        type: "uint256[]",
        internalType: "uint256[]",
        name: "amounts",
      },
    ],
    inputs: [
      {
        internalType: "uint256",
        type: "uint256",
        name: "amountOut",
      },
      {
        name: "path",
        internalType: "address[]",
        type: "address[]",
      },
      {
        type: "address",
        internalType: "address",
        name: "to",
      },
      {
        type: "uint256",
        internalType: "uint256",
        name: "deadline",
      },
    ],
    type: "function",
  },
  {
    type: "function",
    name: "swapExactTokensForTokensSupportingFeeOnTransferTokens",
    inputs: [
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        type: "uint256",
        internalType: "uint256",
        name: "amountOutMin",
      },
      {
        name: "path",
        internalType: "address[]",
        type: "address[]",
      },
      {
        internalType: "address",
        type: "address",
        name: "to",
      },
      {
        type: "uint256",
        internalType: "uint256",
        name: "deadline",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    stateMutability: "payable",
    outputs: [],
    inputs: [
      {
        name: "amountOutMin",
        type: "uint256",
        internalType: "uint256",
      },
      {
        type: "address[]",
        name: "path",
        internalType: "address[]",
      },
      {
        type: "address",
        internalType: "address",
        name: "to",
      },
      {
        internalType: "uint256",
        type: "uint256",
        name: "deadline",
      },
    ],
    name: "swapExactETHForTokensSupportingFeeOnTransferTokens",
    type: "function",
  },
  {
    name: "swapExactTokensForETHSupportingFeeOnTransferTokens",
    stateMutability: "nonpayable",
    inputs: [
      {
        name: "amountIn",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "amountOutMin",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "path",
        type: "address[]",
        internalType: "address[]",
      },
      {
        type: "address",
        internalType: "address",
        name: "to",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    type: "function",
    outputs: [],
  },
  {
    name: "quote",
    outputs: [
      {
        name: "amountB",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    type: "function",
    stateMutability: "pure",
    inputs: [
      {
        name: "amountA",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "reserveA",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "reserveB",
        type: "uint256",
        internalType: "uint256",
      },
    ],
  },
  {
    stateMutability: "pure",
    outputs: [
      {
        name: "amountOut",
        internalType: "uint256",
        type: "uint256",
      },
    ],
    type: "function",
    inputs: [
      {
        name: "amountIn",
        internalType: "uint256",
        type: "uint256",
      },
      {
        name: "reserveIn",
        internalType: "uint256",
        type: "uint256",
      },
      {
        type: "uint256",
        internalType: "uint256",
        name: "reserveOut",
      },
    ],
    name: "getAmountOut",
  },
  {
    outputs: [
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
    ],
    name: "getAmountIn",
    stateMutability: "pure",
    inputs: [
      {
        type: "uint256",
        internalType: "uint256",
        name: "amountOut",
      },
      {
        internalType: "uint256",
        name: "reserveIn",
        type: "uint256",
      },
      {
        type: "uint256",
        internalType: "uint256",
        name: "reserveOut",
      },
    ],
    type: "function",
  },
  {
    stateMutability: "view",
    outputs: [
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    type: "function",
    name: "getAmountsOut",
    inputs: [
      {
        internalType: "uint256",
        type: "uint256",
        name: "amountIn",
      },
      {
        internalType: "address[]",
        name: "path",
        type: "address[]",
      },
    ],
  },
  {
    inputs: [
      {
        name: "amountOut",
        internalType: "uint256",
        type: "uint256",
      },
      {
        name: "path",
        internalType: "address[]",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    outputs: [
      {
        name: "amounts",
        type: "uint256[]",
        internalType: "uint256[]",
      },
    ],
    name: "getAmountsIn",
    type: "function",
  },
];
