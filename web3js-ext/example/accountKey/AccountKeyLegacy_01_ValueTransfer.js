const { Web3 } = require("web3");
const { KlaytnWeb3 } = require( "../../dist/src");

const { TxType, AccountKeyType, objectFromRLP } = require("../../../ethers-ext/dist/src");

//
// AccountKeyPublic Step 01 - value transfer
// https://docs.klaytn.foundation/content/klaytn/design/accounts#accountkeylegacy
//

const senderAddr = "0xfb60ded0ae96fe04eed6450aead860aa9d57128e";
const senderPriv = "0x59f9dd78ae367feb962874345d95f7a0642920059453e74cd707bf1f4fc59e01";
const receiverAddr = "0xc40b6909eb7085590e1c26cb3becc25368e249e9";

async function main() {
  const provider = new Web3.providers.HttpProvider("https://public-en-baobab.klaytn.net");
  const web3 = new KlaytnWeb3(provider);

  let tx = {
    to: receiverAddr,
    value: 1e9,
    // value: convertToPeb('1', 'KLAY'),
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