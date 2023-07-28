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

// https://docs.klaytn.foundation/content/klaytn/design/transactions/partial-fee-delegation#txtypefeedelegatedvaluetransferwithratio
export class TxTypeFeeDelegatedValueTransferWithRatio extends KlaytnTx {
  static type = 0x0a;
  static typeName = "TxTypeFeeDelegatedValueTransferWithRatio";
  static fieldTypes = {
    "type":         FieldTypeUint8,
    "nonce":        FieldTypeUint64,
    "gasPrice":     FieldTypeUint256,
    "gasLimit":     FieldTypeUint64,
    "to":           FieldTypeAddress,
    "value":        FieldTypeUint256,
    "from":         FieldTypeAddress,
    "feeRatio":     FieldTypeUint8,
    "chainId":      FieldTypeUint64,
    "txSignatures": FieldTypeSignatureTuples,
    "feePayer":     FieldTypeAddress,
    "feePayerSignatures": FieldTypeSignatureTuples,
  };

  sigRLP(): string {
    // SigRLP = encode([encode([type, nonce, gasPrice, gas, to, value, from, feeRatio]), chainid, 0, 0])
    const inner = this.getFields([
      "type", "nonce", "gasPrice", "gasLimit", "to", "value", "from", "feeRatio"]);
    return RLP.encode([
      RLP.encode(inner), this.getField("chainId"), "0x", "0x"]);
  }

  sigFeePayerRLP(): string {
    // SigFeePayerRLP = encode([ encode([type, nonce, gasPrice, gas, to, value, from, feeRatio]), feePayer, chainid, 0, 0 ])
    const inner = this.getFields([
      "type", "nonce", "gasPrice", "gasLimit", "to", "value", "from", "feeRatio"]);
    return RLP.encode([
      RLP.encode(inner), this.getField("feePayer"), this.getField("chainId"), "0x", "0x"]);
  }

  senderTxHashRLP(): string {
    // SenderTxHashRLP = type + encode([nonce, gasPrice, gas, to, value, from, feeRatio, txSignatures])
    const inner = this.getFields([
      "nonce", "gasPrice", "gasLimit", "to", "value", "from", "feeRatio", "txSignatures"]);
    return HexStr.concat(
      this.getField("type"), RLP.encode(inner));
  }

  txHashRLP(): string {
    // TxHashRLP = type + encode([nonce, gasPrice, gas, to, value, from, feeRatio, txSignatures, feePayer, feePayerSignatures])
    const inner = this.getFields([
      "nonce", "gasPrice", "gasLimit", "to", "value", "from", "feeRatio", "txSignatures", "feePayer", "feePayerSignatures"]);
    return HexStr.concat(
      this.getField("type"), RLP.encode(inner));
  }

  setFieldsFromRLP(rlp: string): void {
    // Strip type byte
    const inner_rlp = "0x" + String(rlp).substring(4);
    const array = _.concat([this.type], RLP.decode(inner_rlp));

    if (array.length == 9) {
      // from SenderTxHashRLP
      this.setFieldsFromArray([
        "type", "nonce", "gasPrice", "gasLimit", "to", "value", "from", "feeRatio", "txSignatures"
      ], array);
    } else if (array.length == 11) {
      // from TxHashRLP
      this.setFieldsFromArray([
        "type", "nonce", "gasPrice", "gasLimit", "to", "value", "from", "feeRatio", "txSignatures", "feePayer", "feePayerSignatures"
      ], array);
    } else {
      throw new Error("Wrongly encoded RLP string");
    }
  }
}

// https://docs.klaytn.foundation/content/klaytn/design/transactions/partial-fee-delegation#txtypefeedelegatedvaluetransfermemowithratio
export class TxTypeFeeDelegatedValueTransferMemoWithRatio extends KlaytnTx {
  static type = 0x12;
  static typeName = "TxTypeFeeDelegatedValueTransferMemoWithRatio";
  static fieldTypes = {
    "type":         FieldTypeUint8,
    "nonce":        FieldTypeUint64,
    "gasPrice":     FieldTypeUint256,
    "gasLimit":     FieldTypeUint64,
    "to":           FieldTypeAddress,
    "value":        FieldTypeUint256,
    "from":         FieldTypeAddress,
    "input":        FieldTypeBytes,
    "feeRatio":     FieldTypeUint8,
    "chainId":      FieldTypeUint64,
    "txSignatures": FieldTypeSignatureTuples,
    "feePayer":     FieldTypeAddress,
    "feePayerSignatures": FieldTypeSignatureTuples,
  };

