const { Web3 } = require("web3");
const { KlaytnWeb3 } = require( "../../dist/src");

const { TxType } = require("@klaytn/ethers-ext");

const senderAddr = "0xa2a8854b1802d8cd5de631e690817c253d6a9153";
const senderPriv = "0x0e4ca6d38096ad99324de0dde108587e5d7c600165ae4cd6c2462c597458c2b8";
const recieverAddr = "0xc40b6909eb7085590e1c26cb3becc25368e249e9";

//
// TxTypeCancel
// https://docs.klaytn.foundation/content/klaytn/design/transactions/basic#txtypecancel
//
// 1) send ValueTransfer tx with the next nonce + 1
// 2) send Cancel tx with the next nonce + 1
// 3) send ValueTransfer tx with the next nonce
//    then you can see Cancel tx with the next nonce + 1
//
async function main() {
  const provider = new Web3.providers.HttpProvider("https://public-en-baobab.klaytn.net");
  const web3 = new KlaytnWeb3(provider);

  const sender = web3.eth.accounts.privateKeyToAccount(senderPriv);

  // 1) send ValueTransfer tx with the next nonce+1
  let nextNonce = await web3.eth.getTransactionCount();
  let tx = {
    type: TxType.ValueTransfer,
    nonce: nextNonce + 1,
    to: recieverAddr,
    value: 1e12,
    from: senderAddr,
  };

  let signResult = await web3.eth.accounts.signTransaction(tx, sender.privateKey);
  let sendResult = await web3.eth.sendSignedTransaction(signResult.rawTransaction);

  console.log("tx next + 1", sendResult);

  // 2) send Cancel tx with the next nonce+1
  let txCancel = {
    type: TxType.Cancel,
    nonce: nextNonce + 1,
    from: senderAddr,
  };

  signResult = await web3.eth.accounts.signTransaction(txCancel, sender.privateKey);
  sendResult = await web3.eth.sendSignedTransaction(signResult.rawTransaction);
  let txhash = sendResult.transactionHash;

  console.log("tx next + 1 Cancel", sendResult);

  // 3) send ValueTransfer tx with the next nonce
  tx.nonce = nextNonce;

  signResult = await web3.eth.accounts.signTransaction(tx, sender.privateKey);
  sendResult = await web3.eth.sendSignedTransaction(signResult.rawTransaction);

  console.log("tx next", sendResult);

  let receipt = await web3.eth.getTransactionReceipt(txhash);
  console.log({ receipt });
}

// to do - Web3ValidatorError: value at "/0" is required
main();
