import { KlaytnTxFactory } from "@klaytn/js-ext-core";
import { Web3Context } from "web3-core";
import { TransactionSigningError, UndefinedRawTransactionError } from "web3-errors";
import {
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
  TransactionFactory,
  TypedTransaction,
  SignTransactionResult,
} from "web3-eth-accounts";
import { Address, HexString, EthExecutionAPI, Bytes, Transaction, KeyStore } from "web3-types";
import { bytesToHex, hexToBytes, sha3Raw, toChecksumAddress, isHex } from "web3-utils";
import { isNullish } from "web3-validator";

import { prepareTransaction } from "./klaytn_tx";


export const signTransactionAsFeePayer = async (
  transaction: TypedTransaction,
  privateKey: HexString,
  // To make it compatible with rest of the API, have to keep it async
  // eslint-disable-next-line @typescript-eslint/require-await
): Promise<SignTransactionResult> => {
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


/**
 * Recovers the Ethereum address which was used to sign the given RLP encoded Ethereum & Klaytn transaction.
 *
 * @param rawTransaction - The hex string having RLP encoded transaction
 * @returns The Ethereum address used to sign this transaction
 * ```ts
 * recoverTransaction('0xf869808504e3b29200831e848094f0109fc8df283027b6285cc889f5aa624eac1f55843b9aca008025a0c9cf86333bcb065d140032ecaab5d9281bde80f21b9687b3e94161de42d51895a0727a108a0b8d101465414033c3f705a9c7b826e596766046ee1183dbc8aeaa68');
 * > "0x2c7536E3605D9C16a7a3D7b1898e529396a65c23"
 * ```
 */
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

// We overrided web3/src/accounts.ts:initAccountsForContext
// Below methods are bound to the context 'web3'.
export const initAccountsForContext = (context: Web3Context<EthExecutionAPI>) => {
  const signTransactionWithContext = async (transaction: Transaction, privateKey: Bytes) => {
    let tx;

    if (typeof transaction === "string") {
      if (isHex(transaction)) {
        tx = KlaytnTxFactory.fromRLP(transaction).toObject();
      } else {
        throw new Error("String type input has to be RLP encoded Hex string.");
      }
    } else {
      tx = transaction;
    }

    const ttx = await prepareTransaction(tx, context, privateKey);
    const priv = bytesToHex(privateKey);
    return signTransaction(ttx, priv);
  };

  // New added function for Klaytn
  const signTransactionAsFeePayerWithContext = async (transaction: any, privateKey: Bytes): Promise<any> => {
    let tx;

    if (typeof transaction === "string") {
      if (isHex(transaction)) {
        tx = KlaytnTxFactory.fromRLP(transaction).toObject();
      } else {
        throw new Error("String type input has to be RLP encoded Hex string.");
      }
    } else {
      tx = transaction;
    }

    if (!tx.feePayer) {
      tx.feePayer = privateKeyToAddress(privateKey);
    }

    const ftx = await prepareTransaction(tx, context, privateKey);
    const priv = bytesToHex(privateKey);
    return signTransactionAsFeePayer(ftx, priv);
  };

  const privateKeyToAccountWithContext = (privateKey: Uint8Array | string) => {
    const account = privateKeyToAccount(privateKey);

    return {
      ...account,
      signTransaction: async (transaction: Transaction) =>
        signTransactionWithContext(transaction, account.privateKey),
    };
  };

  // TODO : we will support KeyStore V4.
  const decryptWithContext = async (
    keystore: KeyStore | string,
    password: string,
    options?: Record<string, unknown>,
  ) => {
    const account = await decrypt(keystore, password, (options?.nonStrict as boolean) ?? true);

    return {
      ...account,
      signTransaction: async (transaction: Transaction) =>
        signTransactionWithContext(transaction, account.privateKey),
    };
  };

  const createWithContext = () => {
    const account = create();

    return {
      ...account,
      signTransaction: async (transaction: Transaction) =>
        signTransactionWithContext(transaction, account.privateKey),
    };
  };

  const wallet = new Wallet({
    create: createWithContext,
    privateKeyToAccount: privateKeyToAccountWithContext,
    decrypt: decryptWithContext,
  });

  return {
    signTransaction: signTransactionWithContext,
    signTransactionAsFeePayer: signTransactionAsFeePayerWithContext,
    create: createWithContext,
    privateKeyToAccount: privateKeyToAccountWithContext,
    decrypt: decryptWithContext,
    recoverTransaction: recoverTransactionWithKlaytnTx,
    hashMessage,
    sign,
    recover,
    encrypt,
    wallet,
  };
};