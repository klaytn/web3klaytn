// AccountKeyPublic
// https://docs.klaytn.foundation/content/klaytn/design/accounts#accountkeypublic

const { KlaytnWeb3, TxType, AccountKeyType, toPeb, getPublicKeyFromPrivate } = require("@klaytn/web3js-ext");
const { Web3 } = require("web3");

// Using senderPriv == senderNewPriv to execute this example repeatedly.
// But you should use AccountKeyPublic to register a different private key.
const senderAddr = "0xfb60ded0ae96fe04eed6450aead860aa9d57128e";
const senderPriv = "0x0e4ca6d38096ad99324de0dde108587e5d7c600165ae4cd6c2462c597458c2b8";
const senderNewPriv = "0x0e4ca6d38096ad99324de0dde108587e5d7c600165ae4cd6c2462c597458c2b8";
const receiverAddr = "0xc40b6909eb7085590e1c26cb3becc25368e249e9";

const provider = new Web3.providers.HttpProvider("https://public-en-baobab.klaytn.net");
const web3 = new KlaytnWeb3(provider);
const senderAccount = web3.eth.accounts.privateKeyToAccount(senderPriv);
const senderNewAccount = web3.eth.accounts.privateKeyToAccount(senderPriv);

async function updateAccount() {
  const senderNewPub = getPublicKeyFromPrivate(senderNewPriv);
  console.log({ senderNewPub });

  const tx = {
    type: TxType.AccountUpdate,
    from: senderAddr,
    key: {
      type: AccountKeyType.Public,
      key: senderNewPub,
    }
  };

  const signResult = await senderAccount.signTransaction(tx);
  console.log("rawTx", signResult.rawTransaction);

  const receipt = await web3.eth.sendSignedTransaction(signResult.rawTransaction);
  console.log("receipt", receipt);
}

async function sendTx() {
  let tx = {
    type: TxType.ValueTransfer,
    to: receiverAddr,
    value: toPeb("0.01", "KLAY"),
    from: senderAddr,
  };

  const signResult = await senderNewAccount.signTransaction(tx);
  console.log("rawTx", signResult.rawTransaction);

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
  console.log("recoveredAddr lib", addr1, addr1.toLowerCase() === senderAccount.address.toLowerCase());

  const sig = signResult.signature;
  const addr2 = await web3.klay.recoverFromMessage(senderAddr, msghex, sig, "latest");
  console.log("recoveredAddr rpc", addr2, addr2.toLowerCase() === senderAccount.address.toLowerCase());
}

async function main() {
  await updateAccount();
  await sendTx();
  await recoverMsg();
}
main().catch(console.error);
