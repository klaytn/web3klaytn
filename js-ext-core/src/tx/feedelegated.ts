import {
  FieldTypeAccountKey,
  FieldTypeAddress,
  FieldTypeBool,
  FieldTypeBytes,
  FieldTypeSignatureTuples,
  FieldTypeUint256,
  FieldTypeUint64,
  FieldTypeUint8
} from "../field";
import { RLP, TxType } from "../util";

import { KlaytnTx } from "./factory";

// https://docs.klaytn.foundation/content/klaytn/design/transactions/fee-delegation#txtypefeedelegatedvaluetransfer
export class TxTypeFeeDelegatedValueTransfer extends KlaytnTx {
  static type = TxType.FeeDelegatedValueTransfer;
  static typeName = "TxTypeFeeDelegatedValueTransfer";
  static fieldTypes = {
    "type":               FieldTypeUint8,
    "nonce":              FieldTypeUint64,
    "gasPrice":           FieldTypeUint256,
    "gasLimit":           FieldTypeUint64,
    "to":                 FieldTypeAddress,
    "value":              FieldTypeUint256,
    "from":               FieldTypeAddress,
    "chainId":            FieldTypeUint64,
    "txSignatures":       FieldTypeSignatureTuples,
    "feePayer":           FieldTypeAddress,
    "feePayerSignatures": FieldTypeSignatureTuples,
  };

  // SigRLP = encode([encode([type, nonce, gasPrice, gas, to, value, from]), chainid, 0, 0])
  sigRLP(): string {
    return this.encodeNestedRLP(
      ["type", "nonce", "gasPrice", "gasLimit", "to", "value", "from"],
      ["chainId"]);
  }

  // SigFeePayerRLP = encode([encode([type, nonce, gasPrice, gas, to, value, from]), feePayer, chainid, 0, 0 ])
  sigFeePayerRLP(): string {
    return this.encodeNestedRLP(
      ["type", "nonce", "gasPrice", "gasLimit", "to", "value", "from"],
      ["feePayer", "chainId"]);
  }

  // SenderTxHashRLP = type + encode([nonce, gasPrice, gas, to, value, from, txSignatures])
  senderTxHashRLP(): string {
    return this.encodeTypePrefixedRLP(
      ["nonce", "gasPrice", "gasLimit", "to", "value", "from", "txSignatures"]);
  }

  // TxHashRLP = type + encode([nonce, gasPrice, gas, to, value, from, txSignatures, feePayer, feePayerSignatures])
  txHashRLP(): string {
    return this.encodeTypePrefixedRLP(
      ["nonce", "gasPrice", "gasLimit", "to", "value", "from", "txSignatures", "feePayer", "feePayerSignatures"]);
  }

  // SenderTxHashRLP = type + encode([nonce, gasPrice, gas, to, value, from, txSignatures])
  // TxHashRLP       = type + encode([nonce, gasPrice, gas, to, value, from, txSignatures, feePayer, feePayerSignatures])
  setFieldsFromRLP(rlp: string): void {
    this.decodeTypePrefixedVarlenRLP(rlp,
      ["nonce", "gasPrice", "gasLimit", "to", "value", "from", "txSignatures"],
      ["nonce", "gasPrice", "gasLimit", "to", "value", "from", "txSignatures", "feePayer", "feePayerSignatures"]);
  }
}

// https://docs.klaytn.foundation/content/klaytn/design/transactions/fee-delegation#txtypefeedelegatedvaluetransfermemo
export class TxTypeFeeDelegatedValueTransferMemo extends KlaytnTx {
  static type = TxType.FeeDelegatedValueTransferMemo;
  static typeName = "TxTypeFeeDelegatedValueTransferMemo";
  static fieldTypes = {
    "type":         FieldTypeUint8,
    "nonce":        FieldTypeUint64,
    "gasPrice":     FieldTypeUint256,
    "gasLimit":     FieldTypeUint64,
    "to":           FieldTypeAddress,
    "value":        FieldTypeUint256,
    "from":         FieldTypeAddress,
    "input":        FieldTypeBytes,
    "chainId":      FieldTypeUint64,
    "txSignatures": FieldTypeSignatureTuples,
    "feePayer":     FieldTypeAddress,
    "feePayerSignatures": FieldTypeSignatureTuples,
  };

  // SigRLP = encode([encode([type, nonce, gasPrice, gas, to, value, from, input]), chainid, 0, 0])
  sigRLP(): string {
    return this.encodeNestedRLP(
      ["type", "nonce", "gasPrice", "gasLimit", "to", "value", "from", "input"], 
      ["chainId"]);
  }

  // SigFeePayerRLP = encode([encode([type, nonce, gasPrice, gas, to, value, from, input]), feePayer, chainid, 0, 0])
  sigFeePayerRLP(): string {  
    return this.encodeNestedRLP(
      ["type", "nonce", "gasPrice", "gasLimit", "to", "value", "from", "input"], 
      ["feePayer", "chainId"]);
  }

