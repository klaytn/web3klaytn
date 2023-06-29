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
// TxTypeFeeDelegatedValueTransferMemo
// https://docs.klaytn.foundation/content/klaytn/design/transactions/fee-delegation#txtypefeedelegatedvaluetransfermemo
// 
//   type: Must be 0x11,
//   nonce: In signTransactionAsFeePayer, must not be omitted, because feePayer's nonce is filled when populating
// 

async function doSender() {
  const senderWallet = new Wallet(senderPriv, provider);
  
  let tx = {
      type: 0x11,         
      to: reciever,
      value: 1e12,
      from: sender,
      input: "0x1234567890",
    }; 

  tx = await senderWallet.populateTransaction(tx);
  console.log(tx);

  const senderTxHashRLP = await senderWallet.signTransaction(tx);
  console.log('senderTxHashRLP', senderTxHashRLP);

  return senderTxHashRLP; 
}

async function doFeePayer( senderTxHashRLP ) {
  const feePayer_wallet = new Wallet(feePayer_priv, provider);

  const tx = objectFromRLP( senderTxHashRLP );
  tx.feePayer = feePayer;
  console.log(tx);

  const sentTx = await feePayer_wallet.sendTransactionAsFeePayer(tx);
  console.log('sentTx', sentTx);

  const rc = await sentTx.wait();
  console.log('receipt', rc);
}

async function main() {

  const senderTxHashRLP = await doSender();

  doFeePayer( senderTxHashRLP ); 
}

main();
