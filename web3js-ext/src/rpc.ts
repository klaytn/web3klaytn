import { Web3Context } from "web3-core";
import { SendTransactionOptions } from "web3-eth";
import { Bytes, DEFAULT_RETURN_FORMAT, DataFormat } from "web3-types";

// import { klaytnSendSignedTransaction } from "./send_transaction";
import { sendSignedTransaction as klaytnSendSignedTransaction } from "./send_signed_tx";

// Create a getProtocolVersion() function bound to given context
// Should replace web3.eth.getProtocolVersion().
// Override it because eth_getProtocolVersion is not supported in Klaytn node.
export function context_getProtocolVersion(context: Web3Context) {
  // See web3-eth/src/web3_eth.ts:Web3Eth
  // See web3-rpc-methods/src/eth_rpc_methods.ts
  return async (): Promise<string> => {
    return context.requestManager.send({
      method: "klay_protocolVersion",
      params: [],
    });
  };
}

// Create a sendSignedTransaction() function bound to given context
// Should replace web3.eth.sendSignedTransaction().
// Override it because eth_sendRawTransaction cannot accept Klaytn TxTypes.
export function context_sendSignedTransaction(context: Web3Context) {
  // See web3-eth/src/web3_eth.ts:Web3Eth
  return function<ReturnFormat extends DataFormat = typeof DEFAULT_RETURN_FORMAT> (
    transaction: Bytes,
    returnFormat: ReturnFormat = DEFAULT_RETURN_FORMAT as ReturnFormat,
    options?: SendTransactionOptions) {
    return klaytnSendSignedTransaction(context, transaction, returnFormat, options);
  };
}