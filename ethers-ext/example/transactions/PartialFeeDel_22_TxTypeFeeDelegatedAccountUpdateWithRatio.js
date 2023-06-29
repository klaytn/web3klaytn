const ethers = require("ethers");
const { Wallet } = require("../../dist/src/ethers"); // require("@klaytn/sdk-ethers");
const { objectFromRLP } = require("../../dist/src/core/klaytn_tx");

const fs = require('fs');
const feePayer_priv = fs.readFileSync('./example/feePayerKey.priv', 'utf8') // private key of feeDelegator
const feePayer = '0x24e8efd18d65bcb6b3ba15a4698c0b0d69d13ff7'

// create new account for testing 
// https://baobab.wallet.klaytn.foundation/ 
const senderPriv = '0x78197af8e2293de5357a91d5d7b6e4224168668180704cc1c7150669d7190fbc' 
const sender = '0x0adc9d67eef6d0f02e17543386be40ed451f7667' 

const provider = new ethers.providers.JsonRpcProvider('https://public-en-baobab.klaytn.net')

//
// TxTypeFeeDelegatedAccountUpdateWithRatio
// https://docs.klaytn.foundation/content/klaytn/design/transactions/partial-fee-delegation#txtypefeedelegatedaccountupdatewithratio
// 
//   type: Must be 0x22,
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

async function doSender() {
  const senderWallet = new Wallet(senderPriv, provider);
  
  let tx = {
      type: 0x22,
      // gasLimit was 56000
      // https://baobab.scope.klaytn.com/tx/0x2a9fc23547e58f67d83263e509e0dc987ada346521a95d8f48de4e023796dede?tabId=accountKeyInfo
      gasLimit: 60000,  
      from: sender,
      key: {
          type: 0x02, 
          // private key 0xf8cc7c3813ad23817466b1802ee805ee417001fcce9376ab8728c92dd8ea0a6b
          // pubkeyX 0xdbac81e8486d68eac4e6ef9db617f7fbd79a04a3b323c982a09cdfc61f0ae0e8
          // pubkeyY 0x906d7170ba349c86879fb8006134cbf57bda9db9214a90b607b6b4ab57fc026e
          key: "0x02dbac81e8486d68eac4e6ef9db617f7fbd79a04a3b323c982a09cdfc61f0ae0e8",
      },
      feeRatio: 40, 
  };

  tx = await senderWallet.populateTransaction(tx);
  console.log(tx);

  const senderTxHashRLP = await senderWallet.signTransaction(tx);
  console.log('senderTxHashRLP', senderTxHashRLP);

  return senderTxHashRLP; 
}

async function doFeePayer( senderTxHashRLP ) {
  const feePayer_wallet = new Wallet(feePayer_priv, provider);

  const tx = objectFromRLP( senderTxHashRLP );
  tx.feePayer = feePayer;
  console.log(tx);

  const sentTx = await feePayer_wallet.sendTransactionAsFeePayer(tx);
  console.log('sentTx', sentTx);

  const rc = await sentTx.wait();
  console.log('receipt', rc);
}

async function main() {

  const senderTxHashRLP = await doSender();

  doFeePayer( senderTxHashRLP ); 
}

main();
