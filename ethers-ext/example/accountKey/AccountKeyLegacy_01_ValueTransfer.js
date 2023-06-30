const ethers = require("ethers");
const { Wallet } = require("../../dist/src/ethers"); // require("@klaytn/sdk-ethers");

//
// AccountKeyPublic Step 01 - value transfer
// https://docs.klaytn.foundation/content/klaytn/design/accounts#accountkeylegacy
// 

const sender_addr = '0xa2a8854b1802d8cd5de631e690817c253d6a9153' 
const sender_priv = '0x0e4ca6d38096ad99324de0dde108587e5d7c600165ae4cd6c2462c597458c2b8' 
const reciever_addr = '0xc40b6909eb7085590e1c26cb3becc25368e249e9' 

async function main() {
  const provider = new ethers.providers.JsonRpcProvider('https://public-en-baobab.klaytn.net')
  const wallet = new Wallet(sender_priv, provider);

  let tx = {
      to: reciever_addr,
      value: 100000000000,
      from: sender_addr,
    }; 
  
  let sentTx = await wallet.sendTransaction(tx);
  console.log('sentTx', sentTx);

  let rc = await sentTx.wait();
  console.log('receipt', rc);
}

main();