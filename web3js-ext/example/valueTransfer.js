const { Web3 } = require("web3");
const { KlaytnWeb3 } = require( "../dist/src");

const priv = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
const addr = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
const to = "0x70997970c51812dc3a010c7d01b50e0d17dc79c8";
const url = "http://localhost:8545";
const contractAddr = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
const data_increment = "0xd09de08a"; // Counter.sol:increment()

async function main() {
  let provider = new Web3.providers.HttpProvider(url);

  // let web3 = new Web3(addr);
  let web3 = new KlaytnWeb3(provider);

  let sender = web3.eth.accounts.privateKeyToAccount(priv);
  console.log({ sender });

  /*
  let tx = {
    from: sender.address,
    to: to,
    value: 1e9,
    // nonce: await web3.eth.getTransactionCount(addr),
    // gas: 21000,
    // gasPrice: 25e9,
    type: 0x08,
  };
  /*/
  let tx = {
    from: sender.address,
    to: contractAddr,
    value: 0,
    nonce: await web3.eth.getTransactionCount(addr),
    gas: 100_000,
    gasPrice: 25e9,
    data: data_increment,
    data: "0xdeadbeef", // trigger error
    type: 0x30,
  }
  //*/

  let signResult = await web3.eth.accounts.signTransaction(tx, sender.privateKey);
  console.log({ signResult });

  let sendResult = await web3.eth.sendSignedTransaction(signResult.rawTransaction);
  let txhash = sendResult.transactionHash;

  let receipt = await web3.eth.getTransactionReceipt(txhash);
  console.log({ receipt });
}

main().catch(console.err);
