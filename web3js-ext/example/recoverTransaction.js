const { Web3 } = require("web3");
const { KlaytnWeb3 } = require( "../dist/src");

const { TxType, parseKlay } = require("@klaytn/ethers-ext");


const senderPriv = "0x0e4ca6d38096ad99324de0dde108587e5d7c600165ae4cd6c2462c597458c2b8";


async function main() {
  let provider = new Web3.providers.HttpProvider("https://public-en-baobab.klaytn.net");
  let web3 = new KlaytnWeb3(provider);

  // ethereum's rawTransaction 
  const rawTransaction = '0xf869808504e3b29200831e848094f0109fc8df283027b6285cc889f5aa624eac1f55843b9aca008025a0c9cf86333bcb065d140032ecaab5d9281bde80f21b9687b3e94161de42d51895a0727a108a0b8d101465414033c3f705a9c7b826e596766046ee1183dbc8aeaa68';
  let address = await web3.eth.accounts.recoverTransaction(rawTransaction);
  console.log("\nsender", "0x2c7536E3605D9C16a7a3D7b1898e529396a65c23");
  console.log("\nrecovered", address);

  // Klaytn's rawTransaction 
  const account = await web3.eth.accounts.privateKeyToAccount(senderPriv); 
  const receiverAddr = account.address;
  const senderAddr = account.address;

  let tx = {
    type: TxType.ValueTransfer,
    to: receiverAddr,
    value: 1e9,
    // value: convertToPeb('1', 'KLAY'),
    from: senderAddr,
    gas: 21000,
    gasPrice: 25e9,
  };

  let signResult = await web3.eth.accounts.signTransaction(tx, account.privateKey);
  console.log({ signResult });

  address = await web3.eth.accounts.recoverTransaction(signResult.rawTransaction);
  console.log("\nsender", senderAddr);
  console.log("\nrecovered", address);

}

main().catch(console.err);
