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

const { Web3 } = require("web3");
const { KlaytnWeb3 } = require( "../../dist/src");
const { TxType, AccountKeyType, objectFromRLP } = require("../../../ethers-ext/dist/src");
const { secp256k1 } = require("ethereum-cryptography/secp256k1.js")


// create new account for testing
// https://baobab.wallet.klaytn.foundation/
const senderAddr = "0xd34c89278e763b8ea7663db2df199984d6b3ae55";
const senderPriv = "0xdde24aa1236ff2304171c46376f6b6b4d82c9aa97a4406c4be9c95014a02b9ee";
const senderNewPriv = "0x0e4ca6d38096ad99324de0dde108587e5d7c600165ae4cd6c2462c597458c2b8";
const feePayerAddr = "0xcb0eb737dfda52756495a5e08a9b37aab3b271da";
const feePayerPriv = "0x9435261ed483b6efa3886d6ad9f64c12078a0e28d8d80715c773e16fc000cff4";


async function main() {
  const provider = new Web3.providers.HttpProvider("https://public-en-baobab.klaytn.net");
  const web3 = new KlaytnWeb3(provider);

  const publicKey = "0x" + Buffer.from(secp256k1.getPublicKey( BigInt(senderNewPriv), true)).toString('hex')
  console.log(publicKey);

  let tx = {
    type: TxType.FeeDelegatedAccountUpdateWithRatio,
    from: senderAddr,
    key: {
      type: AccountKeyType.Public,
      key: publicKey
    }, 
    feeRatio: 40,
    gas: 300000,  // intrinsic gas too low
    gasPrice: 100e9,
  };

  // sender
  const senderWallet = web3.eth.accounts.privateKeyToAccount(senderPriv);
  let senderTx = await web3.eth.accounts.signTransaction(tx, senderWallet.privateKey);
  console.log(senderTx);

  // tx = objectFromRLP(senderTx.rawTransaction);
  // console.log(tx);

  // fee payer
  const feePayerWallet = web3.eth.accounts.privateKeyToAccount(feePayerPriv, provider);
  let signResult = await web3.eth.accounts.signTransactionAsFeePayer(senderTx.rawTransaction, feePayerWallet.privateKey);
  console.log(signResult);

  // tx = objectFromRLP(signResult.rawTransaction);
  // console.log(tx);

  let sendResult = await web3.eth.sendSignedTransaction(signResult.rawTransaction);
  let txhash = sendResult.transactionHash;

  let receipt = await web3.eth.getTransactionReceipt(txhash);
  console.log({ receipt });
}

main();
