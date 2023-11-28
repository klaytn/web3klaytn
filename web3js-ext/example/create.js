const { Web3 } = require("web3");
const { KlaytnWeb3 } = require( "../dist/web3");

async function main() {
  let provider = new Web3.providers.HttpProvider("https://public-en-baobab.klaytn.net");
  let web3 = new KlaytnWeb3(provider);

  let result = await web3.eth.accounts.create();
  console.log({ result });
}

main().catch(console.err);
