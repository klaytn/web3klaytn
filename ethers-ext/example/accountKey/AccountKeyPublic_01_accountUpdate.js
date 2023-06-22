const ethers = require("ethers");
const { Wallet } = require("../../dist/src/ethers"); // require("@klaytn/sdk-ethers");
const fs = require('fs');

//
// AccountKeyPublic Step 01 - account update
// https://docs.klaytn.foundation/content/klaytn/design/accounts#accountkeypublic
// 

// create a new account for testing 
// https://baobab.wallet.klaytn.foundation/ 
const sender_priv = '0xef4a1f765223384ba69a240dc7ac2baed1d484e97206f2cb7c198257c59e11b1' 
const sender = '0x1173d5dc7b5e1e07d857d74e962b6ed7d4234a92' 

// newly updating private key for sender
const new_priv = fs.readFileSync('./example/privateKey', 'utf8') 

async function main() {
  const provider = new ethers.providers.JsonRpcProvider('https://public-en-baobab.klaytn.net');
  const wallet = new Wallet( sender_priv, provider );

  let new_key = new ethers.utils.SigningKey( new_priv ).compressedPublicKey; 

  let tx = {
        type: 0x20,   // TxTypeAccountUpdate
        from: sender,
        key: {
            type: 0x02,  // AccountKeyPublic
            key: new_key,
        }
    };
  
  let sentTx = await wallet.sendTransaction(tx);
  console.log('sentTx', sentTx);

  let rc = await sentTx.wait();
  console.log('receipt', rc);
}

main();
