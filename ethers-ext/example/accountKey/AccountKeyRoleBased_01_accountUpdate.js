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
        gasLimit: 1000000, 
        key: {
          type: 0x05,   // AccountKeyRoleBased
          keys: [
            // RoleTransaction
            [
              2,   
              [
                [ 1, new_key, ],
                [ 1, new_key2 ],
                [ 1, new_key3 ]
              ]
            ],
            
            // RoleAccountUpdate
            {
              type: 0x02,  
              key: new_key,
            },
            
            // RoleFeePayer
            {
              type: 0x02,  
              key: new_key,
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
