const ethers = require("ethers");
const { Wallet } = require("../../dist/src/ethers"); // require("@klaytn/sdk-ethers");

// 
// AccountKeyWeightedMultiSig Step 01 - account update
// https://docs.klaytn.foundation/content/klaytn/design/accounts#accountkeyweightedmultisig
//
//   gasLimit: Must be large enough 
// 
//   create a new account for testing 
//   https://baobab.wallet.klaytn.foundation/ 
//
const sender_addr = '0x82c6a8d94993d49cfd0c1d30f0f8caa65782cc7e' 
const sender_priv = '0xa32c30608667d43be2d652bede413f12a649dd1be93440878e7f712d51a6768a' 
const sender_new_priv1 = '0xa32c30608667d43be2d652bede413f12a649dd1be93440878e7f712d51a6768a'
const sender_new_priv2 = '0x0e4ca6d38096ad99324de0dde108587e5d7c600165ae4cd6c2462c597458c2b8'
const sender_new_priv3 = '0xc9668ccd35fc20587aa37a48838b48ccc13cf14dd74c8999dd6a480212d5f7ac'

async function main() {
  const provider = new ethers.providers.JsonRpcProvider('https://public-en-baobab.klaytn.net');
  const wallet = new Wallet( sender_priv, provider );

  let sender_new_pub1 = new ethers.utils.SigningKey( sender_new_priv1 ).compressedPublicKey; 
  let sender_new_pub2 = new ethers.utils.SigningKey( sender_new_priv2 ).compressedPublicKey; 
  let sender_new_pub3 = new ethers.utils.SigningKey( sender_new_priv3 ).compressedPublicKey;

  let tx = {
        type: 0x20,   // TxTypeAccountUpdate
        from: sender_addr,
        gasLimit: 100000, 
        key: {
            type: 0x04,   // AccountKeyWeightedMultiSig
            keys: [
              2,   // threshold
              [
                [ 1, sender_new_pub1 ],
                [ 1, sender_new_pub2 ],
                [ 1, sender_new_pub3 ]
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
