import { TxType } from "@klaytn/ethers-ext";
import { AccountKey } from "@klaytn/ethers-ext/dist/src/core";
import { KlaytnTxFactory, getRpcTxObject } from "@klaytn/js-ext-core";
import _ from "lodash";
import { Web3Context, Web3PromiEvent } from "web3-core";
import {
  ContractExecutionError,
  InvalidResponseError,
  TransactionRevertedWithoutReasonError,
  TransactionRevertInstructionError,
  TransactionRevertWithCustomError,
  TransactionSendTimeoutError,
  TransactionPollingTimeoutError,
  Eip838ExecutionError,
} from "web3-errors";
import {
  SendSignedTransactionOptions, SendSignedTransactionEvents, sendSignedTransaction,
  transactionReceiptSchema, getTransactionReceipt, call,
  RevertReason, RevertReasonWithCustomError
} from "web3-eth";
import { isAbiErrorFragment, decodeContractErrorData } from "web3-eth-abi";
import {
  Bytes, DataFormat, FormatType, TransactionCall, TransactionReceipt,
  EthExecutionAPI, ETH_DATA_FORMAT, DEFAULT_RETURN_FORMAT, ContractAbi, AbiErrorFragment
} from "web3-types";
import { format, toHex, rejectIfTimeout, pollTillDefined } from "web3-utils";


import { saveCustomFields } from "./klaytn_tx";


import { AccountKeyType } from ".";

// Platform-independent NodeJS timeout types
type TimeoutT = ReturnType<typeof setTimeout>;

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
  // Short circuit if the transaction is an Ethereum transaction
  const signedTransactionFormattedHex = format(
    { format: "bytes" },
    signedTransaction,
    ETH_DATA_FORMAT,
  );
  const typeByte = signedTransactionFormattedHex.substring(0, 4);
  if (!KlaytnTxFactory.has(typeByte)) {
    return sendSignedTransaction(web3Context, signedTransaction, returnFormat, options);
  }

  // Parse the signed KlaytnTx
  const unSerializedTransaction = KlaytnTxFactory.fromRLP(signedTransactionFormattedHex).toObject();

  // hot fix
  // TODO : the code below will be deleted after deploying same logic in js-ext-core
  if (unSerializedTransaction.nonce == "0x") { unSerializedTransaction.nonce = 0; }
  if (unSerializedTransaction.value == "0x") { unSerializedTransaction.value = 0; }
  if (unSerializedTransaction.to == "0x") { unSerializedTransaction.to = "0x0000000000000000000000000000000000000000"; }

  const unSerializedTransactionForCall = getRpcTxObject(unSerializedTransaction);

  // Because modifying the rpc name to "klay_sendRawTransaction" is not trivial,
  // we resort to reimplement the whole logic.

  const doCheck = async (
    promiEvent: Web3PromiEvent<ResolveType, SendSignedTransactionEvents<ReturnFormat>>,
  ) => {
    if (options.checkRevertBeforeSending) {
      const reason = await getRevertReason(
        web3Context,
        unSerializedTransactionForCall,
        options.contractAbi,
      );
      if (reason !== undefined) {
        const error = await getTransactionError<ReturnFormat>(
          web3Context,
          unSerializedTransactionForCall,
          undefined,
          undefined,
          options.contractAbi,
          reason,
        );

        if (promiEvent.listenerCount("error") > 0) {
          promiEvent.emit("error", error);
        }

        return error;
      }
    }
    return null;
  };

  const doSend = async (
    promiEvent: Web3PromiEvent<ResolveType, SendSignedTransactionEvents<ReturnFormat>>,
  ) => {
    if (promiEvent.listenerCount("sending") > 0) {
      promiEvent.emit("sending", signedTransactionFormattedHex);
    }

    const transactionHash = await trySendTransaction(
      web3Context,
      signedTransactionFormattedHex
    );
    const transactionHashFormatted = format(
      { format: "bytes32" },
      transactionHash as Bytes,
      returnFormat
    );

    if (promiEvent.listenerCount("sent") > 0) {
      promiEvent.emit("sent", signedTransactionFormattedHex);
    }
    if (promiEvent.listenerCount("transactionHash") > 0) {
      promiEvent.emit("transactionHash", transactionHashFormatted);
    }

    return transactionHash;
  };

  const doWait = async (
    promiEvent: Web3PromiEvent<ResolveType, SendSignedTransactionEvents<ReturnFormat>>,
    resolve: (data: ResolveType) => void,
    reject: (reason: unknown) => void,
    transactionHash: string,
  ) => {
    const transactionReceipt = await waitForTransactionReceipt(
      web3Context,
      transactionHash,
      returnFormat,
    );
    const transactionReceiptFormatted = format(
      transactionReceiptSchema,
      transactionReceipt,
      returnFormat,
    );

    if (promiEvent.listenerCount("receipt") > 0) {
      promiEvent.emit("receipt", transactionReceiptFormatted);
    }

    if (promiEvent.listenerCount("confirmation") > 0) {
      // Klaytn transactions are immediately confirmed.
      promiEvent.emit("confirmation", {
        confirmations: format({ format: "uint" }, 1 as number, returnFormat),
        receipt: transactionReceiptFormatted,
        latestBlockHash: format(
          { format: "bytes32" },
          transactionReceipt.blockHash as Bytes,
          returnFormat,
        ),
      });
    }

    if (options?.transactionResolver) {
      resolve(
        options?.transactionResolver(
          transactionReceiptFormatted,
        ) as unknown as ResolveType,
      );
    } else if (transactionReceipt.status === BigInt(0)) {
      const error = await getTransactionError<ReturnFormat>(
        web3Context,
        unSerializedTransactionForCall,
        transactionReceiptFormatted,
        undefined,
        options?.contractAbi,
      );

      if (promiEvent.listenerCount("error") > 0) {
        promiEvent.emit("error", error);
      }

      reject(error);
    } else {
      resolve(transactionReceiptFormatted as unknown as ResolveType);
    }
  };

  const doError = async (
    promiEvent: Web3PromiEvent<ResolveType, SendSignedTransactionEvents<ReturnFormat>>,
    reject: (reason: unknown) => void,
    error: any,
  ) => {
    let _error = error;

    if (_error instanceof ContractExecutionError && web3Context.handleRevert) {
      _error = await getTransactionError(
        web3Context,
        unSerializedTransactionForCall,
        undefined,
        undefined,
        options?.contractAbi,
      );
    }

    if (
      (_error instanceof InvalidResponseError ||
        _error instanceof ContractExecutionError ||
        _error instanceof TransactionRevertWithCustomError ||
        _error instanceof TransactionRevertedWithoutReasonError ||
        _error instanceof TransactionRevertInstructionError) &&
      promiEvent.listenerCount("error") > 0
    ) {
      promiEvent.emit("error", _error);
    }

    reject(_error);
  };

  const promiEvent = new Web3PromiEvent<ResolveType, SendSignedTransactionEvents<ReturnFormat>>(
    (resolve, reject) => {
      setImmediate(() => {
        (async () => {
          try {
            const checkError = await doCheck(promiEvent);
            if (checkError) {
              reject(checkError);
              return;
            }

            const transactionHash = await doSend(promiEvent);
            await doWait(promiEvent, resolve, reject, transactionHash);
          } catch (error) {
            await doError(promiEvent, reject, error);
          }
        })();
      });
    });
  return promiEvent;
}

