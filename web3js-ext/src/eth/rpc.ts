// Analogous to https://github.com/web3/web3.js/blob/v4.3.0/packages/web3-rpc-methods/src/eth_rpc_methods.ts
// RPC method wrappers.

import { Web3RequestManager } from "web3-core";

// Wrapper for _protocolVersion RPC that works for both Klaytn and Ethereum nodes.
export async function getProtocolVersion(requestManager: Web3RequestManager) {
  try {
    // First try klay API, because the user of web3js-ext is
    // likely connected Klaytn node or Klaytn wallet.
    // If this fails, retry with eth API.
    return requestManager.send({
      method: "klay_protocolVersion",
      params: [],
    });
  } catch (_e) {
    // Then try eth API, in case the provider is MetaMask or non-Klaytn node.
    // If this fails, then the error will be thrown as if there was no try-catch.
    return requestManager.send({
      method: "eth_protocolVersion",
      params: [],
    });
  }
}
