const ethers = require("ethers");
const { Wallet } = require("../../dist/src/ethers"); // require("@klaytn/sdk-ethers");
const { RLP, HexStr } = require("../../dist/src/core/util")
const fs = require('fs');

// 
// AccountKeyRoleBased Step 01 - account update
// https://docs.klaytn.foundation/content/klaytn/design/accounts#accountkeyrolebased 
//
//   gasLimit: Must be large enough 
// 
//   create a new account for testing 
//   https://baobab.wallet.klaytn.foundation/ 
//

const sender_priv = '0x3656ff020a8bdb90c991f571eb5615b4ee5d675a729b0f48c756fa980b0da71e' 
const sender = '0x9b4284806060423079e612203c22e8cb48b9870e' 


// returns multiple public keys for updating sender's accountKey 
function getPubkey() {
  const new_priv = fs.readFileSync('./example/key.priv', 'utf8'); 
  return new ethers.utils.SigningKey( new_priv ).compressedPublicKey;   
}
function getPubkey2(){
  const new_priv2 = fs.readFileSync('./example/key2.priv', 'utf8');
  return new ethers.utils.SigningKey( new_priv2 ).compressedPublicKey;  
}
function getPubkey3(){
  const new_priv3 = fs.readFileSync('./example/key3.priv', 'utf8');
  return new ethers.utils.SigningKey( new_priv3 ).compressedPublicKey;  
}


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
        from: sender,
        gasLimit: 1000000, 
        key: {
          type: 0x05,   // AccountKeyRoleBased
          keys: [
            // RoleTransaction
            [
              2,   // threshold 
              [
                [ 1, pub1 ],
                [ 1, pub2 ],
                [ 1, pub3 ]
              ]
            ],
            
            // RoleAccountUpdate
            {
              type: 0x02,  
              key: pub1,
            },
            
            // RoleFeePayer
            {
              type: 0x02,  
              key: pub1,
            } 
          ]
        }
      };
  
  let sentTx = await wallet.sendTransaction(tx);
  console.log('sentTx', sentTx);

  let rc = await sentTx.wait();
  console.log('receipt', rc);
}

main();
