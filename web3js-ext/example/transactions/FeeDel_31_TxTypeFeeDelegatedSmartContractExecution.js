const { Web3 } = require("web3");
const { KlaytnWeb3 } = require( "../../dist/src");

const { TxType, objectFromRLP } = require("../../../ethers-ext/dist/src");

// TxTypeFeeDelegatedSmartContractExecution
// https://docs.klaytn.foundation/content/klaytn/design/transactions/fee-delegation#txtypefeedelegatedsmartcontractexecution
//
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

const senderAddr = "0xa2a8854b1802d8cd5de631e690817c253d6a9153";
const senderPriv = "0x0e4ca6d38096ad99324de0dde108587e5d7c600165ae4cd6c2462c597458c2b8";
const feePayerAddr = "0xcb0eb737dfda52756495a5e08a9b37aab3b271da";
const feePayerPriv = "0x9435261ed483b6efa3886d6ad9f64c12078a0e28d8d80715c773e16fc000cff4";
const contractAddr = "0xD7fA6634bDDe0B2A9d491388e2fdeD0fa25D2067";


async function main() {
  const provider = new Web3.providers.HttpProvider("https://public-en-baobab.klaytn.net");
  const web3 = new KlaytnWeb3(provider);

  const CONTRACT_ADDRESS = contractAddr;
  const CONTRACT_ABI = [ 
    {
      "inputs": [
       {
        "internalType": "uint256",
        "name": "newNumber",
        "type": "uint256"
       }
      ],
      "name": "setNumber",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
     },
     {
      "inputs": [],
      "name": "increment",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
     }
    ]; 
  const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
  const param = contract.methods.setNumber(0x123).encodeABI(); 

  let tx = {
    type: TxType.FeeDelegatedSmartContractExecution,
    to: CONTRACT_ADDRESS,
    value: 0,
    from: senderAddr,
    input: param,
    gas: 400000,   // intrinsic gas too low
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
