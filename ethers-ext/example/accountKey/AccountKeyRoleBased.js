// AccountKeyRoleBased Step 01 - account update
// https://docs.klaytn.foundation/content/klaytn/design/accounts#accountkeyrolebased

const { Wallet } = require("@klaytn/ethers-ext");
const { TxType, AccountKeyType, parseKlay } = require("@klaytn/js-ext-core");
const { ethers } = require("ethers");

const senderAddr = "0x5bd2fb3c21564c023a4a735935a2b7a238c4ccea";
// const senderPriv = "0x9ba8cb8f60044058a9e6f815c5c42d3a216f47044c61a1750b6d29ddc7f34bda";
const senderRoleTransactionPriv = "0xc9668ccd35fc20587aa37a48838b48ccc13cf14dd74c8999dd6a480212d5f7ac";
const senderRoleAccountUpdatePriv = "0x9ba8cb8f60044058a9e6f815c5c42d3a216f47044c61a1750b6d29ddc7f34bda";
const senderRoleFeePayerPriv = "0x0e4ca6d38096ad99324de0dde108587e5d7c600165ae4cd6c2462c597458c2b8";
const recieverAddr = "0xc40b6909eb7085590e1c26cb3becc25368e249e9";

const provider = new ethers.providers.JsonRpcProvider("https://public-en-baobab.klaytn.net");
const wallet = new Wallet(senderAddr, senderRoleAccountUpdatePriv, provider);
const wallet2 = new Wallet(senderAddr, senderRoleTransactionPriv, provider);

// Update Account
async function updateAccount() {
  let pub1 = new ethers.utils.SigningKey(senderRoleTransactionPriv).compressedPublicKey;
  let pub2 = new ethers.utils.SigningKey(senderRoleAccountUpdatePriv).compressedPublicKey;
  let pub3 = new ethers.utils.SigningKey(senderRoleFeePayerPriv).compressedPublicKey;

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

  let sentTx = await wallet.sendTransaction(tx);
  console.log("updateAccount", sentTx);

  let rc = await sentTx.wait();
  console.log("receipt", rc);
}

// Send transaction from an AccountKeyLegacy account
async function sendTx() {
  let tx = {
    type: TxType.ValueTransfer,
    from: senderAddr,
    to: recieverAddr,
    value: parseKlay("0.01"),
    gasLimit: 100000,
  };

  let sentTx = await wallet2.sendTransaction(tx);
  console.log("sentTx", sentTx);

  let rc = await sentTx.wait();
  console.log("receipt", rc);
}

// Verify a message signed by an AccountKeyLegacy account
async function recoverMsg() {
  const msg = "hello";
  const msghex = ethers.utils.hexlify(ethers.utils.toUtf8Bytes(msg));
  const sig = await wallet2.signMessage(msg);
  console.log({ senderAddr, msg, msghex, sig });

  const addr1 = ethers.utils.verifyMessage(msg, sig);
  console.log("recoveredAddr lib", addr1, addr1.toLowerCase() === senderAddr);

  const addr2 = await provider.send("klay_recoverFromMessage", [senderAddr, msghex, sig, "latest"]);
  console.log("recoveredAddr rpc", addr2, addr2.toLowerCase() === senderAddr);
}

async function main() {
  await updateAccount();
  await sendTx();
  await recoverMsg();
}
main().catch(console.error);