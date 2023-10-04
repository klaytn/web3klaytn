const ethers = require("ethers");

// const { Wallet, parseKlay } = require("@klaytn/ethers-ext");
const { Wallet, parseKlay } = require("../../dist/src");

const senderPriv = "0x0e4ca6d38096ad99324de0dde108587e5d7c600165ae4cd6c2462c597458c2b8";

async function main() {
  const provider = new ethers.providers.JsonRpcProvider("https://public-en-baobab.klaytn.net");
  const wallet = new Wallet(senderPriv, provider);

  const receiverAddr = wallet.address;
  const senderAddr = wallet.address;

  let tx = {
    from: senderAddr,
    to: receiverAddr,
    value: parseKlay("1"),
  };

  // sign
  const popedTx = await wallet.populateTransaction(tx);
  const txHashRLP = await wallet.signTransaction(popedTx);
  let txObj = ethers.utils.parseTransaction(txHashRLP);
  console.log(txHashRLP);
  console.log(txObj);

  // verify
  const rawTx = ethers.utils.serializeTransaction(popedTx);
  const msgHash = ethers.utils.keccak256(rawTx);
  const msgBytes = ethers.utils.arrayify(msgHash);

  const expandedSig = {
    r: txObj.r,
    s: txObj.s,
    recoveryParam: 0,
    v: txObj.v
  };
  const signature = ethers.utils.joinSignature(expandedSig);

  const recoverAddr = ethers.utils.recoverAddress(msgBytes, signature);
  console.log("\nsender", senderAddr, "\nrecovered", recoverAddr);
}

main();