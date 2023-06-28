export { Wallet } from "./signer";
export { JsonRpcProvider } from "./provider";
export { Accounts, AccountStore } from "./accountStore";

import { JsonRpcProvider } from "./provider";
let provider = new JsonRpcProvider("https://public-en-baobab.klaytn.net");

provider.klay.blockNumber({}, (e: any, d: any) => {
  console.log(e, d);
});
