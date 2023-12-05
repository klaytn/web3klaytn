import { Provider, TransactionRequest, TransactionResponse } from "@ethersproject/abstract-provider";
import { ExternallyOwnedAccount } from "@ethersproject/abstract-signer";
import { JsonRpcProvider as EthersJsonRpcProvider, JsonRpcSigner as EthersJsonRpcSigner } from "@ethersproject/providers";
import { Wallet as EthersWallet } from "@ethersproject/wallet";
import { poll } from "@ethersproject/web";
import { KlaytnTxFactory, HexStr, isFeePayerSigTxType, parseTransaction } from "@klaytn/js-ext-core";
import { BigNumber } from "ethers";
import { Bytes, BytesLike, Deferrable, Logger, ProgressCallback, SigningKey, computeAddress, hexlify, keccak256, resolveProperties } from "ethers/lib/utils";
import _ from "lodash";

import { decryptKeystoreList, decryptKeystoreListSync } from "./keystore";

// @ethersproject/abstract-signer/src.ts/index.ts:allowedTransactionKeys
const ethersAllowedTransactionKeys: Array<string> = [
  "accessList", "ccipReadEnabled", "chainId", "customData", "data", "from", "gasLimit", "gasPrice", "maxFeePerGas", "maxPriorityFeePerGas", "nonce", "to", "type", "value",
];

// ethers.js may strip or reject some Klaytn-specific transaction fields.
// To prserve transaction fields around super method calls, use
// saveCustomFields and restoreCustomFields.
function saveCustomFields(tx: Deferrable<TransactionRequest>): any {
  // Save fields that are not allowed in ethers.js
  const savedFields: any = {};
  for (const key in tx) {
    // 'from' may not be corresponded to the public key of the private key in a decoupled account.
    if (ethersAllowedTransactionKeys.indexOf(key) === -1 || key == "from") {
      savedFields[key] = _.get(tx, key);
      _.unset(tx, key);
    }
  }

  // Save txtype that is not supported in ethers.js.
  // and disguise as legacy (type 0) transaction.
  //
  // Why disguise as legacy type?
  // Signer.populateTransaction() will not fill gasPrice
  // unless tx type is explicitly Legacy (type=0) or EIP-2930 (type=1).
  // Klaytn tx types, however, always uses gasPrice.
  if (_.isNumber(tx.type) && KlaytnTxFactory.has(tx.type)) {
    savedFields["type"] = tx.type;
    tx.type = 0;
  }

  return savedFields;
}

function restoreCustomFields(tx: Deferrable<TransactionRequest>, savedFields: any) {
  for (const key in savedFields) {
    _.set(tx, key, savedFields[key]);
  }
}

async function getTransactionRequest(transactionOrRLP: Deferrable<TransactionRequest> | string): Promise<TransactionRequest> {
  if (_.isString(transactionOrRLP)) {
    return parseTransaction(transactionOrRLP) as TransactionRequest;
  } else {
    const tx = transactionOrRLP;
    return resolveProperties(tx);
  }
}

type PrivateKeyLike = BytesLike | ExternallyOwnedAccount | SigningKey;

export class Wallet extends EthersWallet {
  // Override Wallet factories accepting keystores to support KIP-3 (v4) format
  static override async fromEncryptedJson(json: string, password: string | Bytes, progress?: ProgressCallback): Promise<Wallet> {
    const { address, privateKey } = await decryptKeystoreList(json, password, progress);
    return new Wallet(address, privateKey);
  }

  static override fromEncryptedJsonSync(json: string, password: string | Bytes): Wallet {
    const { address, privateKey } = decryptKeystoreListSync(json, password);
    return new Wallet(address, privateKey);
  }

  // New Wallet[] factories accepting keystores supporting KIP-3 (v4) format
  static async fromEncryptedJsonList(json: string, password: string | Bytes, progress?: ProgressCallback): Promise<Wallet[]> {
    const { address, privateKeyList } = await decryptKeystoreList(json, password, progress);
    return _.map(privateKeyList, (privateKey) => new Wallet(address, privateKey));
  }

  static fromEncryptedJsonListSync(json: string, password: string | Bytes): Wallet[] {
    const { address, privateKeyList } = decryptKeystoreListSync(json, password);
    return _.map(privateKeyList, (privateKey) => new Wallet(address, privateKey));
  }

  // Decoupled account address. Defined only if specified in constructor.
  private klaytnAddr: string | undefined;

