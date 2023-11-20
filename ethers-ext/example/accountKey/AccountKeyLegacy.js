// AccountKeyLegacy
// https://docs.klaytn.foundation/content/klaytn/design/accounts#accountkeylegacy

const { sign } = require("crypto");

const { Wallet } = require("@klaytn/ethers-ext");
const { ethers } = require("ethers");

const senderAddr = "0xa2a8854b1802d8cd5de631e690817c253d6a9153";
const senderPriv = "0x0e4ca6d38096ad99324de0dde108587e5d7c600165ae4cd6c2462c597458c2b8";
const recieverAddr = "0xc40b6909eb7085590e1c26cb3becc25368e249e9";

const provider = new ethers.providers.JsonRpcProvider("https://public-en-baobab.klaytn.net");
const wallet = new Wallet(senderPriv, provider);

async function sendTx() {
  let tx = {
    from: senderAddr,
    to: recieverAddr,
    value: 0,
  };

  let sentTx = await wallet.sendTransaction(tx);
  console.log("sentTx", sentTx);

  let rc = await sentTx.wait();
  console.log("receipt", rc);
}

async function verifyMsg() {
  const msg = "hello";
  const msghex = ethers.utils.hexlify(ethers.utils.toUtf8Bytes(msg));
  const sig = await wallet.signMessage(msg);
  console.log({ senderAddr, msg, msghex, sig });

  const addr1 = ethers.utils.verifyMessage(msg, sig);
  console.log("recoveredAddr lib", addr1, addr1.toLowerCase() === senderAddr);

  const addr2 = await provider.send("klay_recoverFromMessage", [senderAddr, msghex, sig, "latest"]);
  console.log("recoveredAddr rpc", addr2, addr2.toLowerCase() === senderAddr);
}

async function main() {
  await sendTx();
  await verifyMsg();
}
main().catch(console.error);
