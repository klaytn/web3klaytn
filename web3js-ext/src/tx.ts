import { KlaytnTxFactory } from "@klaytn/js-ext-core";
import _ from "lodash";
import { Bytes, Transaction, Web3Context } from "web3";
import { TransactionSigningError, UndefinedRawTransactionError } from "web3-errors";
import { prepareTransactionForSigning } from "web3-eth";
import {
  privateKeyToAddress,
  TransactionFactory,
  TypedTransaction,
  SignTransactionResult,
} from "web3-eth-accounts";
import { Address, HexString } from "web3-types";
import { bytesToHex, hexToBytes, sha3Raw, toChecksumAddress } from "web3-utils";
import { isNullish } from "web3-validator";

import { KlaytnTx } from "./klaytn_tx";
import { KlaytnTransaction } from "./types";

/*
Klaytn tx signing flow

User app.js
  | Transaction
  | KlaytnTransaction
  | string
  V
account.signTransaction                      @ account.ts:context_signTransaction
account.signTransactionAsFeePayer            @ account.ts:context_signTransactionAsFeePayer
web3.eth.accounts.signTransaction            @ account.ts:context_signTransaction
web3.eth.accounts.signTransactionAsFeePayer  @ account.ts:context_signTransactionAsFeePayer
  | Transaction
  | KlaytnTransaction
  | string
  V
resolveTransaction  @ account.ts
  | KlaytnTransaction
  V
klaytnPrepareTransaction  @ tx.ts
  | KlaytnTypedTransaction
  | - TypedTransaction
  |   - LegacyTransaction            (class Transaction extends BaseTransaction)  @ legacyTransaction.ts
  |   - AccessListEIP2930Transaction (class ... extends BaseTransaction)          @ eip2930Transaction.ts
  |   - FeeMarketEIP1559Transaction  (class ... extends BaseTransaction)          @ eip1559Transaction.ts
  | - KlaytnTx                       (class ... extends LegacyTransaction)        @ klaytn_tx.ts
  V
klaytnSignTransaction            @ tx.ts
klaytnSignTransactionAsFeePayer  @ tx.ts
  | tx: KlaytnTypedTransaction
  V
tx.sign              @ klaytn_tx.ts
tx.signAsFeePayer    @ klaytn_tx.ts
  | signedTx: KlaytnTypedTransaction
  V
signedTx.validate                                  @ klaytn_tx.ts
signedTx.serialize                                 @ klaytn_tx.ts
signedTx.getMessageToSign                          @ klaytn_tx.ts
signedTx.{v,r,s,feePayer_v,feePayer_r,feePayer_s}  @ klaytn_tx.ts
  | SignTransactionResult
  V
User app.js
*/

// Recover the sender address from the raw transaction.
// Analogous to recoverTransaction from web3-eth-accounts,
// but also support Klaytn TxTypes.
// See web3-eth-accounts/src/accounts.ts:recoverTransaction
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

// Analogous to signTransaction from web3-eth-accounts,
// but instead calls KlaytnTx.*AsFeePayer methods.
export async function klaytnSignTransactionAsFeePayer(
  transaction: TypedTransaction | KlaytnTx,
  privateKey: HexString,
): Promise<SignTransactionResult> {
  if (!(transaction instanceof KlaytnTx)) {
    throw new Error("attempted signTransactionAsFeePayer with non-klaytn tx");
  }

  const signedTx: any = transaction.signAsFeePayer(hexToBytes(privateKey));
  if (isNullish(signedTx.feePayer_v) || isNullish(signedTx.feePayer_r) || isNullish(signedTx.feePayer_s)) { throw new TransactionSigningError("Signer Error"); }

  const validationErrors = signedTx.validate(true);

  if (validationErrors.length > 0) {
    let errorString = "Signer Error ";
    for (const validationError of validationErrors) {
      errorString += `${errorString} ${validationError}.`;
    }
    throw new TransactionSigningError(errorString);
  }

  // @ts-ignore
  const rawTx = bytesToHex(signedTx.serializeAsFeePayer());
  const txHash = sha3Raw(rawTx); // using keccak in web3-utils.sha3Raw instead of SHA3 (NIST Standard) as both are different

  return {
    messageHash: bytesToHex(signedTx.getMessageToSignAsFeePayer(true)),
    v: `0x${signedTx.feePayer_v.toString(16)}`,
    r: `0x${signedTx.feePayer_r.toString(16).padStart(64, "0")}`,
    s: `0x${signedTx.feePayer_s.toString(16).padStart(64, "0")}`,
    rawTransaction: rawTx,
    transactionHash: bytesToHex(txHash),
  };
}


// Fill required fields from the context.
// Analogous to prepareTransactionForSigning from web3-eth,
// but also support Klaytn TxTypes.
// See web3-eth/src/utils/prepare_transaction_for_signing.ts:prepareTransactionForSigning
export async function klaytnPrepareTransaction(
  transaction: KlaytnTransaction,
  context: Web3Context,
  privateKey: Bytes): Promise<TypedTransaction> {
  if (KlaytnTxFactory.has(transaction.type)) {
    transaction = _.clone(transaction);
    const savedFields = saveCustomFields(transaction);

    // prepareTransactionForSigning expects non-undefined 'value' field
    // because otherwise eth_estimateGas will fail with an RPC error '"0x"..*hexutil.Big'.
    // however, some Klaytn tx types stipulates to NOT have value (e.g. TxTypeCancel, TxTypeAccountUpdate)
    // Therefore we fill with zero value if not defined.
    transaction.value ??= 0;

    const tx = await prepareTransactionForSigning(
      transaction, context, privateKey, true, true);

    const txData = { ...tx, ...savedFields };

    // Below fields might be
    // (1) not specified at the first place,
    // (2) or lost during prepareTransactionForSigning,
    // (3) or not populated by prepareTransactionForSigning.
    txData.from ??= transaction.from;
    txData.chainId ??= tx.common.chainId();

    const txOptions = (tx as any).txOptions;

    return new KlaytnTx(txData, txOptions);
  } else {
    return await prepareTransactionForSigning(
      transaction, context, privateKey, true, true);
  }
}

// See web3-types/src/eth_types.ts:TransactionBase and its child interfaces
const web3jsAllowedTransactionKeys = [
  "value", "accessList", "common", "gas", "gasPrice", "type", "maxFeePerGas",
  "maxPriorityFeePerGas", "data", "input", "nonce", "chain", "hardfork",
  "chainId", "networkId", "gasLimit", "yParity", "v", "r", "s",
  "from", "to",
];

// web3.js may strip or reject some Klaytn-specific transaction fields.
// To prserve transaction fields around web3js function calls, use saveCustomFields.
export function saveCustomFields(tx: any): any {
  // Save fields that are not allowed in web3.js
  const savedFields: any = {};
  for (const key in tx) {
    if (web3jsAllowedTransactionKeys.indexOf(key) === -1) {
      savedFields[key] = _.get(tx, key);
      _.unset(tx, key);
    }
  }

  // Save txtype that is not supported in web3.js.
  // and disguise as legacy (type 0) transaction
  // because web3js-ext's KlaytnTx is based on web3js's LegacyTransaction.
  if (KlaytnTxFactory.has(tx.type)) {
    savedFields["type"] = tx.type;
    tx.type = 0;
  }

  return savedFields;
}