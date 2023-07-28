const ethers = require("ethers");
const { Wallet, TxType, AccountKeyType } = require("@klaytn/ethers-ext");

//
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
//

// create new account for testing
// https://baobab.wallet.klaytn.foundation/
const senderPriv = "0x78197af8e2293de5357a91d5d7b6e4224168668180704cc1c7150669d7190fbc";
const senderAddr = "0x0adc9d67eef6d0f02e17543386be40ed451f7667";

const feePayerAddr = "0xcb0eb737dfda52756495a5e08a9b37aab3b271da";
const feePayerPriv = "0x9435261ed483b6efa3886d6ad9f64c12078a0e28d8d80715c773e16fc000cff4";

const provider = new ethers.providers.JsonRpcProvider("https://public-en-baobab.klaytn.net");

async function main() {
  // sender
  const senderWallet = new Wallet(senderPriv, provider);

  let tx = {
    type: TxType.FeeDelegatedAccountUpdateWithRatio,
    // gasLimit was 56000
    // https://baobab.scope.klaytn.com/tx/0x2a9fc23547e58f67d83263e509e0dc987ada346521a95d8f48de4e023796dede?tabId=accountKeyInfo
    gasLimit: 60000,
    from: senderAddr,
    key: {
      type: AccountKeyType.Public,
      // private key 0xf8cc7c3813ad23817466b1802ee805ee417001fcce9376ab8728c92dd8ea0a6b
      // pubkeyX 0xdbac81e8486d68eac4e6ef9db617f7fbd79a04a3b323c982a09cdfc61f0ae0e8
      // pubkeyY 0x906d7170ba349c86879fb8006134cbf57bda9db9214a90b607b6b4ab57fc026e
      // Compressed PublicKey "0x02dbac81e8486d68eac4e6ef9db617f7fbd79a04a3b323c982a09cdfc61f0ae0e8",
      key: ethers.utils.computePublicKey("0xf8cc7c3813ad23817466b1802ee805ee417001fcce9376ab8728c92dd8ea0a6b", true)
    },
    feeRatio: 40,
  };

  tx = await senderWallet.populateTransaction(tx);
  console.log(tx);

  const senderTxHashRLP = await senderWallet.signTransaction(tx);
  console.log("senderTxHashRLP", senderTxHashRLP);

  // fee payer
  const feePayerWallet = new Wallet(feePayerPriv, provider);

  tx = feePayerWallet.decodeTxFromRLP(senderTxHashRLP);
  console.log(tx);

  const sentTx = await feePayerWallet.sendTransactionAsFeePayer(senderTxHashRLP);
  console.log("sentTx", sentTx);

  const rc = await sentTx.wait();
  console.log("receipt", rc);
}

main();
