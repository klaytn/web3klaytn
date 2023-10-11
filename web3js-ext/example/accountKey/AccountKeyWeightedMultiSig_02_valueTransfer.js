const { Web3 } = require("web3");
const { KlaytnWeb3 } = require( "../../dist/src");

const { TxType, AccountKeyType, objectFromRLP } = require("../../../ethers-ext/dist/src");

//
// AccountKeyWeightedMultiSig Step 02 - value transfer
// https://docs.klaytn.foundation/content/klaytn/design/accounts#accountkeyweightedmultisig
//
//   gasLimit: Must be large enough
//

// the same address of sender in AccountKeyWeightedMultiSig_01_accountUpdate.js
const receiverAddr = "0xc40b6909eb7085590e1c26cb3becc25368e249e9";
const senderAddr = "0x55815c94c0c375e11a535096f8067c0418a93b48";
const senderNewPriv1 = "0xa32c30608667d43be2d652bede413f12a649dd1be93440878e7f712d51a6768a";
const senderNewPriv2 = "0x0e4ca6d38096ad99324de0dde108587e5d7c600165ae4cd6c2462c597458c2b8";
const senderNewPriv3 = "0xc9668ccd35fc20587aa37a48838b48ccc13cf14dd74c8999dd6a480212d5f7ac";

async function main() {
  const provider = new Web3.providers.HttpProvider("https://public-en-baobab.klaytn.net");
  const web3 = new KlaytnWeb3(provider);

  let tx = {
    type: TxType.ValueTransfer,
    gasLimit: 100000,
    to: receiverAddr,
    value: 1e9,
    // value: convertToPeb('1', 'KLAY'),
    from: senderAddr,
  };

  // sign 1
  const wallet = web3.eth.accounts.privateKeyToAccount(senderNewPriv1);
  let signTx = await web3.eth.accounts.signTransaction(tx, wallet.privateKey);

  // tx = objectFromRLP(signTx.rawTransaction);
  // console.log(tx);

  // sign 2
  const wallet2 = web3.eth.accounts.privateKeyToAccount(senderNewPriv2, provider);
  let signTx2 = await web3.eth.accounts.signTransaction(signTx.rawTransaction, wallet2.privateKey);

  // tx = objectFromRLP(signTx2.rawTransaction);
  // console.log(tx);

  // sign 3
  const wallet3 = web3.eth.accounts.privateKeyToAccount(senderNewPriv3, provider);
  let signTx3 = await web3.eth.accounts.signTransaction(signTx2.rawTransaction, wallet3.privateKey);

  tx = objectFromRLP(signTx3.rawTransaction);
  console.log(tx);

  let sendResult = await web3.eth.sendSignedTransaction(signTx3.rawTransaction);
  console.log( sendResult );

  let receipt = await web3.eth.getTransactionReceipt(sendResult.transactionHash);
  console.log({ receipt });
}

main();