  sigRLP(): string {
    // SigRLP = encode([encode([type, nonce, gasPrice, gas, to, value, from, input, feeRatio]), chainid, 0, 0])
    const inner = this.getFields([
      "type", "nonce", "gasPrice", "gasLimit", "to", "value", "from", "input", "feeRatio"]);
    return RLP.encode([
      RLP.encode(inner), this.getField("chainId"), "0x", "0x"]);
  }

  sigFeePayerRLP(): string {
    // SigFeePayerRLP = encode([encode([type, nonce, gasPrice, gas, to, value, from, input, feeRatio]), feePayer, chainid, 0, 0])
    const inner = this.getFields([
      "type", "nonce", "gasPrice", "gasLimit", "to", "value", "from", "input", "feeRatio"]);
    return RLP.encode([
      RLP.encode(inner), this.getField("feePayer"), this.getField("chainId"), "0x", "0x"]);
  }

  senderTxHashRLP(): string {
    // SenderTxHashRLP = type + encode([nonce, gasPrice, gas, to, value, from, input, feeRatio, txSignatures])
    const inner = this.getFields([
      "nonce", "gasPrice", "gasLimit", "to", "value", "from", "input", "feeRatio", "txSignatures"]);
    return HexStr.concat(
      this.getField("type"), RLP.encode(inner));
  }

  txHashRLP(): string {
    // TxHashRLP = type + encode([nonce, gasPrice, gas, to, value, from, input, feeRatio, txSignatures, feePayer, feePayerSignatures])
    const inner = this.getFields([
      "nonce", "gasPrice", "gasLimit", "to", "value", "from", "input", "feeRatio", "txSignatures", "feePayer", "feePayerSignatures"]);
    return HexStr.concat(
      this.getField("type"), RLP.encode(inner));
  }

  setFieldsFromRLP(rlp: string): void {
    // Strip type byte
    const inner_rlp = "0x" + String(rlp).substring(4);
    const array = _.concat([this.type], RLP.decode(inner_rlp));

    if (array.length == 10) {
      // from SenderTxHashRLP
      this.setFieldsFromArray([
        "type", "nonce", "gasPrice", "gasLimit", "to", "value", "from", "input", "feeRatio", "txSignatures"
      ], array);
    } else if (array.length == 12) {
      // from TxHashRLP
      this.setFieldsFromArray([
        "type", "nonce", "gasPrice", "gasLimit", "to", "value", "from", "input", "feeRatio", "txSignatures", "feePayer", "feePayerSignatures"
      ], array);
    } else {
      throw new Error("Wrongly encoded RLP string");
    }
  }
}

