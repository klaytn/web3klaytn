const ethers = require("ethers");
const { Wallet } = require("@klaytn/ethers-ext");

//
// TxTypeValueTransfer
// https://docs.klaytn.foundation/content/klaytn/design/transactions/basic#txtypevaluetransfer
// 
//   type: Must be 0x08,
// 
const recieverAddr = '0xc40b6909eb7085590e1c26cb3becc25368e249e9' 
const senderAddr = '0xa2a8854b1802d8cd5de631e690817c253d6a9153' 
const senderPriv = '0x0e4ca6d38096ad99324de0dde108587e5d7c600165ae4cd6c2462c597458c2b8' 

async function main() {
  const provider = new ethers.providers.JsonRpcProvider('https://public-en-baobab.klaytn.net')
  const wallet = new Wallet(senderPriv, provider);

  let tx = {
      type: 8,
      to: recieverAddr,
      value: 100000000000,
      from: senderAddr,
    }; 
  
  const sentTx = await wallet.sendTransaction(tx);
  console.log('sentTx', sentTx);

  const rc = await sentTx.wait();
  console.log('receipt', rc);

}

main();
