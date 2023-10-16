import Web3, {Bytes, Transaction, Web3Context} from "web3";
import { signTransaction, SignTransactionResult, privateKeyToAddress, Web3Account, Wallet, decrypt, } from "web3-eth-accounts";
import { bytesToHex } from "web3-utils";
import { Address, HexString, DataFormat, DEFAULT_RETURN_FORMAT, KeyStore } from "web3-types";
import { SendTransactionOptions } from "web3-eth";
import _ from "lodash";

import { prepareTransaction } from "./klaytn_tx";
import { klay_sendSignedTransaction } from "./send_transaction";
import { 
  signTransactionAsFeePayer, 
  initAccountsForContext,
} from "./account";

// TODO: Change the path after web3-core deployed
const { objectFromRLP } = require("../../../../ethers-ext/dist/src");

export class KlaytnWeb3 extends Web3 {
  constructor(provider: any) {
    // TODO: Override default values to fit Klaytn network.
    // transactionSendTimeout = 50*1000

    // The Web3 constructor. See web3/src/web3.ts
    super(provider);

    // web3.eth.accounts methods are bound to 'this' object.
    const accounts = initAccountsForContext(this);

    this.eth.accounts = accounts;
    this._accountProvider = accounts;
    this._wallet = accounts.wallet;

    // this.eth.accounts.wallet = new Wallet({
    //   create: this.eth.accounts.create, 
    //   privateKeyToAccount: this.eth.accounts.privateKeyToAccount,
    //   // @ts-ignore
    //   decrypt: this.eth.accounts.decrypt,
    // });

    // New added function for Klaytn
    // @ts-ignore 
    this.eth.accounts.signTransactionAsFeePayer = this.accounts_signTransactionAsFeePayer(this);

    // Override web3.eth RPC method wrappers. See web3-eth/src/web3_eth.ts:Web3Eth
    // Note that web3.eth methods should simply call eth_ RPCs to Klaytn node,
    // except a few methods below which call klay_ RPCs despite its name 'web3.eth'.
    this.eth.getProtocolVersion = this.eth_getProtocolVersion(this);
    this.eth.sendSignedTransaction = this.eth_sendSignedTransaction(this);

    
    // TODO: Connect web3.klay, web3.net, etc from @klaytn/web3rpc

  }

  accounts_signTransactionAsFeePayer(context: Web3Context): typeof this.eth.accounts.signTransaction {
    return async (transaction: any, privateKey: Bytes): Promise<any> => {
      let tx; 

      if (typeof transaction === "string") {
        if (Web3.utils.isHex(transaction)) {
          tx = objectFromRLP(transaction);
        } else {
          throw new Error("String type input has to be RLP encoded Hex string.");
        }
      } else {
        tx = transaction;
      }

      if (!tx.feePayer) {
        tx.feePayer = privateKeyToAddress(privateKey);
      }

      let ftx = await prepareTransaction(tx, context, privateKey);      
      let priv = bytesToHex(privateKey);
      return signTransactionAsFeePayer(ftx, priv);
    };
  }

  eth_getProtocolVersion(context: Web3Context): typeof this.eth.getProtocolVersion {
    // See web3-eth/src/web3_eth.ts:Web3Eth
    // See web3-rpc-methods/src/eth_rpc_methods.ts
    return async (): Promise<string> => {
      return context.requestManager.send({
        method: "klay_protocolVersion",
        params: [],
      })
    }
  }

  eth_sendSignedTransaction(context: Web3Context): typeof this.eth.sendSignedTransaction {
    // See web3-eth/src/web3_eth.ts:Web3Eth
    // @ts-ignore: TODO: fix typing
    return async<ReturnFormat extends DataFormat = typeof DEFAULT_RETURN_FORMAT> (
      transaction: Bytes,
      returnFormat: ReturnFormat = DEFAULT_RETURN_FORMAT as ReturnFormat,
      options?: SendTransactionOptions) => {
        // TODO: use klay_sendRawTransaction
        return klay_sendSignedTransaction(context, transaction, returnFormat, options)
      }
  }
}
