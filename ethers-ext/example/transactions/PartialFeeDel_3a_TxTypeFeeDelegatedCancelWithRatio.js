const ethers = require("ethers");
const { Wallet } = require("../../dist/src/ethers"); // require("@klaytn/sdk-ethers");
const { objectFromRLP } = require("../../dist/src/core/klaytn_tx");

const fs = require('fs');
const senderPriv = fs.readFileSync('./example/key.priv', 'utf8') // private key of sender 
const feePayer_priv = fs.readFileSync('./example/feePayerKey.priv', 'utf8') // private key of feeDelegator

const sender = '0x3208ca99480f82bfe240ca6bc06110cd12bb6366' 
const reciever = '0xc40b6909eb7085590e1c26cb3becc25368e249e9' 
const feePayer = '0x24e8efd18d65bcb6b3ba15a4698c0b0d69d13ff7'

const provider = new ethers.providers.JsonRpcProvider('https://public-en-baobab.klaytn.net')

//
// TxTypeFeeDelegatedCancelWithRatio
// https://docs.klaytn.foundation/content/klaytn/design/transactions/partial-fee-delegation#txtypefeedelegatedcancelwithratio
// 
//   type: Must be 0x3a,
//
// 1) send ValueTransfer tx with the next nonce + 1  
// 2) send Cancel tx with the next nonce + 1 
// 3) send ValueTransfer tx with the next nonce 
//    then you can see Cancel tx with the next nonce + 1 
// 

async function doSender( nextNonce ) {
  const senderWallet = new Wallet(senderPriv, provider);
  
  let txCancel = {
    type: 0x3a,
    nonce: nextNonce + 1, 
    from: sender,
    feeRatio: 30, 
  };

  txCancel = await senderWallet.populateTransaction(txCancel);
  console.log(txCancel);

  const senderTxHashRLP = await senderWallet.signTransaction(txCancel);
  console.log('senderTxHashRLP', senderTxHashRLP);

  return senderTxHashRLP; 
}

async function doFeePayer( senderTxHashRLP ) {
  const feePayer_wallet = new Wallet(feePayer_priv, provider);

  const txCancel = objectFromRLP( senderTxHashRLP );
  txCancel.feePayer = feePayer;
  console.log(txCancel);

  const cancelTx = await feePayer_wallet.sendTransactionAsFeePayer(txCancel);
  console.log('tx next + 1 Cancel', cancelTx);
}

async function main() {
  const wallet = new Wallet(senderPriv, provider);
   
  // 1) send ValueTransfer tx with the next nonce + 1
  let nextNonce = await wallet.getTransactionCount();
  let tx = {
      type: 8,         
      nonce: nextNonce + 1,
      to: reciever,
      value: 1e12,
      from: sender,
    }; 
  
  const nextTx = await wallet.sendTransaction(tx);
  console.log('tx next + 1', nextTx);

  // 2) send Cancel tx with the next nonce+1 
  const senderTxHashRLP = await doSender( nextNonce );
  await doFeePayer( senderTxHashRLP ); 

  // 3) send ValueTransfer tx with the next nonce
  tx.nonce = nextNonce;
  const sentTx = await wallet.sendTransaction(tx);
  console.log('tx next', sentTx);

  const rc = await sentTx.wait();
  console.log('receipt', rc);
}

main();
