import { Web3 } from "web3";
import {
  Web3Context,
  Web3ContextInitOptions,
  isSupportedProvider
} from "web3-core";
import { RegisteredSubscription, SendTransactionOptions } from "web3-eth";
import {
  EthExecutionAPI,
  SupportedProviders,
  Bytes,
  DEFAULT_RETURN_FORMAT,
  DataFormat,
} from "web3-types";
import * as utils from "web3-utils";

import { initAccountsForContext } from "./account";
import { bound_getProtocolVersion, bound_sendSignedTransaction } from "./rpc";
import { klay_sendSignedTransaction } from "./send_transaction";
import { ExtWeb3EthInterface } from "./type-extensions";


// Follow the Web3 class from the web3/src/web3.ts
// with slight difference in the web3.eth property.
export class KlaytnWeb3
  extends Web3Context<EthExecutionAPI, RegisteredSubscription> {
  // Static properties analogous to Web3 class
  public static version = Web3.version;
  public static utils = Web3.utils;
  public static modules = Web3.modules;

  // Properties analogous to Web3 class
  public utils: typeof utils;
  public eth: ExtWeb3EthInterface;

  // The inner Web3 instance that provides the base implementation.
  // KlaytnWeb3 will delegate most of its methods to this instance.
  private _web3: Web3;

  public constructor(
    providerOrContext?:
			| string
			| SupportedProviders<EthExecutionAPI>
			| Web3ContextInitOptions<EthExecutionAPI>,
  ) {
    // Call super() like original Web3.constructor() does
    const contextInitOptions = getContextInitOptions(providerOrContext);
    super(contextInitOptions);

    // Create inner Web3 object
    this._web3 = new Web3(providerOrContext);

    // Expose required properties from inner Web3 object
    this.utils = this._web3.utils;
    this.eth = this._web3.eth as ExtWeb3EthInterface;

    // Override web3.eth.accounts methods
    const accounts = initAccountsForContext(this);
    this.eth.accounts = accounts;
    this._accountProvider = accounts;
    this._wallet = accounts.wallet;

    // Override web3.eth RPC method wrappers.
    // See web3-eth/src/web3_eth.ts:Web3Eth
    // Note that most of the web3.eth methods should keep calling eth_ RPCs to Klaytn node,
    // except below ones.
    this.eth.getProtocolVersion = bound_getProtocolVersion(this._web3);
    // TODO: fix typing
    this.eth.sendSignedTransaction = bound_sendSignedTransaction(this._web3) as typeof this.eth.sendSignedTransaction;
  }
}

// Parse providerOrContext into Web3ContextInitOptions.
// See web3/src/web3.ts:Web3
function getContextInitOptions(
  providerOrContext?:
    | string
    | SupportedProviders<EthExecutionAPI>
    | Web3ContextInitOptions<EthExecutionAPI>,
) {
  // Because console.warn will be printed in `this._web3 = new Web3(..)`, we omit here.
  // if (...) { console.warn('NOTE: web3.js is running without provider...'); }

  let contextInitOptions: Web3ContextInitOptions<EthExecutionAPI> = {};
  if (
    typeof providerOrContext === "string" ||
    isSupportedProvider(providerOrContext as SupportedProviders)
  ) {
    contextInitOptions.provider = providerOrContext as
      | undefined
      | string
      | SupportedProviders;
  } else if (providerOrContext) {
    contextInitOptions = providerOrContext as Web3ContextInitOptions;
  } else {
    contextInitOptions = {};
  }

  return contextInitOptions;
}