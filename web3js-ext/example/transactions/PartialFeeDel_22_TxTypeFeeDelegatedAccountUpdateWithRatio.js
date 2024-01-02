// TxTypeFeeDelegatedAccountUpdateWithRatio
// https://docs.klaytn.foundation/content/klaytn/design/transactions/partial-fee-delegation#txtypefeedelegatedaccountupdatewithratio

const { KlaytnWeb3, TxType, AccountKeyType, parseTransaction, getPublicKeyFromPrivate } = require("@klaytn/web3js-ext");
const { Web3 } = require("web3");

// Using senderPriv == senderNewPriv to execute this example repeatedly.
// But you might want to register a different private key.
const senderAddr = "0x30908464d76604420162a6c880c0e1c7e641bad7";
const senderPriv = "0xf8cc7c3813ad23817466b1802ee805ee417001fcce9376ab8728c92dd8ea0a6b";
const senderNewPriv = "0xf8cc7c3813ad23817466b1802ee805ee417001fcce9376ab8728c92dd8ea0a6b";
const feePayerAddr = "0xcb0eb737dfda52756495a5e08a9b37aab3b271da";
const feePayerPriv = "0x9435261ed483b6efa3886d6ad9f64c12078a0e28d8d80715c773e16fc000cff4";

async function main() {
  const provider = new Web3.providers.HttpProvider("https://public-en-baobab.klaytn.net");
  const web3 = new KlaytnWeb3(provider);
  const senderAccount = web3.eth.accounts.privateKeyToAccount(senderPriv);

  const publicKey = getPublicKeyFromPrivate(senderNewPriv);
  console.log({ publicKey });

  let tx = {
    type: TxType.FeeDelegatedAccountUpdateWithRatio,
    from: senderAddr,
    key: {
      type: AccountKeyType.Public,
      key: publicKey
    },
    gasLimit: 100_000,
    feeRatio: 30,
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
