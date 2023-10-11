const { Web3 } = require("web3");
const { KlaytnWeb3 } = require( "../../dist/src");

const { TxType, AccountKeyType, objectFromRLP } = require("../../../ethers-ext/dist/src");

//
// AccountKeyPublic Step 02 - value transfer
// https://docs.klaytn.foundation/content/klaytn/design/accounts#accountkeypublic
//

// the same address of sender in AccountKeyPublic_01_accountUpdate.js
const receiverAddr = "0xc40b6909eb7085590e1c26cb3becc25368e249e9";
const senderAddr = "0xfb60ded0ae96fe04eed6450aead860aa9d57128e";
const senderNewPriv = "0x0e4ca6d38096ad99324de0dde108587e5d7c600165ae4cd6c2462c597458c2b8";

async function main() {
  const provider = new Web3.providers.HttpProvider("https://public-en-baobab.klaytn.net");
  const web3 = new KlaytnWeb3(provider);

  let tx = {
    type: TxType.ValueTransfer,
    to: receiverAddr,
    value: 1e9,
    // value: convertToPeb('1', 'KLAY'),
    from: senderAddr,
  };

  const wallet = web3.eth.accounts.privateKeyToAccount(senderNewPriv);
  let signTx = await web3.eth.accounts.signTransaction(tx, wallet.privateKey);
  console.log(signTx);


  let sendResult = await web3.eth.sendSignedTransaction(signTx.rawTransaction);
  console.log( sendResult );

  let receipt = await web3.eth.getTransactionReceipt(sendResult.transactionHash);
  console.log({ receipt });
}

main();
