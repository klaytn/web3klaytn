export * from "./factory";
export * from "./basic";
export * from "./feedelegated";

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
  TxTypeFeeDelegatedValueTransfer
} from "./feedelegated";
KlaytnTxFactory.add(TxTypeFeeDelegatedValueTransfer);