// TxTypeValueTransferMemo
// https://docs.klaytn.foundation/content/klaytn/design/transactions/basic#txtypevaluetransfermemo

const { Wallet } = require("@klaytn/ethers-ext");
const { TxType, parseKlay } = require("@klaytn/js-ext-core");
const ethers = require("ethers");

const recieverAddr = "0xc40b6909eb7085590e1c26cb3becc25368e249e9";
const senderAddr = "0xa2a8854b1802d8cd5de631e690817c253d6a9153";
const senderPriv = "0x0e4ca6d38096ad99324de0dde108587e5d7c600165ae4cd6c2462c597458c2b8";

async function main() {
  const provider = new ethers.providers.JsonRpcProvider("https://public-en-baobab.klaytn.net");
  const wallet = new Wallet(senderPriv, provider);

  let tx = {
    type: TxType.ValueTransferMemo,
    to: recieverAddr,
    value: parseKlay("0.01"),
    from: senderAddr,
    input: "0x1234567890",
  };

  const sentTx = await wallet.sendTransaction(tx);
  console.log("sentTx", sentTx);

  const rc = await sentTx.wait();
  console.log("receipt", rc);
}

main();