// Re-implemented trySendTransaction because it's not exported.
// See web3-eth/src/utils/try_send_transaction.ts
export async function trySendTransaction(
  web3Context: Web3Context<EthExecutionAPI>,
  rawTransaction: string,
): Promise<string> {
  const sendRpc = async () => {
    return web3Context.requestManager.send({
      method: "klay_sendRawTransaction",
      params: [rawTransaction],
    }) as Promise<string>;
  };

  const sendTimeout = web3Context.transactionSendTimeout;
  const sendTimeoutError = new TransactionSendTimeoutError({
    numberOfSeconds: sendTimeout / 1000
  });
  const [sendTimeoutId, rejectOnSendTimeout] = rejectIfTimeout(sendTimeout, sendTimeoutError);

  // Will not implement transactionBlockTimeout because
  // (1) rejectIfBlockTimeout is not exported
  // (2) it's too complex to copy and paste
  // (3) transactionSendTimeout does the same job anyway.

  try {
    return await Promise.race([
      sendRpc(),
      rejectOnSendTimeout,
    ]);
  } finally {
    clearTimeout(sendTimeoutId as TimeoutT);
  }
}

// Re-implemented waitForTransactionReceipt because it's not exported.
// See web3-eth/src/utils/wait_for_transaction_receipt.ts
export async function waitForTransactionReceipt<ReturnFormat extends DataFormat>(
  web3Context: Web3Context<EthExecutionAPI>,
  transactionHash: Bytes,
  returnFormat: ReturnFormat,
): Promise<TransactionReceipt> {
  const pollingInterval =
    web3Context.transactionReceiptPollingInterval ?? web3Context.transactionPollingInterval;
  const awaitableTransactionReceipt = pollTillDefined(async () => {
    try {
      return getTransactionReceipt(web3Context, transactionHash, returnFormat);
    } catch (error) {
      console.warn("An error happen while trying to get the transaction receipt", error);
      return undefined;
    }
  }, pollingInterval);

  const pollTimeout = web3Context.transactionPollingTimeout;
  const pollTimeoutError = new TransactionPollingTimeoutError({
    numberOfSeconds: pollTimeout / 1000,
    transactionHash,
  });
  const [pollTimeoutId, rejectOnPollTimeout] = rejectIfTimeout(pollTimeout, pollTimeoutError);

  // Will not implement transactionBlockTimeout because
  // (1) rejectIfBlockTimeout is not exported
  // (2) it's too complex to copy and paste
  // (3) transactionPollingTimeout does the same job anyway.

  try {
    return await Promise.race([
      awaitableTransactionReceipt,
      rejectOnPollTimeout,
    ]);
  } finally {
    clearTimeout(pollTimeoutId as TimeoutT);
  }
}

