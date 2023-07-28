import { FieldTypeAccountKey } from "./accountKey";
import { RLP, HexStr } from "./util";
import {
  FieldTypeAddress,
  FieldTypeSignatureTuples,
  FieldTypeBool,
  FieldTypeUint8,
  FieldTypeUint64,
  FieldTypeUint256,
  FieldTypeBytes} from "./field";
import { KlaytnTx } from "./klaytn_tx";
import _ from "lodash";

// https://docs.klaytn.foundation/content/klaytn/design/transactions/basic#txtypevaluetransfer
export class TxTypeValueTransfer extends KlaytnTx {
  static type = 0x8;
  static typeName = "TxTypeValueTransfer";
  static fieldTypes = {
    "type":         FieldTypeUint8,
    "nonce":        FieldTypeUint64,
    "gasPrice":     FieldTypeUint256,
    "gasLimit":     FieldTypeUint64,
    "to":           FieldTypeAddress,
    "value":        FieldTypeUint256,
    "from":         FieldTypeAddress,
    "chainId":      FieldTypeUint64,
    "txSignatures": FieldTypeSignatureTuples,
  };

  sigRLP(): string {
    // SigRLP = encode([encode([type, nonce, gasPrice, gas, to, value, from]), chainid, 0, 0])
    const inner = this.getFields([
      "type", "nonce", "gasPrice", "gasLimit", "to", "value", "from"]);
    return RLP.encode([
      RLP.encode(inner), this.getField("chainId"), "0x", "0x"]);
  }

  txHashRLP(): string {
    // TxHashRLP = type + encode([nonce, gasPrice, gas, to, value, from, txSignatures])
    const inner = this.getFields([
      "nonce", "gasPrice", "gasLimit", "to", "value", "from", "txSignatures"]);
    return HexStr.concat(
      this.getField("type"), RLP.encode(inner));
  }

  setFieldsFromRLP(rlp: string): void {
    // Strip type byte
    const inner_rlp = "0x" + String(rlp).substring(4);
    const array = _.concat([this.type], RLP.decode(inner_rlp));

    this.setFieldsFromArray([
      "type", "nonce", "gasPrice", "gasLimit", "to", "value", "from", "txSignatures"
    ], array);
  }
}

// https://docs.klaytn.foundation/content/klaytn/design/transactions/basic#txtypevaluetransfermemo
export class TxTypeValueTransferMemo extends KlaytnTx {
  static type = 0x10;
  static typeName = "TxTypeValueTransferMemo";
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
  };

  sigRLP(): string {
    // SigRLP = encode([encode([type, nonce, gasPrice, gas, to, value, from, input]), chainid, 0, 0])
    const inner = this.getFields([
      "type", "nonce", "gasPrice", "gasLimit", "to", "value", "from", "input"]);
    return RLP.encode([
      RLP.encode(inner), this.getField("chainId"), "0x", "0x"]);
  }

  txHashRLP(): string {
    // TxHashRLP = type + encode([nonce, gasPrice, gas, to, value, from, input, txSignatures])
    const inner = this.getFields([
      "nonce", "gasPrice", "gasLimit", "to", "value", "from", "input", "txSignatures"]);
    return HexStr.concat(
      this.getField("type"), RLP.encode(inner));
  }

  setFieldsFromRLP(rlp: string): void {
    // Strip type byte
    const inner_rlp = "0x" + String(rlp).substring(4);
    const array = _.concat([this.type], RLP.decode(inner_rlp));

    this.setFieldsFromArray([
      "type", "nonce", "gasPrice", "gasLimit", "to", "value", "from", "input", "txSignatures"
    ], array);
  }
}

