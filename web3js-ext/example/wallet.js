const { Web3 } = require("web3");
const { KlaytnWeb3 } = require( "../dist/web3");

const senderAddr = "0xa2a8854b1802d8cd5de631e690817c253d6a9153";
const senderPriv = "0x0e4ca6d38096ad99324de0dde108587e5d7c600165ae4cd6c2462c597458c2b8";

async function main() {
  let provider = new Web3.providers.HttpProvider("https://public-en-baobab.klaytn.net");
  let web3 = new KlaytnWeb3(provider);

  let wallet = await web3.eth.accounts.wallet.create(2); 
  console.log(wallet);

  wallet = await web3.eth.accounts.wallet.add(senderPriv);
  console.log(wallet); 

  wallet = await web3.eth.accounts.wallet.remove(senderAddr);
  console.log(web3.eth.accounts.wallet); 

  wallet = await web3.eth.accounts.wallet.clear();
  console.log(wallet); 
}

main().catch(console.err);
