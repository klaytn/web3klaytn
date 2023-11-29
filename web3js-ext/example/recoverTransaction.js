const { Web3 } = require("web3");
const { KlaytnWeb3 } = require( "@klaytn/web3js-ext");

async function main() {
  let provider = new Web3.providers.HttpProvider("https://public-en-baobab.klaytn.net");
  let web3 = new KlaytnWeb3(provider);

  // ethereum's rawTransaction 
  let rawTransaction = '0xf869808504e3b29200831e848094f0109fc8df283027b6285cc889f5aa624eac1f55843b9aca008025a0c9cf86333bcb065d140032ecaab5d9281bde80f21b9687b3e94161de42d51895a0727a108a0b8d101465414033c3f705a9c7b826e596766046ee1183dbc8aeaa68';
  let address = await web3.eth.accounts.recoverTransaction(rawTransaction);
  console.log("\nsender", "0x2c7536E3605D9C16a7a3D7b1898e529396a65c23");
  console.log("recovered", address);

  // Klaytn's rawTransaction 
  rawTransaction = '0x08f88482020b8505d21dba0082520894a2a8854b1802d8cd5de631e690817c253d6a9153843b9aca0094a2a8854b1802d8cd5de631e690817c253d6a9153f847f8458207f6a00739be424c6074a17b38badc0a10ca30e50a3b56dce73ecf60cec1dbb48ebde5a0039d8ce12722feb26fe784932e2b4100982232d81efd1960dc846d6c6c49efdb';
  address = await web3.eth.accounts.recoverTransaction(rawTransaction);
  console.log("\nsender", "0xA2a8854b1802D8Cd5De631E690817c253d6a9153");
  console.log("recovered", address);
}

main().catch(console.err);