// https://docs.klaytn.foundation/content/klaytn/design/transactions/basic#txtypesmartcontractdeploy
export class TxTypeSmartContractDeploy extends KlaytnTx {
  static type = 0x28;
  static typeName = "TxTypeSmartContractDeploy";
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
  };

  sigRLP(): string {
    // SigRLP = encode([encode([type, nonce, gasPrice, gas, to, value, from, input, humanReadable, codeFormat]), chainid, 0, 0])
    const inner = this.getFields([
      "type", "nonce", "gasPrice", "gasLimit", "to", "value", "from", "input", "humanReadable", "codeFormat"]);
    inner[4] = "0x";
    return RLP.encode([
      RLP.encode(inner), this.getField("chainId"), "0x", "0x"]);
  }

  txHashRLP(): string {
    // TxHashRLP = type + encode([nonce, gasPrice, gas, to, value, from, input, humanReadable, codeFormat, txSignatures])
    const inner = this.getFields([
      "nonce", "gasPrice", "gasLimit", "to", "value", "from", "input", "humanReadable", "codeFormat", "txSignatures"]);
    // have to do someting in the future
    inner[3] = "0x";
    return HexStr.concat(
      this.getField("type"), RLP.encode(inner));
  }

  setFieldsFromRLP(rlp: string): void {
    // Strip type byte
    const inner_rlp = "0x" + String(rlp).substring(4);
    const array = _.concat([this.type], RLP.decode(inner_rlp));

    this.setFieldsFromArray([
      "type", "nonce", "gasPrice", "gasLimit", "to", "value", "from", "input", "humanReadable", "codeFormat", "txSignatures"
    ], array);
  }
}

// https://docs.klaytn.foundation/content/klaytn/design/transactions/basic#txtypesmartcontractexecution
export class TxTypeSmartContractExecution extends KlaytnTx {
  static type = 0x30;
  static typeName = "TxTypeSmartContractExecution";
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
  };

  sigRLP(): string {
    // SigRLP = encode([encode([type, nonce, gasPrice, gas, to, value, from, input]), chainid, 0, 0])
    const inner = this.getFields([
      "type", "nonce", "gasPrice", "gasLimit", "to", "value", "from", "input"]);
    return RLP.encode([
      RLP.encode(inner), this.getField("chainId"), "0x", "0x"]);
  }

  txHashRLP(): string {
    // TxHashRLP = type + encode([nonce, gasPrice, gas, to, value, from, input, txSignatures])
    const inner = this.getFields([
      "nonce", "gasPrice", "gasLimit", "to", "value", "from", "input", "txSignatures"]);
    return HexStr.concat(
      this.getField("type"), RLP.encode(inner));
  }

  setFieldsFromRLP(rlp: string): void {
    // Strip type byte
    const inner_rlp = "0x" + String(rlp).substring(4);
    const array = _.concat([this.type], RLP.decode(inner_rlp));

    this.setFieldsFromArray([
      "type", "nonce", "gasPrice", "gasLimit", "to", "value", "from", "input", "txSignatures"
    ], array);
  }
}


// https://docs.klaytn.foundation/content/klaytn/design/transactions/basic#txtypeaccountupdate
export class TxTypeAccountUpdate extends KlaytnTx {
  static type = 0x20;
  static typeName = "TxTypeAccountUpdate";
  static fieldTypes = {
    "type":         FieldTypeUint8,
    "nonce":        FieldTypeUint64,
    "gasPrice":     FieldTypeUint256,
    "gasLimit":     FieldTypeUint64,
    "from":         FieldTypeAddress,
    "key":          FieldTypeAccountKey,
    "chainId":      FieldTypeUint64,
    "txSignatures": FieldTypeSignatureTuples,
  };

  sigRLP(): string {
    // SigRLP = encode([encode([type, nonce, gasPrice, gas, from, rlpEncodedKey]), chainid, 0, 0])
    const inner = this.getFields([
      "type", "nonce", "gasPrice", "gasLimit", "from", "key"]);
    return RLP.encode([
      RLP.encode(inner), this.getField("chainId"), "0x", "0x"]);
  }

