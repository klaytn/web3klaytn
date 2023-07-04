const ethers = require("ethers");
const { Wallet } = require("@klaytn/ethers-ext");

//
// TxTypeFeeDelegatedAccountUpdate
// https://docs.klaytn.foundation/content/klaytn/design/transactions/fee-delegation#txtypefeedelegatedaccountupdate
// 
//   type: Must be 0x21,
//   nonce: In signTransactionAsFeePayer, must not be omitted, because feePayer's nonce is filled when populating
// 

// create new account for testing 
// https://baobab.wallet.klaytn.foundation/ 
const senderAddr = '0x30908464d76604420162a6c880c0e1c7e641bad7' 
const senderPriv = '0x136cc0d035c2df0d37a954e2b89dff5d04ba0731fff501c7318c8220d6381a6a' 

const feePayerAddr = '0xcb0eb737dfda52756495a5e08a9b37aab3b271da'
const feePayerPriv = '0x9435261ed483b6efa3886d6ad9f64c12078a0e28d8d80715c773e16fc000cff4'

const provider = new ethers.providers.JsonRpcProvider('https://public-en-baobab.klaytn.net')

async function main() {

  // sender 
  const senderWallet = new Wallet(senderPriv, provider);
  
  let tx = {
      type: 0x21,
      from: senderAddr,
      key: {
          type: 0x02, 
          // private key 0xf8cc7c3813ad23817466b1802ee805ee417001fcce9376ab8728c92dd8ea0a6b
          // pubkeyX 0xdbac81e8486d68eac4e6ef9db617f7fbd79a04a3b323c982a09cdfc61f0ae0e8
          // pubkeyY 0x906d7170ba349c86879fb8006134cbf57bda9db9214a90b607b6b4ab57fc026e
          key: "0x02dbac81e8486d68eac4e6ef9db617f7fbd79a04a3b323c982a09cdfc61f0ae0e8",
      }
  };

  tx = await senderWallet.populateTransaction(tx);
  console.log(tx);

  const senderTxHashRLP = await senderWallet.signTransaction(tx);
  console.log('senderTxHashRLP', senderTxHashRLP);

  // fee payer 
  const feePayerWallet = new Wallet(feePayerPriv, provider);

  tx = feePayerWallet.decodeTxFromRLP( senderTxHashRLP );
  tx.feePayer = feePayerAddr;
  console.log(tx);

  const sentTx = await feePayerWallet.sendTransactionAsFeePayer(tx);
  console.log('sentTx', sentTx);

  const rc = await sentTx.wait();
  console.log('receipt', rc);
}

main();
