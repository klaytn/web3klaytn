const { Web3 } = require("web3");
const { KlaytnWeb3 } = require( "../../dist/src");

const { TxType } = require("@klaytn/ethers-ext");

const { secp256k1 } = require("ethereum-cryptography/secp256k1.js")
//
// TxTypeAccountUpdate
// https://docs.klaytn.foundation/content/klaytn/design/transactions/basic#txtypeaccountupdate
//
//   from: address of sender to be updated
//   key: Refer Klaytn account key
//        https://docs.klaytn.foundation/content/klaytn/design/accounts#account-key
//

// create new account for testing
// https://baobab.wallet.klaytn.foundation/
const senderAddr = "0x7532967dda17c5e367c7a5c5dcb56ef6ed299e20";
const senderPriv = "0x4ef44daeb7941877bebc7b97c023e1e51b5593ee1fbc4a232387774603173b86";
const senderNewPriv = "0x0e4ca6d38096ad99324de0dde108587e5d7c600165ae4cd6c2462c597458c2b8";

async function main() {
  const provider = new Web3.providers.HttpProvider("https://public-en-baobab.klaytn.net");
  const web3 = new KlaytnWeb3(provider);

  const sender = web3.eth.accounts.privateKeyToAccount(senderPriv);

  const publicKey = "0x" + Buffer.from(secp256k1.getPublicKey( BigInt(senderNewPriv), true)).toString('hex')
  console.log(publicKey);

  let tx = {
    type: TxType.AccountUpdate,
    from: senderAddr,
    key: {
      type: 0x02,
      key: publicKey,
    }
  };

  let signResult = await web3.eth.accounts.signTransaction(tx, sender.privateKey);
  console.log({ signResult });

  let sendResult = await web3.eth.sendSignedTransaction(signResult.rawTransaction);
  let txhash = sendResult.transactionHash;

  let receipt = await web3.eth.getTransactionReceipt(txhash);
  console.log({ receipt });
}

main();
