// AccountKeyPublic Step 01 - value transfer
// https://docs.klaytn.foundation/content/klaytn/design/accounts#accountkeylegacy

const { Web3 } = require("web3");
const { KlaytnWeb3, toPeb } = require( "../../dist/web3");

const senderAddr = "0x24e8efd18d65bcb6b3ba15a4698c0b0d69d13ff7";
const senderPriv = "0x4a72b3d09c3d5e28e8652e0111f9c4ce252e8299aad95bb219a38eb0a3f4da49";
const receiverAddr = "0xc40b6909eb7085590e1c26cb3becc25368e249e9";

async function main() {
  const provider = new Web3.providers.HttpProvider("https://public-en-baobab.klaytn.net");
  const web3 = new KlaytnWeb3(provider);

  let tx = {
    to: receiverAddr,
    value: toPeb('0.01', 'KLAY'),
    from: senderAddr,
  };

  const senderAccount = web3.eth.accounts.privateKeyToAccount(senderPriv);

  const senderTx = await web3.eth.accounts.signTransaction(tx, senderAccount.privateKey);
  console.log(senderTx);

  const sendResult = await web3.eth.sendSignedTransaction(senderTx.rawTransaction);
  console.log(sendResult);

  const receipt = await web3.eth.getTransactionReceipt(sendResult.transactionHash);
  console.log({ receipt });
}

main();