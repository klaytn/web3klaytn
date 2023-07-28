const ethers = require("ethers");
const { Wallet, verifyMessageAsKlaytnAccountKey } = require("@klaytn/ethers-ext");

//
// AccountKeyLegacy Step 03 - sign verification
// https://docs.klaytn.foundation/content/klaytn/design/accounts#accountkeylegacy
//

const provider = new ethers.providers.JsonRpcProvider("https://public-en-baobab.klaytn.net");

const senderAddr = "0xa2a8854b1802d8cd5de631e690817c253d6a9153"
const senderPriv = "0x0e4ca6d38096ad99324de0dde108587e5d7c600165ae4cd6c2462c597458c2b8"

async function main() {
  const wallet = new Wallet(senderPriv, provider);

  const message = "Hello World";
  const signature = await wallet.signMessage(message);

  // 1. you can use ethers library in case of AccountKeyLegacy
  const digest = ethers.utils.hashMessage(message);
  const actualSignerAddr = ethers.utils.recoverAddress(digest, signature);
  console.log("actual signer addr: ", actualSignerAddr)
  console.log("sender addr: ", senderAddr)
  console.log("verification result:",
    ethers.utils.getAddress(actualSignerAddr) == ethers.utils.getAddress(senderAddr));

  // 2. you can use Klaytn ethers-ext library
  // const result = await verifyMessageAsKlaytnAccountKey(provider, senderAddr, message, signature);
  // console.log( "verification result:", result);
}

main();
