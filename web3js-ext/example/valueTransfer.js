const { Web3 } = require("web3");
const { KlaytnWeb3 } = require( "../dist/src");

const priv = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
const addr = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
const to = "0x70997970c51812dc3a010c7d01b50e0d17dc79c8";
const url = "http://localhost:8545";

async function main() {
  let provider = new Web3.providers.HttpProvider(url);

  // let web3 = new Web3(addr);
  let web3 = new KlaytnWeb3(provider);

  let sender = web3.eth.accounts.privateKeyToAccount(priv);
  console.log({ sender });

  let tx = {
    from: sender.address,
    to: to,
    value: 1e9,
    // nonce: await web3.eth.getTransactionCount(addr),
    // gas: 21000,
    gasPrice: 25e9,
    // type: 8,
  };

  let signResult = await web3.eth.accounts.signTransaction(tx, sender.privateKey);
  console.log({ signResult });

  let sendResult = await web3.eth.sendSignedTransaction(signResult.rawTransaction);
  console.log({ txid: sendResult.transactionHash });

  let receipt = await web3.eth.getTransactionReceipt(sendResult.transactionHash);
  console.log({ receipt });
}

main().catch(console.err);