// https://docs.klaytn.foundation/content/klaytn/design/transactions/partial-fee-delegation#txtypefeedelegatedsmartcontractdeploywithratio
export class TxTypeFeeDelegatedSmartContractDeployWithRatio extends KlaytnTx {
  static type = 0x2a;
  static typeName = "TxTypeFeeDelegatedSmartContractDeployWithRatio";
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
    "feeRatio":     FieldTypeUint8,
    "codeFormat":   FieldTypeUint8,
    "chainId":      FieldTypeUint64,
    "txSignatures": FieldTypeSignatureTuples,
    "feePayer":     FieldTypeAddress,
    "feePayerSignatures": FieldTypeSignatureTuples,
  };

  sigRLP(): string {
    // SigRLP = encode([encode([type, nonce, gasPrice, gas, to, value, from, input, humanReadable, feeRatio, codeFormat]), chainid, 0, 0])
    const inner = this.getFields([
      "type", "nonce", "gasPrice", "gasLimit", "to", "value", "from", "input", "humanReadable", "feeRatio", "codeFormat"]);
    // have to do someting in the future
    inner[4] = "0x";
    return RLP.encode([
      RLP.encode(inner), this.getField("chainId"), "0x", "0x"]);
  }

  sigFeePayerRLP(): string {
    // SigFeePayerRLP = encode([encode([type, nonce, gasPrice, gas, to, value, from, input, humanReadable, feeRatio, codeFormat]), feePayer, chainid, 0, 0])
    const inner = this.getFields([
      "type", "nonce", "gasPrice", "gasLimit", "to", "value", "from", "input", "humanReadable", "feeRatio", "codeFormat"]);
    // have to do someting in the future
    inner[4] = "0x";
    return RLP.encode([
      RLP.encode(inner), this.getField("feePayer"), this.getField("chainId"), "0x", "0x"]);
  }

  senderTxHashRLP(): string {
    // SenderTxHashRLP = type + encode([nonce, gasPrice, gas, to, value, from, input, humanReadable, feeRatio, codeFormat, txSignatures])
    const inner = this.getFields([
      "nonce", "gasPrice", "gasLimit", "to", "value", "from", "input", "humanReadable", "feeRatio", "codeFormat", "txSignatures"]);
    // have to do someting in the future
    inner[3] = "0x";
    return HexStr.concat(
      this.getField("type"), RLP.encode(inner));
  }

  txHashRLP(): string {
    // TxHashRLP = type + encode([nonce, gasPrice, gas, to, value, from, input, humanReadable, feeRatio, codeFormat, txSignatures, feePayer, feePayerSignatures])
    const inner = this.getFields([
      "nonce", "gasPrice", "gasLimit", "to", "value", "from", "input", "humanReadable", "feeRatio", "codeFormat", "txSignatures", "feePayer", "feePayerSignatures"]);
    // have to do someting in the future
    inner[3] = "0x";
    return HexStr.concat(
      this.getField("type"), RLP.encode(inner));
  }

  setFieldsFromRLP(rlp: string): void {
    // Strip type byte
    const inner_rlp = "0x" + String(rlp).substring(4);
    const array = _.concat([this.type], RLP.decode(inner_rlp));

    if (array.length == 12) {
      // from SenderTxHashRLP
      this.setFieldsFromArray([
        "type", "nonce", "gasPrice", "gasLimit", "to", "value", "from", "input", "humanReadable", "feeRatio", "codeFormat", "txSignatures"
      ], array);
    } else if (array.length == 14) {
      // from TxHashRLP
      this.setFieldsFromArray([
        "type", "nonce", "gasPrice", "gasLimit", "to", "value", "from", "input", "humanReadable", "feeRatio", "codeFormat", "txSignatures", "feePayer", "feePayerSignatures"
      ], array);
    } else {
      throw new Error("Wrongly encoded RLP string");
    }
  }
}

// https://docs.klaytn.foundation/content/klaytn/design/transactions/partial-fee-delegation#txtypefeedelegatedsmartcontractexecutionwithratio
export class TxTypeFeeDelegatedSmartContractExecutionWithRatio extends KlaytnTx {
  static type = 0x32;
  static typeName = "TxTypeFeeDelegatedSmartContractExecutionWithRatio";
  static fieldTypes = {
    "type":         FieldTypeUint8,
    "nonce":        FieldTypeUint64,
    "gasPrice":     FieldTypeUint256,
    "gasLimit":     FieldTypeUint64,
    "to":           FieldTypeAddress,
    "value":        FieldTypeUint256,
    "from":         FieldTypeAddress,
    "input":        FieldTypeBytes,
    "feeRatio":     FieldTypeUint8,
    "chainId":      FieldTypeUint64,
    "txSignatures": FieldTypeSignatureTuples,
    "feePayer":     FieldTypeAddress,
    "feePayerSignatures": FieldTypeSignatureTuples,
  };

  sigRLP(): string {
    // SigRLP = encode([encode([type, nonce, gasPrice, gas, to, value, from, input, feeRatio]), chainid, 0, 0])
    const inner = this.getFields([
      "type", "nonce", "gasPrice", "gasLimit", "to", "value", "from", "input", "feeRatio"]);
    return RLP.encode([
      RLP.encode(inner), this.getField("chainId"), "0x", "0x"]);
  }

