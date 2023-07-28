const ethers = require("ethers");
const { Wallet, TxType, AccountKeyType } = require("@klaytn/ethers-ext");

//
// AccountKeyWeightedMultiSig Step 01 - account update
// https://docs.klaytn.foundation/content/klaytn/design/accounts#accountkeyweightedmultisig
//
//   gasLimit: Must be large enough
//
//   create a new account for testing
//   https://baobab.wallet.klaytn.foundation/
//
const senderAddr = "0x82c6a8d94993d49cfd0c1d30f0f8caa65782cc7e"
const senderPriv = "0xa32c30608667d43be2d652bede413f12a649dd1be93440878e7f712d51a6768a"
const senderNewPriv1 = "0xa32c30608667d43be2d652bede413f12a649dd1be93440878e7f712d51a6768a"
const senderNewPriv2 = "0x0e4ca6d38096ad99324de0dde108587e5d7c600165ae4cd6c2462c597458c2b8"
const senderNewPriv3 = "0xc9668ccd35fc20587aa37a48838b48ccc13cf14dd74c8999dd6a480212d5f7ac"

async function main() {
  const provider = new ethers.providers.JsonRpcProvider("https://public-en-baobab.klaytn.net");
  const wallet = new Wallet(senderPriv, provider);

  let senderNewPub1 = new ethers.utils.SigningKey(senderNewPriv1).compressedPublicKey;
  let senderNewPub2 = new ethers.utils.SigningKey(senderNewPriv2).compressedPublicKey;
  let senderNewPub3 = new ethers.utils.SigningKey(senderNewPriv3).compressedPublicKey;

  let tx = {
    type: TxType.AccountUpdate,
    from: senderAddr,
    gasLimit: 100000,
    key: {
      type: AccountKeyType.WeightedMultiSig,
      keys: [
        2, // threshold
        [
          [1, senderNewPub1],
          [1, senderNewPub2],
          [1, senderNewPub3]
        ]
      ]
    }
  };

  let sentTx = await wallet.sendTransaction(tx);
  console.log("sentTx", sentTx);

  let rc = await sentTx.wait();
  console.log("receipt", rc);
}

main();
