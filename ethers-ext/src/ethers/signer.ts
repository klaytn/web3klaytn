import { Provider, TransactionRequest, TransactionResponse } from "@ethersproject/abstract-provider";
import { JsonRpcProvider as EthersJsonRpcProvider } from "@ethersproject/providers";
import { Wallet as EthersWallet } from "@ethersproject/wallet";
import { ethers } from "ethers";
import { Bytes, Deferrable, computeAddress, hashMessage, keccak256, recoverAddress, resolveProperties } from "ethers/lib/utils";
import _ from "lodash";

import { KlaytnTxFactory } from "../core";
import { encodeTxForRPC, objectFromRLP } from "../core/klaytn_tx";
import { HexStr } from "../core/util";
import { decryptKeystoreListSync } from "./keystore";

import { JsonRpcProvider } from "./provider";

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
    if (ethersAllowedTransactionKeys.indexOf(key) === -1) {
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

  // 'from' may not be corresponded to the public key of the private key in Klaytn account
  // So 'from' field also has to be saved
  savedFields["from"] = tx.from;
  _.unset(tx, "from");

  return savedFields;
}

function restoreCustomFields(tx: Deferrable<TransactionRequest>, savedFields: any) {
  for (const key in savedFields) {
    _.set(tx, key, savedFields[key]);
  }
}


export class Wallet extends EthersWallet {
  private klaytn_address: string | undefined;

  constructor(address: any, privateKey?: any, provider?: Provider) {
    const str_addr = String(address);

    if (HexStr.isHex(address) && (str_addr.length == 40 || str_addr.length == 42)) {
      super(privateKey, provider);
      this.klaytn_address = ethers.utils.getAddress(address);
    } else {
      provider = privateKey;
      privateKey = address;
      super(privateKey, provider);
    }
  }

  getAddress(): Promise<string> {
    if (this.klaytn_address == undefined) {
      return super.getAddress();
    }
    return Promise.resolve(String(this.klaytn_address));
  }

  getEtherAddress(): Promise<string> {
    return super.getAddress();
  }

  async isDecoupled(): Promise<boolean> {
    if (this.klaytn_address == undefined) {
      return false;
    }

    const addr = await this.getAddress();
    const Eaddr = await this.getEtherAddress();
    return addr != Eaddr;
  }

  checkTransaction(transaction: Deferrable<TransactionRequest>): Deferrable<TransactionRequest> {
    const tx = _.clone(transaction);
    const savedFields = saveCustomFields(tx);
    transaction = super.checkTransaction(tx);
    restoreCustomFields(tx, savedFields);

    return tx;
  }

  _convertTxFromRLP(transaction: Deferrable<TransactionRequest> | string): any {
    if (typeof transaction === "string") {
      if (HexStr.isHex(transaction)) {
        return this.decodeTxFromRLP(transaction);
      } else {
        throw new Error("String type input has to be RLP encoded Hex string.");
      }
    } else {
      return transaction;
    }
  }

  async populateTransaction(transaction: Deferrable<TransactionRequest>): Promise<TransactionRequest> {
    let tx: TransactionRequest = this._convertTxFromRLP(transaction);
    tx = await resolveProperties(tx); 
    
    if (!KlaytnTxFactory.has(tx.type)) {
      return super.populateTransaction(tx);
    }

    // Klaytn AccountKey is not matched with pubKey of the privateKey
    if (!(tx.nonce) && !!(this.klaytn_address)) {
      if (this.provider instanceof EthersJsonRpcProvider) {
        const result = await this.provider.getTransactionCount(this.klaytn_address);
        tx.nonce = result;
      } else {
        throw new Error("Klaytn transaction can only be populated from a Klaytn JSON-RPC server");
      }
    }

    if (!(tx.gasPrice)) {
      if (this.provider instanceof EthersJsonRpcProvider) {
        const result = await this.provider.send("klay_gasPrice", []);
        tx.gasPrice = result;
      } else {
        throw new Error("Klaytn transaction can only be populated from a Klaytn JSON-RPC server");
      }
    }

    if (!(tx.gasLimit) && !!(tx.to)) {
      if (this.provider instanceof EthersJsonRpcProvider) {
        const ttx = encodeTxForRPC(tx);

        const result = await this.provider.send("klay_estimateGas", [ttx]);
        // For the problem that estimateGas does not exactly match,
        // the code for adding some Gas must be processed in the wallet or Dapp.
        // e.g.
        //   In ethers, no special logic to modify Gas
        //   In Metamask, multiply 1.5 to Gas for ensuring that the estimated gas is sufficient
        //   https://github.com/MetaMask/metamask-extension/blob/9d38e537fca4a61643743f6bf3409f20189eb8bb/ui/ducks/send/helpers.js#L115
        tx.gasLimit = Math.ceil(result * 2.5);
      } else {
        throw new Error("Klaytn transaction can only be populated from a Klaytn JSON-RPC server");
      }
    }

    const savedFields = saveCustomFields(tx);
    tx = await super.populateTransaction(tx);
    restoreCustomFields(tx, savedFields);

    return tx;
  }