  // new KlaytnWallet(privateKey, provider?) or
  // new KlaytnWallet(address, privateKey, provider?)
  constructor(
    addressOrPrivateKey: string | PrivateKeyLike,
    privateKeyOrProvider?: PrivateKeyLike | Provider,
    provider?: Provider) {
    // First argument is an address.
    if (HexStr.isHex(addressOrPrivateKey, 20)) {
      const address = HexStr.from(addressOrPrivateKey);
      const privateKey = privateKeyOrProvider as PrivateKeyLike;
      super(privateKey, provider);
      this.klaytnAddr = address;
    } else { // First argument is a private key.
      const privateKey = addressOrPrivateKey as PrivateKeyLike;
      const _provider = privateKeyOrProvider as Provider;
      super(privateKey, _provider);
    }
  }

  getAddress(legacy?: boolean): Promise<string> {
    if (legacy || !this.klaytnAddr) {
      return Promise.resolve(computeAddress(this.publicKey));
    } else {
      return Promise.resolve(this.klaytnAddr);
    }
  }

  // @deprecated in favor of getAddress(true)
  getEtherAddress(): Promise<string> {
    return super.getAddress();
  }

  async isDecoupled(): Promise<boolean> {
    if (!this.klaytnAddr) {
      return false;
    } else {
      return (await this.getAddress(false)) == (await this.getAddress(true));
    }
  }

  // Fill legacy address for Ethereum TxTypes, and (possibly) decoupled address for Klaytn TxTypes.
  checkTransaction(transaction: Deferrable<TransactionRequest>): Deferrable<TransactionRequest> {
    const tx = _.clone(transaction);

    const legacy = !KlaytnTxFactory.has(tx.type);
    const expectedFrom = this.getAddress(legacy);
    if (!tx.from) {
      tx.from = expectedFrom;
    } else {
      tx.from = Promise.all([
        Promise.resolve(tx.from),
        expectedFrom,
      ]).then(([from, expectedFrom]) => {
        if (from?.toLowerCase() != expectedFrom?.toLowerCase()) {
          throw new Error(`from address mismatch tx=${JSON.stringify(transaction)} addr=${expectedFrom}`);
        }
        return from;
      });
    }
    return tx;
  }

  async populateTransaction(transaction: Deferrable<TransactionRequest>): Promise<TransactionRequest> {
    const tx = await getTransactionRequest(transaction);

    // Not a Klaytn TxType; fallback to ethers.Wallet
    if (!KlaytnTxFactory.has(tx.type)) {
      return super.populateTransaction(tx);
    }

    // Fill 'from' field.
    if (!tx.from) {
      tx.from = await this.getAddress();
    }

    // If the account address is decoupled from private key,
    // the ethers.Wallet.populateTransaction() may fill the nonce of the wrong address.
    if (!tx.nonce) {
      tx.nonce = await this.provider.getTransactionCount(tx.from);
    }

    // Sometimes estimateGas underestimates the required gas limit.
    // Therefore adding some buffer to the RPC result.
    // Other cases:
    // - ethers.js uses estimateGas result as-is.
    // - Metamask multiplies by 1 or 1.5 depending on chainId
    //   (https://github.com/MetaMask/metamask-extension/blob/v11.3.0/ui/ducks/send/helpers.js#L126)
    // TODO: To minimize buffer, add constant intrinsic gas overhead instead of multiplier.
    if (!tx.gasLimit) {
      const bufferMultiplier = 2.5;
      const gasLimit = await this.provider.estimateGas(tx);
      tx.gasLimit = Math.ceil(gasLimit.toNumber() * bufferMultiplier);
    }

    // Leave rest of the fields to ethers
    const savedFields = saveCustomFields(tx);
    const populatedTx = await super.populateTransaction(tx);
    restoreCustomFields(populatedTx, savedFields);

    return populatedTx;
  }

  // @deprecated in favor of parseTransaction
  decodeTxFromRLP(rlp :string): any {
    return parseTransaction(rlp);
  }

