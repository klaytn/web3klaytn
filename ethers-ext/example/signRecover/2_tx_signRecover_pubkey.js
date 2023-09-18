const ethers = require("ethers");

// const { Wallet, parseKlay } = require("@klaytn/ethers-ext");
const { Wallet, parseKlay, TxType } = require("../../dist/src");

const recieverAddr = "0xe15cd70a41dfb05e7214004d7d054801b2a2f06b";
const senderAddr = "0xe15cd70a41dfb05e7214004d7d054801b2a2f06b";
const senderPriv = "0x0e4ca6d38096ad99324de0dde108587e5d7c600165ae4cd6c2462c597458c2b8";

async function main() {
  const provider = new ethers.providers.JsonRpcProvider("https://public-en-baobab.klaytn.net");
  const wallet = new Wallet(senderAddr, senderPriv, provider);

  let tx = {
    type: TxType.ValueTransfer,
    from: senderAddr,
    to: recieverAddr,
    value: parseKlay("1"),
  };

  tx = await wallet.populateTransaction(tx);
  const senderTxHashRLP = await wallet.signTransaction(tx);

  console.log(senderTxHashRLP);
  console.log(wallet.decodeTxFromRLP(senderTxHashRLP));

  const recoverAddr = await provider.send("klay_recoverFromTransaction", [senderTxHashRLP, "latest"]);
  console.log("\nsender", senderAddr, "\nrecovered", recoverAddr);
}

main();