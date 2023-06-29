import { Wallet as EthersWallet } from "@ethersproject/wallet";
import { Provider, TransactionRequest, TransactionResponse } from "@ethersproject/abstract-provider";
import { Bytes, Deferrable, computeAddress, hashMessage, keccak256, recoverAddress, resolveProperties } from "ethers/lib/utils";
import { JsonRpcProvider } from "@ethersproject/providers";
import { ethers } from "ethers";
import _ from "lodash";
import { KlaytnTxFactory } from "../core";
import { encodeTxForRPC } from "../core/klaytn_tx";
import { HexStr } from "../core/util";

import { SignatureLike } from "../core/sig";
import { objectFromRLP } from "../core/klaytn_tx";

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
    savedFields['type'] = tx.type;
    tx.type = 0;
  }

  // 'from' may not be corresponded to the public key of the private key in Klaytn account
  // So 'from' field also has to be saved
  savedFields['from'] = tx.from;
  _.unset(tx, 'from');
  
  return savedFields;
}

function restoreCustomFields(tx: Deferrable<TransactionRequest>, savedFields: any) {
  for (const key in savedFields) {
    _.set(tx, key, savedFields[key]);
  }
}


export class Wallet extends EthersWallet {

  private klaytn_address: string | undefined;
  
  private dynamicUpdateWalletAPI;
  
  _checkTransaction:((transaction: Deferrable<TransactionRequest>) => Deferrable<TransactionRequest>) | undefined ;
  _populateTransaction: ((transaction: Deferrable<TransactionRequest>) => Promise<TransactionRequest>) | undefined ;

  _signTransaction; 
  _sendTransaction;

  constructor(address: any, privateKey?: any, provider?: Provider, dynamicUpdateWalletAPI: boolean=true ) {
    let str_addr = String(address); 

    if ( HexStr.isHex(address) && (str_addr.length == 40 || str_addr.length == 42)) {
      super( privateKey, provider); 
      this.klaytn_address = ethers.utils.getAddress(address); 
    } else {
      provider = privateKey; 
      privateKey = address;
      super( privateKey, provider); 
    }

    // KlaytnWallet API is also working on Wallet 
    // For example, Wallet.populateTransaction is same with KlaytnWallet.populateTransaction. 
    this.dynamicUpdateWalletAPI = dynamicUpdateWalletAPI;
    if ( this.dynamicUpdateWalletAPI == true ) {
      this._checkTransaction = super.checkTransaction; 
      super.checkTransaction = this.checkTransaction; 

      this._populateTransaction = super.populateTransaction; 
      super.populateTransaction = this.populateTransaction; 

      this._signTransaction = super.signTransaction;
      super.signTransaction = this.signTransaction; 

      // @ts-ignore
      super.signTransactionAsFeePayer = this.signTransactionAsFeePayer;

      this._sendTransaction = super.sendTransaction;
      super.sendTransaction = this.sendTransaction; 

      // @ts-ignore
      super.sendTransactionAsFeePayer = this.sendTransactionAsFeePayer;
    }
  }

  getAddress(): Promise<string> {
    if ( this.klaytn_address == undefined ) 
      return super.getAddress();
    return Promise.resolve( String(this.klaytn_address) );
  }

  getEtherAddress(): Promise<string> {
    return super.getAddress();
  }

  async isDecoupled(): Promise<boolean> {
    if ( this.klaytn_address == undefined )
      return false;

    let addr = await this.getAddress();
    let Eaddr = await this.getEtherAddress();
    return addr != Eaddr;
  }

  checkTransaction(transaction: Deferrable<TransactionRequest>): Deferrable<TransactionRequest> {
    const savedFields = saveCustomFields(transaction);
    if ( this.dynamicUpdateWalletAPI == true && this._checkTransaction != undefined ) {
      transaction = this._checkTransaction(transaction);
    } else {
      transaction = super.checkTransaction(transaction);
    }
    restoreCustomFields(transaction, savedFields);

    return transaction;
  }

