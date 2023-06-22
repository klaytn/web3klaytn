const ethers = require("ethers");
const { Wallet } = require("../../dist/src/ethers"); // require("@klaytn/sdk-ethers");

const fs = require('fs')
const sender_priv = fs.readFileSync('./example/privateKey', 'utf8') 

const sender = '0x3208ca99480f82bfe240ca6bc06110cd12bb6366' 
const reciever = '0xc40b6909eb7085590e1c26cb3becc25368e249e9' 

//
// TxTypeValueTransferMemo
// https://docs.klaytn.foundation/content/klaytn/design/transactions/basic#txtypevaluetransfermemo
// 
//   type: Must be 0x10,
// 
async function main() {
  const provider = new ethers.providers.JsonRpcProvider('https://public-en-baobab.klaytn.net')
  const wallet = new Wallet(sender_priv, provider);

  tx = {
      type: 0x10,         
      to: reciever,
      value: 1e12,
      from: sender,
      input: "0x1234567890",
    }; 
  
  const sentTx = await wallet.sendTransaction(tx);
  console.log('sentTx', sentTx);

  const rc = await sentTx.wait();
  console.log('receipt', rc);
}

main();
