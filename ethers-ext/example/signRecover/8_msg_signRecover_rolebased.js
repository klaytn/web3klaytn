const ethers = require("ethers");

// const { Wallet, parseKlay } = require("@klaytn/ethers-ext");
const { Wallet} = require("../../dist/src");

async function main() {
  const provider = new ethers.providers.JsonRpcProvider("https://public-en-baobab.klaytn.net");
  const wallet = new Wallet(
    // role-based account address
    "0x5bd2fb3c21564c023a4a735935a2b7a238c4ccea",
    // transaction role key of role-based account
    "0xc9668ccd35fc20587aa37a48838b48ccc13cf14dd74c8999dd6a480212d5f7ac",
    provider);


  const address = wallet.address;
  let msg = "I♥KLAYTN";
  let msgHash = ethers.utils.hashMessage(msg);
  let msgHashBytes = ethers.utils.arrayify(msgHash);
  const signature = await wallet.signMessage(msgHashBytes);

  //   const address = "0xA2a8854b1802D8Cd5De631E690817c253d6a9153";
  //   const message = "0xdeadbeef";
  //   const signature = "0x1e6338d6e4a8d688a25de78cf2a92efec9a92e52eb8425acaaee8c3957e68cdb3f91bdc483f0ed05a0da26eca3be4c566d087d90dc2ca293be23b2a9de0bcafc1c";

  const recoverAddr = await provider.send("klay_recoverFromMessage", [address, msgHash, signature, "latest"]);
  console.log("\nsender", address, "\nrecovered", recoverAddr);
}

main();