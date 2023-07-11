const ethers = require("ethers");
const { Wallet, TxType, parseKlay } = require("@klaytn/ethers-ext");

//
// TxTypeFeeDelegatedValueTransferMemo
// https://docs.klaytn.foundation/content/klaytn/design/transactions/fee-delegation#txtypefeedelegatedvaluetransfermemo
// 

const senderAddr = '0xa2a8854b1802d8cd5de631e690817c253d6a9153' 
const senderPriv = '0x0e4ca6d38096ad99324de0dde108587e5d7c600165ae4cd6c2462c597458c2b8' 
const feePayerAddr = '0xcb0eb737dfda52756495a5e08a9b37aab3b271da'
const feePayerPriv = '0x9435261ed483b6efa3886d6ad9f64c12078a0e28d8d80715c773e16fc000cff4'
const recieverAddr = '0xc40b6909eb7085590e1c26cb3becc25368e249e9'

const provider = new ethers.providers.JsonRpcProvider('https://public-en-baobab.klaytn.net')

async function main() {

  // sender
  const senderWallet = new Wallet(senderPriv, provider);
  
  let tx = {
      type: TxType.FeeDelegatedValueTransferMemo,         
      to: recieverAddr,
      value: parseKlay("1"),
      from: senderAddr,
      input: "0x1234567890",
    }; 

  tx = await senderWallet.populateTransaction(tx);
  console.log(tx);

  const senderTxHashRLP = await senderWallet.signTransaction(tx);
  console.log('senderTxHashRLP', senderTxHashRLP);

  // fee payer 
  const feePayerWallet = new Wallet(feePayerPriv, provider);

  tx = feePayerWallet.decodeTxFromRLP( senderTxHashRLP );
  tx.feePayer = feePayerAddr;
  console.log(tx);

  const sentTx = await feePayerWallet.sendTransactionAsFeePayer(tx);
  console.log('sentTx', sentTx);

  const rc = await sentTx.wait();
  console.log('receipt', rc);
}

main();