  // SenderTxHashRLP = type + encode([nonce, gasPrice, gas, to, value, from, input, txSignatures])
  senderTxHashRLP(): string {
    return this.encodeTypePrefixedRLP(
      ["nonce", "gasPrice", "gasLimit", "to", "value", "from", "input", "txSignatures"]);
  }

  // TxHashRLP = type + encode([nonce, gasPrice, gas, to, value, from, input, txSignatures, feePayer, feePayerSignatures])
  txHashRLP(): string {
    return this.encodeTypePrefixedRLP(
      ["nonce", "gasPrice", "gasLimit", "to", "value", "from", "input", "txSignatures", "feePayer", "feePayerSignatures"]);
  }

  // SenderTxHashRLP = type + encode([nonce, gasPrice, gas, to, value, from, input, txSignatures])
  // TxHashRLP = type + encode([nonce, gasPrice, gas, to, value, from, input, txSignatures, feePayer, feePayerSignatures])
  setFieldsFromRLP(rlp: string): void {
    this.decodeTypePrefixedVarlenRLP(rlp,
      ["nonce", "gasPrice", "gasLimit", "to", "value", "from", "input", "txSignatures"],
      ["nonce", "gasPrice", "gasLimit", "to", "value", "from", "input", "txSignatures", "feePayer", "feePayerSignatures"]);
  }
}

// https://docs.klaytn.foundation/content/klaytn/design/transactions/fee-delegation#txtypefeedelegatedsmartcontractdeploy
export class TxTypeFeeDelegatedSmartContractDeploy extends KlaytnTx {
  static type = TxType.FeeDelegatedSmartContractDeploy;
  static typeName = "TxTypeFeeDelegatedSmartContractDeploy";
  static fieldTypes = {
    "type":         FieldTypeUint8,
    "nonce":        FieldTypeUint64,
    "gasPrice":     FieldTypeUint256,
    "gasLimit":     FieldTypeUint64,
    "to":           FieldTypeAddress,
    "value":        FieldTypeUint256,
    "from":         FieldTypeAddress,
    "input":        FieldTypeBytes,
    "humanReadable": FieldTypeBool,
    "codeFormat":   FieldTypeUint8,
    "chainId":      FieldTypeUint64,
    "txSignatures": FieldTypeSignatureTuples,
    "feePayer":     FieldTypeAddress,
    "feePayerSignatures": FieldTypeSignatureTuples,
  };

  // SigRLP = encode([encode([type, nonce, gasPrice, gas, to, value, from, input, humanReadable, codeFormat]), chainid, 0, 0])
  sigRLP(): string {
    return this.encodeNestedRLP(  
      ["type", "nonce", "gasPrice", "gasLimit", "to", "value", "from", "input", "humanReadable", "codeFormat"],
      ["chainId"]);
  }

  // SigFeePayerRLP = encode([encode([type, nonce, gasPrice, gas, to, value, from, input, humanReadable, codeFormat]), feePayer, chainid, 0, 0])
  sigFeePayerRLP(): string {
    return this.encodeNestedRLP(
      ["type", "nonce", "gasPrice", "gasLimit", "to", "value", "from", "input", "humanReadable", "codeFormat"],
      ["feePayer", "chainId"]);
  }

  // SenderTxHashRLP = type + encode([nonce, gasPrice, gas, to, value, from, input, humanReadable, codeFormat, txSignatures])
  senderTxHashRLP(): string {
    return this.encodeTypePrefixedRLP(    
      ["nonce", "gasPrice", "gasLimit", "to", "value", "from", "input", "humanReadable", "codeFormat", "txSignatures"]);
  }

  // TxHashRLP = type + encode([nonce, gasPrice, gas, to, value, from, input, humanReadable, codeFormat, txSignatures, feePayer, feePayerSignatures])
  txHashRLP(): string {
    return this.encodeTypePrefixedRLP(
      ["nonce", "gasPrice", "gasLimit", "to", "value", "from", "input", "humanReadable", "codeFormat", "txSignatures", "feePayer", "feePayerSignatures"]);
  }

  // SenderTxHashRLP = type + encode([nonce, gasPrice, gas, to, value, from, input, humanReadable, codeFormat, txSignatures])
  // TxHashRLP = type + encode([nonce, gasPrice, gas, to, value, from, input, humanReadable, codeFormat, txSignatures, feePayer, feePayerSignatures])
  setFieldsFromRLP(rlp: string): void {
    this.decodeTypePrefixedVarlenRLP(rlp,
      ["nonce", "gasPrice", "gasLimit", "to", "value", "from", "input", "humanReadable", "codeFormat", "txSignatures"],
      ["nonce", "gasPrice", "gasLimit", "to", "value", "from", "input", "humanReadable", "codeFormat", "txSignatures", "feePayer", "feePayerSignatures"]);
  }
}