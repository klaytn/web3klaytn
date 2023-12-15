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

// Follow ethers v5 convention for `ethers.providers.JsonRpcProvider`
export * from "./provider";
// Follow ethers v6 convention for `ethers.JsonRpcProvider`
import { JsonRpcProvider, Web3Provider } from "./provider";
export const providers = {
  JsonRpcProvider,
  Web3Provider,
};

/*
import { Wallet } from "./signer";

async function ttt() {
  const signedTx = "0x09f89a820171850ba43b7400827918943208ca99480f82bfe240ca6bc06110cd12bb636680943208ca99480f82bfe240ca6bc06110cd12bb6366f847f8458207f6a082945cf792dbebf375a39ca3efb0972afff4504ca713743ad1d52ae0f5918dafa05848b3e7049e600475145891bbf58401c85a755ca4b1ce29588e67e4b8d58579940000000000000000000000000000000000000000c4c3018080";
  const directProvider = new JsonRpcProvider("https://public-en-baobab.klaytn.net");
  const feePayerPriv = "0xb3cf575dea0081563fe5482de2fe4425e025502b1f4ae7e02b2540ac0a5beda1";
  const feePayerWallet = new Wallet(feePayerPriv, directProvider);

  const feePayerSignedTx = await feePayerWallet.signTransactionAsFeePayer(signedTx as any);
  console.log(feePayerSignedTx);
}
ttt();
*/