//
// TxTypeFeeDelegatedCancelWithRatio
// https://docs.klaytn.foundation/content/klaytn/design/transactions/partial-fee-delegation#txtypefeedelegatedcancelwithratio
//
// 1) send ValueTransfer tx with the next nonce + 1
// 2) send Cancel tx with the next nonce + 1
// 3) send ValueTransfer tx with the next nonce
//    then you can see Cancel tx with the next nonce + 1
//

const { Web3 } = require("web3");
const { KlaytnWeb3 } = require( "../../dist/src");
const { TxType } = require("@klaytn/ethers-ext");


const senderAddr = "0xa2a8854b1802d8cd5de631e690817c253d6a9153";
const senderPriv = "0x0e4ca6d38096ad99324de0dde108587e5d7c600165ae4cd6c2462c597458c2b8";
const feePayerAddr = "0xcb0eb737dfda52756495a5e08a9b37aab3b271da";
const feePayerPriv = "0x9435261ed483b6efa3886d6ad9f64c12078a0e28d8d80715c773e16fc000cff4";
const recieverAddr = "0xc40b6909eb7085590e1c26cb3becc25368e249e9";


async function main() {
  const provider = new Web3.providers.HttpProvider("https://public-en-baobab.klaytn.net");
  const web3 = new KlaytnWeb3(provider);

  const senderWallet = web3.eth.accounts.privateKeyToAccount(senderPriv, provider);
  const feePayerWallet = web3.eth.accounts.privateKeyToAccount(feePayerPriv, provider);

  // 1) send ValueTransfer tx with the next nonce + 1
  let nextNonce = await web3.eth.getTransactionCount(senderAddr);
  console.log(nextNonce);
  let tx = {
    type: TxType.FeeDelegatedValueTransferWithRatio,
    nonce: nextNonce + 1n,
    to: recieverAddr,
    value: 1e12,
    from: senderAddr,
    gas: 300000,  // intrinsic gas too low
    gasPrice: 100e9,
    feeRatio: 30,
  };


  // sender sign
  let senderTx = await web3.eth.accounts.signTransaction(tx, senderWallet.privateKey);
  console.log({senderTx});
  // feePayer sign
  let signResult = await web3.eth.accounts.signTransactionAsFeePayer(senderTx.rawTransaction, feePayerWallet.privateKey);
  console.log({signResult});
  web3.eth.sendSignedTransaction(signResult.rawTransaction);

  // 2) send Cancel tx with the next nonce+1
  let txCancel = {
    type: TxType.FeeDelegatedCancelWithRatio,
    nonce: nextNonce + 1n,
    from: senderAddr,
    gas: 300000,  // intrinsic gas too low
    gasPrice: 100e9,
    feeRatio: 30,
  };

  // sender sign
  senderTx = await web3.eth.accounts.signTransaction(txCancel, senderWallet.privateKey);
  console.log({senderTx});
  // feePayer sign
  signResult = await web3.eth.accounts.signTransactionAsFeePayer(senderTx.rawTransaction, feePayerWallet.privateKey);
  console.log({signResult});
  web3.eth.sendSignedTransaction(signResult.rawTransaction);

  // 3) send ValueTransfer tx with the next nonce
  tx.nonce = nextNonce;

  // sender sign
  senderTx = await web3.eth.accounts.signTransaction(tx, senderWallet.privateKey);
  console.log({senderTx});
  // feePayer sign
  signResult = await web3.eth.accounts.signTransactionAsFeePayer(senderTx.rawTransaction, feePayerWallet.privateKey);
  console.log({signResult});
  sendResult = await web3.eth.sendSignedTransaction(signResult.rawTransaction);
  console.log("sendResult", sendResult);

  let receipt = await web3.eth.getTransactionReceipt(sendResult.transactionHash);
  console.log( receipt );
}

main();
