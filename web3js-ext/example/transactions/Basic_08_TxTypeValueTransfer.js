// TxTypeValueTransfer
// https://docs.klaytn.foundation/content/klaytn/design/transactions/basic#txtypevaluetransfer

const { KlaytnWeb3, TxType, toPeb } = require("@klaytn/web3js-ext");
const { Web3 } = require("web3");

const recieverAddr = "0xc40b6909eb7085590e1c26cb3becc25368e249e9";
const senderAddr = "0xa2a8854b1802d8cd5de631e690817c253d6a9153";
const senderPriv = "0x0e4ca6d38096ad99324de0dde108587e5d7c600165ae4cd6c2462c597458c2b8";

async function main() {
  const provider = new Web3.providers.HttpProvider("https://public-en-baobab.klaytn.net");
  const web3 = new KlaytnWeb3(provider);
  const senderAccount = web3.eth.accounts.privateKeyToAccount(senderPriv);

  const tx = {
    type: TxType.ValueTransfer,
    from: senderAddr,
    to: recieverAddr,
    value: toPeb("0.01", "KLAY"),
  };

  const signResult = await senderAccount.signTransaction(tx);
  console.log("rawTx", signResult.rawTransaction);

  const receipt = await web3.eth.sendSignedTransaction(signResult.rawTransaction);
  console.log("receipt", receipt);
}

main();