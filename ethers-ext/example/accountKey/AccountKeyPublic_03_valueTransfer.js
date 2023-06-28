const ethers = require("ethers");
const { Wallet } = require("../../dist/src/ethers"); // require("@klaytn/sdk-ethers");
const fs = require('fs');

//
// AccountKeyPublic Step 02 - value transfer
// https://docs.klaytn.foundation/content/klaytn/design/accounts#accountkeypublic
// 

// the same address of sender in AccountKeyPublic_01_accountUpdate.js 
const sender = '0x1173d5dc7b5e1e07d857d74e962b6ed7d4234a92';
const reciever = '0xc40b6909eb7085590e1c26cb3becc25368e249e9';

// newly updated private key of sender
const updated_priv = fs.readFileSync('./example/key.priv', 'utf8');

async function main() {
  const provider = new ethers.providers.JsonRpcProvider('https://public-en-baobab.klaytn.net');
  const wallet = new Wallet( sender, updated_priv, provider );

  let tx = {
    type: 8,        // TxTypeValueTransfer
    to: reciever,
    value: 100000000000,
    from: sender,
  }; 

  const ptx = await wallet.populateTransaction(tx);
  const signTx = await wallet.signTransaction(ptx);
  console.log('signTx', signTx);
  
  const objTx = wallet.decodeTxFromRLP(signTx);
  console.log( objTx );

  const txhash = await provider.send("klay_sendRawTransaction", [signTx]);
  console.log('txhash', txhash);

  const rc = await provider.waitForTransaction(txhash);
  console.log('receipt', rc);
}

main();
