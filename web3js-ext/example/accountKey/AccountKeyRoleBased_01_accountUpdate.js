// AccountKeyRoleBased Step 01 - account update
// https://docs.klaytn.foundation/content/klaytn/design/accounts#accountkeyrolebased
//
//   gasLimit: Must be large enough

const { Web3 } = require("web3");
const { KlaytnWeb3, TxType, AccountKeyType } = require( "@klaytn/web3js-ext");
const { secp256k1 } = require("ethereum-cryptography/secp256k1.js")

//   create a new account for testing
//   https://baobab.wallet.klaytn.foundation/
const senderAddr = "0x334b4d3c775c45c59de54e9f0408cba25a1aece7";
const senderPriv = "0x9ba8cb8f60044058a9e6f815c5c42d3a216f47044c61a1750b6d29ddc7f34bda";
const senderRoleTransactionPriv = "0xc9668ccd35fc20587aa37a48838b48ccc13cf14dd74c8999dd6a480212d5f7ac";
const senderRoleAccountUpdatePriv = "0x9ba8cb8f60044058a9e6f815c5c42d3a216f47044c61a1750b6d29ddc7f34bda";
const senderRoleFeePayerPriv = "0x0e4ca6d38096ad99324de0dde108587e5d7c600165ae4cd6c2462c597458c2b8";

async function main() {
  const provider = new Web3.providers.HttpProvider("https://public-en-baobab.klaytn.net");
  const web3 = new KlaytnWeb3(provider);

  const pub1 = "0x" + Buffer.from(secp256k1.getPublicKey( BigInt(senderRoleTransactionPriv), true)).toString('hex');
  const pub2 = "0x" + Buffer.from(secp256k1.getPublicKey( BigInt(senderRoleAccountUpdatePriv), true)).toString('hex');
  const pub3 = "0x" + Buffer.from(secp256k1.getPublicKey( BigInt(senderRoleFeePayerPriv), true)).toString('hex');

  console.log("1", pub1);
  console.log("2", pub2);
  console.log("3", pub3);

  let tx = {
    type: TxType.AccountUpdate,
    from: senderAddr,
    gasLimit: 1000000,
    key: {
      type: AccountKeyType.RoleBased,
      keys: [
        // RoleTransaction
        {
          type: AccountKeyType.Public,
          key: pub1,
        },

        // RoleAccountUpdate
        {
          type: AccountKeyType.Public,
          key: pub2,
        },

        // RoleFeePayer
        {
          type: AccountKeyType.Public,
          key: pub3,
        }
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
