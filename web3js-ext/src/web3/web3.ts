import Web3, {Bytes, Transaction, Web3Context} from "web3";
import { TypedTransaction, signTransaction, SignTransactionResult } from "web3-eth-accounts";
import { bytesToHex } from "web3-utils";
import { prepareTransactionForSigning } from "web3-eth";

import { KlaytnTx } from "./klaytn_tx";

export class KlaytnWeb3 extends Web3 {
  constructor(provider: any) {
    // The Web3 constructor. See web3/src/web3.ts
    super(provider);

    // Override web3.eth.accounts. See web3/src/accounts.ts:initAccountsForContext
    // The functions are bound to 'this' object.
    this.eth.accounts.signTransaction = this.accounts_signTransaction(this);
  }

  accounts_signTransaction(context: Web3Context): typeof this.eth.accounts.signTransaction {
    return async (transaction: Transaction, privateKey: Bytes): Promise<SignTransactionResult> => {
      let tx: TypedTransaction;
      if (transaction.type && (transaction.type as number) >= 8) { // TODO: better check type, use KlaytnTx
        let savedType = transaction.type; // TODO: use saveCustomfields
        transaction.type = 0;
        tx = await prepareTransactionForSigning(transaction, context, privateKey, true, true);
        tx = KlaytnTx.fromTypedTransaction(tx, { type: savedType }); // TODO: savedFields
      } else {
        tx = await prepareTransactionForSigning(transaction, context, privateKey, true, true);
      }
      let priv = bytesToHex(privateKey);
      return signTransaction(tx, priv);
    };
  }
}
