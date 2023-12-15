import { Provider, TransactionResponse } from "@ethersproject/abstract-provider";
import { BigNumber } from "@ethersproject/bignumber";
import { Signature } from "@ethersproject/bytes";
import { AddressZero } from "@ethersproject/constants";
import { Logger } from "@ethersproject/logger";
import { Deferrable, resolveProperties } from "@ethersproject/properties";
import { SigningKey } from "@ethersproject/signing-key";
import { poll } from "@ethersproject/web";
import _ from "lodash";

import { HexStr, TxType, isKlaytnTxType, parseTransaction } from "@klaytn/js-ext-core";

import { TransactionRequest } from "./types";

const logger = new Logger("@klaytn/ethers-ext");


// Normalize transaction request in Object or RLP format
export async function getTransactionRequest(transactionOrRLP: Deferrable<TransactionRequest> | string): Promise<TransactionRequest> {
  if (_.isString(transactionOrRLP)) {
    return parseTransaction(transactionOrRLP) as TransactionRequest;
  } else {
    return resolveProperties(transactionOrRLP);
  }
}

export function resolveType(type?: number | string): number {
  if (!type) {
    return 0;
  }
  if (_.isNumber(type)) {
    return type;
  }
  if (_.isString(type)) {
    // Try the hex string, e.g. "0x08"
    if (HexStr.isHex(type)) {
      return HexStr.toNumber(type);
    }
  }
  throw new Error(`Unrecognized tx type '${type}'. Must be a number.'`);
}

// Convert tx.type field to what Kaikas wants.
// - If unspecified, keep it as-is. undefined => undefined
// - Ethereum types are kept as-is. 0,1,2 => 0,1,2
// - Klaytn types are converted to string. 8 => "VALUE_TRANSFER"
export function resolveTypeForKaikas(type?: string | number): string | number | undefined {
  // Skip type == 0 or undefined
  if (!type) {
    return undefined;
  }

  if (_.isString(type)) {
    if (HexStr.isHex(type)) {
      // Try the hex string, e.g. "0x08"
      return resolveTypeForKaikas(HexStr.toNumber(type));
    } else {
      // Pass-through if type is already string. Let Kaikas handle it.
      return type;
    }
  }

  if (_.isNumber(type)) {
    if (!isKlaytnTxType(type)) {
      // Pass-through Ethereum TxTypes as number
      return type;
    }

    const camelName: string | undefined = TxType[type];
    if (camelName) {
      // "ValueTransfer" => "VALUE_TRANSFER"
      return _.snakeCase(camelName).toUpperCase();
    }
  }

  throw new Error(`Unrecognized tx type '${type}'.`);
}

// Below populateX() methods are partial replacements to:
// - ethers.Signer.checkTransaction()
// - ethers.Signer.populateTransaction()
// - ethers.JsonRpcSigner.sendUncheckedTransaction()

// populateFromSync is a synchronous method so it can be used in checkTransaction().
export function populateFromSync(tx: Deferrable<TransactionRequest>, expectedFrom: string | Promise<string>) {
  // See @ethersproject/abstract-signer/src/index.ts:Signer.checkTransaction()
  if (!tx.from) {
    tx.from = expectedFrom;
  } else {
    tx.from = Promise.all([
      Promise.resolve(tx.from),
      expectedFrom,
    ]).then(([from, expectedFrom]) => {
      if (from?.toLowerCase() != expectedFrom?.toLowerCase()) {
        logger.throwArgumentError(`from address mismatch (wallet address=${expectedFrom}) (tx.from=${from})`, "transaction", tx);
      }
      return from;
    });
  }
}

export async function populateFrom(tx: TransactionRequest, expectedFrom: string) {
  populateFromSync(tx, expectedFrom);
  tx.from = await tx.from;
}

export async function populateTo(tx: TransactionRequest, provider: Provider) {
  if (!tx.to) {
    tx.to = AddressZero;
  } else {
    const address = await provider.resolveName(tx.to);
    if (address == null) {
      logger.throwArgumentError("provided ENS name resolves to null", "tx.to", tx.to);
    }
  }
}

export async function populateNonce(tx: TransactionRequest, provider: Provider, fromAddress: string) {
  if (!tx.nonce) {
    tx.nonce = await provider.getTransactionCount(fromAddress);
  }
}

