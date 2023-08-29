import { Web3Context, Web3PromiEvent } from "web3-core";
import { Bytes, DataFormat, FormatType, TransactionReceipt, EthExecutionAPI } from "web3-types";
import { SendSignedTransactionOptions, SendSignedTransactionEvents, sendSignedTransaction } from "web3-eth";

// A wrapper around the sendRawTransaction RPC. There is no such RPC named "sendSignedTransaction".
// See web3-eth/src/rpc_method_wrappers.ts:sendSignedTransaction
// See web3-eth/src/utils/try_send_transaction.ts
export function klay_sendSignedTransaction<
  ReturnFormat extends DataFormat,
  ResolveType = FormatType<TransactionReceipt, ReturnFormat>,
>(
  web3Context: Web3Context<EthExecutionAPI>,
  signedTransaction: Bytes,
  returnFormat: ReturnFormat,
  options: SendSignedTransactionOptions<ResolveType> = { checkRevertBeforeSending: true },
): Web3PromiEvent<ResolveType, SendSignedTransactionEvents<ReturnFormat>> {
  return sendSignedTransaction(web3Context, signedTransaction, returnFormat, options);
}