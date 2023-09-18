const ethers = require("ethers");

// const { Wallet, parseKlay } = require("@klaytn/ethers-ext");
const { Wallet} = require("../../dist/src");

async function main() {
  const provider = new ethers.providers.JsonRpcProvider("https://public-en-baobab.klaytn.net");
  const wallet = new Wallet(
    // multisig account address
    "0x82c6a8d94993d49cfd0c1d30f0f8caa65782cc7e",
    // a member key of multisig account
    "0xc9668ccd35fc20587aa37a48838b48ccc13cf14dd74c8999dd6a480212d5f7ac",
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