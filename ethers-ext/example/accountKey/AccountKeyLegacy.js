// AccountKeyLegacy
// https://docs.klaytn.foundation/content/klaytn/design/accounts#accountkeylegacy

const { ethers } = require("ethers");

const { Wallet } = require("@klaytn/ethers-ext");

const senderAddr = "0x24e8efd18d65bcb6b3ba15a4698c0b0d69d13ff7";
const senderPriv = "0x4a72b3d09c3d5e28e8652e0111f9c4ce252e8299aad95bb219a38eb0a3f4da49";
const recieverAddr = "0xc40b6909eb7085590e1c26cb3becc25368e249e9";

const provider = new ethers.providers.JsonRpcProvider("https://public-en-baobab.klaytn.net");
const wallet = new Wallet(senderPriv, provider);

async function sendTx() {
  const tx = {
    from: senderAddr,
    to: recieverAddr,
    value: 0,
  };

  const sentTx = await wallet.sendTransaction(tx);
  console.log("sentTx", sentTx);

  const receipt = await sentTx.wait();
  console.log("receipt", receipt);
}

async function recoverMsg() {
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
  await recoverMsg();
}
main().catch(console.error);
