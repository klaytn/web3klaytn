import { Transaction as LegacyTransaction, TxData, TypedTransaction, TxOptions } from "web3-eth-accounts";
import { bytesToHex, hexToBytes, toHex, numberToHex, toBigInt } from "web3-utils";
import { keccak256 } from 'ethereum-cryptography/keccak.js';
import { RLP } from '@ethereumjs/rlp';

import { KlaytnTxFactory } from "@klaytn/ethers-ext";

// Mimics the LegacyTransaction.
// See web3-eth-accounts/src/tx/legacyTransaction.ts
// and web3-eth-accounts/src/tx/baseTransaction.ts
//
// Functions modified to support sign():
// - getMessageToSign
// - _processSignature
// - serialize
export class KlaytnTx extends LegacyTransaction {
  readonly klaytnTxData: any; // TODO: import KlaytnTx as CoreKlaytnTx from ethers-ext

  public static fromTypedTransaction(tx: TypedTransaction, extraFields: any) {
    const txData = { ...tx, ...extraFields };
    const txOptions = (tx as any).txOptions; // take out the protected property
    return new KlaytnTx(txData, txOptions);
  }

  // This constructor creates a frozen read-only transaction object out of TxData.
  // Any modifications to the fields (e.g. adding the signature) should involve
  // the construction of a new object, rather than modifying the fields directly.
  public constructor(txData: TxData | LegacyTransaction, txOptions: TxOptions = {}) {
    // Allow adding new fields inside constructor.
    const savedFreeze = txOptions.freeze;
    txOptions.freeze = false;

    // Construct LegacyTransaction and parse TxData fields
    super(txData, txOptions);

    // A readonly CoreKlaytnTx object
    this.klaytnTxData = KlaytnTxFactory.fromObject({
      ...txData,
      // Convert to type understood by CoreKlaytnTx.
      nonce:    toHex(this.nonce),
      gasPrice: toHex(this.gasPrice),
      gasLimit: toHex(this.gasLimit),
      to:       this.to ? bytesToHex(this.to.toString()) : undefined,
      value:    toHex(this.value),
      data:     bytesToHex(this.data),
      type:     toHex(txData.type || 0),
    });
    if (this.v && this.r && this. s) {
      this.klaytnTxData.addSenderSig([
        Number(this.v),
        numberToHex(this.r),
        numberToHex(this.s),
      ]);
    }
    console.log({ ktx: this.klaytnTxData });

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

  // Returns a new KlaytnTx by adding the signature
  protected _processSignature(v: bigint, r: Uint8Array, s: Uint8Array): KlaytnTx {
    v += this.common.chainId() * BigInt(2) + BigInt(8);

    return KlaytnTx.fromTypedTransaction(this, {
      from: this.klaytnTxData.fields.from, // TODO: cleanly pass extraFields
      type: this.klaytnTxData.fields.type,
      chainId: this.klaytnTxData.fields.chainId,
      v: v,
      r: toBigInt(bytesToHex(r)),
      s: toBigInt(bytesToHex(s)),
    });
  }

  // Returns the raw transaction
  public serialize(): Uint8Array {
    return hexToBytes(this.klaytnTxData.txHashRLP());
  }

}
