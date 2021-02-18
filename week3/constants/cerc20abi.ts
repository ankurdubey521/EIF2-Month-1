const CERC20_ABI = [
  {
    constant: true,
    inputs: [],
    name: "name",
    outputs: [
      {
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x06fdde03",
  },
  {
    constant: false,
    inputs: [
      {
        name: "spender",
        type: "address",
      },
      {
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x095ea7b3",
  },
  {
    constant: false,
    inputs: [
      {
        name: "repayAmount",
        type: "uint256",
      },
    ],
    name: "repayBorrow",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x0e752702",
  },
  {
    constant: true,
    inputs: [],
    name: "reserveFactorMantissa",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x173b9904",
  },
  {
    constant: false,
    inputs: [
      {
        name: "account",
        type: "address",
      },
    ],
    name: "borrowBalanceCurrent",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x17bfdfbc",
  },
  {
    constant: true,
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x18160ddd",
  },
  {
    constant: true,
    inputs: [],
    name: "exchangeRateStored",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x182df0f5",
  },
  {
    constant: false,
    inputs: [
      {
        name: "src",
        type: "address",
      },
      {
        name: "dst",
        type: "address",
      },
      {
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x23b872dd",
  },
  {
    constant: false,
    inputs: [
      {
        name: "borrower",
        type: "address",
      },
      {
        name: "repayAmount",
        type: "uint256",
      },
    ],
    name: "repayBorrowBehalf",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x2608f818",
  },
  {
    constant: true,
    inputs: [],
    name: "pendingAdmin",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x26782247",
  },
  {
    constant: true,
    inputs: [],
    name: "decimals",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x313ce567",
  },
  {
    constant: false,
    inputs: [
      {
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOfUnderlying",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x3af9e669",
  },
  {
    constant: true,
    inputs: [],
    name: "getCash",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x3b1d21a2",
  },
  {
    constant: false,
    inputs: [
      {
        name: "newComptroller",
        type: "address",
      },
    ],
    name: "_setComptroller",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x4576b5db",
  },
  {
    constant: true,
    inputs: [],
    name: "totalBorrows",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x47bd3718",
  },
  {
    constant: true,
    inputs: [],
    name: "comptroller",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x5fe3b567",
  },
  {
    constant: false,
    inputs: [
      {
        name: "reduceAmount",
        type: "uint256",
      },
    ],
    name: "_reduceReserves",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x601a0bf1",
  },
  {
    constant: true,
    inputs: [],
    name: "initialExchangeRateMantissa",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x675d972c",
  },
  {
    constant: true,
    inputs: [],
    name: "accrualBlockNumber",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x6c540baf",
  },
  {
    constant: true,
    inputs: [],
    name: "underlying",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x6f307dc3",
  },
  {
    constant: true,
    inputs: [
      {
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x70a08231",
  },
  {
    constant: false,
    inputs: [],
    name: "totalBorrowsCurrent",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x73acee98",
  },
  {
    constant: false,
    inputs: [
      {
        name: "redeemAmount",
        type: "uint256",
      },
    ],
    name: "redeemUnderlying",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x852a12e3",
  },
  {
    constant: true,
    inputs: [],
    name: "totalReserves",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x8f840ddd",
  },
  {
    constant: true,
    inputs: [],
    name: "symbol",
    outputs: [
      {
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x95d89b41",
  },
  {
    constant: true,
    inputs: [
      {
        name: "account",
        type: "address",
      },
    ],
    name: "borrowBalanceStored",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x95dd9193",
  },
  {
    constant: false,
    inputs: [
      {
        name: "mintAmount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0xa0712d68",
  },
  {
    constant: false,
    inputs: [],
    name: "accrueInterest",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0xa6afed95",
  },
  {
    constant: false,
    inputs: [
      {
        name: "dst",
        type: "address",
      },
      {
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0xa9059cbb",
  },
  {
    constant: true,
    inputs: [],
    name: "borrowIndex",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0xaa5af0fd",
  },
  {
    constant: true,
    inputs: [],
    name: "supplyRatePerBlock",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0xae9d70b0",
  },
  {
    constant: false,
    inputs: [
      {
        name: "liquidator",
        type: "address",
      },
      {
        name: "borrower",
        type: "address",
      },
      {
        name: "seizeTokens",
        type: "uint256",
      },
    ],
    name: "seize",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0xb2a02ff1",
  },
  {
    constant: false,
    inputs: [
      {
        name: "newPendingAdmin",
        type: "address",
      },
    ],
    name: "_setPendingAdmin",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0xb71d1a0c",
  },
  {
    constant: false,
    inputs: [],
    name: "exchangeRateCurrent",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0xbd6d894d",
  },
  {
    constant: true,
    inputs: [
      {
        name: "account",
        type: "address",
      },
    ],
    name: "getAccountSnapshot",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
      {
        name: "",
        type: "uint256",
      },
      {
        name: "",
        type: "uint256",
      },
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0xc37f68e2",
  },
  {
    constant: false,
    inputs: [
      {
        name: "borrowAmount",
        type: "uint256",
      },
    ],
    name: "borrow",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0xc5ebeaec",
  },
  {
    constant: false,
    inputs: [
      {
        name: "redeemTokens",
        type: "uint256",
      },
    ],
    name: "redeem",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0xdb006a75",
  },
  {
    constant: true,
    inputs: [
      {
        name: "owner",
        type: "address",
      },
      {
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0xdd62ed3e",
  },
  {
    constant: false,
    inputs: [],
    name: "_acceptAdmin",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0xe9c714f2",
  },
  {
    constant: false,
    inputs: [
      {
        name: "newInterestRateModel",
        type: "address",
      },
    ],
    name: "_setInterestRateModel",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0xf2b3abbd",
  },
  {
    constant: true,
    inputs: [],
    name: "interestRateModel",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0xf3fdb15a",
  },
  {
    constant: false,
    inputs: [
      {
        name: "borrower",
        type: "address",
      },
      {
        name: "repayAmount",
        type: "uint256",
      },
      {
        name: "cTokenCollateral",
        type: "address",
      },
    ],
    name: "liquidateBorrow",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0xf5e3c462",
  },
  {
    constant: true,
    inputs: [],
    name: "admin",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0xf851a440",
  },
  {
    constant: true,
    inputs: [],
    name: "borrowRatePerBlock",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0xf8f9da28",
  },
  {
    constant: false,
    inputs: [
      {
        name: "newReserveFactorMantissa",
        type: "uint256",
      },
    ],
    name: "_setReserveFactor",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0xfca7820b",
  },
  {
    constant: true,
    inputs: [],
    name: "isCToken",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0xfe9c44ae",
  },
  {
    inputs: [
      {
        name: "underlying_",
        type: "address",
      },
      {
        name: "comptroller_",
        type: "address",
      },
      {
        name: "interestRateModel_",
        type: "address",
      },
      {
        name: "initialExchangeRateMantissa_",
        type: "uint256",
      },
      {
        name: "name_",
        type: "string",
      },
      {
        name: "symbol_",
        type: "string",
      },
      {
        name: "decimals_",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
    signature: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "interestAccumulated",
        type: "uint256",
      },
      {
        indexed: false,
        name: "borrowIndex",
        type: "uint256",
      },
      {
        indexed: false,
        name: "totalBorrows",
        type: "uint256",
      },
    ],
    name: "AccrueInterest",
    type: "event",
    signature:
      "0x875352fb3fadeb8c0be7cbbe8ff761b308fa7033470cd0287f02f3436fd76cb9",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "minter",
        type: "address",
      },
      {
        indexed: false,
        name: "mintAmount",
        type: "uint256",
      },
      {
        indexed: false,
        name: "mintTokens",
        type: "uint256",
      },
    ],
    name: "Mint",
    type: "event",
    signature:
      "0x4c209b5fc8ad50758f13e2e1088ba56a560dff690a1c6fef26394f4c03821c4f",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "redeemer",
        type: "address",
      },
      {
        indexed: false,
        name: "redeemAmount",
        type: "uint256",
      },
      {
        indexed: false,
        name: "redeemTokens",
        type: "uint256",
      },
    ],
    name: "Redeem",
    type: "event",
    signature:
      "0xe5b754fb1abb7f01b499791d0b820ae3b6af3424ac1c59768edb53f4ec31a929",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "borrower",
        type: "address",
      },
      {
        indexed: false,
        name: "borrowAmount",
        type: "uint256",
      },
      {
        indexed: false,
        name: "accountBorrows",
        type: "uint256",
      },
      {
        indexed: false,
        name: "totalBorrows",
        type: "uint256",
      },
    ],
    name: "Borrow",
    type: "event",
    signature:
      "0x13ed6866d4e1ee6da46f845c46d7e54120883d75c5ea9a2dacc1c4ca8984ab80",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "payer",
        type: "address",
      },
      {
        indexed: false,
        name: "borrower",
        type: "address",
      },
      {
        indexed: false,
        name: "repayAmount",
        type: "uint256",
      },
      {
        indexed: false,
        name: "accountBorrows",
        type: "uint256",
      },
      {
        indexed: false,
        name: "totalBorrows",
        type: "uint256",
      },
    ],
    name: "RepayBorrow",
    type: "event",
    signature:
      "0x1a2a22cb034d26d1854bdc6666a5b91fe25efbbb5dcad3b0355478d6f5c362a1",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "liquidator",
        type: "address",
      },
      {
        indexed: false,
        name: "borrower",
        type: "address",
      },
      {
        indexed: false,
        name: "repayAmount",
        type: "uint256",
      },
      {
        indexed: false,
        name: "cTokenCollateral",
        type: "address",
      },
      {
        indexed: false,
        name: "seizeTokens",
        type: "uint256",
      },
    ],
    name: "LiquidateBorrow",
    type: "event",
    signature:
      "0x298637f684da70674f26509b10f07ec2fbc77a335ab1e7d6215a4b2484d8bb52",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "oldPendingAdmin",
        type: "address",
      },
      {
        indexed: false,
        name: "newPendingAdmin",
        type: "address",
      },
    ],
    name: "NewPendingAdmin",
    type: "event",
    signature:
      "0xca4f2f25d0898edd99413412fb94012f9e54ec8142f9b093e7720646a95b16a9",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "oldAdmin",
        type: "address",
      },
      {
        indexed: false,
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "NewAdmin",
    type: "event",
    signature:
      "0xf9ffabca9c8276e99321725bcb43fb076a6c66a54b7f21c4e8146d8519b417dc",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "oldComptroller",
        type: "address",
      },
      {
        indexed: false,
        name: "newComptroller",
        type: "address",
      },
    ],
    name: "NewComptroller",
    type: "event",
    signature:
      "0x7ac369dbd14fa5ea3f473ed67cc9d598964a77501540ba6751eb0b3decf5870d",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "oldInterestRateModel",
        type: "address",
      },
      {
        indexed: false,
        name: "newInterestRateModel",
        type: "address",
      },
    ],
    name: "NewMarketInterestRateModel",
    type: "event",
    signature:
      "0xedffc32e068c7c95dfd4bdfd5c4d939a084d6b11c4199eac8436ed234d72f926",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "oldReserveFactorMantissa",
        type: "uint256",
      },
      {
        indexed: false,
        name: "newReserveFactorMantissa",
        type: "uint256",
      },
    ],
    name: "NewReserveFactor",
    type: "event",
    signature:
      "0xaaa68312e2ea9d50e16af5068410ab56e1a1fd06037b1a35664812c30f821460",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "admin",
        type: "address",
      },
      {
        indexed: false,
        name: "reduceAmount",
        type: "uint256",
      },
      {
        indexed: false,
        name: "newTotalReserves",
        type: "uint256",
      },
    ],
    name: "ReservesReduced",
    type: "event",
    signature:
      "0x3bad0c59cf2f06e7314077049f48a93578cd16f5ef92329f1dab1420a99c177e",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "error",
        type: "uint256",
      },
      {
        indexed: false,
        name: "info",
        type: "uint256",
      },
      {
        indexed: false,
        name: "detail",
        type: "uint256",
      },
    ],
    name: "Failure",
    type: "event",
    signature:
      "0x45b96fe442630264581b197e84bbada861235052c5a1aadfff9ea4e40a969aa0",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
    signature:
      "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
    signature:
      "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925",
  },
];
export { CERC20_ABI };
