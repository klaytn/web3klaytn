const ethers = require("ethers");
const { Wallet } = require("../../dist/src/ethers"); // require("@klaytn/sdk-ethers");
const { verifyMessageAsKlaytnAccountKey } = require("../../dist/src/ethers/signer");
const fs = require('fs');

//
// AccountKeyWeightedMultiSig Step 03 - sign verification  
// https://docs.klaytn.foundation/content/klaytn/design/accounts#accountkeyweightedmultisig
//
//   gasLimit: Must be large enough 
// 

const provider = new ethers.providers.JsonRpcProvider('https://public-en-baobab.klaytn.net');

// the same address of sender in AccountKeyWeightedMultiSig_01_accountUpdate.js 
const sender_addr = '0x218e49acd85a1eb3e840eac0c9668e188c452e0c';

async function main() {
  const message = "Hello World"; 

  const updated_priv = fs.readFileSync( './example/key.priv', 'utf8'); 
  const wallet = new Wallet( updated_priv, provider );
  const signature = await wallet.signMessage(message);
  const obj =  {
    message: message,
    signature: signature,
  };
  console.log( obj );

  const updated_priv2 = fs.readFileSync( './example/key2.priv', 'utf8'); 
  const wallet2 = new Wallet( updated_priv2, provider );
  const signature2 = await wallet2.signMessage(message);
  const obj2 =  {
    message: message,
    signature: signature2,
  };
  console.log( obj2 );

  const signatures = [
    obj.signature,
    obj2.signature, 
  ];
  const result = await verifyMessageAsKlaytnAccountKey( provider, sender_addr, message, signatures);
  console.log( "verification result:", result);
}

main();
