export { KlaytnTx, KlaytnTxFactory } from "./klaytn_tx";
export { AccountKey, AccountKeyFactory } from "./accountKey";

import { KlaytnTxFactory } from "./klaytn_tx";

// Basic TX 
import {
  TxTypeValueTransfer,
  TxTypeValueTransferMemo,
  TxTypeSmartContractDeploy,
  TxTypeSmartContractExecution,
  TxTypeAccountUpdate,
  TxTypeCancel, 
  TxTypeChainDataAnchoring,
} from "./klaytn_tx_basic";

KlaytnTxFactory.add(TxTypeValueTransfer);
KlaytnTxFactory.add(TxTypeValueTransferMemo);
KlaytnTxFactory.add(TxTypeSmartContractDeploy);
KlaytnTxFactory.add(TxTypeSmartContractExecution);
KlaytnTxFactory.add(TxTypeAccountUpdate);
KlaytnTxFactory.add(TxTypeCancel);
KlaytnTxFactory.add(TxTypeChainDataAnchoring);

// Fee Delegation TX
import {
  TxTypeFeeDelegatedValueTransfer,
  TxTypeFeeDelegatedValueTransferMemo,
  TxTypeFeeDelegatedSmartContractDeploy,
  TxTypeFeeDelegatedSmartContractExecution,
  TxTypeFeeDelegatedAccountUpdate,
  TxTypeFeeDelegatedCancel, 
  TxTypeFeeDelegatedChainDataAnchoring,
} from "./klaytn_tx_feeDelegation";

KlaytnTxFactory.add(TxTypeFeeDelegatedValueTransfer);
KlaytnTxFactory.add(TxTypeFeeDelegatedValueTransferMemo);
KlaytnTxFactory.add(TxTypeFeeDelegatedSmartContractDeploy);
KlaytnTxFactory.add(TxTypeFeeDelegatedSmartContractExecution);
KlaytnTxFactory.add(TxTypeFeeDelegatedAccountUpdate);
KlaytnTxFactory.add(TxTypeFeeDelegatedCancel);
KlaytnTxFactory.add(TxTypeFeeDelegatedChainDataAnchoring);

// Partial Fee Delegation TX
import {
  TxTypeFeeDelegatedValueTransferWithRatio,
  TxTypeFeeDelegatedValueTransferMemoWithRatio,
  TxTypeFeeDelegatedSmartContractDeployWithRatio,
  TxTypeFeeDelegatedSmartContractExecutionWithRatio,
  TxTypeFeeDelegatedAccountUpdateWithRatio,
  TxTypeFeeDelegatedCancelWithRatio, 
  TxTypeFeeDelegatedChainDataAnchoringWithRatio,
} from "./klaytn_tx_partialFeeDelegation";

KlaytnTxFactory.add(TxTypeFeeDelegatedValueTransferWithRatio);
KlaytnTxFactory.add(TxTypeFeeDelegatedValueTransferMemoWithRatio);
KlaytnTxFactory.add(TxTypeFeeDelegatedSmartContractDeployWithRatio);
KlaytnTxFactory.add(TxTypeFeeDelegatedSmartContractExecutionWithRatio);
KlaytnTxFactory.add(TxTypeFeeDelegatedAccountUpdateWithRatio);
KlaytnTxFactory.add(TxTypeFeeDelegatedCancelWithRatio);
KlaytnTxFactory.add(TxTypeFeeDelegatedChainDataAnchoringWithRatio);

// // Legacy TX
// import {
//   TxTypeLegacy0,
//   TxTypeLegacy2,
// } from "./klaytn_tx_legacy";

// KlaytnTxFactory.add(TxTypeLegacy0);
// KlaytnTxFactory.add(TxTypeLegacy2);

// ---> error occurs 

// Error: invalid object key - maxFeePerGas (argument="transaction:maxFeePerGas", value={"to":"0xC40B6909EB7085590E1c26Cb3beCC25368e249E9","value":100000000000,"type":0,"maxFeePerGas":{"type":"BigNumber","hex":"0x0bfda3a300"},"maxPriorityFeePerGas":{"type":"BigNumber","hex":"0x59682f00"},"nonce":309,"gasLimit":{"type":"BigNumber","hex":"0x5208"},"chainId":1001}, code=INVALID_ARGUMENT, version=properties/5.7.0)
//     at Logger.makeError (/Users/knh/Documents/GitHub/OpenSDK-nohkwak/ethers-ext/node_modules/@ethersproject/logger/lib/index.js:238:21)
//     at Logger.throwError (/Users/knh/Documents/GitHub/OpenSDK-nohkwak/ethers-ext/node_modules/@ethersproject/logger/lib/index.js:247:20)
//     at Logger.throwArgumentError (/Users/knh/Documents/GitHub/OpenSDK-nohkwak/ethers-ext/node_modules/@ethersproject/logger/lib/index.js:250:21)
//     at /Users/knh/Documents/GitHub/OpenSDK-nohkwak/ethers-ext/node_modules/@ethersproject/properties/lib/index.js:93:20
//     at Array.forEach (<anonymous>)
//     at checkProperties (/Users/knh/Documents/GitHub/OpenSDK-nohkwak/ethers-ext/node_modules/@ethersproject/properties/lib/index.js:91:25)
//     at _serialize (/Users/knh/Documents/GitHub/OpenSDK-nohkwak/ethers-ext/node_modules/@ethersproject/transactions/lib/index.js:173:38)
//     at serialize (/Users/knh/Documents/GitHub/OpenSDK-nohkwak/ethers-ext/node_modules/@ethersproject/transactions/lib/index.js:246:16)
//     at /Users/knh/Documents/GitHub/OpenSDK-nohkwak/ethers-ext/node_modules/@ethersproject/wallet/lib/index.js:163:116
//     at processTicksAndRejections (node:internal/process/task_queues:96:5) {
//   reason: 'invalid object key - maxFeePerGas',
//   code: 'INVALID_ARGUMENT',
//   argument: 'transaction:maxFeePerGas',
//   value: {
//     to: '0xC40B6909EB7085590E1c26Cb3beCC25368e249E9',
//     value: 100000000000,
//     type: 0,
//     maxFeePerGas: BigNumber { _hex: '0x0bfda3a300', _isBigNumber: true },
//     maxPriorityFeePerGas: BigNumber { _hex: '0x59682f00', _isBigNumber: true },
//     nonce: 309,
//     gasLimit: BigNumber { _hex: '0x5208', _isBigNumber: true },
//     chainId: 1001
//   }
// }



// AccountKey 
import {
  AccountKeyLegacy,
  AccountKeyPublic,
  AccountKeyFail,
  AccountKeyWeightedMultiSig, 
  AccountKeyRoleBased,
} from "./klaytn_accountKeys";

import { AccountKeyFactory } from "./accountKey";

AccountKeyFactory.add(AccountKeyLegacy);
AccountKeyFactory.add(AccountKeyPublic);
AccountKeyFactory.add(AccountKeyFail);
AccountKeyFactory.add(AccountKeyWeightedMultiSig);
AccountKeyFactory.add(AccountKeyRoleBased);
