// AccountKeyLegacy
// https://docs.klaytn.foundation/docs/learn/accounts/

const { Web3, TxType, AccountKeyType, getPublicKeyFromPrivate } = require("@klaytn/web3js-ext");

// Using senderPriv == senderNewPriv to execute this example repeatedly.
// But you might want to register a different private key.
const senderAddr = "0x24e8efd18d65bcb6b3ba15a4698c0b0d69d13ff7";
const senderPriv = "0x4a72b3d09c3d5e28e8652e0111f9c4ce252e8299aad95bb219a38eb0a3f4da49";
const senderNewPriv = "0x4a72b3d09c3d5e28e8652e0111f9c4ce252e8299aad95bb219a38eb0a3f4da49";

const provider = new Web3.providers.HttpProvider("https://public-en-baobab.klaytn.net");
const web3 = new Web3(provider);
const senderAccount = web3.eth.accounts.privateKeyToAccount(senderPriv);

async function main() {
  const senderNewPub = getPublicKeyFromPrivate(senderNewPriv);
  console.log({ senderNewPub });

  const tx = {
    type: TxType.AccountUpdate,
    from: senderAddr,
    key: {
      type: AccountKeyType.Public,
      key: senderNewPub,
    }
  };

  const signResult = await senderAccount.signTransaction(tx);
  console.log("signedTx", signResult.transactionHash);

  const receipt = await web3.eth.sendSignedTransaction(signResult.rawTransaction);
  console.log("receipt", receipt);
}

main().catch(console.error);