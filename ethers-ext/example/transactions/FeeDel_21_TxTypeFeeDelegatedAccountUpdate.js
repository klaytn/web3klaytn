// TxTypeFeeDelegatedAccountUpdate
// https://docs.klaytn.foundation/content/klaytn/design/transactions/fee-delegation#txtypefeedelegatedaccountupdate

const { Wallet, TxType, AccountKeyType } = require("@klaytn/ethers-ext");
const ethers = require("ethers");

// create new account for testing in https://baobab.wallet.klaytn.foundation/
const senderAddr = "0x30908464d76604420162a6c880c0e1c7e641bad7";
const senderPriv = "0xf8cc7c3813ad23817466b1802ee805ee417001fcce9376ab8728c92dd8ea0a6b";
const senderNewPriv = "0xf8cc7c3813ad23817466b1802ee805ee417001fcce9376ab8728c92dd8ea0a6b";
const feePayerAddr = "0xcb0eb737dfda52756495a5e08a9b37aab3b271da";
const feePayerPriv = "0x9435261ed483b6efa3886d6ad9f64c12078a0e28d8d80715c773e16fc000cff4";

async function main() {
  const provider = new ethers.providers.JsonRpcProvider("https://public-en-baobab.klaytn.net");
  const senderWallet = new Wallet(senderAddr, senderPriv, provider);
  const feePayerWallet = new Wallet(feePayerPriv, provider);

  let tx = {
    type: TxType.FeeDelegatedAccountUpdate,
    from: senderAddr,
    key: {
      type: AccountKeyType.Public,
      key: ethers.utils.computePublicKey(senderNewPriv, true)
    }
  };

  tx = await senderWallet.populateTransaction(tx);
  console.log(tx);

  const senderTxHashRLP = await senderWallet.signTransaction(tx);
  console.log("senderTxHashRLP", senderTxHashRLP);

  const sentTx = await feePayerWallet.sendTransactionAsFeePayer(senderTxHashRLP);
  console.log("sentTx", sentTx);

  const rc = await sentTx.wait();
  console.log("receipt", rc);
}

main();