export async function populateGasLimit(tx: TransactionRequest, provider: Provider) {
  if (!tx.gasLimit) {
    // Sometimes Klaytn node's eth_estimateGas may return insufficient amount.
    // To avoid this, add buffer to the estimated gas.
    // References:
    // - ethers.js uses estimateGas result as-is.
    // - Metamask multiplies by 1 or 1.5 depending on chainId
    //   (https://github.com/MetaMask/metamask-extension/blob/v11.3.0/ui/ducks/send/helpers.js#L126)
    // TODO: To minimize buffer, add constant intrinsic gas overhead instead of multiplier.
    try {
      const bufferMultiplier = 2.5;
      const gasLimit = await provider.estimateGas(tx);
      tx.gasLimit = Math.ceil(gasLimit.toNumber() * bufferMultiplier);
    } catch (error) {
      logger.throwError("cannot estimate gas; transaction may fail or may require manual gas limit", Logger.errors.UNPREDICTABLE_GAS_LIMIT, {
        error: error,
        tx: tx
      });
    }
  }
}

export async function populateGasPrice(tx: TransactionRequest, provider: Provider) {
  if (!tx.gasPrice) {
    tx.gasPrice = await provider.getGasPrice();
  }
}

export function eip155sign(key: SigningKey, digest: string, chainId: number): Signature {
  const sig = key.signDigest(digest);
  sig.v = sig.recoveryParam + chainId * 2 + 35;
  return sig;
}

// Extract chainId from tx.txSignatures[] or tx.feePayerSignatures[].
// It works because Klaytn TxType always follows EIP-155.
function chainIdFromSig(signatures?: any[]): number | undefined {
  if (_.isArray(signatures) && signatures.length > 0) {
    const signature = signatures[0];
    if (_.isArray(signature) && signature.length == 3) {
      const v = BigNumber.from(signature[0]).toNumber();
      if (v >= 35) {
        return (v + (v % 2) - 36) / 2;
      }
    }
  }
  return undefined;
}

export async function populateChainId(tx: TransactionRequest, provider: Provider) {
  if (!tx.chainId) {
    tx.chainId = (
      chainIdFromSig(tx.txSignatures) ??
      chainIdFromSig(tx.feePayerSignatures) ??
      (await provider.getNetwork()).chainId);
  }
}

export async function populateFeePayerAndSignatures(tx: TransactionRequest, expectedFeePayer: string) {
  // A SenderTxHashRLP returned from caver may have dummy feePayer even if SenderTxHashRLP shouldn't have feePayer.
  // So ignore AddressZero in the feePayer field.
  if (!tx.feePayer || tx.feePayer == AddressZero) {
    tx.feePayer = expectedFeePayer;
  } else {
    if (tx.feePayer.toLowerCase() != expectedFeePayer.toLowerCase()) {
      logger.throwArgumentError("feePayer address mismatch", "transaction", tx);
    }
  }

  // A SenderTxHashRLP returned from caver may have dummy feePayerSignatures if SenderTxHashRLP shouldn't have feePayerSignatures.
  // So ignore [ '0x01', '0x', '0x' ] in the feePayerSignatures field.
  if (_.isArray(tx.feePayerSignatures)) {
    tx.feePayerSignatures = tx.feePayerSignatures.filter((sig) => {
      return !(_.isArray(sig) && sig.length == 3 && sig[0] == "0x01" && sig[1] == "0x" && sig[2] == "0x");
    });
  }
}

// Poll for `eth_getTransaction` until the transaction is found in the transaction pool.
export async function pollTransactionInPool(txhash: string, provider: Provider): Promise<TransactionResponse> {
  // Retry until the transaction shows up in the txpool
  // Using poll() like in the ethers.JsonRpcSigner.sendTransaction
  // https://github.com/ethers-io/ethers.js/blob/v5.7/packages/providers/src.ts/json-rpc-provider.ts#L283
  const pollFunc = async () => {
    const tx = await provider.getTransaction(txhash);
    if (tx == null) {
      return undefined; // retry
    } else {
      return tx; // success
    }
  };
  return poll(pollFunc) as Promise<TransactionResponse>;
}