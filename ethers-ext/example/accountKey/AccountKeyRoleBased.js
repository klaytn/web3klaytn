// AccountKeyRoleBased
// https://docs.klaytn.foundation/content/klaytn/design/accounts#accountkeyrolebased

const { ethers } = require("ethers");

const { Wallet, TxType, AccountKeyType, parseKlay } = require("@klaytn/ethers-ext");

const senderAddr = "0x5bd2fb3c21564c023a4a735935a2b7a238c4ccea";
// const senderPriv = "0x9ba8cb8f60044058a9e6f815c5c42d3a216f47044c61a1750b6d29ddc7f34bda";
const senderRoleTransactionPriv = "0xc9668ccd35fc20587aa37a48838b48ccc13cf14dd74c8999dd6a480212d5f7ac";
const senderRoleAccountUpdatePriv = "0x9ba8cb8f60044058a9e6f815c5c42d3a216f47044c61a1750b6d29ddc7f34bda";
const senderRoleFeePayerPriv = "0x0e4ca6d38096ad99324de0dde108587e5d7c600165ae4cd6c2462c597458c2b8";
const recieverAddr = "0xc40b6909eb7085590e1c26cb3becc25368e249e9";

const provider = new ethers.providers.JsonRpcProvider("https://public-en-baobab.klaytn.net");
const updaterWallet = new Wallet(senderAddr, senderRoleAccountUpdatePriv, provider);
const txWallet = new Wallet(senderAddr, senderRoleTransactionPriv, provider);

async function updateAccount() {
  const pub1 = ethers.utils.computePublicKey(senderRoleTransactionPriv, true);
  const pub2 = ethers.utils.computePublicKey(senderRoleAccountUpdatePriv, true);
  const pub3 = ethers.utils.computePublicKey(senderRoleFeePayerPriv, true);
  console.log({ pub1, pub2, pub3 });

  const tx = {
    type: TxType.AccountUpdate,
    from: senderAddr,
    gasLimit: 1_000_000,
    key: {
      type: AccountKeyType.RoleBased,
      keys: [
        { type: AccountKeyType.Public, key: pub1 }, // RoleTransaction
        { type: AccountKeyType.Public, key: pub2 }, // RoleAccountUpdate
        { type: AccountKeyType.Public, key: pub3 }, // RoleFeePayer
      ]
    }
  };

  const sentTx = await updaterWallet.sendTransaction(tx);
  console.log("sentTx", sentTx);

  const receipt = await sentTx.wait();
  console.log("receipt", receipt);
}

async function sendTx() {
  let tx = {
    type: TxType.ValueTransfer,
    from: senderAddr,
    to: recieverAddr,
    value: parseKlay("0.01"),
    gasLimit: 100000,
  };

  const sentTx = await txWallet.sendTransaction(tx);
  console.log("sentTx", sentTx);

  const receipt = await sentTx.wait();
  console.log("receipt", receipt);
}

async function recoverMsg() {
  const msg = "hello";
  const msghex = ethers.utils.hexlify(ethers.utils.toUtf8Bytes(msg));
  const sig = await txWallet.signMessage(msg);
  console.log({ senderAddr, msg, msghex, sig });

  const addr1 = ethers.utils.verifyMessage(msg, sig);
  console.log("recoveredAddr lib", addr1, addr1.toLowerCase() === senderAddr.toLowerCase());

  const addr2 = await provider.send("klay_recoverFromMessage", [senderAddr, msghex, sig, "latest"]);
  console.log("recoveredAddr rpc", addr2, addr2.toLowerCase() === senderAddr.toLowerCase());
}

async function main() {
  await updateAccount();
  await sendTx();
  await recoverMsg();
}
main().catch(console.error);
