import { assert } from "chai";
import { describe, it } from "mocha";
import { CipherOptions, KeyStore, Web3 } from "web3";
import { sign, recover, Web3Account } from "web3-eth-accounts";

import { KlaytnWeb3 } from "../src";
import { KlaytnWeb3Account } from "../src/types";

import { MockProvider } from "./mock_provider";


// Dummy values.

/* eslint-disable quotes */
const url = "https://public-en-baobab.klaytn.net";
const from = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
const to = "0x70997970C51812dc3A010C7d01b50e0d17dc79C8";
const feePayer = "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC";
const value = 1000000000000;
const nonce = 2;
const gasPrice = 25e9;
const gasLimit = 50000;
const chainId = 1001;
const senderTxHashRLP = "0x09f87a8204d219830f4240947b65b75d204abed71587c9e519a89277766ee1d00a94a94f5374fce5edbc8e2a8697c15331677e6ebf0bf845f84325a09f8e49e2ad84b0732984398749956e807e4b526c786af3c5f7416b293e638956a06bf88342092f6ff9fabe31739b2ebfa1409707ce54a54693e91a6b9bb77df0e7";
const txSignatures = [["0x25", "0x9f8e49e2ad84b0732984398749956e807e4b526c786af3c5f7416b293e638956", "0x6bf88342092f6ff9fabe31739b2ebfa1409707ce54a54693e91a6b9bb77df0e7"]];
const tx0 = { type: 0, from, to, value, gasPrice };
const tx9 = { type: 9, from, to, value, gasPrice, txSignatures };
const lightKdf: CipherOptions = { kdf: "scrypt", n: 2, p: 1 }; // For faster testing
/* eslint-enable quotes */


