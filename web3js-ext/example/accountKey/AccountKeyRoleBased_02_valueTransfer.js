// AccountKeyRoleBased Step 02 - value transfer
// https://docs.klaytn.foundation/content/klaytn/design/accounts#accountkeyrolebased
//
//   gasLimit: Must be large enough

const { KlaytnWeb3, TxType, toPeb } = require("@klaytn/web3js-ext");
const { Web3 } = require("web3");

// the same address of sender in AccountKeyRoleBased_01_accountUpdate.js
const receiverAddr = "0xc40b6909eb7085590e1c26cb3becc25368e249e9";
const senderAddr = "0x334b4d3c775c45c59de54e9f0408cba25a1aece7";
const senderRoleTransactionPriv = "0xc9668ccd35fc20587aa37a48838b48ccc13cf14dd74c8999dd6a480212d5f7ac";

async function main() {
  const provider = new Web3.providers.HttpProvider("https://public-en-baobab.klaytn.net");
  const web3 = new KlaytnWeb3(provider);

  let tx = {
    type: TxType.ValueTransfer,
    gasLimit: 100000,
    to: receiverAddr,
    value: toPeb("1", "KLAY"),
    from: senderAddr,
  };

  const account = web3.eth.accounts.privateKeyToAccount(senderRoleTransactionPriv);
  let signTx = await web3.eth.accounts.signTransaction(tx, account.privateKey);
  console.log(signTx);

  let sendResult = await web3.eth.sendSignedTransaction(signTx.rawTransaction);
  console.log(sendResult);

  let receipt = await web3.eth.getTransactionReceipt(sendResult.transactionHash);
  console.log({ receipt });
}

main();
