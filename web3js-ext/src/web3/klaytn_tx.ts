import { Transaction as LegacyTransaction, TypedTransaction, TxData, TxOptions, ECDSASignature } from "web3-eth-accounts";
import { bytesToHex, hexToBytes, toHex, toNumber, numberToHex, toBigInt } from "web3-utils";
import { keccak256 } from 'ethereum-cryptography/keccak.js';
import { RLP } from '@ethereumjs/rlp';
import { Bytes, Numbers, Transaction as TransactionFields, Web3Context } from "web3";
import _ from "lodash";
import { prepareTransactionForSigning } from "web3-eth";

// eslint-disable-next-line import/extensions
import * as ethereumCryptography from 'ethereum-cryptography/secp256k1.js';

export const secp256k1 = ethereumCryptography.secp256k1 ?? ethereumCryptography;

import { KlaytnTxFactory } from "@klaytn/ethers-ext";
export interface KlaytnTxData extends TxData {
  from?: string,
  chainId?: bigint,
}

// See web3-types/src/eth_types.ts:TransactionBase and its child interfaces
const web3jsAllowedTransactionKeys = [
  "value", "accessList", "common", "gas", "gasPrice", "type", "maxFeePerGas",
	"maxPriorityFeePerGas", "data", "input", "nonce", "chain", "hardfork",
	"chainId", "networkId", "gasLimit", "yParity", "v", "r", "s",
  "from", "to",
];

// web3.js may strip or reject some Klaytn-specific transaction fields.
// To prserve transaction fields around web3js function calls, use saveCustomFields.
export function saveCustomFields(tx: any): any {
  // Save fields that are not allowed in web3.js
  const savedFields: any = {};
  for (const key in tx) {
    if (web3jsAllowedTransactionKeys.indexOf(key) === -1) {
      savedFields[key] = _.get(tx, key);
      _.unset(tx, key);
    }
  }

  // Save txtype that is not supported in web3.js.
  // and disguise as legacy (type 0) transaction
  // because web3js-ext's KlaytnTx is based on web3js's LegacyTransaction.
  if (KlaytnTxFactory.has(tx.type)) {
    savedFields["type"] = tx.type;
    tx.type = 0;
  }

  return savedFields;
}

// Fill required fields from the context
export async function prepareTransaction(
  transaction: TransactionFields,
  context: Web3Context,
  privateKey: Bytes): Promise<TypedTransaction>
{  
  if (KlaytnTxFactory.has(transaction.type)) {
    transaction = _.clone(transaction);
    let savedFields = saveCustomFields(transaction);

    // prepareTransactionForSigning expects ANY value (not undefined)
    // because otherwise eth_estimateGas will fail with an RPC error '"0x"..*hexutil.Big'.
    // however, some Klaytn tx types stipulates to NOT have value (e.g. TxTypeCancel, TxTypeAccountUpdate)
    // Therefore we fill with zero value if not defined.
    transaction.value ??= 0;

    let tx = await prepareTransactionForSigning(
      transaction, context, privateKey, true, true);

    let txData = { ...tx, ...savedFields };

    // Below fields might be
    // (1) not specified at the first place,
    // (2) or lost during prepareTransactionForSigning,
    // (3) or not populated by prepareTransactionForSigning.
    txData.from ??= transaction.from;
    txData.chainId ??= tx.common.chainId();

    let txOptions = (tx as any).txOptions;

    return new KlaytnTx(txData, txOptions);
  } else {
    return await prepareTransactionForSigning(
      transaction, context, privateKey, true, true);
  }
}

// Mimics the LegacyTransaction.
// See web3-eth-accounts/src/tx/legacyTransaction.ts
// and web3-eth-accounts/src/tx/baseTransaction.ts
//
// Functions modified to support sign():
// - getMessageToSign
// - _processSignature
// - serialize
export class KlaytnTx extends LegacyTransaction {

  // BaseTransaction._type is always 0. KlaytnTx._klaytnType is nonzero.
  private readonly _klaytnType: number;
  public readonly from?: string;
  public readonly chainId?: bigint;
  public readonly key?: any;
  public readonly feePayer?: string;
  public readonly feePayer_v?: bigint;
  public readonly feePayer_r?: Uint8Array;
  public readonly feePayer_s?: Uint8Array;
  public readonly txSignatures?: any;
  public readonly feePayerSignatures?: any;

  // Parsed KlaytnTx object
  private readonly klaytnTxData: any; // TODO: import KlaytnTx as CoreKlaytnTx from ethers-ext

  // Most fields are class properties, except 'type' is defined as getter in BaseTransaction.
  public override get type(): number {
    return this._klaytnType;
  }

