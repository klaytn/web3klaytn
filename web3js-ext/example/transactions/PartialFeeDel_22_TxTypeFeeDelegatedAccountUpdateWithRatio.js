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

const { KlaytnWeb3, TxType, AccountKeyType, parseTransaction } = require("@klaytn/web3js-ext");
const { secp256k1 } = require("ethereum-cryptography/secp256k1.js");
const { Web3 } = require("web3");

// create new account for testing
// https://baobab.wallet.klaytn.foundation/
const senderAddr = "0x30908464d76604420162a6c880c0e1c7e641bad7";
const senderPriv = "0xf8cc7c3813ad23817466b1802ee805ee417001fcce9376ab8728c92dd8ea0a6b";
const senderNewPriv = "0xf8cc7c3813ad23817466b1802ee805ee417001fcce9376ab8728c92dd8ea0a6b";
const feePayerAddr = "0xcb0eb737dfda52756495a5e08a9b37aab3b271da";
const feePayerPriv = "0x9435261ed483b6efa3886d6ad9f64c12078a0e28d8d80715c773e16fc000cff4";

async function main() {
  const provider = new Web3.providers.HttpProvider("https://public-en-baobab.klaytn.net");
  const web3 = new KlaytnWeb3(provider);

  const publicKey = "0x" + Buffer.from(secp256k1.getPublicKey(BigInt(senderNewPriv), true)).toString("hex");
  console.log(publicKey);

  let tx = {
    type: TxType.FeeDelegatedAccountUpdateWithRatio,
    from: senderAddr,
    key: {
      type: AccountKeyType.Public,
      key: publicKey
    },
    feeRatio: 40,
    gas: 300000, // intrinsic gas too low
    gasPrice: 100e9,
  };

  // sender
  const sender = web3.eth.accounts.privateKeyToAccount(senderPriv);
  let senderTx = await web3.eth.accounts.signTransaction(tx, sender.privateKey);
  console.log(senderTx);

  // tx = parseTransaction(senderTx.rawTransaction);
  // console.log(tx);

  // fee payer
  const feePayer = web3.eth.accounts.privateKeyToAccount(feePayerPriv, provider);
  let signResult = await web3.eth.accounts.signTransactionAsFeePayer(senderTx.rawTransaction, feePayer.privateKey);
  console.log(signResult);

  // tx = parseTransaction(signResult.rawTransaction);
  // console.log(tx);

  let sendResult = await web3.eth.sendSignedTransaction(signResult.rawTransaction);
  let txhash = sendResult.transactionHash;

  let receipt = await web3.eth.getTransactionReceipt(txhash);
  console.log({ receipt });
}

main();