  sigFeePayerRLP(): string {
    // SigFeePayerRLP = encode([encode([type, nonce, gasPrice, gas, to, value, from, input, feeRatio]), feePayer, chainid, 0, 0])
    const inner = this.getFields([
      "type", "nonce", "gasPrice", "gasLimit", "to", "value", "from", "input", "feeRatio"]);
    return RLP.encode([
      RLP.encode(inner), this.getField("feePayer"), this.getField("chainId"), "0x", "0x"]);
  }

  senderTxHashRLP(): string {
    // SenderTxHashRLP = type + encode([nonce, gasPrice, gas, to, value, from, input, feeRatio, txSignatures])
    const inner = this.getFields([
      "nonce", "gasPrice", "gasLimit", "to", "value", "from", "input", "feeRatio", "txSignatures"]);
    return HexStr.concat(
      this.getField("type"), RLP.encode(inner));
  }

  txHashRLP(): string {
    // TxHashRLP = type + encode([nonce, gasPrice, gas, to, value, from, input, feeRatio, txSignatures, feePayer, feePayerSignatures])
    const inner = this.getFields([
      "nonce", "gasPrice", "gasLimit", "to", "value", "from", "input", "feeRatio", "txSignatures", "feePayer", "feePayerSignatures"]);
    return HexStr.concat(
      this.getField("type"), RLP.encode(inner));
  }

  setFieldsFromRLP(rlp: string): void {
    // Strip type byte
    const inner_rlp = "0x" + String(rlp).substring(4);
    const array = _.concat([this.type], RLP.decode(inner_rlp));

    if (array.length == 10) {
      // from SenderTxHashRLP
      this.setFieldsFromArray([
        "type", "nonce", "gasPrice", "gasLimit", "to", "value", "from", "input", "feeRatio", "txSignatures"
      ], array);
    } else if (array.length == 12) {
      // from TxHashRLP
      this.setFieldsFromArray([
        "type", "nonce", "gasPrice", "gasLimit", "to", "value", "from", "input", "feeRatio", "txSignatures", "feePayer", "feePayerSignatures"
      ], array);
    } else {
      throw new Error("Wrongly encoded RLP string");
    }
  }
}


// https://docs.klaytn.foundation/content/klaytn/design/transactions/partial-fee-delegation#txtypefeedelegatedaccountupdatewithratio
export class TxTypeFeeDelegatedAccountUpdateWithRatio extends KlaytnTx {
  static type = 0x22;
  static typeName = "TxTypeFeeDelegatedAccountUpdateWithRatio";
  static fieldTypes = {
    "type":         FieldTypeUint8,
    "nonce":        FieldTypeUint64,
    "gasPrice":     FieldTypeUint256,
    "gasLimit":     FieldTypeUint64,
    "from":         FieldTypeAddress,
    "key":          FieldTypeAccountKey,
    "feeRatio":     FieldTypeUint8,
    "chainId":      FieldTypeUint64,
    "txSignatures": FieldTypeSignatureTuples,
    "feePayer":     FieldTypeAddress,
    "feePayerSignatures": FieldTypeSignatureTuples,
  };

  sigRLP(): string {
    // SigRLP = encode([encode([type, nonce, gasPrice, gas, from, rlpEncodedKey, feeRatio]), chainid, 0, 0])
    const inner = this.getFields([
      "type", "nonce", "gasPrice", "gasLimit", "from", "key", "feeRatio"]);
    return RLP.encode([
      RLP.encode(inner), this.getField("chainId"), "0x", "0x"]);
  }

  sigFeePayerRLP(): string {
    // SigFeePayerRLP = encode([encode([type, nonce, gasPrice, gas, from, rlpEncodedKey, feeRatio]), feePayer, chainid, 0, 0])
    const inner = this.getFields([
      "type", "nonce", "gasPrice", "gasLimit", "from", "key", "feeRatio"]);
    return RLP.encode([
      RLP.encode(inner), this.getField("feePayer"), this.getField("chainId"), "0x", "0x"]);
  }

