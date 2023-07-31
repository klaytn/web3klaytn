const { Wallet, TxType, AccountKeyType } = require("@klaytn/ethers-ext");
const ethers = require("ethers");

//
// AccountKeyPublic Step 01 - account update
// https://docs.klaytn.foundation/content/klaytn/design/accounts#accountkeypublic
//

// create a new account for testing
// https://baobab.wallet.klaytn.foundation/
const senderAddr = "0xe15cd70a41dfb05e7214004d7d054801b2a2f06b";
const senderPriv = "0xc9668ccd35fc20587aa37a48838b48ccc13cf14dd74c8999dd6a480212d5f7ac";
const senderNewPriv = "0x0e4ca6d38096ad99324de0dde108587e5d7c600165ae4cd6c2462c597458c2b8";

async function main() {
  const provider = new ethers.providers.JsonRpcProvider("https://public-en-baobab.klaytn.net");
  const wallet = new Wallet(senderPriv, provider);

  let senderNewPub = new ethers.utils.SigningKey(senderNewPriv).compressedPublicKey;

  let tx = {
    type: TxType.AccountUpdate,
    from: senderAddr,
    key: {
      type: AccountKeyType.Public,
      key: senderNewPub,
    }
  };

  let sentTx = await wallet.sendTransaction(tx);
  console.log("sentTx", sentTx);

  let rc = await sentTx.wait();
  console.log("receipt", rc);
}

main();
