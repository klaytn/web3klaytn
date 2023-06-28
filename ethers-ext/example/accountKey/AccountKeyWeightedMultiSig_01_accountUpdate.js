const ethers = require("ethers");
const { Wallet } = require("../../dist/src/ethers"); // require("@klaytn/sdk-ethers");
const fs = require('fs');

// 
// AccountKeyWeightedMultiSig Step 01 - account update
// https://docs.klaytn.foundation/content/klaytn/design/accounts#accountkeyweightedmultisig
//
//   gasLimit: Must be large enough 
// 
//   create a new account for testing 
//   https://baobab.wallet.klaytn.foundation/ 
//

const sender_priv = '0x1dad451aeb1198930d8ca2d3d6c6d8892f364dd0a321cbacc6dcdcd3c5250333' 
const sender_addr = '0x218e49acd85a1eb3e840eac0c9668e188c452e0c' 

async function main() {
  const provider = new ethers.providers.JsonRpcProvider('https://public-en-baobab.klaytn.net');
  const wallet = new Wallet( sender_priv, provider );

  let pub1 = new ethers.utils.SigningKey( fs.readFileSync('./example/key.priv', 'utf8') ).compressedPublicKey; 
  let pub2 = new ethers.utils.SigningKey( fs.readFileSync('./example/key2.priv', 'utf8') ).compressedPublicKey; 
  let pub3 = new ethers.utils.SigningKey( fs.readFileSync('./example/key3.priv', 'utf8') ).compressedPublicKey;

  console.log('1', pub1);
  console.log('2', pub2);
  console.log('3', pub3);

  let tx = {
        type: 0x20,   // TxTypeAccountUpdate
        from: sender_addr,
        gasLimit: 100000, 
        key: {
            type: 0x04,   // AccountKeyWeightedMultiSig
            keys: [
              2,   // threshold
              [
                [ 1, pub1 ],
                [ 1, pub2 ],
                [ 1, pub3 ]
              ]
            ]
        }
    };
  
  let sentTx = await wallet.sendTransaction(tx);
  console.log('sentTx', sentTx);

  let rc = await sentTx.wait();
  console.log('receipt', rc);
}

main();
