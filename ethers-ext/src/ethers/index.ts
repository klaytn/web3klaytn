export { Wallet } from "./signer";
export { JsonRpcProvider } from "./provider";
export { Accounts, AccountStore } from "./accountStore";

import { JsonRpcProvider } from "./provider";

(async () => {
  let provider = new JsonRpcProvider("https://public-en-baobab.klaytn.net");
  var bn = await provider.klay.blockNumber();
  console.log('bn', bn);

  var block = await provider.klay.getBlockByNumber(bn, false);
  console.log('block', block);
})();

/*
provider.klay.blockNumber({}, (e: any, d: any) => {
  console.log(e, d);
});
*/
