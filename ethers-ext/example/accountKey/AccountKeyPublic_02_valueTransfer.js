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

  let new_tx = {
    type: 8,        // TxTypeValueTransfer
    to: reciever,
    value: 100000000000,
    from: sender,
  }; 

  let sentTx = await wallet.sendTransaction(new_tx);
  console.log('sentTx', sentTx);

  let rc = await sentTx.wait();
  console.log('receipt', rc);
}

main();