  // Sign as a sender
  // tx.sigs += Sign(tx.sigRLP(), wallet.privateKey)
  // return tx.txHashRLP() or tx.senderTxHashRLP();
  async signTransaction(transaction: Deferrable<TransactionRequest>): Promise<string> {
    const tx = await getTransactionRequest(transaction);

    // Not a Klaytn TxType; fallback to ethers.Wallet
    if (!KlaytnTxFactory.has(tx.type)) {
      return super.signTransaction(tx);
    }

    // Because RLP-encoded tx may not contain chainId, fill up here.
    tx.chainId ??= await this._chainIdFromTx(tx);

    const klaytnTx = KlaytnTxFactory.fromObject(tx);

    const sigHash = keccak256(klaytnTx.sigRLP());
    const sig = this._eip155sign(sigHash, tx.chainId);
    klaytnTx.addSenderSig(sig);

    if (isFeePayerSigTxType(klaytnTx.type)) {
      return klaytnTx.senderTxHashRLP();
    } else {
      return klaytnTx.txHashRLP();
    }
  }

  // Sign as a fee payer
  // tx.feepayerSigs += Sign(tx.sigFeePayerRLP(), wallet.privateKey)
  // return tx.txHashRLP();
  async signTransactionAsFeePayer(transaction: Deferrable<TransactionRequest>): Promise<string> {
    const tx = await getTransactionRequest(transaction);

    // Not a Klaytn TxType; not supported
    if (!KlaytnTxFactory.has(tx.type)) {
      throw new Error(`feePayer signature not supported for tx type ${tx.type}`);
    }

    // Because RLP-encoded tx may not contain chainId, fill up here.
    tx.chainId ??= await this._chainIdFromTx(tx);

    // Automatically populate 'feePayer' field, just like how 'from' field is populated.
    // @ts-ignore: feePayer field does not exist in ethers.TransactionRequest type
    tx.feePayer ??= await this.getAddress();

    const klaytnTx = KlaytnTxFactory.fromObject(tx);
    if (!isFeePayerSigTxType(klaytnTx.type)) {
      klaytnTx.throwTypeError("feePayer signature not supported");
    }

    const sigFeePayerHash = keccak256(klaytnTx.sigFeePayerRLP());
    const sig = this._eip155sign(sigFeePayerHash, tx.chainId);
    klaytnTx.addFeePayerSig(sig);

    return klaytnTx.txHashRLP();
  }

  async sendTransaction(transaction: Deferrable<TransactionRequest>): Promise<TransactionResponse> {
    this._checkProvider("sendTransaction");

    const populatedTx = await this.populateTransaction(transaction);
    const signedTx = await this.signTransaction(populatedTx);

    if (!KlaytnTxFactory.has(populatedTx.type)) {
      return await this.provider.sendTransaction(signedTx);
    } else {
      return await this._sendRawTransaction(signedTx);
    }
  }

  async sendTransactionAsFeePayer(transaction: Deferrable<TransactionRequest>): Promise<TransactionResponse> {
    this._checkProvider("sendTransactionAsFeePayer");

    const populatedTx = await this.populateTransaction(transaction);
    const signedTx = await this.signTransactionAsFeePayer(populatedTx);

    return await this._sendRawTransaction(signedTx);
  }

  _eip155sign(digest: string, chainId?: number) {
    const sig = this._signingKey().signDigest(digest);
    if (chainId) {
      sig.v = sig.recoveryParam + chainId * 2 + 35;
    }
    return sig;
  }

  // Extract chainId from tx signatures.
  // If no signatures, query provider.
  async _chainIdFromTx(tx: any): Promise<number | undefined> {
    function extractFromSig(field: any[]): number | undefined {
      if (_.isArray(field) && field.length > 0 &&
          _.isArray(field[0]) && field[0].length == 3) {
        const v = BigNumber.from(field[0][0]).toNumber();
        return (v - 35) / 2;
      }
      return undefined;
    }

    return (
      extractFromSig(tx.txSignatures) ??
      extractFromSig(tx.feePayerSignatures) ??
      this.getChainId());
  }

  async _sendRawTransaction(signedTx: string): Promise<TransactionResponse> {
    if (!(this.provider instanceof EthersJsonRpcProvider)) {
      throw new Error("Klaytn typed transaction can only be broadcasted to a Klaytn JSON-RPC server");
    } else {
      const txhash = await this.provider.send("klay_sendRawTransaction", [signedTx]);

      // Retry until the transaction shows up in the txpool
      // Using poll() like in the ethers.JsonRpcProvider.sendTransaction
      // https://github.com/ethers-io/ethers.js/blob/v5.7/packages/providers/src.ts/json-rpc-provider.ts#L283
      const pollFunc = async () => {
        const tx = await this.provider.getTransaction(txhash);
        if (tx == null) {
          return undefined; // retry
        } else {
          return tx; // success
        }
      };
      return poll(pollFunc) as Promise<TransactionResponse>;
    }
  }
}

