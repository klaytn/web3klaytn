const ethers = require("ethers");
const { Wallet } = require("../../dist/src/ethers"); // require("@klaytn/sdk-ethers");
const { verifyMessageAsKlaytnAccountKey } = require("../../dist/src/ethers/signer");
const fs = require('fs');

//
// AccountKeyRoleBased  Step 04 - sign verification  
// https://docs.klaytn.foundation/content/klaytn/design/accounts#accountkeyrolebased 
//
//   gasLimit: Must be large enough 
// 

const provider = new ethers.providers.JsonRpcProvider('https://public-en-baobab.klaytn.net');

// the same address of sender in AccountKeyRoleBased_01_accountUpdate.js 
const sender = '0x9b4284806060423079e612203c22e8cb48b9870e';


async function doSignMessage( message, privateKey_path ) {
  const updated_priv = fs.readFileSync( privateKey_path, 'utf8'); 
  const wallet = new Wallet( updated_priv, provider );

  const signature = await wallet.signMessage(message);

  return {
    message: message,
    signature: signature,
  };
}

async function doVerifyMessage ( obj ) {
  return await verifyMessageAsKlaytnAccountKey( provider, sender, obj.message, obj.signature);
}

async function main() {
  const message = "Hello World"; 

  const obj = await doSignMessage( message, './example/privateKey');
  console.log( obj );
  const obj2 = await doSignMessage( message, './example/privateKey2');
  console.log( obj2 );

  const result = await doVerifyMessage( {
    message: message, 
    signature: [
      obj.signature,
      obj2.signature, 
    ]
  } ); 
  console.log( "verification result:", result);
}

main();
