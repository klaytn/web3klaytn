// AccountKeyPublic Step 01 - account update
// https://docs.klaytn.foundation/content/klaytn/design/accounts#accountkeypublic

const { Web3 } = require("web3");
const { KlaytnWeb3, TxType, AccountKeyType } = require( "@klaytn/web3js-ext");
const { secp256k1 } = require("ethereum-cryptography/secp256k1.js")

// create a new account for testing
// https://baobab.wallet.klaytn.foundation/
const senderAddr = "0xfb60ded0ae96fe04eed6450aead860aa9d57128e";
const senderPriv = "0x0e4ca6d38096ad99324de0dde108587e5d7c600165ae4cd6c2462c597458c2b8";
const senderNewPriv = "0x0e4ca6d38096ad99324de0dde108587e5d7c600165ae4cd6c2462c597458c2b8";

async function main() {
  const provider = new Web3.providers.HttpProvider("https://public-en-baobab.klaytn.net");
  const web3 = new KlaytnWeb3(provider);

  let senderNewPub =  "0x" + Buffer.from(secp256k1.getPublicKey( BigInt(senderNewPriv), true)).toString('hex');

  let tx = {
    type: TxType.AccountUpdate,
    from: senderAddr,
    key: {
      type: AccountKeyType.Public,
      key: senderNewPub,
    }
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
