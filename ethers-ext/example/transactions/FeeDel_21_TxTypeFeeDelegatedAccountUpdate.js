const ethers = require("ethers");
const { Wallet } = require("../../dist/src/ethers"); // require("@klaytn/sdk-ethers");
const { objectFromRLP } = require("../../dist/src/core/klaytn_tx");

const fs = require('fs');
const feePayer_priv = fs.readFileSync('./example/feePayerPrivateKey', 'utf8') // private key of feeDelegator
const feePayer = '0x24e8efd18d65bcb6b3ba15a4698c0b0d69d13ff7'

// create new account for testing 
// https://baobab.wallet.klaytn.foundation/ 
const sender_priv = '0x136cc0d035c2df0d37a954e2b89dff5d04ba0731fff501c7318c8220d6381a6a' 
const sender = '0x30908464d76604420162a6c880c0e1c7e641bad7' 

const provider = new ethers.providers.JsonRpcProvider('https://public-en-baobab.klaytn.net')

//
// TxTypeFeeDelegatedAccountUpdate
// https://docs.klaytn.foundation/content/klaytn/design/transactions/fee-delegation#txtypefeedelegatedaccountupdate
// 
//   type: Must be 0x21,
//   nonce: In signTransactionAsFeePayer, must not be omitted, because feePayer's nonce is filled when populating
// 

async function doSender() {
  const sender_wallet = new Wallet(sender_priv, provider);
  
  let tx = {
      type: 0x21,
      from: sender,
      key: {
          type: 0x02, 
          // private key 0xf8cc7c3813ad23817466b1802ee805ee417001fcce9376ab8728c92dd8ea0a6b
          // pubkeyX 0xdbac81e8486d68eac4e6ef9db617f7fbd79a04a3b323c982a09cdfc61f0ae0e8
          // pubkeyY 0x906d7170ba349c86879fb8006134cbf57bda9db9214a90b607b6b4ab57fc026e
          key: "0x02dbac81e8486d68eac4e6ef9db617f7fbd79a04a3b323c982a09cdfc61f0ae0e8",
      }
  };

  tx = await sender_wallet.populateTransaction(tx);
  console.log(tx);

  const senderTxHashRLP = await sender_wallet.signTransaction(tx);
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
