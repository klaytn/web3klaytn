const ethers = require("ethers");

// const { Wallet, parseKlay } = require("@klaytn/ethers-ext");
const { Wallet} = require("../../dist/src");

async function main() {
  const provider = new ethers.providers.JsonRpcProvider("https://public-en-baobab.klaytn.net");
  const wallet = new Wallet(
    "0xe15cd70a41dfb05e7214004d7d054801b2a2f06b",
    "0x0e4ca6d38096ad99324de0dde108587e5d7c600165ae4cd6c2462c597458c2b8",
    provider);

  const address = wallet.address;
  let msg = "I♥KLAYTN";
  let msgHash = ethers.utils.hashMessage(msg);
  let msgHashBytes = ethers.utils.arrayify(msgHash);
  const signature = await wallet.signMessage(msgHashBytes);

  const recoverAddr = await provider.send("klay_recoverFromMessage", [address, msgHash, signature, "latest"]);
  console.log("\nsender", address, "\nrecovered", recoverAddr);
}

main();