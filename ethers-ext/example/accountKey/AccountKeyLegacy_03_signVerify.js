const ethers = require("ethers");
import { hashMessage, recoverAddress } from "ethers/lib/utils";
const { Wallet } = require("../../dist/src/ethers"); // require("@klaytn/sdk-ethers");

//
// AccountKeyPublic Step 04 - sign verification
// https://docs.klaytn.foundation/content/klaytn/design/accounts#accountkeypublic
// 

const provider = new ethers.providers.JsonRpcProvider('https://public-en-baobab.klaytn.net');

const sender_addr = '0xa2a8854b1802d8cd5de631e690817c253d6a9153' 
const sender_priv = '0x0e4ca6d38096ad99324de0dde108587e5d7c600165ae4cd6c2462c597458c2b8' 

async function main() {
  const wallet = new Wallet( sender_priv, provider );

  const message = "Hello World"; 
  const signature = await wallet.signMessage(message);

  const actual_signer_addr = recoverAddress(hashMessage(message), signature);

  console.log( "verification result:", actual_signer_addr === sender_addr);
}

main();
