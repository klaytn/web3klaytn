import { RLP } from "@ethereumjs/rlp";
import { KlaytnTxFactory, TxType, isFeePayerSigTxType } from "@klaytn/js-ext-core";
import { keccak256 } from "ethereum-cryptography/keccak.js";
import * as ethereumCryptography from "ethereum-cryptography/secp256k1.js";
import { Transaction as LegacyTransaction, TxOptions } from "web3-eth-accounts";
import { Uint } from "web3-types";
import { bytesToHex, hexToBytes, toHex, toNumber, numberToHex, toBigInt } from "web3-utils";

// eslint-disable-next-line import/extensions

export const secp256k1 = ethereumCryptography.secp256k1 ?? ethereumCryptography;

import { KlaytnTxData } from "./types";

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
  public readonly feeRatio?: Uint;

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
    this.key = txData.key;
    this.feePayer = txData.feePayer;
    this.feePayer_v = txData.feePayer_v;
    this.feePayer_r = txData.feePayer_r;
    this.feePayer_s = txData.feePayer_s;
    this.txSignatures = txData.txSignatures;
    this.feePayerSignatures = txData.feePayerSignatures;
    this.feeRatio = txData.feeRatio;

    const klaytnTxObject = {
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
      txSignatures: this.txSignatures,
      feePayerSignatures: this.feePayerSignatures,
      feeRatio: this.feeRatio,
    };

    if (txData.type == TxType.SmartContractDeploy ||
      txData.type == TxType.FeeDelegatedSmartContractDeploy ||
      txData.type == TxType.FeeDelegatedSmartContractDeployWithRatio) {
      klaytnTxObject.to = "0x0000000000000000000000000000000000000000";
    }

    // A readonly CoreKlaytnTx object
    this.klaytnTxData = KlaytnTxFactory.fromObject(klaytnTxObject);

    if (this.v && this.r && this.s) {
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
      const msg = this._errorMsg("Private key must be 32 bytes in length.");
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
    const tx = this.klaytnTxData;

    if (isFeePayerSigTxType(tx.type)) {
      return hexToBytes(tx.senderTxHashRLP());
    }
    return hexToBytes(tx.txHashRLP());
  }

  // Returns the raw transaction
  public serializeAsFeePayer(): Uint8Array {
    const tx = this.klaytnTxData;

    return hexToBytes(tx.txHashRLP());
  }
}