  txHashRLP(): string {
    // TxHashRLP = type + encode([nonce, gasPrice, gas, from, rlpEncodedKey, txSignatures])
    const inner = this.getFields([
      "nonce", "gasPrice", "gasLimit", "from", "key", "txSignatures"]);
    return HexStr.concat(
      this.getField("type"), RLP.encode(inner));
  }

  setFieldsFromRLP(rlp: string): void {
    // Strip type byte
    const inner_rlp = "0x" + String(rlp).substring(4);
    const array = _.concat([this.type], RLP.decode(inner_rlp));

    this.setFieldsFromArray([
      "type", "nonce", "gasPrice", "gasLimit", "from", "key", "txSignatures"
    ], array);
  }
}

// https://docs.klaytn.foundation/content/klaytn/design/transactions/basic#txtypecancel
export class TxTypeCancel extends KlaytnTx {
  static type = 0x38;
  static typeName = "TxTypeCancel";
  static fieldTypes = {
    "type":         FieldTypeUint8,
    "nonce":        FieldTypeUint64,
    "gasPrice":     FieldTypeUint256,
    "gasLimit":     FieldTypeUint64,
    "from":         FieldTypeAddress,
    "chainId":      FieldTypeUint64,
    "txSignatures": FieldTypeSignatureTuples,
  };

  sigRLP(): string {
    // SigRLP = encode([encode([type, nonce, gasPrice, gas, from]), chainid, 0, 0])
    const inner = this.getFields([
      "type", "nonce", "gasPrice", "gasLimit", "from"]);
    return RLP.encode([
      RLP.encode(inner), this.getField("chainId"), "0x", "0x"]);
  }

  txHashRLP(): string {
    // TxHashRLP = type + encode([nonce, gasPrice, gas, from, txSignatures])
    const inner = this.getFields([
      "nonce", "gasPrice", "gasLimit", "from", "txSignatures"]);
    return HexStr.concat(
      this.getField("type"), RLP.encode(inner));
  }

  setFieldsFromRLP(rlp: string): void {
    // Strip type byte
    const inner_rlp = "0x" + String(rlp).substring(4);
    const array = _.concat([this.type], RLP.decode(inner_rlp));

    this.setFieldsFromArray([
      "type", "nonce", "gasPrice", "gasLimit", "from", "txSignatures"
    ], array);
  }
}

// https://docs.klaytn.foundation/content/klaytn/design/transactions/basic#txtypechaindataanchoring
export class TxTypeChainDataAnchoring extends KlaytnTx {
  static type = 0x48;
  static typeName = "TxTypeCancel";
  static fieldTypes = {
    "type":         FieldTypeUint8,
    "nonce":        FieldTypeUint64,
    "gasPrice":     FieldTypeUint256,
    "gasLimit":     FieldTypeUint64,
    "from":         FieldTypeAddress,
    "input":        FieldTypeBytes,
    "chainId":      FieldTypeUint64,
    "txSignatures": FieldTypeSignatureTuples,
  };

  sigRLP(): string {
    // SigRLP = encode([encode([type, nonce, gasPrice, gas, from, anchoredData]), chainid, 0, 0])
    const inner = this.getFields([
      "type", "nonce", "gasPrice", "gasLimit", "from", "input"]);
    return RLP.encode([
      RLP.encode(inner), this.getField("chainId"), "0x", "0x"]);
  }

  txHashRLP(): string {
    // TxHashRLP = type + encode([nonce, gasPrice, gas, from, input, txSignatures])
    const inner = this.getFields([
      "nonce", "gasPrice", "gasLimit", "from", "input", "txSignatures"]);
    return HexStr.concat(
      this.getField("type"), RLP.encode(inner));
  }

  setFieldsFromRLP(rlp: string): void {
    // Strip type byte
    const inner_rlp = "0x" + String(rlp).substring(4);
    const array = _.concat([this.type], RLP.decode(inner_rlp));

    this.setFieldsFromArray([
      "type", "nonce", "gasPrice", "gasLimit", "from", "input", "txSignatures"
    ], array);
  }
}