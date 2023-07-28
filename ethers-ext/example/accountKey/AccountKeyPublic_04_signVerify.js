const ethers = require("ethers");
const { Wallet, verifyMessageAsKlaytnAccountKey } = require("@klaytn/ethers-ext");

//
// AccountKeyPublic Step 04 - sign verification
// https://docs.klaytn.foundation/content/klaytn/design/accounts#accountkeypublic
//

const provider = new ethers.providers.JsonRpcProvider("https://public-en-baobab.klaytn.net");

// the same address of sender in AccountKeyPublic_01_accountUpdate.js
const senderAddr = "0xe15cd70a41dfb05e7214004d7d054801b2a2f06b"
const senderNewPriv = "0x0e4ca6d38096ad99324de0dde108587e5d7c600165ae4cd6c2462c597458c2b8"

async function main() {
  const wallet = new Wallet(senderAddr, senderNewPriv, provider);

  const message = "Hello World";
  const signature = await wallet.signMessage(message);

  const result = await verifyMessageAsKlaytnAccountKey(provider, senderAddr, message, signature);
  console.log("verification result:", result);
}

main();
