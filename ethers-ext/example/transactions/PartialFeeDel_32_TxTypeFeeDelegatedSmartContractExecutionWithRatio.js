const ethers = require("ethers");
const { Wallet } = require("../../dist/src/ethers"); // require("@klaytn/sdk-ethers");
const { objectFromRLP } = require("../../dist/src/core/klaytn_tx");

const fs = require('fs');
const sender_priv = fs.readFileSync('./example/privateKey', 'utf8') 
const feePayer_priv = fs.readFileSync('./example/feePayerPrivateKey', 'utf8') 

const sender = '0x3208ca99480f82bfe240ca6bc06110cd12bb6366' 
const feePayer = '0x24e8efd18d65bcb6b3ba15a4698c0b0d69d13ff7'
const contract_addr = '0xcc18eC0261AADbe5fB5a7854449FC26b4F428653'

const provider = new ethers.providers.JsonRpcProvider('https://public-en-baobab.klaytn.net')

// TxTypeFeeDelegatedSmartContractExecutionWithRatio
// https://docs.klaytn.foundation/content/klaytn/design/transactions/partial-fee-delegation#txtypefeedelegatedsmartcontractexecutionwithratio
// 
//   type: Must be 0x32,
//   to : deployed contract address 
//   value: Must be 0, if not payable
//   input: Refer ethers.utils.interface.encodeFunctionData
//          https://docs.ethers.org/v5/api/utils/abi/interface/#Interface--encoding 
//
//          // 1) by using contract object 
//          const CONTRACT_ADDRESS = '0xD7fA6634bDDe0B2A9d491388e2fdeD0fa25D2067';
//          const CONTRACT_ABI = ["function setNumber(uint256 newNumber) public", "function increment() public"];
//          const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, provider);
//          const param = contract.interface.encodeFunctionData("setNumber", ["0x123"]); 
//
//          // 2) by using utils.interface
//          const CONTRACT_ABI = ["function setNumber(uint256 newNumber) public", "function increment() public"];
//          const iface = new ethers.utils.Interface( CONTRACT_ABI );
//          const param = iface.encodeFunctionData("setNumber", [ "0x123" ])
//

async function doSender() {
  const sender_wallet = new Wallet(sender_priv, provider);

  const CONTRACT_ADDRESS = contract_addr;
  const CONTRACT_ABI = ["function setNumber(uint256 newNumber) public", "function increment() public"];
  const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, provider);
  const param = contract.interface.encodeFunctionData("setNumber", ["0x123"]); 

  let tx = {
      type: 0x32, 
      to: contract_addr,
      value: 0,  
      from: sender,
      input: param,
      feeRatio: 30,
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
