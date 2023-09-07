const { Wallet, TxType, parseKlay } = require("@klaytn/ethers-ext");
const ethers = require("ethers");

//
// AccountKeyWeightedMultiSig Step 02 - value transfer
// https://docs.klaytn.foundation/content/klaytn/design/accounts#accountkeyweightedmultisig
//
//   gasLimit: Must be large enough
//

const provider = new ethers.providers.JsonRpcProvider("https://public-en-baobab.klaytn.net");

// the same address of sender in AccountKeyWeightedMultiSig_01_accountUpdate.js
const recieverAddr = "0xc40b6909eb7085590e1c26cb3becc25368e249e9";
const senderAddr = "0x82c6a8d94993d49cfd0c1d30f0f8caa65782cc7e";
const senderNewPriv1 = "0xa32c30608667d43be2d652bede413f12a649dd1be93440878e7f712d51a6768a";
const senderNewPriv2 = "0x0e4ca6d38096ad99324de0dde108587e5d7c600165ae4cd6c2462c597458c2b8";
const senderNewPriv3 = "0xc9668ccd35fc20587aa37a48838b48ccc13cf14dd74c8999dd6a480212d5f7ac";

async function main() {
  let tx = {
    type: TxType.ValueTransfer,
    gasLimit: 100000,
    to: recieverAddr,
    value: parseKlay("1"),
    from: senderAddr,
  };

  // sign 1
  const wallet = new Wallet(senderAddr, senderNewPriv1, provider);
  let ptx = await wallet.populateTransaction(tx);
  const txHashRLP = await wallet.signTransaction(ptx);
  console.log("TxHashRLP", txHashRLP);

  // sign 2
  const wallet2 = new Wallet(senderAddr, senderNewPriv2, provider);
  let ptx2 = await wallet2.populateTransaction(txHashRLP);
  const txHashRLP2 = await wallet2.signTransaction(ptx2);
  console.log("TxHashRLP2", txHashRLP2);

  // sign 3 & send 
  const wallet3 = new Wallet(senderAddr, senderNewPriv3, provider);
  const res = await wallet3.sendTransaction(txHashRLP2);
  console.log("transaction", res);

  const rc = await provider.waitForTransaction(res.hash);
  console.log("receipt", rc);
}

main();