// Test each properties of web3.eth.accounts (of type KlaytnAccountsInterface)
describe("web3.eth.accounts", () => {
  let P: MockProvider;
  let EW3: Web3;
  let KW3: KlaytnWeb3;

  before(() => {
    P = new MockProvider(url);
    EW3 = new Web3(P);
    KW3 = new KlaytnWeb3(P);

    // Stuff dummy values to the mock provider
    P.mock_override("eth_getTransactionCount", () => "0x1234");
    P.mock_override("eth_chainId", () => "0x3e9");
    P.mock_override("net_version", () => "0x3e9");
    P.mock_override("eth_blockNumber", () => "0x12d687");
    P.mock_override("eth_gasPrice", () => "0xba43b7400");
    P.mock_override("eth_getTransactionCount", () => "0x1234");
    P.mock_override("eth_estimateGas", () => "0x5208");
  });

  it("recoverTransaction()", async () => {
    // var a = "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266"
    // var b = "0x70997970c51812dc3a010c7d01b50e0d17dc79c8"
    // klay.sendTransaction({ typeInt: 0, from: a, to: b, value: 1e12 })
    // klay.sendTransaction({ typeInt: 8, from: a, to: b, value: 1e12 })
    const from = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
    const rawTx0 = "0xf86c80850ba43b740083015f909470997970c51812dc3a010c7d01b50e0d17dc79c885e8d4a510008082f4f6a0e0695a8467fca213751d5f31082ebcce69b14d1398d02978fb989744027c2414a04edf04c0bae5326942edc512a6fa793f01a09c14f9a6c1ef526cea75f7afcd97";
    const rawTx8 = "0x08f88401850ba43b740083015f909470997970c51812dc3a010c7d01b50e0d17dc79c885e8d4a5100094f39fd6e51aad88f6f4ce6ab8827279cfffb92266f847f84582f4f5a0855117ad19a1abf7931e9b06211f83d8508611a1d4ca307f1e0f986b99c7161ca0136ff93afe61264e9704eb13d8de8f68d1cb50060f4b392cf9083e86b3650cc2";

    assert.equal(EW3.eth.accounts.recoverTransaction(rawTx0), from);
    assert.equal(KW3.eth.accounts.recoverTransaction(rawTx0), from);
    assert.equal(KW3.eth.accounts.recoverTransaction(rawTx8), from);
  });

  it("hashMessage()", async () => {
    const msg = "hello";
    const msgHash = "0x50b2c43fd39106bafbba0da34fc430e1f91e3c96ea2acee2bc34119f92b37750";

    assert.equal(EW3.eth.accounts.hashMessage(msg), msgHash);
    assert.equal(KW3.eth.accounts.hashMessage(msg), msgHash);
  });

  it("sign()", async () => {
    const priv = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
    const addr = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
    const msg = "hello";
    const msgHash = "0x50b2c43fd39106bafbba0da34fc430e1f91e3c96ea2acee2bc34119f92b37750";

    function checkMsgSignResult(signResult: ReturnType<typeof sign>) {
      assert.equal(signResult.message, msg);
      assert.equal(signResult.messageHash, msgHash);
      assert.equal(recover(msg, signResult.signature), addr);
      assert.equal(recover(msg, signResult.v, signResult.r, signResult.s), addr);
    }

    checkMsgSignResult(EW3.eth.accounts.sign(msg, priv));
    checkMsgSignResult(KW3.eth.accounts.sign(msg, priv));
  });

  it("encrypt()", async () => {
    const priv = "0x5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a";
    const addr = "3c44cdddb6a900fa2b585dd299e03d12fa4293bc";

    function checkKeyStore(ks: KeyStore) {
      assert.equal(ks.version, 3);
      assert.equal(ks.address, addr);
      assert.isString(ks.id);
      assert.isObject(ks.crypto);
    }

    checkKeyStore(await EW3.eth.accounts.encrypt(priv, "password", lightKdf));
    checkKeyStore(await KW3.eth.accounts.encrypt(priv, "password", lightKdf));
  });

  it("wallet", async () => {
    const priv1 = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
    const addr1 = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
    const json2 = "{\"address\":\"3c44cdddb6a900fa2b585dd299e03d12fa4293bc\",\"id\":\"3d73e4aa-2102-4203-8f90-2fb1b0690af7\",\"version\":3,\"crypto\":{\"cipher\":\"aes-128-ctr\",\"cipherparams\":{\"iv\":\"c65d46f512e3e3c66729cdec6884123c\"},\"ciphertext\":\"32f222a3b6f454559331f04f0645b76733e924c770bfe311d6a80a11b952c97a\",\"kdf\":\"scrypt\",\"kdfparams\":{\"salt\":\"317e916c3caa8da89868c41300ec8e2eba88abc2474ee5f7954ba757e7c81caf\",\"n\":2,\"dklen\":32,\"p\":1,\"r\":8},\"mac\":\"36ed4164aab7f139aa42990d11d7f790078f454b46a4d4d0b9ed718de2dd3e9a\"},\"x-ethers\":{\"client\":\"ethers.js\",\"gethFilename\":\"UTC--2023-11-29T09-26-20.0Z--3c44cdddb6a900fa2b585dd299e03d12fa4293bc\",\"mnemonicCounter\":\"6c3b6d22c9e7361b65043ef05430febd\",\"mnemonicCiphertext\":\"63bd4059afc9294ae4e748cf5cee4b61\",\"path\":\"m/44'/60'/0'/0/2\",\"locale\":\"en\",\"version\":\"0.1\"}}";
    const priv2 = "0x5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a";
    const addr2 = "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC";

    async function checkWallet(W3: Web3) {
      await W3.eth.accounts.wallet.create(1);
      await W3.eth.accounts.wallet.add(priv1);
      await W3.eth.accounts.wallet.decrypt([JSON.parse(json2)], "");

      assert.equal(W3.eth.accounts.wallet.length, 3);
      assert.equal(W3.eth.accounts.wallet.at(1)?.address, addr1);
      assert.equal(W3.eth.accounts.wallet.at(2)?.privateKey, priv2);
      assert.equal(W3.eth.accounts.wallet.at(2)?.address, addr2);
      checkAccountObject(W3.eth.accounts.wallet.at(0)!);
    }
    async function checkKlaytnWallet(W3: KlaytnWeb3) {
      await checkWallet(W3);
      checkKlaytnAccountObject(W3.eth.accounts.wallet.at(0) as KlaytnWeb3Account); // TODO: fix type
    }

    await checkWallet(EW3);
    await checkKlaytnWallet(KW3);
  });

  it("create()", async () => {
    await checkAccountObject(EW3.eth.accounts.create());
    await checkKlaytnAccountObject(KW3.eth.accounts.create());
  });

  it("privateKeyToAccount()", async () => {
    const priv = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
    const addr = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";

    await checkAccountObject(EW3.eth.accounts.privateKeyToAccount(priv), addr, priv);
    await checkKlaytnAccountObject(KW3.eth.accounts.privateKeyToAccount(priv), addr, priv);
  });

  it("decrypt()", async () => {
    const json = "{\"address\":\"3c44cdddb6a900fa2b585dd299e03d12fa4293bc\",\"id\":\"3d73e4aa-2102-4203-8f90-2fb1b0690af7\",\"version\":3,\"crypto\":{\"cipher\":\"aes-128-ctr\",\"cipherparams\":{\"iv\":\"c65d46f512e3e3c66729cdec6884123c\"},\"ciphertext\":\"32f222a3b6f454559331f04f0645b76733e924c770bfe311d6a80a11b952c97a\",\"kdf\":\"scrypt\",\"kdfparams\":{\"salt\":\"317e916c3caa8da89868c41300ec8e2eba88abc2474ee5f7954ba757e7c81caf\",\"n\":2,\"dklen\":32,\"p\":1,\"r\":8},\"mac\":\"36ed4164aab7f139aa42990d11d7f790078f454b46a4d4d0b9ed718de2dd3e9a\"},\"x-ethers\":{\"client\":\"ethers.js\",\"gethFilename\":\"UTC--2023-11-29T09-26-20.0Z--3c44cdddb6a900fa2b585dd299e03d12fa4293bc\",\"mnemonicCounter\":\"6c3b6d22c9e7361b65043ef05430febd\",\"mnemonicCiphertext\":\"63bd4059afc9294ae4e748cf5cee4b61\",\"path\":\"m/44'/60'/0'/0/2\",\"locale\":\"en\",\"version\":\"0.1\"}}";
    const priv = "0x5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a";
    const addr = "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC";

    await checkAccountObject(await EW3.eth.accounts.decrypt(json, ""), addr, priv);
    await checkKlaytnAccountObject(await KW3.eth.accounts.decrypt(json, ""), addr, priv);
  });

  it("signTransaction()", async () => {
    const priv = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
    const from = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
    const tx0 = { type: 0, from, to, value, gasPrice };
    const tx9 = { type: 9, from, to, value, gasPrice };

    await checkTxSignResult(await EW3.eth.accounts.signTransaction(tx0, priv));
    await checkTxSignResult(await KW3.eth.accounts.signTransaction(tx0, priv));
    await checkTxSignResult(await KW3.eth.accounts.signTransaction(tx9, priv));
  });

  it("signTransactionAsFeePayer()", async () => {
    const priv = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
    const from = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
    const tx9 = { type: 9, from, to, feePayer, value, nonce, gasPrice, gasLimit, chainId, txSignatures };

    await checkTxSignResult(await KW3.eth.accounts.signTransactionAsFeePayer(tx9, priv));
    await checkTxSignResult(await KW3.eth.accounts.signTransactionAsFeePayer(senderTxHashRLP, priv));
  });
});

