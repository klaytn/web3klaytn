import { SignatureLike } from "@klaytn/js-ext-core";
import { assert } from "chai";
import { describe, it } from "mocha";
import { EthExecutionAPI, Web3, Web3BaseProvider } from "web3";
import { toWei } from "web3-utils";

import { KlaytnWeb3 } from "../src";

import { MockProvider } from "./mock_provider";


// Dummy values.

/* eslint-disable quotes */
const url = "https://public-en-baobab.klaytn.net";
const priv = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
const from = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
const to = "0x70997970C51812dc3A010C7d01b50e0d17dc79C8";
const feePayer = "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC";
const value = toWei("0.01", "ether");
const nonce = 2;
const gasPrice = 25e9;
const gasLimit = 50000;
const chainId = 1001;
const senderTxHashRLP = "0x09f87a8204d219830f4240947b65b75d204abed71587c9e519a89277766ee1d00a94a94f5374fce5edbc8e2a8697c15331677e6ebf0bf845f84325a09f8e49e2ad84b0732984398749956e807e4b526c786af3c5f7416b293e638956a06bf88342092f6ff9fabe31739b2ebfa1409707ce54a54693e91a6b9bb77df0e7";
const txSignatures = [["0x25", "0x9f8e49e2ad84b0732984398749956e807e4b526c786af3c5f7416b293e638956", "0x6bf88342092f6ff9fabe31739b2ebfa1409707ce54a54693e91a6b9bb77df0e7"]];
const keystore_v3 = `{"address":"3c44cdddb6a900fa2b585dd299e03d12fa4293bc","id":"3d73e4aa-2102-4203-8f90-2fb1b0690af7","version":3,"crypto":{"cipher":"aes-128-ctr","cipherparams":{"iv":"c65d46f512e3e3c66729cdec6884123c"},"ciphertext":"32f222a3b6f454559331f04f0645b76733e924c770bfe311d6a80a11b952c97a","kdf":"scrypt","kdfparams":{"salt":"317e916c3caa8da89868c41300ec8e2eba88abc2474ee5f7954ba757e7c81caf","n":2,"dklen":32,"p":1,"r":8},"mac":"36ed4164aab7f139aa42990d11d7f790078f454b46a4d4d0b9ed718de2dd3e9a"},"x-ethers":{"client":"ethers.js","gethFilename":"UTC--2023-11-29T09-26-20.0Z--3c44cdddb6a900fa2b585dd299e03d12fa4293bc","mnemonicCounter":"6c3b6d22c9e7361b65043ef05430febd","mnemonicCiphertext":"63bd4059afc9294ae4e748cf5cee4b61","path":"m/44'/60'/0'/0/2","locale":"en","version":"0.1"}}`;
/* eslint-enable quotes */

function checkSignResult(signResult: any) {
  assert.isDefined(signResult.messageHash);
  assert.isDefined(signResult.v);
  assert.isDefined(signResult.r);
  assert.isDefined(signResult.s);
  assert.isDefined(signResult.rawTransaction);
  assert.isDefined(signResult.transactionHash);
}

function checkAccountObject(account: any, klaytn: boolean) {
  // TODO: check account.signTransaction accepts klaytn tx type
  // TODO: check account.sign works
  // TODO: check account.encrypt works

  assert.isDefined(account.address);
  assert.isDefined(account.privateKey);
  assert.isDefined(account.signTransaction);
  assert.isDefined(account.sign);
  assert.isDefined(account.encrypt);
  if (klaytn) {
    // assert.isDefined(account.signTransactionAsFeePayer);
  }
}

describe("accounts", () => {
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

  describe("privateKeyToAccount", () => {
    it("account has all necessary fields", () => {
      let account = EW3.eth.accounts.privateKeyToAccount(priv);
      checkAccountObject(account, false);

      account = KW3.eth.accounts.privateKeyToAccount(priv);
      checkAccountObject(account, true);
    });
    it("address and private key are correct", () => {
      const account = EW3.eth.accounts.privateKeyToAccount(priv);
      assert.equal(account.address, from);
      assert.equal(account.privateKey, priv);
    });
  });

  describe("create", () => {
    it("account has all necessary fields", () => {
      let account = EW3.eth.accounts.create();
      checkAccountObject(account, false);

      account = KW3.eth.accounts.create();
      checkAccountObject(account, true);
    });
  });

  describe("decrypt", () => {
    it("account has all necessary fields", async () => {
      let account = await EW3.eth.accounts.decrypt(keystore_v3, "");
      checkAccountObject(account, false);

      account = await KW3.eth.accounts.decrypt(keystore_v3, "");
      checkAccountObject(account, true);
    });
  });

  describe("signTransaction", () => {
    const tx0 = { type: 0, from, to, value, gasPrice };
    const tx9 = { type: 9, from, to, value, gasPrice };

    async function testOK_withAccount(W3: Web3, tx: any) {
      const account = W3.eth.accounts.privateKeyToAccount(priv);
      const signResult = await account.signTransaction(tx);
      checkSignResult(signResult);
    }
    async function testOK_withWeb3(W3: Web3, tx: any) {
      const signResult = await W3.eth.accounts.signTransaction(tx, priv);
      checkSignResult(signResult);
    }

    it("account.signTransaction", async () => {
      for (const W3 of [EW3, KW3]) {
        await testOK_withAccount(W3, tx0);
      }
      for (const W3 of [KW3]) {
        await testOK_withAccount(W3, tx9);
      }
    });
    it("web3.eth.accounts.signTransaction", async () => {
      for (const W3 of [EW3, KW3]) {
        await testOK_withWeb3(W3, { type: 0, from, to, value, gasPrice });
      }
      for (const W3 of [KW3]) {
        await testOK_withWeb3(W3, { type: 9, from, to, value, gasPrice });
      }
    });
  });

  describe("signTransactionAsFeePayer", () => {
    const tx9 = { type: 9, from, to, feePayer, value, nonce, gasPrice, gasLimit, chainId, txSignatures };

    it("account.signTransactionAsFeePayer", async () => {
      const account = KW3.eth.accounts.privateKeyToAccount(priv);
      const signResult = await account.signTransactionAsFeePayer(tx9);
      checkSignResult(signResult);
    });
    it("web3.eth.accounts.signTransactionAsFeePayer", async () => {
      let signResult = await KW3.eth.accounts.signTransactionAsFeePayer(tx9, priv);
      checkSignResult(signResult);

      signResult = await KW3.eth.accounts.signTransactionAsFeePayer(senderTxHashRLP as any, priv);
      checkSignResult(signResult);
    });
  });
});