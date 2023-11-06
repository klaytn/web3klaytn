export * from "./factory";
export * from "./basic";
export * from "./feedelegated";
export * from "./partialfeedelegated";

/* eslint-disable */
import { KlaytnTxFactory } from "./factory";

import {
  TxTypeValueTransfer,
  TxTypeValueTransferMemo,
  TxTypeSmartContractDeploy,
  TxTypeSmartContractExecution,
  TxTypeAccountUpdate,
  TxTypeCancel,
} from "./basic";
KlaytnTxFactory.add(TxTypeValueTransfer);
KlaytnTxFactory.add(TxTypeValueTransferMemo);
KlaytnTxFactory.add(TxTypeSmartContractDeploy);
KlaytnTxFactory.add(TxTypeSmartContractExecution);
KlaytnTxFactory.add(TxTypeAccountUpdate);
KlaytnTxFactory.add(TxTypeCancel);

import {
  TxTypeFeeDelegatedValueTransfer,
  TxTypeFeeDelegatedValueTransferMemo,
  TxTypeFeeDelegatedSmartContractDeploy,
  TxTypeFeeDelegatedSmartContractExecution,
  TxTypeFeeDelegatedAccountUpdate,
  TxTypeFeeDelegatedCancel,
} from "./feedelegated";
KlaytnTxFactory.add(TxTypeFeeDelegatedValueTransfer);
KlaytnTxFactory.add(TxTypeFeeDelegatedValueTransferMemo);
KlaytnTxFactory.add(TxTypeFeeDelegatedSmartContractDeploy);
KlaytnTxFactory.add(TxTypeFeeDelegatedSmartContractExecution);
KlaytnTxFactory.add(TxTypeFeeDelegatedAccountUpdate);
KlaytnTxFactory.add(TxTypeFeeDelegatedCancel);

import {
  TxTypeFeeDelegatedValueTransferWithRatio,
  TxTypeFeeDelegatedValueTransferMemoWithRatio,
  TxTypeFeeDelegatedSmartContractDeployWithRatio,
  TxTypeFeeDelegatedSmartContractExecutionWithRatio,
  TxTypeFeeDelegatedAccountUpdateWithRatio,
  TxTypeFeeDelegatedCancelWithRatio,
} from "./partialfeedelegated";
KlaytnTxFactory.add(TxTypeFeeDelegatedValueTransferWithRatio);
KlaytnTxFactory.add(TxTypeFeeDelegatedValueTransferMemoWithRatio);
KlaytnTxFactory.add(TxTypeFeeDelegatedSmartContractDeployWithRatio);
KlaytnTxFactory.add(TxTypeFeeDelegatedSmartContractExecutionWithRatio);
KlaytnTxFactory.add(TxTypeFeeDelegatedAccountUpdateWithRatio);
KlaytnTxFactory.add(TxTypeFeeDelegatedCancelWithRatio);