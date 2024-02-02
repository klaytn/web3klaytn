// AccountKeyLegacy
// https://docs.klaytn.foundation/docs/learn/accounts/

const { Web3, toPeb } = require("@klaytn/web3js-ext");

const senderAddr = "0x24e8efd18d65bcb6b3ba15a4698c0b0d69d13ff7";
const senderPriv = "0x4a72b3d09c3d5e28e8652e0111f9c4ce252e8299aad95bb219a38eb0a3f4da49";
const receiverAddr = "0xc40b6909eb7085590e1c26cb3becc25368e249e9";

const provider = new Web3.providers.HttpProvider("https://public-en-baobab.klaytn.net");
const web3 = new Web3(provider);
const senderAccount = web3.eth.accounts.privateKeyToAccount(senderPriv);

async function sendTx() {
  let tx = {
    from: senderAddr,
    to: receiverAddr,
    value: toPeb("0.01", "KLAY"),
  };

  const signResult = await senderAccount.signTransaction(tx);
  console.log("signedTx", signResult.transactionHash);

  const receipt = await web3.eth.sendSignedTransaction(signResult.rawTransaction);
  console.log("receipt", receipt);
}

async function recoverMsg() {
  const msg = "hello";
  const msghex = Web3.utils.utf8ToHex(msg);
  const signResult = senderAccount.sign(msg);
  console.log({ senderAddr, msg, msghex, sig: signResult.signature });

  const { v, r, s } = signResult;
  const addr1 = web3.eth.accounts.recover(msg, v, r, s);
  console.log("recoveredAddr lib", addr1, addr1.toLowerCase() === senderAddr);

  const sig = signResult.signature;
  const addr2 = await web3.klay.recoverFromMessage(senderAddr, msghex, sig, "latest");
  console.log("recoveredAddr rpc", addr2, addr2.toLowerCase() === senderAddr);
}

async function main() {
  await sendTx();
  await recoverMsg();
}
main().catch(console.error);