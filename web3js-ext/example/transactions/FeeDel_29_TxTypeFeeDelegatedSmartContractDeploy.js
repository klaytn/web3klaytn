// TxTypeFeeDelegatedSmartContractDeploy
// https://docs.klaytn.foundation/content/klaytn/design/transactions/fee-delegation#txtypefeedelegatedsmartcontractdeploy

const { KlaytnWeb3, TxType, parseTransaction } = require("@klaytn/web3js-ext");
const { Web3 } = require("web3");

const senderAddr = "0xa2a8854b1802d8cd5de631e690817c253d6a9153";
const senderPriv = "0x0e4ca6d38096ad99324de0dde108587e5d7c600165ae4cd6c2462c597458c2b8";
const feePayerAddr = "0xcb0eb737dfda52756495a5e08a9b37aab3b271da";
const feePayerPriv = "0x9435261ed483b6efa3886d6ad9f64c12078a0e28d8d80715c773e16fc000cff4";
const bytecode = "0x608060405234801561001057600080fd5b5060f78061001f6000396000f3fe6080604052348015600f57600080fd5b5060043610603c5760003560e01c80633fb5c1cb1460415780638381f58a146053578063d09de08a14606d575b600080fd5b6051604c3660046083565b600055565b005b605b60005481565b60405190815260200160405180910390f35b6051600080549080607c83609b565b9190505550565b600060208284031215609457600080fd5b5035919050565b60006001820160ba57634e487b7160e01b600052601160045260246000fd5b506001019056fea2646970667358221220e0f4e7861cb6d7acf0f61d34896310975b57b5bc109681dbbfb2e548ef7546b364736f6c63430008120033";

async function main() {
  const provider = new Web3.providers.HttpProvider("https://public-en-baobab.klaytn.net");
  const web3 = new KlaytnWeb3(provider);
  const senderAccount = web3.eth.accounts.privateKeyToAccount(senderPriv);

  let tx = {
    type: TxType.FeeDelegatedSmartContractDeploy,
    from: senderAddr,
    data: bytecode,
    gasLimit: 1_000_000,
    humanReadable: false, // must be false
    codeFormat: 0, // must be 0
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
