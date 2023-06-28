const ethers = require("ethers");
const { Wallet } = require("../../dist/src/ethers"); // require("@klaytn/sdk-ethers");

//
// AccountKeyPublic Step 01 - account update
// https://docs.klaytn.foundation/content/klaytn/design/accounts#accountkeypublic
// 

// create a new account for testing 
// https://baobab.wallet.klaytn.foundation/ 
const sender_addr = '0xe15cd70a41dfb05e7214004d7d054801b2a2f06b' 
const sender_priv = '0xc9668ccd35fc20587aa37a48838b48ccc13cf14dd74c8999dd6a480212d5f7ac' 
// newly updating private key for sender
const new_priv = '0x0e4ca6d38096ad99324de0dde108587e5d7c600165ae4cd6c2462c597458c2b8' 

async function main() {
  const provider = new ethers.providers.JsonRpcProvider('https://public-en-baobab.klaytn.net');
  const wallet = new Wallet( sender_priv, provider );

  let new_key = new ethers.utils.SigningKey( new_priv ).compressedPublicKey; 

  let tx = {
        type: 0x20,   // TxTypeAccountUpdate
        from: sender_addr,
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
