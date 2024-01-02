/*
This file is part of web3.js.

web3.js is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

web3.js is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
// Taken from web3-eth/src/rpc_method_wrapper.ts
// https://github.com/web3/web3.js/blob/v4.3.0/packages/web3-eth/src/rpc_method_wrappers.ts

import { getRpcTxObject, isKlaytnTxType, parseTransaction } from "@klaytn/js-ext-core";
import { Web3Context, Web3PromiEvent } from "web3-core";
import {
  SendTransactionEvents,
  SendTransactionOptions,
  SendSignedTransactionEvents,
  SendSignedTransactionOptions,
  sendSignedTransaction as ethSendSignedTransaction,
  transactionReceiptSchema,
  formatTransaction,
} from "web3-eth";
import {
  ETH_DATA_FORMAT,
  FormatType,
  DataFormat,
  EthExecutionAPI,
  Bytes,
  HexString,
  TransactionReceipt,
  TransactionCall,
  Transaction,
  TransactionWithFromLocalWalletIndex,
  TransactionWithToLocalWalletIndex,
  TransactionWithFromAndToLocalWalletIndex,
  Web3BaseWalletAccount,
} from "web3-types";
import { format, bytesToHex, bytesToUint8Array, hexToBytes, hexToNumber } from "web3-utils";
import { isNullish } from "web3-validator";

import { SendTxHelper } from "./utils/send_tx_helper";
import { getTransactionFromOrToAttr } from "./utils/transaction_builder";
import { trySendTransaction } from "./utils/try_send_transaction";
import { waitForTransactionReceipt } from "./utils/wait_for_transaction_receipt";


export function sendTransaction<
  ReturnFormat extends DataFormat,
  ResolveType = FormatType<TransactionReceipt, ReturnFormat>,
>(
  web3Context: Web3Context<EthExecutionAPI>,
  transaction:
    | Transaction
    | TransactionWithFromLocalWalletIndex
    | TransactionWithToLocalWalletIndex
    | TransactionWithFromAndToLocalWalletIndex,
  returnFormat: ReturnFormat,
  options: SendTransactionOptions<ResolveType> = { checkRevertBeforeSending: true },
): Web3PromiEvent<ResolveType, SendTransactionEvents<ReturnFormat>> {
  const promiEvent = new Web3PromiEvent<ResolveType, SendTransactionEvents<ReturnFormat>>(
    (resolve, reject) => {
      setImmediate(() => {
        (async () => {
          const sendTxHelper = new SendTxHelper<ReturnFormat, ResolveType>({
            web3Context,
            promiEvent,
            options,
            returnFormat,
          });

          let transactionFormatted:
            | Transaction
            | TransactionWithFromLocalWalletIndex
            | TransactionWithToLocalWalletIndex
            | TransactionWithFromAndToLocalWalletIndex = formatTransaction(
              {
                ...transaction,
                from: getTransactionFromOrToAttr("from", web3Context, transaction),
                to: getTransactionFromOrToAttr("to", web3Context, transaction),
              },
              ETH_DATA_FORMAT,
            );

          try {
            transactionFormatted = await sendTxHelper.populateGasPrice({
              transaction,
              transactionFormatted,
            });

            await sendTxHelper.checkRevertBeforeSending(
              transactionFormatted as TransactionCall,
            );

            sendTxHelper.emitSending(transactionFormatted);

            let wallet: Web3BaseWalletAccount | undefined;

            if (web3Context.wallet && !isNullish(transactionFormatted.from)) {
              wallet = web3Context.wallet.get(
                (transactionFormatted as Transaction).from as string,
              );
            }

            const transactionHash: HexString = await sendTxHelper.signAndSend({
              wallet,
              tx: transactionFormatted,
            });

            const transactionHashFormatted = format(
              { format: "bytes32" },
              transactionHash as Bytes,
              returnFormat,
            );
            sendTxHelper.emitSent(transactionFormatted);
            sendTxHelper.emitTransactionHash(
              transactionHashFormatted as string & Uint8Array,
            );

            const transactionReceipt = await waitForTransactionReceipt(
              web3Context,
              transactionHash,
              returnFormat,
            );

            const transactionReceiptFormatted = sendTxHelper.getReceiptWithEvents(
              format(transactionReceiptSchema, transactionReceipt, returnFormat),
            );

            sendTxHelper.emitReceipt(transactionReceiptFormatted);

            resolve(
              await sendTxHelper.handleResolve({
                receipt: transactionReceiptFormatted,
                tx: transactionFormatted as TransactionCall,
              }),
            );

            sendTxHelper.emitConfirmation({
              receipt: transactionReceiptFormatted,
              transactionHash,
            });
          } catch (error) {
            reject(
              await sendTxHelper.handleError({
                error,
                tx: transactionFormatted as TransactionCall,
              }),
            );
          }
        })() as unknown;
      });
    },
  );

  return promiEvent;
}

// sendSignedTransaction sends a signed raw transaction.
//
// It eventually calls one of the following RPC methods:
// - eth_sendRawTransaction
// - klay_sendRawTransaction
export function sendSignedTransaction<
  ReturnFormat extends DataFormat,
  ResolveType = FormatType<TransactionReceipt, ReturnFormat>,
>(
  web3Context: Web3Context<EthExecutionAPI>,
  signedTransaction: Bytes,
  returnFormat: ReturnFormat,
  options: SendSignedTransactionOptions<ResolveType> = { checkRevertBeforeSending: true },
): Web3PromiEvent<ResolveType, SendSignedTransactionEvents<ReturnFormat>> {
  // If not Klaytn TxType, fall back to web3-eth's original implementation
  const txRLP = normalizeSignedTransaction(signedTransaction);
  const txType = hexToNumber(txRLP.substring(0, 4)) as number;
  if (!isKlaytnTxType(txType)) {
    return ethSendSignedTransaction(web3Context, signedTransaction, returnFormat, options);
  }

  // Below PromiEvent is a modified version of web3-eth sendSignedTransaction
  const promiEvent = new Web3PromiEvent<ResolveType, SendSignedTransactionEvents<ReturnFormat>>(
    (resolve, reject) => {
      setImmediate(() => {
        (async () => {
          const sendTxHelper = new SendTxHelper<ReturnFormat, ResolveType>({
            web3Context,
            promiEvent,
            options,
            returnFormat,
          });

          // Klaytn: using js-ext-core:KlaytnTxFactory (inside parseTransaction) instead of
          // web3-eth-accounts:TransactionFactory
          const signedTransactionFormattedHex = normalizeSignedTransaction(signedTransaction);
          const txCallObject = getRpcTxObject(parseTransaction(signedTransactionFormattedHex)); // argument for eth_call

          try {
            // Klaytn: removed v,r,s field removal
            await sendTxHelper.checkRevertBeforeSending(
              txCallObject,
            );

            sendTxHelper.emitSending(signedTransactionFormattedHex);

            const transactionHash = await trySendTransaction(
              web3Context,
              // Klaytn: Using klay_sendRawTransaction instead of eth_sendRawTransaction
              async (): Promise<string> =>
                web3Context.requestManager.send({
                  method: "klay_sendRawTransaction",
                  params: [signedTransactionFormattedHex],
                }),
            );

            sendTxHelper.emitSent(signedTransactionFormattedHex);

            const transactionHashFormatted = format(
              { format: "bytes32" },
              transactionHash as Bytes,
              returnFormat,
            );

            sendTxHelper.emitTransactionHash(
              transactionHashFormatted as string & Uint8Array,
            );

            const transactionReceipt = await waitForTransactionReceipt(
              web3Context,
              transactionHash,
              returnFormat,
            );

            const transactionReceiptFormatted = sendTxHelper.getReceiptWithEvents(
              format(transactionReceiptSchema, transactionReceipt, returnFormat),
            );

            sendTxHelper.emitReceipt(transactionReceiptFormatted);

            resolve(
              await sendTxHelper.handleResolve({
                receipt: transactionReceiptFormatted,
                tx: txCallObject,
              }),
            );

            sendTxHelper.emitConfirmation({
              receipt: transactionReceiptFormatted,
              transactionHash,
            });
          } catch (error) {
            reject(
              await sendTxHelper.handleError({
                error,
                tx: txCallObject,
              }),
            );
          }
        })() as unknown;
      });
    },
  );

  return promiEvent;
}

// Convert Bytes(string | Uint8Array) to hex string
function normalizeSignedTransaction(signedTransaction: Bytes): string {
  if (signedTransaction instanceof Uint8Array) {
    signedTransaction = bytesToHex(signedTransaction);
  }
  if (signedTransaction.length < 4 || !signedTransaction.startsWith("0x")) {
    throw new Error(`Invalid signed transaction '${signedTransaction}'`);
  }
  return signedTransaction;
}