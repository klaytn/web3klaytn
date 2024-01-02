// Different ways to create an account with a private key

const { KlaytnWeb3 } = require("@klaytn/web3js-ext");
const { Web3 } = require("web3");

const priv = "0x4a72b3d09c3d5e28e8652e0111f9c4ce252e8299aad95bb219a38eb0a3f4da49";
const json_v3 = '{"address":"029e786304c1531af3ac7db24a02448e543a099e","id":"9d492c95-b9e3-42e3-af73-5c77e932208d","version":3,"crypto":{"cipher":"aes-128-ctr","cipherparams":{"iv":"bfcb88a1501e2bb1e6694c03da18953d"},"ciphertext":"076510b4e25d5cfc31239bffcad6036fe543cbbb04b9f3ec719bf4f61b58fc05","kdf":"scrypt","kdfparams":{"salt":"79124f05995aae98b3088d8365f59a6dfadd1c9ed249abae3c07733f4cbbee53","n":131072,"dklen":32,"p":1,"r":8},"mac":"d70f83824c2c30dc5cd3a244d87147b6aa713a6000165789a82a467651284ac7"}}';

async function main() {
  const provider = new Web3.providers.HttpProvider("https://public-en-baobab.klaytn.net");
  const web3 = new KlaytnWeb3(provider);

  // Create random
  const randomAccount = await web3.eth.accounts.create();
  console.log("random", randomAccount);

  // Create from private key
  const privAccount = web3.eth.accounts.privateKeyToAccount(priv);
  console.log("fromPriv", privAccount);

  // Create from keystore JSON v3
  const keystoreV3Account = await web3.eth.accounts.decrypt(json_v3, "password");
  console.log("fromKeystoreV3", keystoreV3Account);

  // TBU: Create from keystore JSON v4 (KIP-3)
  // TBU: Create multiple accounts from keystore JSON v4 (KIP-3)
}

main().catch(console.err);
