const ethers = require("ethers");

// const { Wallet, parseKlay } = require("@klaytn/ethers-ext");
const { Wallet} = require("../../dist/src");

// multisig account address
const address = "0x82c6a8d94993d49cfd0c1d30f0f8caa65782cc7e";
// a member private key of multisig account
const priv = "0xc9668ccd35fc20587aa37a48838b48ccc13cf14dd74c8999dd6a480212d5f7ac";

async function main() {
  const provider = new ethers.providers.JsonRpcProvider("https://public-en-baobab.klaytn.net");
  const wallet = new Wallet(address, priv, provider);

  let msg = "I♥KLAYTN";
  let msgHash = ethers.utils.hashMessage(msg);
  let msgHashBytes = ethers.utils.arrayify(msgHash);
  const signature = await wallet.signMessage(msgHashBytes);

  const recoverAddr = await provider.send("klay_recoverFromMessage", [address, msgHash, signature, "latest"]);
  console.log("\nsender", address, "\nrecovered", recoverAddr);
  console.log("private key's legacy type address", await wallet.getEtherAddress());
}

main();