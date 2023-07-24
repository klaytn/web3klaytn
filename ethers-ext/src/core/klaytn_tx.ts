import _ from "lodash";
import { FieldSet, FieldSetFactory } from "./field"
import { SignatureLike, getSignatureTuple } from "./sig";
import { HexStr } from "./util";
import { BigNumber } from "ethers";
import { hexValue, parseTransaction } from "ethers/lib/utils";
import { TransactionRequest } from "@ethersproject/abstract-provider";

export abstract class KlaytnTx extends FieldSet {

  ////////////////////////////////////////////////////////////
  // Child classes MUST override below properties and methods

  // RLP encoding for sender to sign.
  abstract sigRLP(): string;
  // RLP encoding for broadcasting. Includes all signatures.
  abstract txHashRLP(): string;
  // Set its own fields from an RLP encoded string.
  abstract setFieldsFromRLP(rlp: string): void;

  ////////////////////////////////////////////////////////////
  // Child classes MAY override below methods

  // RLP encoding for fee payer to sign.
  sigFeePayerRLP(): string {
    throw new Error(`fee payer not supported in txtype ${this.type}`);
  }
  // RLP encoding with sender signature.
  senderTxHashRLP(): string {
    return this.sigRLP();
  }

  // Add a signature
  addSenderSig(sig: SignatureLike) {
    if (!this.fieldTypes.txSignatures) {
      throw new Error(`No 'txSignatures' field in txtype '${this.type}'`);
    }
    const tuple = getSignatureTuple(sig);
    this.fields.txSignatures ||= [];
    this.fields.txSignatures.push(tuple);
  }

  // Add a signature as a feePayer
  addFeePayerSig(sig: SignatureLike) {
    if (!this.fieldTypes.feePayerSignatures) {
      throw new Error(`No 'feePayerSignatures' field in txtype '${this.type}'`);
    }
    const tuple = getSignatureTuple(sig);
    this.fields.feePayerSignatures ||= [];
    this.fields.feePayerSignatures.push(tuple);
  }

  public hasFeePayer(): boolean {
    const feeDelegations: Array<number> = [
      0x09, 0x11, 0x21, 0x29, 0x31, 0x39, 0x49 ];
    const feeDelegationsAsFeePayer: Array<number> = [
      0x0a, 0x12, 0x22, 0x2a, 0x32, 0x3a, 0x4a ];

    let fp_type = typeof(this.type)=='string' ? HexStr.toNumber(this.type) : this.type;  
    
    if (typeof(fp_type) == 'number') {
      return feeDelegations.includes(fp_type) || feeDelegationsAsFeePayer.includes(fp_type); 
    } else {
      throw new Error('The type have to be a number');
    }
  }

  // End override
  ////////////////////////////////////////////////////////////
}

class _KlaytnTxFactory extends FieldSetFactory<KlaytnTx> {
  public fromRLP(value: string): any {
    if (!HexStr.isHex(value)) {
      throw new Error(`Not an RLP encoded string`);
    }

    const rlp = HexStr.from(value);
    if (rlp.length < 4) {
      throw new Error(`RLP encoded string too short`);
    }

    const type = HexStr.toNumber(rlp.substr(0,4));
    if ( !this.has(type) ) {
      return parseTransaction( value );
    }
    else { 
      const ctor = this.lookup(type);
      const instance = new ctor();
      instance.setFieldsFromRLP(rlp);
      return instance;
    }
  }
}

const requiredFields = ['type', 'chainId', 'txSignatures'];
export const KlaytnTxFactory = new _KlaytnTxFactory(
  requiredFields,
);

export function objectFromRLP(value: string): any {
  const tx = KlaytnTxFactory.fromRLP( value ); 

  if ( tx instanceof KlaytnTx )
    return tx.toObject();
  
  return tx;
}

export function encodeTxForRPC( allowedKeys:string[], tx: TransactionRequest ): any {
  // TODO: refactoring like below 
  // https://github.com/ethers-io/ethers.js/blob/master/packages/providers/src.ts/json-rpc-provider.ts#L701
  // return {
  //   from: hexlify(tx.from),
  //   gas: tx.gasLimit? fromnumber(tx.gasLimit) : null;
  // };

  let ttx: any = {};
  for (const key in tx) {
    if (allowedKeys.indexOf(key) != -1) {
      let value = _.get(tx, key);

      if ( value == 0 || value === "0x0000000000000000000000000000000000000000") {
        value = "0x";
      } else if ( typeof(value) == 'number' || value instanceof BigNumber ) {
        // https://github.com/ethers-io/ethers.js/blob/master/packages/providers/src.ts/json-rpc-provider.ts#L701
        ttx[key] = hexValue( value );
      } else {
        ttx[key] = value;
      }
    }
  }
  return ttx;
}