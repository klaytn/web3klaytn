const ethers = require("ethers");
const { Wallet } = require("../../dist/src/ethers"); // require("@klaytn/sdk-ethers");
const { verifyMessageAsKlaytnAccountKey } = require("../../dist/src/ethers/signer");

//
// AccountKeyPublic Step 04 - sign verification
// https://docs.klaytn.foundation/content/klaytn/design/accounts#accountkeypublic
// 

const provider = new ethers.providers.JsonRpcProvider('https://public-en-baobab.klaytn.net');

// the same address of sender in AccountKeyPublic_01_accountUpdate.js 
const sender_addr = '0xe15cd70a41dfb05e7214004d7d054801b2a2f06b' 
// newly updated private key of sender
const sender_new_priv = '0x0e4ca6d38096ad99324de0dde108587e5d7c600165ae4cd6c2462c597458c2b8' 

async function main() {
  const wallet = new Wallet( sender_addr, sender_new_priv, provider );

  const message = "Hello World"; 
  const signature = await wallet.signMessage(message);

  const result = await verifyMessageAsKlaytnAccountKey( provider, sender_addr, message, signature); 
  console.log( "verification result:", result);
}

main();
