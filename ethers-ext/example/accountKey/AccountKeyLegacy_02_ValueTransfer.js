const ethers = require("ethers");
const { Wallet } = require("../../dist/src/ethers"); // require("@klaytn/sdk-ethers");

//
// AccountKeyPublic Step 02 - value transfer
// https://docs.klaytn.foundation/content/klaytn/design/accounts#accountkeylegacy
// 

const sender_addr = '0xa2a8854b1802d8cd5de631e690817c253d6a9153' 
const sender_priv = '0x0e4ca6d38096ad99324de0dde108587e5d7c600165ae4cd6c2462c597458c2b8' 
const reciever_addr = '0xc40b6909eb7085590e1c26cb3becc25368e249e9' 

async function main() {
  const provider = new ethers.providers.JsonRpcProvider('https://public-en-baobab.klaytn.net')
  const wallet = new Wallet(sender_priv, provider);

  let tx = {
      to: reciever_addr,
      value: 100000000000,
      from: sender_addr,
    }; 
  
  const ptx = await wallet.populateTransaction(tx);
  const signTx = await wallet.signTransaction(ptx);
  console.log('signTx', signTx);
  
  const inner_rlp = "0x" + String(signTx).substring(4);
  const tx_decoded = ethers.utils.RLP.decode(inner_rlp);
  console.log(tx_decoded);

  const txhash = await provider.send("eth_sendRawTransaction", [signTx]);
  console.log('txhash', txhash);

  const rc = await provider.waitForTransaction(txhash);
  console.log('receipt', rc);
}

main();