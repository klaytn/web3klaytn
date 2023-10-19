export * from "./factory";
export * from "./basic";

import {
  TxTypeAccountUpdate,
  TxTypeCancel,
  TxTypeSmartContractDeploy,
  TxTypeSmartContractExecution,
  TxTypeValueTransfer,
  TxTypeValueTransferMemo,
} from "./basic";
import { KlaytnTxFactory } from "./factory";
KlaytnTxFactory.add(TxTypeValueTransfer);
KlaytnTxFactory.add(TxTypeValueTransferMemo);
KlaytnTxFactory.add(TxTypeSmartContractDeploy);
KlaytnTxFactory.add(TxTypeSmartContractExecution);
KlaytnTxFactory.add(TxTypeAccountUpdate);
KlaytnTxFactory.add(TxTypeCancel);