  senderTxHashRLP(): string {
    // SenderTxHashRLP = type + encode([nonce, gasPrice, gas, from, rlpEncodedKey, feeRatio, txSignatures])
    const inner = this.getFields([
      "nonce", "gasPrice", "gasLimit", "from", "key", "feeRatio", "txSignatures"]);
    return HexStr.concat(
      this.getField("type"), RLP.encode(inner));
  }

  txHashRLP(): string {
    // TxHashRLP = type + encode([nonce, gasPrice, gas, from, rlpEncodedKey, feeRatio, txSignatures, feePayer, feePayerSignatures])
    const inner = this.getFields([
      "nonce", "gasPrice", "gasLimit", "from", "key", "feeRatio", "txSignatures", "feePayer", "feePayerSignatures"]);
    return HexStr.concat(
      this.getField("type"), RLP.encode(inner));
  }

  setFieldsFromRLP(rlp: string): void {
    // Strip type byte
    const inner_rlp = "0x" + String(rlp).substring(4);
    const array = _.concat([this.type], RLP.decode(inner_rlp));

    if (array.length == 8) {
      // from SenderTxHashRLP
      this.setFieldsFromArray([
        "type", "nonce", "gasPrice", "gasLimit", "from", "key", "feeRatio", "txSignatures"
      ], array);
    } else if (array.length == 10) {
      // from TxHashRLP
      this.setFieldsFromArray([
        "type", "nonce", "gasPrice", "gasLimit", "from", "key", "feeRatio", "txSignatures", "feePayer", "feePayerSignatures"
      ], array);
    } else {
      throw new Error("Wrongly encoded RLP string");
    }
  }
}

// https://docs.klaytn.foundation/content/klaytn/design/transactions/partial-fee-delegation#txtypefeedelegatedcancelwithratio
export class TxTypeFeeDelegatedCancelWithRatio extends KlaytnTx {
  static type = 0x3a;
  static typeName = "TxTypeFeeDelegatedCancelWithRatio";
  static fieldTypes = {
    "type":         FieldTypeUint8,
    "nonce":        FieldTypeUint64,
    "gasPrice":     FieldTypeUint256,
    "gasLimit":     FieldTypeUint64,
    "from":         FieldTypeAddress,
    "feeRatio":     FieldTypeUint8,
    "chainId":      FieldTypeUint64,
    "txSignatures": FieldTypeSignatureTuples,
    "feePayer":     FieldTypeAddress,
    "feePayerSignatures": FieldTypeSignatureTuples,
  };

  sigRLP(): string {
    // SigRLP = encode([encode([type, nonce, gasPrice, gas, from, feeRatio]), chainid, 0, 0])
    const inner = this.getFields([
      "type", "nonce", "gasPrice", "gasLimit", "from", "feeRatio"]);
    return RLP.encode([
      RLP.encode(inner), this.getField("chainId"), "0x", "0x"]);
  }

  sigFeePayerRLP(): string {
    // SigFeePayerRLP = encode([encode([type, nonce, gasPrice, gas, from, feeRatio]), feePayer, chainid, 0, 0])
    const inner = this.getFields([
      "type", "nonce", "gasPrice", "gasLimit", "from", "feeRatio"]);
    return RLP.encode([
      RLP.encode(inner), this.getField("feePayer"), this.getField("chainId"), "0x", "0x"]);
  }

  senderTxHashRLP(): string {
    // SenderTxHashRLP = type + encode([nonce, gasPrice, gas, from, feeRatio, txSignatures])
    const inner = this.getFields([
      "nonce", "gasPrice", "gasLimit", "from", "feeRatio", "txSignatures"]);
    return HexStr.concat(
      this.getField("type"), RLP.encode(inner));
  }

  txHashRLP(): string {
    // TxHashRLP = type + encode([nonce, gasPrice, gas, from, feeRatio, txSignatures, feePayer, feePayerSignatures])
    const inner = this.getFields([
      "nonce", "gasPrice", "gasLimit", "from", "feeRatio", "txSignatures", "feePayer", "feePayerSignatures"]);
    return HexStr.concat(
      this.getField("type"), RLP.encode(inner));
  }

