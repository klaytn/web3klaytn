const ethers = require("ethers");
const { Wallet } = require("@klaytn/ethers-ext");

// TxTypeFeeDelegatedSmartContractExecution
// https://docs.klaytn.foundation/content/klaytn/design/transactions/fee-delegation#txtypefeedelegatedsmartcontractexecution
// 
//   type: Must be 0x31,
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

const senderAddr = '0xa2a8854b1802d8cd5de631e690817c253d6a9153' 
const senderPriv = '0x0e4ca6d38096ad99324de0dde108587e5d7c600165ae4cd6c2462c597458c2b8' 
const feePayerAddr = '0xcb0eb737dfda52756495a5e08a9b37aab3b271da'
const feePayerPriv = '0x9435261ed483b6efa3886d6ad9f64c12078a0e28d8d80715c773e16fc000cff4'

const provider = new ethers.providers.JsonRpcProvider('https://public-en-baobab.klaytn.net')

async function main() {
  // sender
  const senderWallet = new Wallet(senderPriv, provider);

  const CONTRACT_ADDRESS = '0xcc18eC0261AADbe5fB5a7854449FC26b4F428653';
  const CONTRACT_ABI = ["function setNumber(uint256 newNumber) public", "function increment() public"];
  const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, provider);
  const param = contract.interface.encodeFunctionData("setNumber", ["0x123"]); 

  let tx = {
      type: 0x31,
      to: CONTRACT_ADDRESS,
      value: 0,  
      from: senderAddr,
      input: param,
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
