// AccountKeyWeightedMultiSig Step 01 - account update
// https://docs.klaytn.foundation/content/klaytn/design/accounts#accountkeyweightedmultisig
//
//   gasLimit: Must be large enough

const { KlaytnWeb3, TxType, AccountKeyType } = require("@klaytn/web3js-ext");
const { secp256k1 } = require("ethereum-cryptography/secp256k1.js");
const { Web3 } = require("web3");

//   create a new account for testing
//   https://baobab.wallet.klaytn.foundation/
const senderAddr = "0x2bf611d14d330fd3688d10f2201321eacc8aa2ce";
const senderPriv = "0x31fadf868e68fd2e3f7a1c528023c9a86a45db850e9d6b82c1a82d4c75b469d1";
const senderNewPriv1 = "0xa32c30608667d43be2d652bede413f12a649dd1be93440878e7f712d51a6768a";
const senderNewPriv2 = "0x0e4ca6d38096ad99324de0dde108587e5d7c600165ae4cd6c2462c597458c2b8";
const senderNewPriv3 = "0xc9668ccd35fc20587aa37a48838b48ccc13cf14dd74c8999dd6a480212d5f7ac";

async function main() {
  const provider = new Web3.providers.HttpProvider("https://public-en-baobab.klaytn.net");
  const web3 = new KlaytnWeb3(provider);

  const senderNewPub1 = "0x" + Buffer.from(secp256k1.getPublicKey(BigInt(senderNewPriv1), true)).toString("hex");
  const senderNewPub2 = "0x" + Buffer.from(secp256k1.getPublicKey(BigInt(senderNewPriv2), true)).toString("hex");
  const senderNewPub3 = "0x" + Buffer.from(secp256k1.getPublicKey(BigInt(senderNewPriv3), true)).toString("hex");

  let tx = {
    type: TxType.AccountUpdate,
    from: senderAddr,
    gasLimit: 100000,
    key: {
      type: AccountKeyType.WeightedMultiSig,
      threshold: 2,
      keys: [
        [1, senderNewPub1],
        [1, senderNewPub2],
        [1, senderNewPub3]
      ]
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
