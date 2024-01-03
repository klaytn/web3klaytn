// TxTypeFeeDelegatedSmartContractExecutionWithRatio
// https://docs.klaytn.foundation/content/klaytn/design/transactions/partial-fee-delegation#txtypefeedelegatedsmartcontractexecutionwithratio

const { KlaytnWeb3, TxType, parseTransaction } = require("@klaytn/web3js-ext");
const { Web3 } = require("web3");

const senderAddr = "0xa2a8854b1802d8cd5de631e690817c253d6a9153";
const senderPriv = "0x0e4ca6d38096ad99324de0dde108587e5d7c600165ae4cd6c2462c597458c2b8";
const feePayerAddr = "0xcb0eb737dfda52756495a5e08a9b37aab3b271da";
const feePayerPriv = "0x9435261ed483b6efa3886d6ad9f64c12078a0e28d8d80715c773e16fc000cff4";
const contractAddr = "0xD7fA6634bDDe0B2A9d491388e2fdeD0fa25D2067";
const contractAbi = [
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
  }
];

async function main() {
  const provider = new Web3.providers.HttpProvider("https://public-en-baobab.klaytn.net");
  const web3 = new KlaytnWeb3(provider);
  const senderAccount = web3.eth.accounts.privateKeyToAccount(senderPriv);

  // https://web3js.readthedocs.io/en/v1.2.11/web3-eth-contract.html#methods-mymethod-encodeabi
  const contract = new web3.eth.Contract(contractAbi, contractAddr);
  const data = contract.methods.setNumber(0x123).encodeABI();

  let tx = {
    type: TxType.FeeDelegatedSmartContractExecutionWithRatio,
    from: senderAddr,
    to: contractAddr,
    data: data,
    gasLimit: 100_000,
    feeRatio: 60,
  };

  const signResult1 = await senderAccount.signTransaction(tx);
  console.log("senderRawTx", signResult1.rawTransaction);
  console.log("senderTx", parseTransaction(signResult1.rawTransaction));

  // Next step is usually done in the backend by the service provider.
  // But for the sake of demonstration, feePayer signature is done here.

  const feePayerAccount = web3.eth.accounts.privateKeyToAccount(feePayerPriv);
  const signResult2 = await feePayerAccount.signTransactionAsFeePayer(signResult1.rawTransaction);
  console.log("rawTx", signResult2.rawTransaction);
  console.log("tx", parseTransaction(signResult2.rawTransaction));

  const receipt = await web3.eth.sendSignedTransaction(signResult2.rawTransaction);
  console.log("receipt", receipt);
}

main();
