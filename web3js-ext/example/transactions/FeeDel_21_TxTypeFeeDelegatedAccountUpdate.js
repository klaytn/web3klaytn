// TxTypeFeeDelegatedAccountUpdate
// https://docs.klaytn.foundation/content/klaytn/design/transactions/fee-delegation#txtypefeedelegatedaccountupdate

const { Web3 } = require("web3");
const { KlaytnWeb3, TxType, AccountKeyType, parseTransaction } = require("../../dist/web3");
const { secp256k1 } = require("ethereum-cryptography/secp256k1.js")

// create new account for testing in https://baobab.wallet.klaytn.foundation/
const senderAddr = "0x30908464d76604420162a6c880c0e1c7e641bad7";
const senderPriv = "0xf8cc7c3813ad23817466b1802ee805ee417001fcce9376ab8728c92dd8ea0a6b";
const senderNewPriv = "0xf8cc7c3813ad23817466b1802ee805ee417001fcce9376ab8728c92dd8ea0a6b";
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

  // tx = parseTransaction(senderTx.rawTransaction);
  // console.log(tx);

  // fee payer
  const feePayer = web3.eth.accounts.privateKeyToAccount(feePayerPriv, provider);
  let signResult = await web3.eth.accounts.signTransactionAsFeePayer(senderTx.rawTransaction, feePayer.privateKey);
  console.log(signResult);

  // tx = parseTransaction(signResult.rawTransaction);
  // console.log(tx);

  let sendResult = await web3.eth.sendSignedTransaction(signResult.rawTransaction);
  let txhash = sendResult.transactionHash;

  let receipt = await web3.eth.getTransactionReceipt(txhash);
  console.log({ receipt });
}

main();
