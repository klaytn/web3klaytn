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

import { Web3Context, Web3PromiEvent } from "web3-core";
import {
  SendSignedTransactionEvents,
  SendSignedTransactionOptions,
  transactionReceiptSchema,
} from "web3-eth";
import { TransactionFactory } from "web3-eth-accounts";
import { ethRpcMethods } from "web3-rpc-methods";
import {
  ETH_DATA_FORMAT,
  FormatType,
  DataFormat,
  EthExecutionAPI,
  Bytes,
  TransactionReceipt,
  TransactionCall,
} from "web3-types";
import { format, hexToBytes, bytesToUint8Array } from "web3-utils";

import { SendTxHelper } from "./utils/send_tx_helper";
import { trySendTransaction } from "./utils/try_send_transaction";
import { waitForTransactionReceipt } from "./utils/wait_for_transaction_receipt";


export function sendSignedTransaction<
  ReturnFormat extends DataFormat,
  ResolveType = FormatType<TransactionReceipt, ReturnFormat>,
>(
  web3Context: Web3Context<EthExecutionAPI>,
  signedTransaction: Bytes,
  returnFormat: ReturnFormat,
  options: SendSignedTransactionOptions<ResolveType> = { checkRevertBeforeSending: true },
): Web3PromiEvent<ResolveType, SendSignedTransactionEvents<ReturnFormat>> {
  // TODO - Promise returned in function argument where a void return was expected
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
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
          // Formatting signedTransaction to be send to RPC endpoint
          const signedTransactionFormattedHex = format(
            { format: "bytes" },
            signedTransaction,
            ETH_DATA_FORMAT,
          );
          const unSerializedTransaction = TransactionFactory.fromSerializedData(
            bytesToUint8Array(hexToBytes(signedTransactionFormattedHex)),
          );
          const unSerializedTransactionWithFrom = {
            ...unSerializedTransaction.toJSON(),
            // Some providers will default `from` to address(0) causing the error
            // reported from `eth_call` to not be the reason the user's tx failed
            // e.g. `eth_call` will return an Out of Gas error for a failed
            // smart contract execution contract, because the sender, address(0),
            // has no balance to pay for the gas of the transaction execution
            from: unSerializedTransaction.getSenderAddress().toString(),
          };

          try {
            const { v, r, s,
              ...txWithoutSigParams } = unSerializedTransactionWithFrom;

            await sendTxHelper.checkRevertBeforeSending(
              txWithoutSigParams as TransactionCall,
            );

            sendTxHelper.emitSending(signedTransactionFormattedHex);

            const transactionHash = await trySendTransaction(
              web3Context,
              async (): Promise<string> =>
                ethRpcMethods.sendRawTransaction(
                  web3Context.requestManager,
                  signedTransactionFormattedHex,
                ),
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
                tx: unSerializedTransactionWithFrom as TransactionCall,
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
                tx: unSerializedTransactionWithFrom as TransactionCall,
              }),
            );
          }
        })() as unknown;
      });
    },
  );

  return promiEvent;
}
