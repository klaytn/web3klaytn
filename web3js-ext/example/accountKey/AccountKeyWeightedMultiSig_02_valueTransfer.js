// AccountKeyWeightedMultiSig Step 02 - value transfer
// https://docs.klaytn.foundation/content/klaytn/design/accounts#accountkeyweightedmultisig
//
//   gasLimit: Must be large enough

const { KlaytnWeb3, TxType, toPeb, parseTransaction } = require("@klaytn/web3js-ext");
const { secp256k1 } = require("ethereum-cryptography/secp256k1.js");
const { Web3 } = require("web3");

// the same address of sender in AccountKeyWeightedMultiSig_01_accountUpdate.js
const senderAddr = "0x2bf611d14d330fd3688d10f2201321eacc8aa2ce";
const senderPriv = "0x31fadf868e68fd2e3f7a1c528023c9a86a45db850e9d6b82c1a82d4c75b469d1";
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
    value: toPeb("1", "KLAY"),
    from: senderAddr,
  };

  // sign 1
  const account = web3.eth.accounts.privateKeyToAccount(senderNewPriv1);
  let signTx = await web3.eth.accounts.signTransaction(tx, account.privateKey);

  // tx = parseTransaction(signTx.rawTransaction);
  // console.log(tx);

  // sign 2
  const account2 = web3.eth.accounts.privateKeyToAccount(senderNewPriv2, provider);
  let signTx2 = await web3.eth.accounts.signTransaction(signTx.rawTransaction, account2.privateKey);

  // tx = parseTransaction(signTx2.rawTransaction);
  // console.log(tx);

  // sign 3
  const account3 = web3.eth.accounts.privateKeyToAccount(senderNewPriv3, provider);
  let signTx3 = await web3.eth.accounts.signTransaction(signTx2.rawTransaction, account3.privateKey);

  tx = parseTransaction(signTx3.rawTransaction);
  console.log(tx);

  let sendResult = await web3.eth.sendSignedTransaction(signTx3.rawTransaction);
  console.log(sendResult);

  let receipt = await web3.eth.getTransactionReceipt(sendResult.transactionHash);
  console.log({ receipt });
}

main();