  // TODO: refactor like below
  // async rpc_estimateGas(tx: TransactionRequest): Promise<number> {
  //   let allowExtra = {

  //   }
  //   let rpcTx = JsonRpcProvider.hexlifyTransaction(tx, allowExtra);

  //   if (this.provider instanceof JsonRpcProvider ) {

  //   }
  //   return 0;
  // }

  decodeTxFromRLP(str :string): any {
    return objectFromRLP(str);
  }

  async signTransaction(transaction: Deferrable<TransactionRequest>): Promise<string> {
    let tx: TransactionRequest = this._convertTxFromRLP(transaction);
    tx = await resolveProperties(tx); 
    
    if (!KlaytnTxFactory.has(tx.type)) {
      return super.signTransaction(tx);
    }

    const ttx = KlaytnTxFactory.fromObject(tx);
    const sigHash = keccak256(ttx.sigRLP());
    const sig = this._signingKey().signDigest(sigHash);

    if (tx.chainId) { // EIP-155
      sig.v = sig.recoveryParam + tx.chainId * 2 + 35;
    }
    ttx.addSenderSig(sig);

    if (ttx.hasFeePayer()) {
      return ttx.senderTxHashRLP();
    }
    return ttx.txHashRLP();
  }

  async signTransactionAsFeePayer(transaction: Deferrable<TransactionRequest>): Promise<string> {
    let tx: TransactionRequest = this._convertTxFromRLP(transaction);
    
    // @ts-ignore : chainId can be omitted from RLP encoded format 
    if (!tx.chainId) {
      // @ts-ignore
      tx.chainId = this.getChainId();
    }
    const rtx: TransactionRequest = await resolveProperties(tx);

    // @ts-ignore : we have to add feePayer property
    if (!rtx.feePayer) {
      // @ts-ignore : we have to add feePayer property
      rtx.feePayer = await this.getAddress();
    }

    const ttx = KlaytnTxFactory.fromObject(rtx);
    if (!ttx.hasFeePayer()) {
      throw new Error("This transaction can not be signed as FeePayer");
    }

    const sigFeePayerHash = keccak256(ttx.sigFeePayerRLP());
    const sig = this._signingKey().signDigest(sigFeePayerHash);

    // @ts-ignore : we have to add feePayer property
    if (tx.chainId) { // EIP-155
      // @ts-ignore : we have to add feePayer property
      sig.v = sig.recoveryParam + tx.chainId * 2 + 35;
    }
    ttx.addFeePayerSig(sig);

    return ttx.txHashRLP();
  }

  async sendTransaction(transaction: Deferrable<TransactionRequest>): Promise<TransactionResponse> {
    this._checkProvider("sendTransaction");

    let tx: TransactionRequest = this._convertTxFromRLP(transaction);
    let ptx = await this.populateTransaction(tx);
    const signedTx = await this.signTransaction(ptx);

    if (!KlaytnTxFactory.has(ptx.type)) {
      return await this.provider.sendTransaction(signedTx);
    }

    if (this.provider instanceof EthersJsonRpcProvider) {
      // eth_sendRawTransaction cannot process Klaytn typed transactions.
      const txhash = await this.provider.send("klay_sendRawTransaction", [signedTx]);
      return await this.provider.getTransaction(txhash);
    } else {
      throw new Error("Klaytn typed transaction can only be broadcasted to a Klaytn JSON-RPC server");
    }
  }

  async sendTransactionAsFeePayer(transaction: Deferrable<TransactionRequest> | string): Promise<TransactionResponse> {
    this._checkProvider("sendTransactionAsFeePayer");

    let tx: TransactionRequest = this._convertTxFromRLP(transaction);
    let ptx = await this.populateTransaction(tx);

    // @ts-ignore : we have to add feePayer property
    ptx.feePayer = await this.getAddress();
    const signedTx = await this.signTransactionAsFeePayer(ptx);

    if (this.provider instanceof EthersJsonRpcProvider) {
      // eth_sendRawTransaction cannot process Klaytn typed transactions.
      const txhash = await this.provider.send("klay_sendRawTransaction", [signedTx]);
      return await this.provider.getTransaction(txhash);
    } else {
      throw new Error("Klaytn typed transaction can only be broadcasted to a Klaytn JSON-RPC server");
    }
  }

