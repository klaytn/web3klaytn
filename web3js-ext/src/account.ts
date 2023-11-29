import { KlaytnTxFactory } from "@klaytn/js-ext-core";
import _ from "lodash";
import { Web3Context } from "web3-core";
import { TransactionSigningError, UndefinedRawTransactionError } from "web3-errors";
import {
  Web3Account,
  create,
  decrypt,
  encrypt,
  hashMessage,
  privateKeyToAddress,
  privateKeyToAccount,
  recover,
  signTransaction,
  sign,
  recoverTransaction,
  Wallet,
  TransactionFactory,
  TypedTransaction,
  SignTransactionResult,
} from "web3-eth-accounts";
import { Address, HexString, EthExecutionAPI, Bytes, Transaction, KeyStore } from "web3-types";
import { bytesToHex, hexToBytes, sha3Raw, toChecksumAddress, isHex } from "web3-utils";
import { isNullish } from "web3-validator";

import { prepareTransaction } from "./klaytn_tx";
import { KlaytnAccountsInterface, KlaytnWeb3Account } from "./types";


export function context_accounts(context: Web3Context<EthExecutionAPI>): KlaytnAccountsInterface {
  const _signTransaction = context_signTransaction(context);
  const _create = context_create(context);
  const _privateKeyToAccount = context_privateKeyToAccount(context);
  const _decrypt = context_decrypt(context);

  return {
    recoverTransaction,
    hashMessage,
    sign,
    recover,
    encrypt,

    create: _create,
    privateKeyToAccount: _privateKeyToAccount,
    decrypt: _decrypt,
    signTransaction: _signTransaction,
    signTransactionAsFeePayer: _signTransaction,

    wallet: new Wallet({
      create: _create,
      privateKeyToAccount: _privateKeyToAccount,
      decrypt: _decrypt as any, // inevitable conflict due to signTransaction receiving string
    }),
  };
}

export function context_create(context: Web3Context<EthExecutionAPI>) {
  return function (): KlaytnWeb3Account {
    const account = create();
    return wrapAccount(context, account);
  };
}

export function context_privateKeyToAccount(context: Web3Context<EthExecutionAPI>) {
  return function (privateKey: Uint8Array | string): KlaytnWeb3Account {
    const account = privateKeyToAccount(privateKey);
    return wrapAccount(context, account);
  };
}

export function context_decrypt(context: Web3Context<EthExecutionAPI>) {
  return async function (
    keystore: KeyStore | string,
    password: string,
    options?: Record<string, unknown>,
  ): Promise<KlaytnWeb3Account> {
    const account = await decrypt(keystore, password, (options?.nonStrict as boolean) ?? true);
    return wrapAccount(context, account);
  };
}

function wrapAccount(context: Web3Context<EthExecutionAPI>, account: Web3Account): KlaytnWeb3Account {
  const _signTransaction = context_signTransaction(context);
  const _signTransactionAsFeePayer = context_signTransactionAsFeePayer(context);

  return {
    ...account,
    signTransaction:
      (transaction: Transaction | string) => _signTransaction(transaction, account.privateKey),
    signTransactionAsFeePayer:
      (transaction: Transaction | string) => _signTransactionAsFeePayer(transaction, account.privateKey),
  };
}

export function context_signTransaction(context: Web3Context<EthExecutionAPI>) {
  return async (transaction: Transaction | string, privateKey: Bytes) => {
    const tx = resolveTransaction(transaction);
    const priv = bytesToHex(privateKey);

    const preparedTx = await prepareTransaction(tx, context, privateKey);
    return signTransaction(preparedTx, priv);
  };
}

export function context_signTransactionAsFeePayer(context: Web3Context<EthExecutionAPI>) {
  // TODO
  return async (transaction: Transaction | string, privateKey: Bytes) => {
    const tx = resolveTransaction(transaction);
    const priv = bytesToHex(privateKey);

    const preparedTx = await prepareTransaction(tx, context, privateKey);
    return signTransaction(preparedTx, priv);
  };
}

function resolveTransaction(transaction: Transaction | string): Transaction {
  if (_.isString(transaction)) {
    return KlaytnTxFactory.fromRLP(transaction).toObject();
  } else {
    return transaction;
  }
}

// TODO: move to tx.ts
export const signTransactionAsFeePayer = async (
  transaction: TypedTransaction,
  privateKey: HexString,
  // To make it compatible with rest of the API, have to keep it async
  // eslint-disable-next-line @typescript-eslint/require-await
): Promise<SignTransactionResult> => {
  if (!(transaction as any).feePayer) {
    (transaction as any).feePayer = privateKeyToAddress(privateKey);
  }

  // @ts-ignore
  const signedTx = transaction.signAsFeePayer(hexToBytes(privateKey));
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
};

// TODO: move to tx.ts
export const recoverTransactionWithKlaytnTx = (rawTransaction: HexString): Address => {
  if (isNullish(rawTransaction)) { throw new UndefinedRawTransactionError(); }

  const data = hexToBytes(rawTransaction);
  let tx;

  if (KlaytnTxFactory.has(data[0])) {
    tx = KlaytnTxFactory.fromRLP(rawTransaction).toObject();

    if (!tx.from) {
      throw new Error("tx.from is not a property.");
    } else if (typeof tx.from == "string") {
      return toChecksumAddress(tx.from);
    } else {
      throw new Error("tx.from is not a string type.");
    }
  }

  tx = TransactionFactory.fromSerializedData(data);
  return toChecksumAddress(tx.getSenderAddress().toString());
};