// TxTypeAccountUpdate
// https://docs.klaytn.foundation/content/klaytn/design/transactions/basic#txtypeaccountupdate
//
//   from: address of sender to be updated
//   key: Refer Klaytn account key
//        https://docs.klaytn.foundation/content/klaytn/design/accounts#account-key

const { KlaytnWeb3, TxType, AccountKeyType } = require("@klaytn/web3js-ext");
const { secp256k1 } = require("ethereum-cryptography/secp256k1.js");
const { Web3 } = require("web3");

// create new account for testing
// https://baobab.wallet.klaytn.foundation/
const senderAddr = "0xe15cd70a41dfb05e7214004d7d054801b2a2f06b";
const senderPriv = "0x0e4ca6d38096ad99324de0dde108587e5d7c600165ae4cd6c2462c597458c2b8";
const senderNewPriv = "0x0e4ca6d38096ad99324de0dde108587e5d7c600165ae4cd6c2462c597458c2b8";

async function main() {
  const provider = new Web3.providers.HttpProvider("https://public-en-baobab.klaytn.net");
  const web3 = new KlaytnWeb3(provider);

  const publicKey = "0x" + Buffer.from(secp256k1.getPublicKey(BigInt(senderNewPriv), true)).toString("hex");
  console.log(publicKey);

  let tx = {
    type: TxType.AccountUpdate,
    from: senderAddr,
    key: {
      type: AccountKeyType.Public,
      key: publicKey,
    }
  };

  const sender = web3.eth.accounts.privateKeyToAccount(senderPriv);
  let signResult = await web3.eth.accounts.signTransaction(tx, sender.privateKey);
  console.log({ signResult });

  let sendResult = await web3.eth.sendSignedTransaction(signResult.rawTransaction);
  let txhash = sendResult.transactionHash;

  let receipt = await web3.eth.getTransactionReceipt(txhash);
  console.log({ receipt });
}

main();
