import { Transaction as LegacyTransaction, TxData, TypedTransaction, TxOptions } from "web3-eth-accounts";

export class KlaytnTx extends LegacyTransaction {

  public static fromTypedTransaction(tx: TypedTransaction, extraFields: any) {
    const txData = { ...tx, ...extraFields };
    const txOptions = (tx as any).txOptions; // take out the protected property
    return new KlaytnTx(txData, txOptions);
  }

  constructor(txData: TxData | LegacyTransaction, txOptions?: TxOptions) {
    super(txData, txOptions);
  }
}