  async populateTransaction(transaction: Deferrable<TransactionRequest>): Promise<TransactionRequest> {
    let tx: TransactionRequest = await resolveProperties(transaction);

    if (!KlaytnTxFactory.has(tx.type)) {
      if ( this.dynamicUpdateWalletAPI == true && this._populateTransaction != undefined ) {
        return this._populateTransaction(tx);
      } else {
        return super.populateTransaction(tx);
      }
    }

    // Klaytn AccountKey is not matched with pubKey of the privateKey 
    if ( !(tx.nonce) && !!(this.klaytn_address)) {
      if (this.provider instanceof JsonRpcProvider ) { 
        const result = await this.provider.getTransactionCount( this.klaytn_address);
        tx.nonce = result;
      } else {
        throw new Error(`Klaytn transaction can only be populated from a Klaytn JSON-RPC server`);
      }
    }

    if ( !(tx.gasPrice) ) {
      if (this.provider instanceof JsonRpcProvider ) {
        const result = await this.provider.send("klay_gasPrice", []);
        tx.gasPrice = result;
      } else {
        throw new Error(`Klaytn transaction can only be populated from a Klaytn JSON-RPC server`);
      }
    }

    if ( !(tx.gasLimit) && !!(tx.to) ) {
      if (this.provider instanceof JsonRpcProvider ) {

        const estimateGasAllowedKeys: string[] = [
          "from", "to", "gasLimit", "gasPrice", "value", "input" ];
        let ttx = encodeTxForRPC( estimateGasAllowedKeys, tx );

        const result = await this.provider.send("klay_estimateGas", [ttx]);
        // For the problem that estimateGas does not exactly match, 
        // the code for adding some Gas must be processed in the wallet or Dapp.
        // e.g. 
        //   In ethers, no special logic to modify Gas
        //   In Metamask, multiply 1.5 to Gas for ensuring that the estimated gas is sufficient
        //   https://github.com/MetaMask/metamask-extension/blob/9d38e537fca4a61643743f6bf3409f20189eb8bb/ui/ducks/send/helpers.js#L115
        tx.gasLimit = result*1.5;  
      } else {
        throw new Error(`Klaytn transaction can only be populated from a Klaytn JSON-RPC server`);
      }
    }

    const savedFields = saveCustomFields(tx);
    if ( this.dynamicUpdateWalletAPI == true && this._populateTransaction != undefined ) {
      tx = await this._populateTransaction(tx);
    } else {
      tx = await super.populateTransaction(tx);
    }
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

  decodeTxFromRLP( str :string ): any {
    return objectFromRLP( str );
  }

  async signTransaction(transaction: Deferrable<TransactionRequest>): Promise<string> {
    let tx: TransactionRequest = await resolveProperties(transaction);

    if (!KlaytnTxFactory.has(tx.type)) {
      if ( this.dynamicUpdateWalletAPI == true && this._signTransaction != undefined ) {
        return this._signTransaction(tx);
      } else { 
        return super.signTransaction(tx);
      }
    }

    const ttx = KlaytnTxFactory.fromObject(tx);
    const sigHash = keccak256(ttx.sigRLP());
    const sig = this._signingKey().signDigest(sigHash);

    if (tx.chainId) { // EIP-155
      sig.v = sig.recoveryParam + tx.chainId * 2 + 35;
    }
    ttx.addSenderSig(sig);

    if ( ttx.hasFeePayer() ) {
      return ttx.senderTxHashRLP()
    }
    return ttx.txHashRLP();
  }

  async signTransactionAsFeePayer(transaction: Deferrable<TransactionRequest> ): Promise<string> {
    let tx: TransactionRequest = await resolveProperties(transaction);

    const ttx = KlaytnTxFactory.fromObject(tx);
    if ( !ttx.hasFeePayer() ) {
      throw new Error(`This transaction can not be signed as FeePayer`);
    }

    const sigFeePayerHash = keccak256(ttx.sigFeePayerRLP());
    const sig = this._signingKey().signDigest(sigFeePayerHash);

    if (tx.chainId) { // EIP-155
      sig.v = sig.recoveryParam + tx.chainId * 2 + 35;
    }
    ttx.addFeePayerSig(sig);

    return ttx.txHashRLP();
  }

  async sendTransaction(transaction: Deferrable<TransactionRequest>): Promise<TransactionResponse> {
    this._checkProvider("sendTransaction");
    const tx = await this.populateTransaction(transaction);
    const signedTx = await this.signTransaction(tx);

    if (!KlaytnTxFactory.has(tx.type)) {
      return await this.provider.sendTransaction(signedTx);
    }

    if (this.provider instanceof JsonRpcProvider) {
      // eth_sendRawTransaction cannot process Klaytn typed transactions.
      const txhash = await this.provider.send("klay_sendRawTransaction", [signedTx]);
      return await this.provider.getTransaction(txhash);
    } else {
      throw new Error(`Klaytn typed transaction can only be broadcasted to a Klaytn JSON-RPC server`);
    }
  }

  async sendTransactionAsFeePayer(transaction: Deferrable<TransactionRequest>): Promise<TransactionResponse> {
    this._checkProvider("sendTransactionAsFeePayer");
    const tx = await this.populateTransaction(transaction);
    const signedTx = await this.signTransactionAsFeePayer(tx);

    if (!KlaytnTxFactory.has(tx.type)) {
      return await this.provider.sendTransaction(signedTx);
    }

    if (this.provider instanceof JsonRpcProvider) {
      // eth_sendRawTransaction cannot process Klaytn typed transactions.
      const txhash = await this.provider.send("klay_sendRawTransaction", [signedTx]);
      return await this.provider.getTransaction(txhash);
    } else {
      throw new Error(`Klaytn typed transaction can only be broadcasted to a Klaytn JSON-RPC server`);
    }
  }
}

export async function verifyMessageAsKlaytnAccountKey(provider: Provider, address: string, message: Bytes | string, signature: any): Promise<boolean> {
  
  if (provider instanceof JsonRpcProvider) {
    
    const klaytn_accountKey = await provider.send("klay_getAccountKey", [address, "latest"]);

    if ( klaytn_accountKey.keyType == 2 ) {
      // AccountKeyPublic
      return verifyMessageAsKlaytnAccountKeyPublic( provider, klaytn_accountKey, message, signature ); 
      
    } else if ( klaytn_accountKey.keyType == 4 ) {
      // AccountKeyWeightedMultiSig
      return verifyMessageAsKlaytnAccountKeyWeightedMultiSig(provider, klaytn_accountKey, message, signature );

    } else if ( klaytn_accountKey.keyType == 5 ) {
      // AccountKeyRoleBased 
      const roleTransactionKey = klaytn_accountKey.key[0]; 

      if ( roleTransactionKey.keyType == 2 ) {
        return verifyMessageAsKlaytnAccountKeyPublic( provider, roleTransactionKey, message, signature ); 
      } else if ( roleTransactionKey.keyType == 4 ) {
        return verifyMessageAsKlaytnAccountKeyWeightedMultiSig(provider, roleTransactionKey, message, signature );        
      }
    }
  } else {
    throw new Error(`Klaytn typed transaction can only be broadcasted to a Klaytn JSON-RPC server`);
  }

  return false; 
}

function verifyMessageAsKlaytnAccountKeyPublic( provider: Provider, klaytn_accountKey: any, message: Bytes | string, signature: any): boolean {
  if ( Array.isArray(signature) && !signature[0] ) {
    throw new Error(`This account needs a signature as input like sig or [ sig ]`);
  } else if ( Array.isArray(signature) && !!signature[0]) {
    signature = signature[0]; 
  }

  const actual_signer_addr = recoverAddress(hashMessage(message), signature);

  const x = String(klaytn_accountKey.key.x).substring(2);
  const y = String(klaytn_accountKey.key.y).substring(2);
  let klaytn_addr = computeAddress( HexStr.concat( "0x04" + x + y )); 

  if ( actual_signer_addr === klaytn_addr ) {
    return true; 
  }
  return false; 
}

function verifyMessageAsKlaytnAccountKeyWeightedMultiSig( provider: Provider, klaytn_accountKey: any, message: Bytes | string, signature: any): boolean {
  if ( !Array.isArray(signature) ) {
    throw new Error(`This account needs multi-signature [ sig1, sig2 ... sigN ]`);
  }

  const threshold = klaytn_accountKey.key.threshold;
  let current_threshold = 0; 

  for ( let i=0; i<klaytn_accountKey.key.keys.length; i++ ){
    let weight = klaytn_accountKey.key.keys[i].weight;
    let x = String(klaytn_accountKey.key.keys[i].key.x).substring(2);
    let y = String(klaytn_accountKey.key.keys[i].key.y).substring(2);
    let oneOfAddress = computeAddress( HexStr.concat( "0x04" + x + y ));

    for ( let j=0; j<signature.length ; j++ ){
      let actual_signer_addr = recoverAddress(hashMessage(message), signature[j]);

      if ( oneOfAddress === actual_signer_addr ) {
        current_threshold += weight;
        if ( threshold <= current_threshold ) {
          return true; 
        } else {
          break;
        }
      }
    } // for j
  } // for i

  return false;
}
