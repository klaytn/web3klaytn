const { Web3 } = require("web3");
const { KlaytnWeb3 } = require( "../../dist/src");

const { TxType, AccountKeyType, objectFromRLP } = require("../../../ethers-ext/dist/src");

const { secp256k1 } = require("ethereum-cryptography/secp256k1.js")

//
// TxTypeFeeDelegatedAccountUpdate
// https://docs.klaytn.foundation/content/klaytn/design/transactions/fee-delegation#txtypefeedelegatedaccountupdate
//

// create new account for testing
// https://baobab.wallet.klaytn.foundation/
const senderAddr = "0x9b0d00d5ffcc2024f1816feb99522d8c0e519170";
const senderPriv = "0xc7fd5cceea90867c80193d9cfbd2b8b5dc0f4b794c5dd2413d569e332b0ae4c7";
const senderNewPriv = "0x0e4ca6d38096ad99324de0dde108587e5d7c600165ae4cd6c2462c597458c2b8";
const feePayerAddr = "0xcb0eb737dfda52756495a5e08a9b37aab3b271da";
const feePayerPriv = "0x9435261ed483b6efa3886d6ad9f64c12078a0e28d8d80715c773e16fc000cff4";


async function main() {
  const provider = new Web3.providers.HttpProvider("https://public-en-baobab.klaytn.net");
  const web3 = new KlaytnWeb3(provider);

  const publicKey = "0x" + Buffer.from(secp256k1.getPublicKey( BigInt(senderNewPriv), true)).toString('hex')
  console.log(publicKey);

  let tx = {
    type: TxType.FeeDelegatedAccountUpdate,
    from: senderAddr,
    key: {
      type: AccountKeyType.Public,
      key: publicKey
    }
  };

  // sender
  const sender = web3.eth.accounts.privateKeyToAccount(senderPriv);
  let senderTx = await web3.eth.accounts.signTransaction(tx, sender.privateKey);
  console.log(senderTx);

  // tx = objectFromRLP(senderTx.rawTransaction);
  // console.log(tx);

  // fee payer
  const feePayer = web3.eth.accounts.privateKeyToAccount(feePayerPriv, provider);
  let signResult = await web3.eth.accounts.signTransactionAsFeePayer(senderTx.rawTransaction, feePayer.privateKey);
  console.log(signResult);

  // tx = objectFromRLP(signResult.rawTransaction);
  // console.log(tx);

  let sendResult = await web3.eth.sendSignedTransaction(signResult.rawTransaction);
  let txhash = sendResult.transactionHash;

  let receipt = await web3.eth.getTransactionReceipt(txhash);
  console.log({ receipt });
}

main();
