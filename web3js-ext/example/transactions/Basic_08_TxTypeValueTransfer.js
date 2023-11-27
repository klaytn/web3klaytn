// TxTypeValueTransfer
// https://docs.klaytn.foundation/content/klaytn/design/transactions/basic#txtypevaluetransfer

const { Web3 } = require("web3");
const { KlaytnWeb3, TxType } = require("../../dist/web3");
const { toPeb } = require("../../../js-ext-core/dist/util");

const recieverAddr = "0xc40b6909eb7085590e1c26cb3becc25368e249e9";
const senderAddr = "0xa2a8854b1802d8cd5de631e690817c253d6a9153";
const senderPriv = "0x0e4ca6d38096ad99324de0dde108587e5d7c600165ae4cd6c2462c597458c2b8";

async function main() {
  const provider = new Web3.providers.HttpProvider("https://public-en-baobab.klaytn.net");
  const web3 = new KlaytnWeb3(provider);

  const sender = web3.eth.accounts.privateKeyToAccount(senderPriv);

  let tx = {
    type: TxType.ValueTransfer,
    to: recieverAddr,
    value: toPeb("0.01"),
    from: senderAddr,
    gas: 21000,
    gasPrice: 25e9,
  };

  let signResult = await web3.eth.accounts.signTransaction(tx, sender.privateKey);
  console.log({ signResult });

  let sendResult = await web3.eth.sendSignedTransaction(signResult.rawTransaction);
  let txhash = sendResult.transactionHash;

  let receipt = await web3.eth.getTransactionReceipt(txhash);
  console.log({ receipt });
}

main();