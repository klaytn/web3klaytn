export * from "@klaytn/js-ext-core/util";
export {
  AccountKey,
  AccountKeyFactory,
  KlaytnTx,
  KlaytnTxFactory,
  parseTransaction,
} from "@klaytn/js-ext-core";

export * from "./accountStore";
export * from "./keystore";
export * from "./signer";

// Follow ethers v6 convention for `ethers.JsonRpcProvider`
export * from "./provider";

// Follow ethers v5 convention for `ethers.providers.JsonRpcProvider`
import { JsonRpcProvider, Web3Provider } from "./provider";
export const providers = {
  JsonRpcProvider,
  Web3Provider,
};
