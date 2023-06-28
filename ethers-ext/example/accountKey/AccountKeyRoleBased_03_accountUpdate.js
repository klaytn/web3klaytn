const ethers = require("ethers");
const { AccountKeyNil } = require("../../dist/src/core/klaytn_accountKeys"); 
const { Wallet } = require("../../dist/src/ethers"); // require("@klaytn/sdk-ethers");
const fs = require('fs');

// 
// AccountKeyRoleBased Step 03 - account update
// https://docs.klaytn.foundation/content/klaytn/design/accounts#accountkeyrolebased 
//
//   gasLimit: Must be large enough 
// 
//   create a new account for testing 
//   https://baobab.wallet.klaytn.foundation/ 
//

// the same address of sender in AccountKeyRoleBased_01 & 02  
const sender_addr = '0x9b4284806060423079e612203c22e8cb48b9870e' 
const sender_AccountUpdate_priv = fs.readFileSync('./example/key.priv', 'utf8')


async function main() {
  const provider = new ethers.providers.JsonRpcProvider('https://public-en-baobab.klaytn.net');
  const wallet = new Wallet( sender_AccountUpdate_priv, provider );

  let pub1 = new ethers.utils.SigningKey( fs.readFileSync('./example/key.priv', 'utf8') ).compressedPublicKey; 
  let pub2 = new ethers.utils.SigningKey( fs.readFileSync('./example/key2.priv', 'utf8') ).compressedPublicKey; 
  let pub3 = new ethers.utils.SigningKey( fs.readFileSync('./example/key3.priv', 'utf8') ).compressedPublicKey;

  console.log('1', pub1);
  console.log('2', pub2);
  console.log('3', pub3);

  let tx = {
        type: 0x20,   // TxTypeAccountUpdate
        from: sender_addr,
        gasLimit: 1000000, 
        key: {
          type: 0x05,   // AccountKeyRoleBased
          keys: [
            // RoleTransaction
            AccountKeyNil, 

            // RoleAccountUpdate
            [
              2,   // threshold
              [
                [ 1, pub1, ],
                [ 1, pub2 ],
                [ 1, pub3 ]
              ]
            ],

            // RoleFeePayer
            AccountKeyNil,
          ]
        }
      };

  const ptx = await wallet.populateTransaction(tx);
  const signTx = await wallet.signTransaction(ptx);
  console.log('signTx', signTx);
  
  let sentTx = await wallet.sendTransaction(tx);
  console.log('sentTx', sentTx);

  let rc = await sentTx.wait();
  console.log('receipt', rc);
}

main();