const Primitive = "bigint,boolean,function,number,string,symbol".split(/,/g);
function deepCopy<T = any>(value: T): T {
  if (value == null || Primitive.indexOf(typeof(value)) >= 0) {
    return value;
  }

  // Keep any Addressable
  if (typeof((<any>value).getAddress) === "function") {
    return value;
  }

  if (Array.isArray(value)) { return <any>(value.map(deepCopy)); }

  if (typeof(value) === "object") {
    return Object.keys(value).reduce((accum, key) => {
      accum[key] = (<any>value)[key];
      return accum;
    }, <any>{ });
  }

  throw new Error(`should not happen: ${ value } (${ typeof(value) })`);
}

export class JsonRpcSigner extends EthersJsonRpcSigner {
  // TODO : inclue JsonRpcApiProvider
  // constructor(provider: JsonRpcApiProvider, address: string) {
  //   super(provider, address);
  // }

  async populateTransaction(tx: TransactionRequest): Promise<TransactionLike<string>> {
    // @ts-ignore
    return await this.populateCall(tx);
  }

  async sendUncheckedTransaction(_tx: TransactionRequest): Promise<string> {
    const tx = deepCopy(_tx);

    const promises: Array<Promise<void>> = [];

    // Make sure the from matches the sender
    if (tx.from) {
      const _from = tx.from;
      promises.push((async () => {
        const from = await resolveAddress(_from, this.provider);
        assertArgument(from != null && from.toLowerCase() === this.address.toLowerCase(),
          "from address mismatch", "transaction", _tx);
        tx.from = from;
      })());
    } else {
      tx.from = this.address;
    }

    // The JSON-RPC for eth_sendTransaction uses 90000 gas; if the user
    // wishes to use this, it is easy to specify explicitly, otherwise
    // we look it up for them.
    if (tx.gasLimit == null) {
      promises.push((async () => {
        tx.gasLimit = await this.provider.estimateGas({ ...tx, from: this.address});
      })());
    }

    // The address may be an ENS name or Addressable
    if (tx.to != null) {
      const _to = tx.to;
      promises.push((async () => {
        tx.to = await resolveAddress(_to, this.provider);
      })());
    }

    // Wait until all of our properties are filled in
    if (promises.length) { await Promise.all(promises); }

    const hexTx = this.provider.getRpcTransaction(tx);

    return this.provider.send("klay_sendTransaction", [hexTx]);
  }

  async sendTransaction(tx: TransactionRequest): Promise<TransactionResponse> {
    // This cannot be mined any earlier than any recent block
    const blockNumber = await this.provider.getBlockNumber();

    // Send the transaction
    const hash = await this.sendUncheckedTransaction(tx);

    // Unfortunately, JSON-RPC only provides and opaque transaction hash
    // for a response, and we need the actual transaction, so we poll
    // for it; it should show up very quickly
    return await (new Promise((resolve, reject) => {
      const timeouts = [1000, 100];
      const checkTx = async () => {
        // Try getting the transaction
        const tx = await this.provider.getTransaction(hash);
        if (tx != null) {
          resolve(tx.replaceableTransaction(blockNumber));
          return;
        }

        // Wait another 4 seconds
        this.provider._setTimeout(() => { checkTx(); }, timeouts.pop() || 4000);
      };
      checkTx();
    }));
  }

  async signTransaction(_tx: TransactionRequest): Promise<string> {
    const tx = deepCopy(_tx);

    // Make sure the from matches the sender
    if (tx.from) {
      const from = await resolveAddress(tx.from, this.provider);
      assertArgument(from != null && from.toLowerCase() === this.address.toLowerCase(),
        "from address mismatch", "transaction", _tx);
      tx.from = from;
    } else {
      tx.from = this.address;
    }

    const hexTx = this.provider.getRpcTransaction(tx);
    return await this.provider.send("klay_signTransaction", [hexTx]);
  }


  async signMessage(_message: string | Uint8Array): Promise<string> {
    const message = ((typeof(_message) === "string") ? toUtf8Bytes(_message) : _message);
    return await this.provider.send("personal_sign", [
      hexlify(message), this.address.toLowerCase()]);
  }
}