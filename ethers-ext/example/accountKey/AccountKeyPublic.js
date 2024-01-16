// AccountKeyPublic
// https://docs.klaytn.foundation/content/klaytn/design/accounts#accountkeypublic

const { ethers } = require("ethers");

const { Wallet, TxType, AccountKeyType, parseKlay } = require("@klaytn/ethers-ext");

// Using senderPriv == senderNewPriv to execute this example repeatedly.
// But you should use AccountKeyPublic to register a different private key.
const senderAddr = "0xe15cd70a41dfb05e7214004d7d054801b2a2f06b";
const senderPriv = "0x0e4ca6d38096ad99324de0dde108587e5d7c600165ae4cd6c2462c597458c2b8";
const senderNewPriv = "0x0e4ca6d38096ad99324de0dde108587e5d7c600165ae4cd6c2462c597458c2b8";
const recieverAddr = "0xc40b6909eb7085590e1c26cb3becc25368e249e9";

const provider = new ethers.providers.JsonRpcProvider("https://public-en-baobab.klaytn.net");
const wallet = new Wallet(senderAddr, senderPriv, provider);
const newWallet = new Wallet(senderAddr, senderNewPriv, provider);

async function updateAccount() {
  let senderNewPub = ethers.utils.computePublicKey(senderNewPriv, true);

  const tx = {
    type: TxType.AccountUpdate,
    from: senderAddr,
    key: {
      type: AccountKeyType.Public,
      key: senderNewPub,
    }
  };

  const sentTx = await wallet.sendTransaction(tx);
  console.log("sentTx", sentTx);

  const receipt = await sentTx.wait();
  console.log("receipt", receipt);
}

async function sendTx() {
  let tx = {
    type: TxType.ValueTransfer,
    from: senderAddr,
    to: recieverAddr,
    value: parseKlay("0.01"),
  };

  const sentTx = await newWallet.sendTransaction(tx);
  console.log("sentTx", sentTx);

  const receipt = await sentTx.wait();
  console.log("receipt", receipt);
}

async function recoverMsg() {
  const msg = "hello";
  const msghex = ethers.utils.hexlify(ethers.utils.toUtf8Bytes(msg));
  const sig = await newWallet.signMessage(msg);
  console.log({ senderAddr, msg, msghex, sig });

  const addr1 = ethers.utils.verifyMessage(msg, sig);
  console.log("recoveredAddr lib", addr1, addr1.toLowerCase() === newWallet.address.toLowerCase());

  const addr2 = await provider.send("klay_recoverFromMessage", [senderAddr, msghex, sig, "latest"]);
  console.log("recoveredAddr rpc", addr2, addr2.toLowerCase() === newWallet.address.toLowerCase());
}

async function main() {
  await updateAccount();
  await sendTx();
  await recoverMsg();
}
main().catch(console.error);