// Check the result of web3.eth.accounts.create(), decrypt(), and privateKeyToAccount() from Web3.
async function checkAccountObject(account: Web3Account, expectedAddr?: string, expectedPriv?: string) {
  // All properties are defined.
  assert.isString(account.address);
  assert.isString(account.privateKey);
  assert.isFunction(account.signTransaction);
  assert.isFunction(account.sign);
  assert.isFunction(account.encrypt);
  if (expectedAddr) { assert.equal(account.address, expectedAddr); }
  if (expectedPriv) { assert.equal(account.privateKey, expectedPriv); }

  // Functions work.
  checkTxSignResult(await account.signTransaction(tx0));
  checkMsgSignResult(account.sign("hello"));
  checkKeyStore(await account.encrypt("password", lightKdf));
}

// Check the result of web3.eth.accounts.create(), decrypt(), and privateKeyToAccount() from KlaytnWeb3.
async function checkKlaytnAccountObject(account: KlaytnWeb3Account, expectedAddr?: string, expectedPriv?: string) {
  // All properties are defined.
  await checkAccountObject(account, expectedAddr, expectedPriv);
  assert.isFunction(account.signTransactionAsFeePayer);

  // Functions work.
  checkTxSignResult(await account.signTransaction(tx9));
  checkTxSignResult(await account.signTransactionAsFeePayer(tx9));
  checkTxSignResult(await account.signTransactionAsFeePayer(senderTxHashRLP));
}

function checkTxSignResult(signResult: any) {
  assert.isString(signResult.messageHash);
  assert.isString(signResult.v);
  assert.isString(signResult.r);
  assert.isString(signResult.s);
  assert.isString(signResult.rawTransaction);
  assert.isString(signResult.transactionHash);
}

function checkMsgSignResult(signResult: ReturnType<typeof sign>) {
  assert.isString(signResult.messageHash);
  assert.isString(signResult.v);
  assert.isString(signResult.r);
  assert.isString(signResult.s);
  assert.isString(signResult.signature);
}

function checkKeyStore(ks: KeyStore) {
  assert.equal(ks.version, 3);
  assert.isString(ks.address);
  assert.isString(ks.id);
  assert.isObject(ks.crypto);
}