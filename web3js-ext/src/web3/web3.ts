import Web3, {Bytes, Transaction, Web3Context} from "web3";
import { signTransaction, SignTransactionResult } from "web3-eth-accounts";
import { bytesToHex } from "web3-utils";
import _ from "lodash";

import { prepareTransaction } from "./klaytn_tx";

export class KlaytnWeb3 extends Web3 {
  constructor(provider: any) {
    // The Web3 constructor. See web3/src/web3.ts
    super(provider);

    // Override web3.eth.accounts. See web3/src/accounts.ts:initAccountsForContext
    // The functions are bound to 'this' object.
    this.eth.accounts.signTransaction = this.accounts_signTransaction(this);
  }

  accounts_signTransaction(context: Web3Context): typeof this.eth.accounts.signTransaction {
    // signTransactionWithContext. see web3/src/accounts.ts:initAccountsForContext
    return async (transaction: Transaction, privateKey: Bytes): Promise<SignTransactionResult> => {
      let tx = await prepareTransaction(transaction, context, privateKey);
      let priv = bytesToHex(privateKey);
      return signTransaction(tx, priv);
    };
  }
}
