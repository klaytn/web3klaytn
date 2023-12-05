import { KlaytnTxFactory } from "@klaytn/js-ext-core";
import _ from "lodash";
import { Web3Context } from "web3-core";
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
  Wallet,
} from "web3-eth-accounts";
import { EthExecutionAPI, Bytes, KeyStore } from "web3-types";
import { bytesToHex } from "web3-utils";

import {
  klaytnRecoverTransaction,
  klaytnPrepareTransaction,
  klaytnSignTransactionAsFeePayer,
} from "./tx";
import {
  KlaytnAccountsInterface,
  KlaytnTransaction,
  KlaytnWeb3Account,
} from "./types";


// Create an web3.eth.accounts object bound to given context
// See web3/src/accounts.ts:initAccountsForContext
export function context_accounts(context: Web3Context<EthExecutionAPI>): KlaytnAccountsInterface {
  const _signTransaction = context_signTransaction(context);
  const _signTransactionAsFeePayer = context_signTransactionAsFeePayer(context);
  const _create = context_create(context);
  const _privateKeyToAccount = context_privateKeyToAccount(context);
  const _decrypt = context_decrypt(context);

  return {
    recoverTransaction: klaytnRecoverTransaction,
    hashMessage,
    sign,
    recover,
    encrypt,

    create: _create,
    privateKeyToAccount: _privateKeyToAccount,
    decrypt: _decrypt,
    signTransaction: _signTransaction,
    signTransactionAsFeePayer: _signTransactionAsFeePayer,

    wallet: new Wallet({
      create: _create,
      privateKeyToAccount: _privateKeyToAccount,
      decrypt: _decrypt as any, // inevitable conflict in signTransaction types
    }),
  };
}

// Analogous to web3/src/accounts.ts:createWithContext
export function context_create(context: Web3Context<EthExecutionAPI>) {
  return function (): KlaytnWeb3Account {
    const account = create();
    return wrapAccount(context, account);
  };
}

// Analogous to web3/src/accounts.ts:privateKeyToAccountWithContext
export function context_privateKeyToAccount(context: Web3Context<EthExecutionAPI>) {
  return function (privateKey: Uint8Array | string): KlaytnWeb3Account {
    const account = privateKeyToAccount(privateKey);
    return wrapAccount(context, account);
  };
}

// Analogous to web3/src/accounts.ts:decryptWithContext
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

// common components of create, privateKeyToAccount, decrypt.
function wrapAccount(context: Web3Context<EthExecutionAPI>, account: Web3Account): KlaytnWeb3Account {
  const _signTransaction = context_signTransaction(context);
  const _signTransactionAsFeePayer = context_signTransactionAsFeePayer(context);

  return {
    ...account,
    signTransaction:
      (transaction: KlaytnTransaction | string) => _signTransaction(transaction, account.privateKey),
    signTransactionAsFeePayer:
      (transaction: KlaytnTransaction | string) => _signTransactionAsFeePayer(transaction, account.privateKey),
  };
}

// Analogous to web3/src/accounts.ts:signTransactionWithContext
export function context_signTransaction(context: Web3Context<EthExecutionAPI>) {
  return async (transaction: KlaytnTransaction | string, privateKey: Bytes) => {
    const tx = resolveTransaction(transaction);
    const priv = bytesToHex(privateKey);

    const preparedTx = await klaytnPrepareTransaction(tx, context, privateKey);
    return signTransaction(preparedTx, priv);
  };
}

// Analogous to web3/src/accounts.ts:signTransactionWithContext
// but instead calls klaytnSignTransactionAsFeePayer at the end.
export function context_signTransactionAsFeePayer(context: Web3Context<EthExecutionAPI>) {
  return async (transaction: KlaytnTransaction | string, privateKey: Bytes) => {
    const tx = resolveTransaction(transaction);
    const priv = bytesToHex(privateKey);

    if (!tx.feePayer) {
      tx.feePayer = privateKeyToAddress(privateKey);
    }

    const preparedTx = await klaytnPrepareTransaction(tx, context, privateKey);
    return klaytnSignTransactionAsFeePayer(preparedTx, priv);
  };
}

// Convert 'Transaction | string' type to 'Transaction' by decoding the RLP string.
function resolveTransaction(transaction: KlaytnTransaction | string): KlaytnTransaction {
  if (_.isString(transaction)) {
    return KlaytnTxFactory.fromRLP(transaction).toObject();
  } else {
    return transaction;
  }
}