  // This constructor creates a frozen read-only transaction object out of TxData.
  // Any modifications to the fields (e.g. adding the signature) should involve
  // the construction of a new object, rather than modifying the fields directly.
  public constructor(txData: KlaytnTxData, txOptions: TxOptions = {}) {
    // Allow adding new fields inside constructor.
    const savedFreeze = txOptions.freeze;
    txOptions.freeze = false;

    // Construct LegacyTransaction and parse TxData fields
    super(txData, txOptions);

    // parse Klaytn-specific fields
    if (!txData.type) {
      // Should not reach here because KlaytnTx is selected via explicit type field.
      throw new Error("Missing 'type' field");
    }
    this._klaytnType = toNumber(txData.type) as number;
    this.from = txData.from;
    this.chainId = txData.chainId;
    // @ts-ignore
    this.key = txData.key;
    // @ts-ignore
    this.feePayer = txData.feePayer;
    // @ts-ignore
    this.feePayer_v = txData.feePayer_v;
    // @ts-ignore
    this.feePayer_r = txData.feePayer_r;
    // @ts-ignore
    this.feePayer_s = txData.feePayer_s;
    // @ts-ignore
    this.txSignatures = txData.txSignatures;
    // @ts-ignore
    this.feePayerSignatures = txData.feePayerSignatures;

    let klaytnTxObject = {
      // Convert to type understood by CoreKlaytnTx.
      // TODO: add more fields for other TxTypes
      type:     toHex(this.type || 0),
      nonce:    toHex(this.nonce),
      gasPrice: toHex(this.gasPrice),
      gasLimit: toHex(this.gasLimit),
      to:       this.to ? bytesToHex(this.to.toString()) : undefined,
      value:    toHex(this.value),
      from:     this.from ? this.from : undefined,
      data:     bytesToHex(this.data),
      input:    bytesToHex(this.data),
      chainId:  this.chainId ? toHex(this.chainId) : undefined,
      humanReadable: false, 
      codeFormat: 0x00,
      key: this.key,
      feePayer: this.feePayer,
      // @ts-ignore
      txSignatures: this.txSignatures,
      // @ts-ignore
      feePayerSignatures: this.feePayerSignatures,
    }; 

    if ( txData.type == 0x28 ) {
      klaytnTxObject.to = "0x0000000000000000000000000000000000000000";
    }

    // A readonly CoreKlaytnTx object
    this.klaytnTxData = KlaytnTxFactory.fromObject(klaytnTxObject);

    if (this.v && this.r && this. s) {
      this.klaytnTxData.addSenderSig([
        Number(this.v),
        numberToHex(this.r),
        numberToHex(this.s),
      ]);
    }

    // @ts-ignore
    if (this.feePayer_v && this.feePayer_r && this.feePayer_s) {
      this.klaytnTxData.addFeePayerSig([
        // @ts-ignore
        Number(this.feePayer_v),
        // @ts-ignore
        numberToHex(this.feePayer_r),
        // @ts-ignore
        numberToHex(this.feePayer_s),
      ]);
    }

    // Recreate the behavior at the end of LegacyTransaction.constructor().
    this.txOptions.freeze = savedFreeze;
    if (this.txOptions.freeze ?? true) {
      Object.freeze(this);
    }
  }

  public getMessageToSign(hashMessage: false): Uint8Array[];
  public getMessageToSign(hashMessage?: true): Uint8Array;
  public getMessageToSign(hashMessage = true) {
    const rlp = hexToBytes(this.klaytnTxData.sigRLP());
    if (hashMessage) {
      return keccak256(rlp); // Hashed Uint8Array
    } else {
      return RLP.decode(rlp); // RLP-decoded Uint8Array[]
    }
  }

  public getMessageToSignAsFeePayer(hashMessage: false): Uint8Array[];
  public getMessageToSignAsFeePayer(hashMessage?: true): Uint8Array;
  public getMessageToSignAsFeePayer(hashMessage = true) {
    const rlp = hexToBytes(this.klaytnTxData.sigFeePayerRLP());
    if (hashMessage) {
      return keccak256(rlp); // Hashed Uint8Array
    } else {
      return RLP.decode(rlp); // RLP-decoded Uint8Array[]
    }
  }

  public signAsFeePayer(privateKey: Uint8Array): KlaytnTx {
		if (privateKey.length !== 32) {
			const msg = this._errorMsg('Private key must be 32 bytes in length.');
			throw new Error(msg);
		}

		const msgHash = this.getMessageToSignAsFeePayer(true);
    const signature = secp256k1.sign(msgHash, privateKey);
		const signatureBytes = signature.toCompactRawBytes();

		const r = signatureBytes.subarray(0, 32);
		const s = signatureBytes.subarray(32, 64);
		const v = BigInt(signature.recovery! + 27); 

		const tx = this._processSignatureAsFeePayer(v, r, s);

		return tx;
	}

  // Returns a new KlaytnTx by adding the signature
  protected _processSignature(v: bigint, r: Uint8Array, s: Uint8Array): KlaytnTx {
    // Klaytn TxTypes must comply to EIP-155.
    v += this.common.chainId() * BigInt(2) + BigInt(8);

    return new KlaytnTx({
      ...this,
      type: this.type, // The '...this' expression does not include this.type because it's a getter.
      v: v,
      r: toBigInt(bytesToHex(r)),
      s: toBigInt(bytesToHex(s)),
    }, this.txOptions);
  }

  // Returns a new KlaytnTx by adding the signature
  protected _processSignatureAsFeePayer(v: bigint, r: Uint8Array, s: Uint8Array): KlaytnTx {
    // Klaytn TxTypes must comply to EIP-155.
    v += this.common.chainId() * BigInt(2) + BigInt(8);

    return new KlaytnTx({
      ...this,
      type: this.type, // The '...this' expression does not include this.type because it's a getter.
      feePayer_v: v,
      feePayer_r: toBigInt(bytesToHex(r)),
      feePayer_s: toBigInt(bytesToHex(s)),
    }, this.txOptions);
  }

  // Returns the raw transaction
  public serialize(): Uint8Array {

    let tx = this.klaytnTxData; 

    if (tx.hasFeePayer()) {
      return hexToBytes(tx.senderTxHashRLP());
    }
    return hexToBytes(tx.txHashRLP());
  }

  // Returns the raw transaction
  public serializeAsFeePayer(): Uint8Array {

    let tx = this.klaytnTxData; 

    return hexToBytes(tx.txHashRLP());
  }
}
