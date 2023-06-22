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
const sender = '0x218e49acd85a1eb3e840eac0c9668e188c452e0c' 


// returns multiple public keys for updating sender's accountKey 
function getPubkey() {
  const new_priv = fs.readFileSync('./example/privateKey', 'utf8'); 
  return new ethers.utils.SigningKey( new_priv ).compressedPublicKey;   
}
function getPubkey2(){
  const new_priv2 = fs.readFileSync('./example/privateKey2', 'utf8');
  return new ethers.utils.SigningKey( new_priv2 ).compressedPublicKey;  
}
function getPubkey3(){
  const new_priv3 = fs.readFileSync('./example/privateKey3', 'utf8');
  return new ethers.utils.SigningKey( new_priv3 ).compressedPublicKey;  
}


async function main() {
  const provider = new ethers.providers.JsonRpcProvider('https://public-en-baobab.klaytn.net');
  const wallet = new Wallet( sender_priv, provider );

  let new_key = getPubkey(); 
  console.log('1', new_key);
  let new_key2 = getPubkey2(); 
  console.log('2', new_key2);
  let new_key3 = getPubkey3(); 
  console.log('3', new_key3);

  let tx = {
        type: 0x20,   // TxTypeAccountUpdate
        from: sender,
        gasLimit: 100000, 
        key: {
            type: 0x04,   // AccountKeyWeightedMultiSig
            keys: [
              2,   // threshold
              [
                [ 1, new_key, ],
                [ 1, new_key2 ],
                [ 1, new_key3 ]
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
