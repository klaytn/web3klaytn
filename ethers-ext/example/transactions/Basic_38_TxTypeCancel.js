const ethers = require("ethers");
const { Wallet } = require("@klaytn/ethers-ext");

const senderAddr = '0xa2a8854b1802d8cd5de631e690817c253d6a9153'  
const senderPriv = '0x0e4ca6d38096ad99324de0dde108587e5d7c600165ae4cd6c2462c597458c2b8'
const recieverAddr = '0xc40b6909eb7085590e1c26cb3becc25368e249e9'  

//
// TxTypeCancel
// https://docs.klaytn.foundation/content/klaytn/design/transactions/basic#txtypecancel
// 
//   type: Must be 0x38,
//
// 1) send ValueTransfer tx with the next nonce + 1  
// 2) send Cancel tx with the next nonce + 1 
// 3) send ValueTransfer tx with the next nonce 
//    then you can see Cancel tx with the next nonce + 1 
// 
async function main() {
  const provider = new ethers.providers.JsonRpcProvider('https://public-en-baobab.klaytn.net')
  const wallet = new Wallet(senderPriv, provider);

  // 1) send ValueTransfer tx with the next nonce+1
  let nextNonce = await wallet.getTransactionCount();
  let tx = {
      type: 8,    
      nonce: nextNonce + 1,     
      to: recieverAddr,
      value: 1e12,
      from: senderAddr,
    }; 

  const nextTx = await wallet.sendTransaction(tx);
  console.log('tx next + 1', nextTx);

  // 2) send Cancel tx with the next nonce+1 
  let txCancel = {
    type: 0x38,
    nonce: nextNonce + 1, 
    from: senderAddr, 
  };
    
  const cancelTx = await wallet.sendTransaction(txCancel);
  console.log('tx next + 1 Cancel', cancelTx);

  // 3) send ValueTransfer tx with the next nonce
  tx.nonce = nextNonce;
  
  const sentTx = await wallet.sendTransaction(tx);
  console.log('tx next', sentTx);

  const rc = await sentTx.wait();
  console.log('receipt', rc);
}

main();
