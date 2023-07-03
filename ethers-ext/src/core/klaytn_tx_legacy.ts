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


// 
export class TxTypeLegacy0 extends KlaytnTx {
  static type = 0x0;
  static typeName = "TxTypeLegacy0";
  static fieldTypes = {
    'type':         FieldTypeUint8,
    'chainId':      FieldTypeUint64,
    'nonce':        FieldTypeUint64, 
    'maxPriorityFeePerGas': FieldTypeUint256, 
    'maxFeePerGas': FieldTypeUint256, 
    'gasLimit':     FieldTypeUint64,
    'to':           FieldTypeAddress,
    'value':        FieldTypeUint256,
  };

  // in case of TxTypeLegacy, this function is not called
  sigRLP(): string {
    return ""; 
  }

  // in case of TxTypeLegacy, this function is not called
  txHashRLP(): string {
    return "";
  }

  // 0x0 || RLP([chainId, nonce, maxPriorityFeePerGas, maxFeePerGas, gasLimit, to, value ])
  setFieldsFromRLP(rlp: string): void {
    console.log("rlp: ", rlp )
    // Strip type byte
    const inner_rlp = "0x" + String(rlp).substring(3);
    const array = _.concat([ this.type ], RLP.decode(inner_rlp));

    this.setFieldsFromArray([
      'type', 'chainId', 'nonce', 'maxPriorityFeePerGas', 'maxFeePerGas', 'gasLimit', 'to', 'value'
    ], array);
  }
}

export class TxTypeLegacy2 extends KlaytnTx {
    static type = 0x2;
    static typeName = "TxTypeLegacy2";
    static fieldTypes = {
      'type':         FieldTypeUint8,
      'chainId':      FieldTypeUint64,
      'nonce':        FieldTypeUint64, 
      'maxPriorityFeePerGas': FieldTypeUint256, 
      'maxFeePerGas': FieldTypeUint256, 
      'gasLimit':     FieldTypeUint256,
      'to':           FieldTypeAddress,
      'value':        FieldTypeUint256,
      'data':         FieldTypeBytes, 
      'accessList':   FieldTypeBytes, 
      'signatureYParity': FieldTypeBytes, 
      'signatureR':   FieldTypeBytes, 
      'signatureS':   FieldTypeBytes
    };

    // in case of TxTypeLegacy, this function is not called
    sigRLP(): string {
      return ""; 
    }

    // in case of TxTypeLegacy, this function is not called
    txHashRLP(): string {
      return "";
    }

    // 0x02 || RLP([chainId, nonce, maxPriorityFeePerGas, maxFeePerGas, gasLimit, to, value, data, accessList, signatureYParity, signatureR, signatureS])
    setFieldsFromRLP(rlp: string): void {
      // Strip type byte
      const inner_rlp = "0x" + String(rlp).substring(4);
      const array = _.concat([ this.type ], RLP.decode(inner_rlp));

      this.setFieldsFromArray([
        'type', 'chainId', 'nonce', 'maxPriorityFeePerGas', 'maxFeePerGas', 'gasLimit', 'to', 'value', 'data', 'accessList', 'signatureYParity', 'signatureR', 'signatureS'
      ], array);
    }
  }