import { Web3Context } from "web3-core";
import { Web3Account, create, decrypt, privateKeyToAccount } from "web3-eth-accounts";
import { EthExecutionAPI, KeyStore } from "web3-types";

import { KlaytnTransaction, KlaytnWeb3Account } from "../types";

import { context_signTransaction, context_signTransactionAsFeePayer } from "./sign";

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