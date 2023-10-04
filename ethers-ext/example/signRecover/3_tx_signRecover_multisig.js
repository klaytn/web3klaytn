const ethers = require("ethers");

// const { Wallet, parseKlay } = require("@klaytn/ethers-ext");
const { Wallet, parseKlay, TxType } = require("../../dist/src");


const receiverAddr = "0x82c6a8d94993d49cfd0c1d30f0f8caa65782cc7e";
const senderAddr = "0x82c6a8d94993d49cfd0c1d30f0f8caa65782cc7e";

async function main() {
  const provider = new ethers.providers.JsonRpcProvider("https://public-en-baobab.klaytn.net");

  let user1 = new Wallet(
    "0x82c6a8d94993d49cfd0c1d30f0f8caa65782cc7e",
    "0xa32c30608667d43be2d652bede413f12a649dd1be93440878e7f712d51a6768a",
    provider
  );
  let user2 = new Wallet(
    "0x82c6a8d94993d49cfd0c1d30f0f8caa65782cc7e",
    "0x0e4ca6d38096ad99324de0dde108587e5d7c600165ae4cd6c2462c597458c2b8",
    provider
  );
  let user3 = new Wallet(
    "0x82c6a8d94993d49cfd0c1d30f0f8caa65782cc7e",
    "0xc9668ccd35fc20587aa37a48838b48ccc13cf14dd74c8999dd6a480212d5f7ac",
    provider
  );

  let tx = {
    type: TxType.ValueTransfer,
    from: senderAddr,
    to: receiverAddr,
    value: parseKlay("1"),
  };

  tx = await user1.populateTransaction(tx);
  const senderTxHashRLP = await user1.signTransaction(tx);

  const tx2 = await user2.populateTransaction(user2.decodeTxFromRLP(senderTxHashRLP));
  const senderTxHashRLP2 = await user2.signTransaction(tx2);

  const tx3 = await user3.populateTransaction(user3.decodeTxFromRLP(senderTxHashRLP2));
  const senderTxHashRLP3 = await user3.signTransaction(tx3);

  console.log(senderTxHashRLP3);
  console.log(user1.decodeTxFromRLP(senderTxHashRLP3));

  const recoverAddr = await provider.send("klay_recoverFromTransaction", [senderTxHashRLP3, "latest"]);
  console.log("\nsender", senderAddr, "\nrecovered", recoverAddr);
}

main();