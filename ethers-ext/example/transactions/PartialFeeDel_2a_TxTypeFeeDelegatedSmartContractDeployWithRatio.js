const ethers = require("ethers");
const { Wallet } = require("../../dist/src/ethers"); // require("@klaytn/sdk-ethers");
const { objectFromRLP } = require("../../dist/src/core/klaytn_tx");

const fs = require('fs');
const sender_priv = fs.readFileSync('./example/key.priv', 'utf8') 
const feePayer_priv = fs.readFileSync('./example/feePayerKey.priv', 'utf8') 

const sender = '0x3208ca99480f82bfe240ca6bc06110cd12bb6366' 
const feePayer = '0x24e8efd18d65bcb6b3ba15a4698c0b0d69d13ff7'

const provider = new ethers.providers.JsonRpcProvider('https://public-en-baobab.klaytn.net')

// TxTypeFeeDelegatedSmartContractExecutionWithRatio
// https://docs.klaytn.foundation/content/klaytn/design/transactions/partial-fee-delegation#txtypefeedelegatedsmartcontractdeploywithratio
// 
//   type: Must be 0x2a,
//   to:    Must be "0x0000000000000000000000000000000000000000",
//   value: Must be 0, if not payable
//   input: SmartContract binary, 
//   humanReadable: Must be false,
//   codeFormat: Must be 0x00
// 

async function doSender() {
  const sender_wallet = new Wallet(sender_priv, provider);
  
  let tx = {
    type: 0x2a,
    to:    "0x0000000000000000000000000000000000000000",
    value: 0,  
    from: sender,
    input: "0x608060405234801561001057600080fd5b5060f78061001f6000396000f3fe6080604052348015600f57600080fd5b5060043610603c5760003560e01c80633fb5c1cb1460415780638381f58a146053578063d09de08a14606d575b600080fd5b6051604c3660046083565b600055565b005b605b60005481565b60405190815260200160405180910390f35b6051600080549080607c83609b565b9190505550565b600060208284031215609457600080fd5b5035919050565b60006001820160ba57634e487b7160e01b600052601160045260246000fd5b506001019056fea2646970667358221220e0f4e7861cb6d7acf0f61d34896310975b57b5bc109681dbbfb2e548ef7546b364736f6c63430008120033",
    humanReadable: false,
    feeRatio: 30,
    codeFormat: 0x00,
  }; 
  tx = await sender_wallet.populateTransaction(tx);
  console.log(tx);

  const senderTxHashRLP = await sender_wallet.signTransaction(tx);
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