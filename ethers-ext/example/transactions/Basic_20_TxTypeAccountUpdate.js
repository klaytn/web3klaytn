// TxTypeAccountUpdate
// https://docs.klaytn.foundation/content/klaytn/design/transactions/basic#txtypeaccountupdate
//
//   key: Refer Klaytn account key
//        https://docs.klaytn.foundation/content/klaytn/design/accounts#account-key

const { Wallet, TxType, AccountKeyType } = require("@klaytn/ethers-ext");
const ethers = require("ethers");

// create new account for testing in https://baobab.wallet.klaytn.foundation/
const senderAddr = "0xe15cd70a41dfb05e7214004d7d054801b2a2f06b";
const senderPriv = "0x0e4ca6d38096ad99324de0dde108587e5d7c600165ae4cd6c2462c597458c2b8";
const senderNewPriv = "0x0e4ca6d38096ad99324de0dde108587e5d7c600165ae4cd6c2462c597458c2b8";

async function main() {
  const provider = new ethers.providers.JsonRpcProvider("https://public-en-baobab.klaytn.net");
  const wallet = new Wallet(senderAddr, senderPriv, provider);

  let tx = {
    type: TxType.AccountUpdate,
    from: senderAddr,
    key: {
      type: AccountKeyType.Public,
      key: ethers.utils.computePublicKey(senderNewPriv, true),
    }
  };

  const sentTx = await wallet.sendTransaction(tx);
  console.log("sentTx", sentTx);

  const rc = await sentTx.wait();
  console.log("receipt", rc);
}

main();