  setFieldsFromRLP(rlp: string): void {
    // Strip type byte
    const inner_rlp = "0x" + String(rlp).substring(4);
    const array = _.concat([this.type], RLP.decode(inner_rlp));

    if (array.length == 7) {
      // from SenderTxHashRLP
      this.setFieldsFromArray([
        "type", "nonce", "gasPrice", "gasLimit", "from", "feeRatio", "txSignatures"
      ], array);
    } else if (array.length == 9) {
      // from TxHashRLP
      this.setFieldsFromArray([
        "type", "nonce", "gasPrice", "gasLimit", "from", "feeRatio", "txSignatures", "feePayer", "feePayerSignatures"
      ], array);
    } else {
      throw new Error("Wrongly encoded RLP string");
    }
  }
}

// https://docs.klaytn.foundation/content/klaytn/design/transactions/partial-fee-delegation#txtypefeedelegatedchaindataanchoringwithratio
export class TxTypeFeeDelegatedChainDataAnchoringWithRatio extends KlaytnTx {
  static type = 0x4a;
  static typeName = "TxTypeFeeDelegatedChainDataAnchoringWithRatio";
  static fieldTypes = {
    "type":         FieldTypeUint8,
    "nonce":        FieldTypeUint64,
    "gasPrice":     FieldTypeUint256,
    "gasLimit":     FieldTypeUint64,
    "from":         FieldTypeAddress,
    "input":        FieldTypeBytes,
    "feeRatio":     FieldTypeUint8,
    "chainId":      FieldTypeUint64,
    "txSignatures": FieldTypeSignatureTuples,
    "feePayer":     FieldTypeAddress,
    "feePayerSignatures": FieldTypeSignatureTuples,
  };

  sigRLP(): string {
    // SigRLP = encode([encode([type, nonce, gasPrice, gas, from, anchoredData, feeRatio]), chainid, 0, 0])
    const inner = this.getFields([
      "type", "nonce", "gasPrice", "gasLimit", "from", "input", "feeRatio"]);
    return RLP.encode([
      RLP.encode(inner), this.getField("chainId"), "0x", "0x"]);
  }

  sigFeePayerRLP(): string {
    // SigFeePayerRLP = encode([encode([type, nonce, gasPrice, gas, from, anchoredData, feeRatio]), feePayer, chainid, 0, 0])
    const inner = this.getFields([
      "type", "nonce", "gasPrice", "gasLimit", "from", "input", "feeRatio"]);
    return RLP.encode([
      RLP.encode(inner), this.getField("feePayer"), this.getField("chainId"), "0x", "0x"]);
  }

  senderTxHashRLP(): string {
    // SenderTxHashRLP = type + encode([nonce, gasPrice, gas, from, anchoredData, feeRatio, txSignatures])
    const inner = this.getFields([
      "nonce", "gasPrice", "gasLimit", "from", "input", "feeRatio", "txSignatures"]);
    return HexStr.concat(
      this.getField("type"), RLP.encode(inner));
  }

  txHashRLP(): string {
    // TxHashRLP = type + encode([nonce, gasPrice, gas, from, anchoredData, feeRatio, txSignatures, feePayer, feePayerSignatures])
    const inner = this.getFields([
      "nonce", "gasPrice", "gasLimit", "from", "input", "feeRatio", "txSignatures", "feePayer", "feePayerSignatures"]);
    return HexStr.concat(
      this.getField("type"), RLP.encode(inner));
  }

  setFieldsFromRLP(rlp: string): void {
    // Strip type byte
    const inner_rlp = "0x" + String(rlp).substring(4);
    const array = _.concat([this.type], RLP.decode(inner_rlp));

    if (array.length == 8) {
      // from SenderTxHashRLP
      this.setFieldsFromArray([
        "type", "nonce", "gasPrice", "gasLimit", "from", "input", "feeRatio", "txSignatures"
      ], array);
    } else if (array.length == 10) {
      // from TxHashRLP
      this.setFieldsFromArray([
        "type", "nonce", "gasPrice", "gasLimit", "from", "input", "feeRatio", "txSignatures", "feePayer", "feePayerSignatures"
      ], array);
    } else {
      throw new Error("Wrongly encoded RLP string");
    }
  }
}