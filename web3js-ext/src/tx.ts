import { KlaytnTxFactory } from "@klaytn/js-ext-core";
import { UndefinedRawTransactionError } from "web3-errors";
import { TransactionFactory } from "web3-eth-accounts";
import { Address } from "web3-types";
import { hexToBytes, toChecksumAddress } from "web3-utils";
import { isNullish } from "web3-validator";


export function klaytnRecoverTransaction(rawTransaction: string): Address {
  if (isNullish(rawTransaction)) {
    throw new UndefinedRawTransactionError();
  }

  const data = hexToBytes(rawTransaction);
  if (data.length < 1) {
    throw new UndefinedRawTransactionError();
  }
  const typeInt = data[0];

  if (KlaytnTxFactory.has(typeInt)) {
    const tx = KlaytnTxFactory.fromRLP(rawTransaction).toObject();
    if (!tx.from) {
      // this should never happen because Klaytn RLP tx always contains `from`.
      throw new Error("missing tx.from");
    }
    return toChecksumAddress(tx.from);
  } else {
    const tx = TransactionFactory.fromSerializedData(data);
    const from = tx.getSenderAddress().toString();
    return toChecksumAddress(from);
  }
}