// TxTypeCancel
// https://docs.klaytn.foundation/content/klaytn/design/transactions/basic#txtypecancel

const { KlaytnWeb3, TxType } = require("@klaytn/web3js-ext");
const { Web3 } = require("web3");

const senderAddr = "0xa2a8854b1802d8cd5de631e690817c253d6a9153";
const senderPriv = "0x0e4ca6d38096ad99324de0dde108587e5d7c600165ae4cd6c2462c597458c2b8";

async function main() {
  const provider = new Web3.providers.HttpProvider("https://public-en-baobab.klaytn.net");
  const web3 = new KlaytnWeb3(provider);
  const senderAccount = web3.eth.accounts.privateKeyToAccount(senderPriv);

  const tx = {
    type: TxType.Cancel,
    from: senderAddr,
  };

  const signResult = await senderAccount.signTransaction(tx);
  console.log("rawTx", signResult.rawTransaction);

  const receipt = await web3.eth.sendSignedTransaction(signResult.rawTransaction);
  console.log("receipt", receipt);
}

main();
