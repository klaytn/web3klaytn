const ethers = require("ethers");

// const { Wallet, parseKlay } = require("@klaytn/ethers-ext");
const { Wallet, parseKlay, TxType } = require("../../dist/src");


const receiverAddr = "0x5bd2fb3c21564c023a4a735935a2b7a238c4ccea";
const senderAddr = "0x5bd2fb3c21564c023a4a735935a2b7a238c4ccea";


async function main() {
  const provider = new ethers.providers.JsonRpcProvider("https://public-en-baobab.klaytn.net");

  let user = new Wallet(
    "0x5bd2fb3c21564c023a4a735935a2b7a238c4ccea",
    "0xc9668ccd35fc20587aa37a48838b48ccc13cf14dd74c8999dd6a480212d5f7ac",
    provider
  );

  let tx = {
    type: TxType.ValueTransfer,
    from: senderAddr,
    to: receiverAddr,
    value: parseKlay("1"),
  };

  tx = await user.populateTransaction(tx);
  const senderTxHashRLP = await user.signTransaction(tx);

  console.log(senderTxHashRLP);
  console.log(user.decodeTxFromRLP(senderTxHashRLP));

  const recoverAddr = await provider.send("klay_recoverFromTransaction", [senderTxHashRLP, "latest"]);
  console.log("\nsender", senderAddr, "\nrecovered", recoverAddr);
}

main();