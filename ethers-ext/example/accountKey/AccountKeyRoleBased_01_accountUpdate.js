const ethers = require("ethers");
const { Wallet } = require("../../dist/src/ethers"); // require("@klaytn/sdk-ethers");

// 
// AccountKeyRoleBased Step 01 - account update
// https://docs.klaytn.foundation/content/klaytn/design/accounts#accountkeyrolebased 
//
//   gasLimit: Must be large enough 
// 
//   create a new account for testing 
//   https://baobab.wallet.klaytn.foundation/ 
//
const sender_addr = '0x5bd2fb3c21564c023a4a735935a2b7a238c4ccea' 
const sender_priv = '0x9ba8cb8f60044058a9e6f815c5c42d3a216f47044c61a1750b6d29ddc7f34bda' 
const sender_role_transaction_priv = '0xc9668ccd35fc20587aa37a48838b48ccc13cf14dd74c8999dd6a480212d5f7ac'
const sender_role_accountUpdate_priv = '0x9ba8cb8f60044058a9e6f815c5c42d3a216f47044c61a1750b6d29ddc7f34bda'
const sender_role_feePayer_priv = '0x0e4ca6d38096ad99324de0dde108587e5d7c600165ae4cd6c2462c597458c2b8'

async function main() {
  const provider = new ethers.providers.JsonRpcProvider('https://public-en-baobab.klaytn.net');
  const wallet = new Wallet( sender_priv, provider );

  let pub1 = new ethers.utils.SigningKey( sender_role_transaction_priv ).compressedPublicKey; 
  let pub2 = new ethers.utils.SigningKey( sender_role_accountUpdate_priv ).compressedPublicKey; 
  let pub3 = new ethers.utils.SigningKey( sender_role_feePayer_priv ).compressedPublicKey;

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
