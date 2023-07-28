const ethers = require("ethers");
const { Wallet, TxType } = require("@klaytn/ethers-ext");

//
// TxTypeFeeDelegatedCancel
// https://docs.klaytn.foundation/content/klaytn/design/transactions/fee-delegation#txtypefeedelegatedcancel
//
// 1) send ValueTransfer tx with the next nonce + 1
// 2) send Cancel tx with the next nonce + 1
// 3) send ValueTransfer tx with the next nonce
//    then you can see Cancel tx with the next nonce + 1
//

const senderAddr = "0xa2a8854b1802d8cd5de631e690817c253d6a9153";
const senderPriv = "0x0e4ca6d38096ad99324de0dde108587e5d7c600165ae4cd6c2462c597458c2b8";
const feePayerAddr = "0xcb0eb737dfda52756495a5e08a9b37aab3b271da";
const feePayerPriv = "0x9435261ed483b6efa3886d6ad9f64c12078a0e28d8d80715c773e16fc000cff4";
const recieverAddr = "0xc40b6909eb7085590e1c26cb3becc25368e249e9";

const provider = new ethers.providers.JsonRpcProvider("https://public-en-baobab.klaytn.net");


async function senderSign(nextNonce) {
  const senderWallet = new Wallet(senderPriv, provider);

  let txCancel = {
    type: TxType.FeeDelegatedCancel,
    nonce: nextNonce + 1,
    from: senderAddr,
  };

  txCancel = await senderWallet.populateTransaction(txCancel);
  console.log(txCancel);

  const senderTxHashRLP = await senderWallet.signTransaction(txCancel);
  console.log("senderTxHashRLP", senderTxHashRLP);

  return senderTxHashRLP;
}

async function feePayerSign(senderTxHashRLP) {
  const feePayerWallet = new Wallet(feePayerPriv, provider);

  const txCancel = feePayerWallet.decodeTxFromRLP(senderTxHashRLP);
  console.log(txCancel);

  const cancelTx = await feePayerWallet.sendTransactionAsFeePayer(senderTxHashRLP);
  console.log("tx next + 1 Cancel", cancelTx);
}

async function main() {
  const wallet = new Wallet(senderPriv, provider);

  // 1) send ValueTransfer tx with the next nonce + 1
  let nextNonce = await wallet.getTransactionCount();
  let tx = {
    type: TxType.ValueTransfer,
    nonce: nextNonce + 1,
    to: recieverAddr,
    value: 1e12,
    from: senderAddr,
  };

  const nextTx = await wallet.sendTransaction(tx);
  console.log("tx next + 1", nextTx);

  // 2) send Cancel tx with the next nonce+1
  const senderTxHashRLP = await senderSign(nextNonce);
  await feePayerSign(senderTxHashRLP);

  // 3) send ValueTransfer tx with the next nonce
  tx.nonce = nextNonce;
  const sentTx = await wallet.sendTransaction(tx);
  console.log("tx next", sentTx);

  const rc = await sentTx.wait();
  console.log("receipt", rc);
}

main();
