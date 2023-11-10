// AccountKeyWeightedMultiSig Step 01 - account update
// https://docs.klaytn.foundation/content/klaytn/design/accounts#accountkeyweightedmultisig

const { Wallet } = require("@klaytn/ethers-ext");
const { TxType, AccountKeyType, parseKlay } = require("@klaytn/js-ext-core");
const { ethers } = require("ethers");

const senderAddr = "0x82c6a8d94993d49cfd0c1d30f0f8caa65782cc7e";
// const senderPriv = "0xa32c30608667d43be2d652bede413f12a649dd1be93440878e7f712d51a6768a";
const senderNewPriv1 = "0xa32c30608667d43be2d652bede413f12a649dd1be93440878e7f712d51a6768a";
const senderNewPriv2 = "0x0e4ca6d38096ad99324de0dde108587e5d7c600165ae4cd6c2462c597458c2b8";
const senderNewPriv3 = "0xc9668ccd35fc20587aa37a48838b48ccc13cf14dd74c8999dd6a480212d5f7ac";
const recieverAddr = "0xc40b6909eb7085590e1c26cb3becc25368e249e9";

const provider = new ethers.providers.JsonRpcProvider("https://public-en-baobab.klaytn.net");
const wallet = new Wallet(senderAddr, senderNewPriv1, provider);
const wallet2 = new Wallet(senderAddr, senderNewPriv2, provider);
const wallet3 = new Wallet(senderAddr, senderNewPriv3, provider);

// Update Account
async function updateAccount() {
  let senderNewPub1 = new ethers.utils.SigningKey(senderNewPriv1).compressedPublicKey;
  let senderNewPub2 = new ethers.utils.SigningKey(senderNewPriv2).compressedPublicKey;
  let senderNewPub3 = new ethers.utils.SigningKey(senderNewPriv3).compressedPublicKey;

  let tx = {
    type: TxType.AccountUpdate,
    from: senderAddr,
    gasLimit: 1000000,
    key: {
      type: AccountKeyType.WeightedMultiSig,
      threshold: 2,
      keys: [
        [1, senderNewPub1],
        [1, senderNewPub2],
        [1, senderNewPub3]
      ]
    }
  };

  // sign 1
  let ptx = await wallet.populateTransaction(tx);
  const txHashRLP = await wallet.signTransaction(ptx);
  console.log("TxHashRLP", txHashRLP);

  // sign 2
  let ptx2 = await wallet2.populateTransaction(txHashRLP);
  const txHashRLP2 = await wallet2.signTransaction(ptx2);
  console.log("TxHashRLP2", txHashRLP2);

  // sign 3 & send
  const res = await wallet3.sendTransaction(txHashRLP2);
  console.log("updateAccount", res);

  let rc = await res.wait();
  console.log("receipt", rc);
}

// Send transaction from an AccountKeyLegacy account
async function sendTx() {
  let tx = {
    type: TxType.ValueTransfer,
    from: senderAddr,
    to: recieverAddr,
    value: parseKlay("0.01"),
    gasLimit: 100000,
  };

  // sign 1
  let ptx = await wallet.populateTransaction(tx);
  const txHashRLP = await wallet.signTransaction(ptx);
  console.log("TxHashRLP", txHashRLP);

  // sign 2
  let ptx2 = await wallet2.populateTransaction(txHashRLP);
  const txHashRLP2 = await wallet2.signTransaction(ptx2);
  console.log("TxHashRLP2", txHashRLP2);

  // sign 3 & send
  const res = await wallet3.sendTransaction(txHashRLP2);
  console.log("transaction", res);

  const rc = await res.wait();
  console.log("receipt", rc);
}

// Verify a message signed by an AccountKeyLegacy account
async function recoverMsg() {
  const msg = "hello";
  const msghex = ethers.utils.hexlify(ethers.utils.toUtf8Bytes(msg));
  const sig = await wallet2.signMessage(msg);
  console.log({ senderAddr, msg, msghex, sig });

  const addr1 = ethers.utils.verifyMessage(msg, sig);
  console.log("recoveredAddr lib", addr1, addr1.toLowerCase() === wallet2.address.toLowerCase());

  const addr2 = await provider.send("klay_recoverFromMessage", [senderAddr, msghex, sig, "latest"]);
  console.log("recoveredAddr rpc", addr2, addr2.toLowerCase() === wallet2.address.toLowerCase());
}

async function main() {
  await updateAccount();
  await sendTx();
  await recoverMsg();
}
main().catch(console.error);