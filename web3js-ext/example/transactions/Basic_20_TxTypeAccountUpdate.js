// TxTypeAccountUpdate
// https://docs.klaytn.foundation/content/klaytn/design/transactions/basic#txtypeaccountupdate
//
// - from: address of sender to be updated
// - key: Klaytn account key. See example/accountKey/*.js and Klaytn Docs
//   https://docs.klaytn.foundation/content/klaytn/design/accounts#account-key

const { KlaytnWeb3, TxType, AccountKeyType, getPublicKeyFromPrivate } = require("@klaytn/web3js-ext");
const { Web3 } = require("web3");

// Using senderPriv == senderNewPriv to execute this example repeatedly.
// But you might want to register a different private key.
const senderAddr = "0xe15cd70a41dfb05e7214004d7d054801b2a2f06b";
const senderPriv = "0x0e4ca6d38096ad99324de0dde108587e5d7c600165ae4cd6c2462c597458c2b8";
const senderNewPriv = "0x0e4ca6d38096ad99324de0dde108587e5d7c600165ae4cd6c2462c597458c2b8";

async function main() {
  const provider = new Web3.providers.HttpProvider("https://public-en-baobab.klaytn.net");
  const web3 = new KlaytnWeb3(provider);
  const senderAccount = web3.eth.accounts.privateKeyToAccount(senderPriv);

  const publicKey = getPublicKeyFromPrivate(senderNewPriv);
  console.log({ publicKey });

  const tx = {
    type: TxType.AccountUpdate,
    from: senderAddr,
    key: {
      type: AccountKeyType.Public,
      key: publicKey,
    }
  };

  const signResult = await senderAccount.signTransaction(tx);
  console.log("rawTx", signResult.rawTransaction);

  const receipt = await web3.eth.sendSignedTransaction(signResult.rawTransaction);
  console.log("receipt", receipt);
}

main();
