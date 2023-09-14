const { Web3 } = require("web3");
const { KlaytnWeb3 } = require( "../../dist/src");

const { TxType } = require("@klaytn/ethers-ext");

const senderAddr = "0xa2a8854b1802d8cd5de631e690817c253d6a9153";
const senderPriv = "0x0e4ca6d38096ad99324de0dde108587e5d7c600165ae4cd6c2462c597458c2b8";
const contractAddr = "0xD7fA6634bDDe0B2A9d491388e2fdeD0fa25D2067";

//
// TxTypeSmartContractExecution
// https://docs.klaytn.foundation/content/klaytn/design/transactions/basic#txtypesmartcontractexecution
//
//   to : deployed contract address
//   value: Must be 0, if not payable
//   input: Refer https://web3js.readthedocs.io/en/v1.2.11/web3-eth-contract.html#methods-mymethod-encodeabi
//
async function main() {
  const provider = new Web3.providers.HttpProvider("https://public-en-baobab.klaytn.net");
  const web3 = new KlaytnWeb3(provider);

  const sender = web3.eth.accounts.privateKeyToAccount(senderPriv);

  const CONTRACT_ADDRESS = contractAddr;
  const CONTRACT_ABI = [ 
    {
      "inputs": [
       {
        "internalType": "uint256",
        "name": "newNumber",
        "type": "unit256"
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
  const param = contract.methods.setNumber(0x123).encodeABI();  // to do - data type "unit256" is not valid

  let tx = {
    type: TxType.SmartContractExecution,
    to: contractAddr,
    value: 0,
    from: senderAddr,
    input: param,
  };

  let signResult = await web3.eth.accounts.signTransaction(tx, sender.privateKey);
  console.log({ signResult });

  let sendResult = await web3.eth.sendSignedTransaction(signResult.rawTransaction);
  let txhash = sendResult.transactionHash;

  let receipt = await web3.eth.getTransactionReceipt(txhash);
  console.log({ receipt });
}

main();
