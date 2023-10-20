const { Web3 } = require("web3");
const { KlaytnWeb3 } = require( "../dist/src");

async function main() {
  let provider = new Web3.providers.HttpProvider("https://public-en-baobab.klaytn.net");
  console.log(provider);
  let web3 = new KlaytnWeb3(provider);

  // The full list of JSON-RPC is available at:
  // https://docs.klaytn.foundation/content/dapp/json-rpc/api-references
  let num = await web3.klay.blockNumber();
  console.log("blockNumber", num);

  let peers = await web3.net.peerCountByType();
  console.log("peerCountByType", peers);

  let account = await web3.klay.getAccount("0x1173d5dc7b5e1e07d857d74e962b6ed7d4234a92", num);
  console.log("getAccount", JSON.stringify(account, null, 2));

  let gasPrice = await web3.eth.getGasPrice();
  console.log("gasPrice", gasPrice.toString());
}

main();