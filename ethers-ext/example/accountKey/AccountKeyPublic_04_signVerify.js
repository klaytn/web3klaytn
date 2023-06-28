const ethers = require("ethers");
const { Wallet } = require("../../dist/src/ethers"); // require("@klaytn/sdk-ethers");
const { verifyMessageAsKlaytnAccountKey } = require("../../dist/src/ethers/signer");

const fs = require('fs');

//
// AccountKeyPublic Step 03 - sign verification
// https://docs.klaytn.foundation/content/klaytn/design/accounts#accountkeypublic
// 

const provider = new ethers.providers.JsonRpcProvider('https://public-en-baobab.klaytn.net');

// the same address of sender in AccountKeyPublic_01_accountUpdate.js 
const sender_addr = '0x1173d5dc7b5e1e07d857d74e962b6ed7d4234a92';
const updated_priv = fs.readFileSync('./example/key.priv', 'utf8');

async function main() {
  const wallet = new Wallet( sender_addr, updated_priv, provider );

  const message = "Hello World"; 
  const signature = await wallet.signMessage(message);

  const obj = {
    message: message,
    address: sender_addr,
    signature: signature,
  };
  console.log( obj );
  
  const result = await verifyMessageAsKlaytnAccountKey( provider, obj.address, obj.message, obj.signature); 
  console.log( "verification result:", result);
}

main();