// Re-implemented getTransactionError because it's not exported.
// See web3-eth/src/utils/get_transaction_error.ts
export async function getTransactionError<ReturnFormat extends DataFormat>(
  web3Context: Web3Context,
  transactionFormatted?: TransactionCall,
  transactionReceiptFormatted?: FormatType<TransactionReceipt, ReturnFormat>,
  receivedError?: unknown,
  contractAbi?: ContractAbi,
  knownReason?: string | RevertReason | RevertReasonWithCustomError,
) {
  let _reason: string | RevertReason | RevertReasonWithCustomError | undefined = knownReason;

  web3Context.handleRevert = true;
  if (receivedError) {
    _reason = parseTransactionError(receivedError);
  } else if (web3Context.handleRevert && transactionFormatted !== undefined) {
    _reason = await getRevertReason(web3Context, transactionFormatted, contractAbi);
  }

  let error:
    | TransactionRevertedWithoutReasonError<FormatType<TransactionReceipt, ReturnFormat>>
    | TransactionRevertInstructionError<FormatType<TransactionReceipt, ReturnFormat>>
    | TransactionRevertWithCustomError<FormatType<TransactionReceipt, ReturnFormat>>;
  if (_reason === undefined) {
    error = new TransactionRevertedWithoutReasonError<
      FormatType<TransactionReceipt, ReturnFormat>
    >(transactionReceiptFormatted);
  } else if (typeof _reason === "string") {
    error = new TransactionRevertInstructionError<FormatType<TransactionReceipt, ReturnFormat>>(
      _reason,
      undefined,
      transactionReceiptFormatted,
    );
  } else if (
    (_reason as RevertReasonWithCustomError).customErrorName !== undefined &&
    (_reason as RevertReasonWithCustomError).customErrorDecodedSignature !== undefined &&
    (_reason as RevertReasonWithCustomError).customErrorArguments !== undefined
  ) {
    const reasonWithCustomError: RevertReasonWithCustomError =
      _reason as RevertReasonWithCustomError;
    error = new TransactionRevertWithCustomError<FormatType<TransactionReceipt, ReturnFormat>>(
      reasonWithCustomError.reason,
      reasonWithCustomError.customErrorName,
      reasonWithCustomError.customErrorDecodedSignature,
      reasonWithCustomError.customErrorArguments,
      reasonWithCustomError.signature,
      transactionReceiptFormatted,
      reasonWithCustomError.data,
    );
  } else {
    error = new TransactionRevertInstructionError<FormatType<TransactionReceipt, ReturnFormat>>(
      _reason.reason,
      _reason.signature,
      transactionReceiptFormatted,
      _reason.data,
    );
  }

  return error;
}

// See web3-eth/src/utils/get_revert_reason.ts
export const parseTransactionError = (error: unknown, contractAbi?: ContractAbi) => {
  if (
    error instanceof ContractExecutionError &&
		error.innerError instanceof Eip838ExecutionError
  ) {
    if (contractAbi !== undefined) {
      const errorsAbi = contractAbi.filter((abi) =>
        isAbiErrorFragment(abi),
      ) as unknown as AbiErrorFragment[];
      decodeContractErrorData(errorsAbi, error.innerError);

      return {
        reason: error.innerError.message,
        signature: error.innerError.data?.slice(0, 10),
        data: error.innerError.data?.substring(10),
        customErrorName: error.innerError.errorName,
        customErrorDecodedSignature: error.innerError.errorSignature,
        customErrorArguments: error.innerError.errorArgs,
      } as RevertReasonWithCustomError;
    }

    return {
      reason: error.innerError.message,
      signature: error.innerError.data?.slice(0, 10),
      data: error.innerError.data?.substring(10),
    } as RevertReason;
  }

  if (
    error instanceof InvalidResponseError &&
		!Array.isArray(error.innerError) &&
		error.innerError !== undefined
  ) {
    return error.innerError.message;
  }

  throw error;
};

// See web3-eth/src/utils/get_revert_reason.ts
export async function getRevertReason<
	ReturnFormat extends DataFormat = typeof DEFAULT_RETURN_FORMAT,
>(
  web3Context: Web3Context<EthExecutionAPI>,
  transaction: TransactionCall,
  contractAbi?: ContractAbi,
  returnFormat: ReturnFormat = DEFAULT_RETURN_FORMAT as ReturnFormat,
): Promise<undefined | RevertReason | RevertReasonWithCustomError | string> {
  try {
    await call(web3Context, transaction, web3Context.defaultBlock, returnFormat);
    return undefined;
  } catch (error) {
    return parseTransactionError(error, contractAbi);
  }
}
