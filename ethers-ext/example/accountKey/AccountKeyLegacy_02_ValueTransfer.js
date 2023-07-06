const ethers = require("ethers");
const { Wallet } = require("@klaytn/ethers-ext");

//
// AccountKeyPublic Step 02 - value transfer
// https://docs.klaytn.foundation/content/klaytn/design/accounts#accountkeylegacy
// 

const senderAddr = '0xa2a8854b1802d8cd5de631e690817c253d6a9153' 
const senderPriv = '0x0e4ca6d38096ad99324de0dde108587e5d7c600165ae4cd6c2462c597458c2b8' 
const recieverAddr = '0xc40b6909eb7085590e1c26cb3becc25368e249e9' 

async function main() {
  const provider = new ethers.providers.JsonRpcProvider('https://public-en-baobab.klaytn.net')
  const wallet = new Wallet(senderPriv, provider);

  let tx = {
      to: recieverAddr,
      value: 100000000000,
      from: senderAddr,
    }; 
  
  const ptx = await wallet.populateTransaction(tx);
  console.log('ptx', ptx);
  const signTx = await wallet.signTransaction(ptx);
  console.log('signTx', signTx);
  
  const objTx = wallet.decodeTxFromRLP(signTx);
  console.log( objTx );

  const txhash = await provider.send("eth_sendRawTransaction", [signTx]);
  console.log('txhash', txhash);

  const rc = await provider.waitForTransaction(txhash);
  console.log('receipt', rc);
}

main();