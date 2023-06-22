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
const sender = '0x1173d5dc7b5e1e07d857d74e962b6ed7d4234a92';

async function doSignMessage( message ) {
  // newly updated private key of sender
  const updated_priv = fs.readFileSync('./example/privateKey', 'utf8');
  const wallet = new Wallet( sender, updated_priv, provider );

  const signature = await wallet.signMessage(message);

  return {
    message: message,
    address: sender,
    signature: signature,
  };
}

async function doVerifyMessage ( obj ) {
  return await verifyMessageAsKlaytnAccountKey( provider, obj.address, obj.message, obj.signature);
}

async function main() {
  const message = "Hello World"; 

  const obj = await doSignMessage( message );
  console.log( obj );
  
  const result = await doVerifyMessage( obj ); 
  console.log( "verification result:", result);
}

main();
