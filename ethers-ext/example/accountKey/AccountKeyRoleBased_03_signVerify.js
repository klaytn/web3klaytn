const ethers = require("ethers");
const { Wallet, verifyMessageAsKlaytnAccountKey } = require("@klaytn/ethers-ext");

//
// AccountKeyRoleBased  Step 03 - sign verification
// https://docs.klaytn.foundation/content/klaytn/design/accounts#accountkeyrolebased
//
//   gasLimit: Must be large enough
//

const provider = new ethers.providers.JsonRpcProvider('https://public-en-baobab.klaytn.net');

// the same address of sender in AccountKeyRoleBased_01_accountUpdate.js
const senderAddr = '0x5bd2fb3c21564c023a4a735935a2b7a238c4ccea'
const senderRoleTransactionPriv = '0xc9668ccd35fc20587aa37a48838b48ccc13cf14dd74c8999dd6a480212d5f7ac'

async function main() {
  const message = "Hello World";

  const wallet = new Wallet(senderRoleTransactionPriv, provider);
  const signature = await wallet.signMessage(message);
  const signatures = [signature];

  const result = await verifyMessageAsKlaytnAccountKey(provider, senderAddr, message, signatures);
  console.log("verification result:", result);
}

main();
