const ethers = require("ethers");
const { Wallet } = require("../../dist/src/ethers"); // require("@klaytn/sdk-ethers");

//
// AccountKeyPublic Step 03 - value transfer
// https://docs.klaytn.foundation/content/klaytn/design/accounts#accountkeypublic
// 

// the same address of sender in AccountKeyPublic_01_accountUpdate.js 
const reciever_addr = '0xc40b6909eb7085590e1c26cb3becc25368e249e9';
const sender_addr = '0xe15cd70a41dfb05e7214004d7d054801b2a2f06b' 
// newly updated private key of sender
const sender_new_priv = '0x0e4ca6d38096ad99324de0dde108587e5d7c600165ae4cd6c2462c597458c2b8' 

async function main() {
  const provider = new ethers.providers.JsonRpcProvider('https://public-en-baobab.klaytn.net');
  const wallet = new Wallet( sender_addr, sender_new_priv, provider );

  let tx = {
    type: 8,        // TxTypeValueTransfer
    to: reciever_addr,
    value: 100000000000,
    from: sender_addr,
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
