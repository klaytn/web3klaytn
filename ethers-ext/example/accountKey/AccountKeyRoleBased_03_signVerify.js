const ethers = require("ethers");
const { Wallet } = require("../../dist/src/ethers"); // require("@klaytn/sdk-ethers");
const { verifyMessageAsKlaytnAccountKey } = require("../../dist/src/ethers/signer");

//
// AccountKeyRoleBased  Step 03 - sign verification  
// https://docs.klaytn.foundation/content/klaytn/design/accounts#accountkeyrolebased 
//
//   gasLimit: Must be large enough 
// 

const provider = new ethers.providers.JsonRpcProvider('https://public-en-baobab.klaytn.net');

// the same address of sender in AccountKeyRoleBased_01_accountUpdate.js 
const sender_addr = '0x5bd2fb3c21564c023a4a735935a2b7a238c4ccea' 
const sender_role_transaction_priv = '0xc9668ccd35fc20587aa37a48838b48ccc13cf14dd74c8999dd6a480212d5f7ac'

async function main() {
  const message = "Hello World"; 

  const wallet = new Wallet( sender_role_transaction_priv, provider );
  const signature = await wallet.signMessage(message);
  const signatures = [ signature ];

  const result = await verifyMessageAsKlaytnAccountKey( provider, sender_addr, message, signatures );
  console.log( "verification result:", result);
}

main();