  static fromEncryptedJsonSync(json: string, password: string | Bytes): Wallet {
    const { address, privateKeys } = decryptKeystoreListSync(json, password);
    return new Wallet(address, privateKeys[0]);
  }

  static fromEncryptedJsonListSync(json: string, password: string | Bytes): Wallet[] {
    const { address, privateKeys } = decryptKeystoreListSync(json, password);
    return _.map(privateKeys, (privateKey) => new Wallet(address, privateKey));
  }
}

export async function verifyMessageAsKlaytnAccountKey(provider: Provider, address: string, message: Bytes | string, signature: any): Promise<boolean> {
  if (provider instanceof EthersJsonRpcProvider) {
    const klaytn_accountKey = await provider.send("klay_getAccountKey", [address, "latest"]);

    if (klaytn_accountKey.keyType == 1) {
      // AccountKeyLegacy
      return verifyMessageAsAccountKeyLegacy(provider, address, message, signature);
    } else if (klaytn_accountKey.keyType == 2) {
      // AccountKeyPublic
      return verifyMessageAsAccountKeyPublic(provider, klaytn_accountKey, message, signature);
    } else if (klaytn_accountKey.keyType == 4) {
      // AccountKeyWeightedMultiSig
      return verifyMessageAsAccountKeyWeightedMultiSig(provider, klaytn_accountKey, message, signature);
    } else if (klaytn_accountKey.keyType == 5) {
      // AccountKeyRoleBased
      const roleTransactionKey = klaytn_accountKey.key[0];

      if (roleTransactionKey.keyType == 2) {
        return verifyMessageAsAccountKeyPublic(provider, roleTransactionKey, message, signature);
      } else if (roleTransactionKey.keyType == 4) {
        return verifyMessageAsAccountKeyWeightedMultiSig(provider, roleTransactionKey, message, signature);
      }
    }
  } else {
    throw new Error("Klaytn typed transaction can only be broadcasted to a Klaytn JSON-RPC server");
  }

  return false;
}

function verifyMessageAsAccountKeyLegacy(provider: Provider, address: string, message: Bytes | string, signature: any): boolean {
  if (Array.isArray(signature) && !signature[0]) {
    throw new Error("Needs a signature as a parameter like [sig] or sig");
  } else if (Array.isArray(signature) && !!signature[0]) {
    signature = signature[0];
  }

  const actual_signer_addr = recoverAddress(hashMessage(message), signature);

  if (actual_signer_addr == ethers.utils.getAddress(address)) {
    return true;
  }
  return false;
}

function verifyMessageAsAccountKeyPublic(provider: Provider, klaytn_accountKey: any, message: Bytes | string, signature: any): boolean {
  if (Array.isArray(signature) && !signature[0]) {
    throw new Error("Needs a signature as a parameter like [sig] or sig");
  } else if (Array.isArray(signature) && !!signature[0]) {
    signature = signature[0];
  }

  const actual_signer_addr = recoverAddress(hashMessage(message), signature);

  const x = String(klaytn_accountKey.key.x).substring(2);
  const y = String(klaytn_accountKey.key.y).substring(2);
  const klaytn_addr = computeAddress(HexStr.concat("0x04" + x + y));

  if (actual_signer_addr === klaytn_addr) {
    return true;
  }
  return false;
}

function verifyMessageAsAccountKeyWeightedMultiSig(provider: Provider, klaytn_accountKey: any, message: Bytes | string, signature: any): boolean {
  if (!Array.isArray(signature)) {
    throw new Error("This account needs multi-signature [ sig1, sig2 ... sigN ]");
  }

  const threshold = klaytn_accountKey.key.threshold;
  let current_threshold = 0;

  for (let i = 0; i < klaytn_accountKey.key.keys.length; i++) {
    const weight = klaytn_accountKey.key.keys[i].weight;
    const x = String(klaytn_accountKey.key.keys[i].key.x).substring(2);
    const y = String(klaytn_accountKey.key.keys[i].key.y).substring(2);
    const oneOfAddress = computeAddress(HexStr.concat("0x04" + x + y));

    for (let j = 0; j < signature.length; j++) {
      const actual_signer_addr = recoverAddress(hashMessage(message), signature[j]);

      if (oneOfAddress === actual_signer_addr) {
        current_threshold += weight;
        if (threshold <= current_threshold) {
          return true;
        } else {
          break;
        }
      }
    } // for j
  } // for i

  return false;
}
