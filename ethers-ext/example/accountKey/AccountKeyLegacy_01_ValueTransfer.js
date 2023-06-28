const ethers = require("ethers");
const { Wallet } = require("../../dist/src/ethers"); // require("@klaytn/sdk-ethers");
const { objectFromRLP } = require("../../dist/src/core/klaytn_tx");
const fs = require('fs')

const sender_priv = fs.readFileSync('./example/key.priv', 'utf8') 
const sender_addr = '0x3208ca99480f82bfe240ca6bc06110cd12bb6366' 
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