// Analogous to https://github.com/web3/web3.js/blob/v4.3.0/packages/web3-eth/src/web3_eth.ts
// Create web3.eth.* functions bound to the given Web3Context.

import { Web3Context } from "web3-core";
import {
  SendTransactionOptions,
} from "web3-eth";
import {
  Bytes,
  DEFAULT_RETURN_FORMAT,
  DataFormat,
} from "web3-types";

import { getProtocolVersion } from "./rpc";
import { sendSignedTransaction } from "./send";

// Analogous to: web3-eth/src/web3_eth.ts:Web3Eth.getProtocolVersion()
// Replaces: web3.eth.getProtocolVersion()
// Because: eth_getProtocolVersion is not supported in Klaytn node.
export function context_getProtocolVersion(context: Web3Context) {
  return async (): Promise<string> => {
    return getProtocolVersion(context.requestManager);
  };
}

// Analogous to: web3-eth/src/web3_eth.ts:Web3Eth.sendSignedTransaction()
// Replaces: web3.eth.sendSignedTransaction()
// Because: eth_sendRawTransaction cannot accept Klaytn TxTypes.
// For Klaytn TxTypes, call klay_sendRawTransaction instead.
export function context_sendSignedTransaction(context: Web3Context) {
  return function<ReturnFormat extends DataFormat = typeof DEFAULT_RETURN_FORMAT> (
    transaction: Bytes,
    returnFormat: ReturnFormat = DEFAULT_RETURN_FORMAT as ReturnFormat,
    options?: SendTransactionOptions) {
    return sendSignedTransaction(context, transaction, returnFormat, options);
  };
}