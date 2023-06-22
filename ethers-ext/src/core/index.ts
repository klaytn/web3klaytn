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
