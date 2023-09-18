const ethers = require("ethers");

// const { Wallet, parseKlay } = require("@klaytn/ethers-ext");
const { Wallet, parseKlay } = require("../../dist/src");

const recieverAddr = "0xc40b6909eb7085590e1c26cb3becc25368e249e9";
// const senderAddr = "0xa2a8854b1802d8cd5de631e690817c253d6a9153";
const senderAddr = "0x3208ca99480f82bfe240ca6bc06110cd12bb6366";
// const senderPriv = "0x0e4ca6d38096ad99324de0dde108587e5d7c600165ae4cd6c2462c597458c2b8";
const senderPriv = "0xb3cf575dea0081563fe5482de2fe4425e025502b1f4ae7e02b2540ac0a5beda1";

async function main() {
  const provider = new ethers.providers.JsonRpcProvider("https://public-en-baobab.klaytn.net");
  //   const provider = new ethers.providers.JsonRpcProvider("http://localhost:8551");
  const wallet = new Wallet(senderPriv, provider);

  let tx = {
    from: senderAddr,
    to: recieverAddr,
    value: 1e12,
  };

  tx = await wallet.populateTransaction(tx);
  const senderTxHashRLP = await wallet.signTransaction(tx);
  console.log(senderTxHashRLP);

  console.log(wallet.decodeTxFromRLP(senderTxHashRLP));

  //   const test = await provider.send("klay_blockNumber", []);
  //   console.log("test:", test);

  //   const recoverAddr = await provider.send("klay_recoverFromTransaction", ["0x08f88608850ba43b7400827b0c94c40b6909eb7085590e1c26cb3becc25368e249e9880de0b6b3a764000094e15cd70a41dfb05e7214004d7d054801b2a2f06bf847f845820fe9a090421871e8fd77e08b6a72760006a15184a96cfc39c7486ea948d11fd830ae8aa05876248aa8dc0783d782e584e6f8d9bf977c698210a0eab3e754192d0954de65", "latest"]);
  //   console.log("\nrecovered", recoverAddr);
  const recoverAddr = await provider.send("klay_recoverFromTransaction", [senderTxHashRLP, "latest"]);
  console.log("\nsender", senderAddr, "\nrecovered", recoverAddr);
}

main();