const { Web3 } = require("web3");
const { KlaytnWeb3 } = require( "../../dist/src");

const { TxType, AccountKeyType, objectFromRLP } = require("../../../ethers-ext/dist/src");

const { secp256k1 } = require("ethereum-cryptography/secp256k1.js")

//
// AccountKeyWeightedMultiSig Step 01 - account update
// https://docs.klaytn.foundation/content/klaytn/design/accounts#accountkeyweightedmultisig
//
//   gasLimit: Must be large enough
//
//   create a new account for testing
//   https://baobab.wallet.klaytn.foundation/
//
const senderAddr = "0x55815c94c0c375e11a535096f8067c0418a93b48";
const senderPriv = "0x7394141c6fa82980656212a8d15f120e8f1ac81e6705a49864e86f6c507f239e";
const senderNewPriv1 = "0xa32c30608667d43be2d652bede413f12a649dd1be93440878e7f712d51a6768a";
const senderNewPriv2 = "0x0e4ca6d38096ad99324de0dde108587e5d7c600165ae4cd6c2462c597458c2b8";
const senderNewPriv3 = "0xc9668ccd35fc20587aa37a48838b48ccc13cf14dd74c8999dd6a480212d5f7ac";

async function main() {
  const provider = new Web3.providers.HttpProvider("https://public-en-baobab.klaytn.net");
  const web3 = new KlaytnWeb3(provider);

  const senderNewPub1 = "0x" + Buffer.from(secp256k1.getPublicKey( BigInt(senderNewPriv1), true)).toString('hex');
  const senderNewPub2 = "0x" + Buffer.from(secp256k1.getPublicKey( BigInt(senderNewPriv2), true)).toString('hex');
  const senderNewPub3 = "0x" + Buffer.from(secp256k1.getPublicKey( BigInt(senderNewPriv3), true)).toString('hex');
  
  let tx = {
    type: TxType.AccountUpdate,
    from: senderAddr,
    gasLimit: 100000,
    key: {
      type: AccountKeyType.WeightedMultiSig,
      keys: [
        2, // threshold
        [
          [1, senderNewPub1],
          [1, senderNewPub2],
          [1, senderNewPub3]
        ]
      ]
    }
  };

  const senderAccount = web3.eth.accounts.privateKeyToAccount(senderPriv);

  const senderTx = await web3.eth.accounts.signTransaction(tx, senderAccount.privateKey);
  console.log(senderTx);

  const sendResult = await web3.eth.sendSignedTransaction(senderTx.rawTransaction);
  console.log(sendResult);

  const receipt = await web3.eth.getTransactionReceipt(sendResult.transactionHash);
  console.log({ receipt });
}

main();
