// TxTypeFeeDelegatedAccountUpdateWithRatio
// https://docs.klaytn.foundation/content/klaytn/design/transactions/partial-fee-delegation#txtypefeedelegatedaccountupdatewithratio
//
//   nonce: In signTransactionAsFeePayer, must not be omitted, because feePayer's nonce is filled when populating
//   gasLimit: Must be large enough
//             If SDK users (wallet or dapp devs) want to add some margin, they can always
//               1) As in this example, fill in enough values by referring to the results of your previous transactions.
//               2) Manually call eth_estimateGas or klay_estimateGas and multiply by a factor.
//                  Edit the populatedTx (e.g. tx.gas = tx.gas * 1.8)
//
//             Learn how Klaytn Tx intrinsic gas are calculated - which is unlikely because there's no documentation for it.
//             You should see the source code for the info (e.g. VTwithMemo intrinsic gas is 21000 + len(memo)*100 )
//             https://github.com/klaytn/klaytn/blob/dev/blockchain/types/tx_internal_data_value_transfer_memo.go#L239

const { Wallet } = require("@klaytn/ethers-ext");
const { TxType, AccountKeyType } = require("@klaytn/js-ext-core");
const ethers = require("ethers");

// create new account for testing in https://baobab.wallet.klaytn.foundation/
const senderAddr = "0x0adc9d67eef6d0f02e17543386be40ed451f7667";
const senderPriv = "0xf8cc7c3813ad23817466b1802ee805ee417001fcce9376ab8728c92dd8ea0a6b";
const senderNewPriv = "0xf8cc7c3813ad23817466b1802ee805ee417001fcce9376ab8728c92dd8ea0a6b";
const feePayerAddr = "0xcb0eb737dfda52756495a5e08a9b37aab3b271da";
const feePayerPriv = "0x9435261ed483b6efa3886d6ad9f64c12078a0e28d8d80715c773e16fc000cff4";

async function main() {
  const provider = new ethers.providers.JsonRpcProvider("https://public-en-baobab.klaytn.net");
  const senderWallet = new Wallet(senderPriv, provider);
  const feePayerWallet = new Wallet(feePayerPriv, provider);

  let tx = {
    type: TxType.FeeDelegatedAccountUpdateWithRatio,
    from: senderAddr,
    key: {
      type: AccountKeyType.Public,
      key: ethers.utils.computePublicKey(senderNewPriv, true)
    },
    feeRatio: 40,
    gasLimit: 60000,
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
