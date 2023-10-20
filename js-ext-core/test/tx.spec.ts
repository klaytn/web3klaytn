import { assert } from "chai";
import _ from "lodash";

import {
  KlaytnTx,
  KlaytnTxFactory,
  TxType,
  TxTypeAccountUpdate,
  TxTypeCancel,
  TxTypeFeeDelegatedValueTransfer,
  TxTypeSmartContractDeploy,
  TxTypeSmartContractExecution,
  TxTypeValueTransfer,
  TxTypeValueTransferMemo,
  isFeePayerSigTxType
} from "../src";

interface TestCase {
  clazz: typeof KlaytnTx,
  object: any,
  canonical: any,
  sigRLP: string,
  sigFeePayerRLP?: string,
  senderTxHashRLP?: string,
  txHashRLP: string,
}

// Test cases from https://docs.klaytn.foundation/content/klaytn/design/transactions
const testcases: TestCase[] = [
  {
    clazz: TxTypeValueTransfer,
    object: {
      type: 8,
      nonce: 1234,
      gasPrice: 0x19,
      gasLimit: 0xf4240,
      to: "0x7b65B75d204aBed71587c9E519a89277766EE1d0",
      value: 10,
      from: "0xa94f5374Fce5edBC8E2a8697C15331677e6EbF0B",
      chainId: 0x1,
      txSignatures: [{v: 0x25, r: "0xf3d0cd43661cabf53425535817c5058c27781f478cb5459874feaa462ed3a29a", s: "0x6748abe186269ff10b8100a4b7d7fea274b53ea2905acbf498dc8b5ab1bf4fbc"}],
    },
    canonical: {
      type: "0x08",
      nonce: "0x04d2",
      gasLimit: "0x0f4240",
      gasPrice: "0x19",
      to: "0x7b65B75d204aBed71587c9E519a89277766EE1d0",
      value: "0x0a",
      from: "0xa94f5374Fce5edBC8E2a8697C15331677e6EbF0B",
      chainId: "0x01",
      txSignatures: [["0x25", "0xf3d0cd43661cabf53425535817c5058c27781f478cb5459874feaa462ed3a29a", "0x6748abe186269ff10b8100a4b7d7fea274b53ea2905acbf498dc8b5ab1bf4fbc"]]
    },
    sigRLP: "0xf839b5f4088204d219830f4240947b65b75d204abed71587c9e519a89277766ee1d00a94a94f5374fce5edbc8e2a8697c15331677e6ebf0b018080",
    txHashRLP: "0x08f87a8204d219830f4240947b65b75d204abed71587c9e519a89277766ee1d00a94a94f5374fce5edbc8e2a8697c15331677e6ebf0bf845f84325a0f3d0cd43661cabf53425535817c5058c27781f478cb5459874feaa462ed3a29aa06748abe186269ff10b8100a4b7d7fea274b53ea2905acbf498dc8b5ab1bf4fbc",
  },
  {
    clazz: TxTypeValueTransferMemo,
    object: {
      type: 0x10,
      nonce: 1234,
      gasPrice: 0x19,
      gasLimit: 0xf4240,
      to: "0x7b65B75d204aBed71587c9E519a89277766EE1d0",
      value: 10,
      from: "0xa94f5374Fce5edBC8E2a8697C15331677e6EbF0B",
      data: "0x68656c6c6f",
      chainId: 0x1,
      txSignatures: [{v: 0x25, r: "0x7d2b0c89ee8afa502b3186413983bfe9a31c5776f4f820210cffe44a7d568d1c", s: "0x2b1cbd587c73b0f54969f6b76ef2fd95cea0c1bb79256a75df9da696278509f3"}],
    },
    canonical: {
      type: "0x10",
      nonce: "0x04d2",
      gasLimit: "0x0f4240",
      gasPrice: "0x19",
      to: "0x7b65B75d204aBed71587c9E519a89277766EE1d0",
      value: "0x0a",
      from: "0xa94f5374Fce5edBC8E2a8697C15331677e6EbF0B",
      data: "0x68656c6c6f",
      chainId: "0x01",
      txSignatures: [["0x25", "0x7d2b0c89ee8afa502b3186413983bfe9a31c5776f4f820210cffe44a7d568d1c", "0x2b1cbd587c73b0f54969f6b76ef2fd95cea0c1bb79256a75df9da696278509f3"]]
    },
    sigRLP: "0xf841b83cf83a108204d219830f4240947b65b75d204abed71587c9e519a89277766ee1d00a94a94f5374fce5edbc8e2a8697c15331677e6ebf0b8568656c6c6f018080",
    txHashRLP: "0x10f8808204d219830f4240947b65b75d204abed71587c9e519a89277766ee1d00a94a94f5374fce5edbc8e2a8697c15331677e6ebf0b8568656c6c6ff845f84325a07d2b0c89ee8afa502b3186413983bfe9a31c5776f4f820210cffe44a7d568d1ca02b1cbd587c73b0f54969f6b76ef2fd95cea0c1bb79256a75df9da696278509f3",
  },
  {
    clazz: TxTypeSmartContractDeploy,
    object: { // Baobab 0x684fdc93d2a082a60bf08860b764b723c173d94f785d5871ec45aedbe32d53e2
      type: 0x28,
      nonce: 532,
      gasPrice: 50000000000,
      gasLimit: 122000,
      value: 0,
      from: "0xA2a8854b1802D8Cd5De631E690817c253d6a9153",
      data: "0x608060405234801561001057600080fd5b5060f78061001f6000396000f3fe6080604052348015600f57600080fd5b5060043610603c5760003560e01c80633fb5c1cb1460415780638381f58a146053578063d09de08a14606d575b600080fd5b6051604c3660046083565b600055565b005b605b60005481565b60405190815260200160405180910390f35b6051600080549080607c83609b565b9190505550565b600060208284031215609457600080fd5b5035919050565b60006001820160ba57634e487b7160e01b600052601160045260246000fd5b506001019056fea2646970667358221220e0f4e7861cb6d7acf0f61d34896310975b57b5bc109681dbbfb2e548ef7546b364736f6c63430008120033",
      humanReadable: false,
      codeFormat: 0,
      chainId: 1001,
      txSignatures: [{v: 0x7f6, r: "0x71f1da31b7a50b34af48479cca07341bcfe8a3d9cb0b930c942b2ca15e7c928a", s: "0x586178ed946103af9b25f343fb0f8e454c1b49561b692100dfc21ba668567f22"}],
    },
    canonical: {
      type: "0x28",
      nonce: "0x0214",
      gasLimit: "0x01dc90",
      gasPrice: "0x0ba43b7400",
      value: "0x",
      to: "0x",
      from: "0xA2a8854b1802D8Cd5De631E690817c253d6a9153",
      data: "0x608060405234801561001057600080fd5b5060f78061001f6000396000f3fe6080604052348015600f57600080fd5b5060043610603c5760003560e01c80633fb5c1cb1460415780638381f58a146053578063d09de08a14606d575b600080fd5b6051604c3660046083565b600055565b005b605b60005481565b60405190815260200160405180910390f35b6051600080549080607c83609b565b9190505550565b600060208284031215609457600080fd5b5035919050565b60006001820160ba57634e487b7160e01b600052601160045260246000fd5b506001019056fea2646970667358221220e0f4e7861cb6d7acf0f61d34896310975b57b5bc109681dbbfb2e548ef7546b364736f6c63430008120033",
      humanReadable: "0x",
      codeFormat: "0x",
      chainId: "0x03e9",
      txSignatures: [["0x07f6", "0x71f1da31b7a50b34af48479cca07341bcfe8a3d9cb0b930c942b2ca15e7c928a", "0x586178ed946103af9b25f343fb0f8e454c1b49561b692100dfc21ba668567f22"]]
    },
    sigRLP: "0xf9014bb90143f9014028820214850ba43b74008301dc90808094a2a8854b1802d8cd5de631e690817c253d6a9153b90116608060405234801561001057600080fd5b5060f78061001f6000396000f3fe6080604052348015600f57600080fd5b5060043610603c5760003560e01c80633fb5c1cb1460415780638381f58a146053578063d09de08a14606d575b600080fd5b6051604c3660046083565b600055565b005b605b60005481565b60405190815260200160405180910390f35b6051600080549080607c83609b565b9190505550565b600060208284031215609457600080fd5b5035919050565b60006001820160ba57634e487b7160e01b600052601160045260246000fd5b506001019056fea2646970667358221220e0f4e7861cb6d7acf0f61d34896310975b57b5bc109681dbbfb2e548ef7546b364736f6c6343000812003380808203e98080",
    txHashRLP: "0x28f90188820214850ba43b74008301dc90808094a2a8854b1802d8cd5de631e690817c253d6a9153b90116608060405234801561001057600080fd5b5060f78061001f6000396000f3fe6080604052348015600f57600080fd5b5060043610603c5760003560e01c80633fb5c1cb1460415780638381f58a146053578063d09de08a14606d575b600080fd5b6051604c3660046083565b600055565b005b605b60005481565b60405190815260200160405180910390f35b6051600080549080607c83609b565b9190505550565b600060208284031215609457600080fd5b5035919050565b60006001820160ba57634e487b7160e01b600052601160045260246000fd5b506001019056fea2646970667358221220e0f4e7861cb6d7acf0f61d34896310975b57b5bc109681dbbfb2e548ef7546b364736f6c634300081200338080f847f8458207f6a071f1da31b7a50b34af48479cca07341bcfe8a3d9cb0b930c942b2ca15e7c928aa0586178ed946103af9b25f343fb0f8e454c1b49561b692100dfc21ba668567f22",
  },
  {
    clazz: TxTypeSmartContractExecution,
    object: {
      type: 0x30,
      nonce: 1234,
      gasPrice: 0x19,
      gasLimit: 0xf4240,
      to: "0x7b65B75d204aBed71587c9E519a89277766EE1d0",
      value: 10,
      from: "0xa94f5374Fce5edBC8E2a8697C15331677e6EbF0B",
      data: "0x6353586b000000000000000000000000bc5951f055a85f41a3b62fd6f68ab7de76d299b2",
      chainId: 0x1,
      txSignatures: [{v: 0x26, r: "0xe4276df1a779274fbb04bc18a0184809eec1ce9770527cebb3d64f926dc1810b", s: "0x4103b828a0671a48d64fe1a3879eae229699f05a684d9c5fd939015dcdd9709b"}],
    },
    canonical: {
      type: "0x30",
      nonce: "0x04d2",
      gasLimit: "0x0f4240",
      gasPrice: "0x19",
      to: "0x7b65B75d204aBed71587c9E519a89277766EE1d0",
      value: "0x0a",
      from: "0xa94f5374Fce5edBC8E2a8697C15331677e6EbF0B",
      data: "0x6353586b000000000000000000000000bc5951f055a85f41a3b62fd6f68ab7de76d299b2",
      chainId: "0x01",
      txSignatures: [["0x26", "0xe4276df1a779274fbb04bc18a0184809eec1ce9770527cebb3d64f926dc1810b", "0x4103b828a0671a48d64fe1a3879eae229699f05a684d9c5fd939015dcdd9709b"]]
    },
    sigRLP: "0xf860b85bf859308204d219830f4240947b65b75d204abed71587c9e519a89277766ee1d00a94a94f5374fce5edbc8e2a8697c15331677e6ebf0ba46353586b000000000000000000000000bc5951f055a85f41a3b62fd6f68ab7de76d299b2018080",
    txHashRLP: "0x30f89f8204d219830f4240947b65b75d204abed71587c9e519a89277766ee1d00a94a94f5374fce5edbc8e2a8697c15331677e6ebf0ba46353586b000000000000000000000000bc5951f055a85f41a3b62fd6f68ab7de76d299b2f845f84326a0e4276df1a779274fbb04bc18a0184809eec1ce9770527cebb3d64f926dc1810ba04103b828a0671a48d64fe1a3879eae229699f05a684d9c5fd939015dcdd9709b",
  },
  {
    clazz: TxTypeAccountUpdate,
    object: {
      type: 0x20,
      nonce: 1234,
      gasPrice: 0x19,
      gasLimit: 0xf4240,
      from: "0xa94f5374Fce5edBC8E2a8697C15331677e6EbF0B",
      key: { type: 2, key: "0x033a514176466fa815ed481ffad09110a2d344f6c9b78c1d14afc351c3a51be33d" },
      chainId: 0x1,
      txSignatures: [{v: 0x25, r: "0xf7d479628f05f51320f0842193e3f7ae55a5b49d3645bf55c35bee1e8fd2593a", s: "0x4de8eab5338fdc86e96f8c49ed516550f793fc2c4007614ce3d2a6b33cf9e451"}],
    },
    canonical: {
      type: "0x20",
      nonce: "0x04d2",
      gasLimit: "0x0f4240",
      gasPrice: "0x19",
      from: "0xa94f5374Fce5edBC8E2a8697C15331677e6EbF0B",
      key: "0x02a1033a514176466fa815ed481ffad09110a2d344f6c9b78c1d14afc351c3a51be33d",
      chainId: "0x01",
      txSignatures: [["0x25", "0xf7d479628f05f51320f0842193e3f7ae55a5b49d3645bf55c35bee1e8fd2593a", "0x4de8eab5338fdc86e96f8c49ed516550f793fc2c4007614ce3d2a6b33cf9e451"]]
    },
    sigRLP: "0xf849b844f842208204d219830f424094a94f5374fce5edbc8e2a8697c15331677e6ebf0ba302a1033a514176466fa815ed481ffad09110a2d344f6c9b78c1d14afc351c3a51be33d018080",
    txHashRLP: "0x20f8888204d219830f424094a94f5374fce5edbc8e2a8697c15331677e6ebf0ba302a1033a514176466fa815ed481ffad09110a2d344f6c9b78c1d14afc351c3a51be33df845f84325a0f7d479628f05f51320f0842193e3f7ae55a5b49d3645bf55c35bee1e8fd2593aa04de8eab5338fdc86e96f8c49ed516550f793fc2c4007614ce3d2a6b33cf9e451",
  },
  {
    clazz: TxTypeCancel,
    object: {
      type: 0x38,
      nonce: 1234,
      gasPrice: 0x19,
      gasLimit: 0xf4240,
      from: "0xa94f5374Fce5edBC8E2a8697C15331677e6EbF0B",
      chainId: 0x1,
      txSignatures: [{v: 0x25, r: "0xfb2c3d53d2f6b7bb1deb5a09f80366a5a45429cc1e3956687b075a9dcad20434", s: "0x5c6187822ee23b1001e9613d29a5d6002f990498d2902904f7f259ab3358216e"}],
    },
    canonical: {
      type: "0x38",
      nonce: "0x04d2",
      gasLimit: "0x0f4240",
      gasPrice: "0x19",
      from: "0xa94f5374Fce5edBC8E2a8697C15331677e6EbF0B",
      chainId: "0x01",
      txSignatures: [["0x25", "0xfb2c3d53d2f6b7bb1deb5a09f80366a5a45429cc1e3956687b075a9dcad20434", "0x5c6187822ee23b1001e9613d29a5d6002f990498d2902904f7f259ab3358216e"]]
    },
    sigRLP: "0xe39fde388204d219830f424094a94f5374fce5edbc8e2a8697c15331677e6ebf0b018080",
    txHashRLP: "0x38f8648204d219830f424094a94f5374fce5edbc8e2a8697c15331677e6ebf0bf845f84325a0fb2c3d53d2f6b7bb1deb5a09f80366a5a45429cc1e3956687b075a9dcad20434a05c6187822ee23b1001e9613d29a5d6002f990498d2902904f7f259ab3358216e",
  },
  {
    clazz: TxTypeFeeDelegatedValueTransfer,
    object: {
      type: 0x09,
      nonce: 1234,
      gasPrice: 0x19,
      gasLimit: 0xf4240,
      to: "0x7b65B75d204aBed71587c9E519a89277766EE1d0",
      value: 10,
      from: "0xa94f5374Fce5edBC8E2a8697C15331677e6EbF0B",
      feePayer: "0x5A0043070275d9f6054307Ee7348bD660849D90f",
      chainId: 0x1,
      txSignatures: [{v: 0x25, r: "0x9f8e49e2ad84b0732984398749956e807e4b526c786af3c5f7416b293e638956", s: "0x6bf88342092f6ff9fabe31739b2ebfa1409707ce54a54693e91a6b9bb77df0e7"}],
      feePayerSignatures: [{v: 0x26, r: "0xf45cf8d7f88c08e6b6ec0b3b562f34ca94283e4689021987abb6b0772ddfd80a", s: "0x298fe2c5aeabb6a518f4cbb5ff39631a5d88be505d3923374f65fdcf63c2955b"}],
    },
    canonical: {
      type: "0x09",
      nonce: "0x04d2",
      gasLimit: "0x0f4240",
      gasPrice: "0x19",
      to: "0x7b65B75d204aBed71587c9E519a89277766EE1d0",
      value: "0x0a",
      from: "0xa94f5374Fce5edBC8E2a8697C15331677e6EbF0B",
      feePayer: "0x5A0043070275d9f6054307Ee7348bD660849D90f",
      chainId: "0x01",
      txSignatures: [["0x25", "0x9f8e49e2ad84b0732984398749956e807e4b526c786af3c5f7416b293e638956", "0x6bf88342092f6ff9fabe31739b2ebfa1409707ce54a54693e91a6b9bb77df0e7"]],
      feePayerSignatures: [["0x26", "0xf45cf8d7f88c08e6b6ec0b3b562f34ca94283e4689021987abb6b0772ddfd80a", "0x298fe2c5aeabb6a518f4cbb5ff39631a5d88be505d3923374f65fdcf63c2955b"]],
    },
    sigRLP: "0xf839b5f4098204d219830f4240947b65b75d204abed71587c9e519a89277766ee1d00a94a94f5374fce5edbc8e2a8697c15331677e6ebf0b018080",
    sigFeePayerRLP: "0xf84eb5f4098204d219830f4240947b65b75d204abed71587c9e519a89277766ee1d00a94a94f5374fce5edbc8e2a8697c15331677e6ebf0b945a0043070275d9f6054307ee7348bd660849d90f018080",
    senderTxHashRLP: "0x09f87a8204d219830f4240947b65b75d204abed71587c9e519a89277766ee1d00a94a94f5374fce5edbc8e2a8697c15331677e6ebf0bf845f84325a09f8e49e2ad84b0732984398749956e807e4b526c786af3c5f7416b293e638956a06bf88342092f6ff9fabe31739b2ebfa1409707ce54a54693e91a6b9bb77df0e7",
    txHashRLP: "0x09f8d68204d219830f4240947b65b75d204abed71587c9e519a89277766ee1d00a94a94f5374fce5edbc8e2a8697c15331677e6ebf0bf845f84325a09f8e49e2ad84b0732984398749956e807e4b526c786af3c5f7416b293e638956a06bf88342092f6ff9fabe31739b2ebfa1409707ce54a54693e91a6b9bb77df0e7945a0043070275d9f6054307ee7348bd660849d90ff845f84326a0f45cf8d7f88c08e6b6ec0b3b562f34ca94283e4689021987abb6b0772ddfd80aa0298fe2c5aeabb6a518f4cbb5ff39631a5d88be505d3923374f65fdcf63c2955b",
  }
  // TODO: TxTypeFeeDelegated*
  // TODO: TxTypeFeeDelegated*WithRatio
];

describe("KlaytnTxFactory", () => {
  describe("without any signatures", () => {
    for (const tc of testcases) {
      it(tc.clazz.typeName, () => {
        const object = _.clone(tc.object);
        delete object.txSignatures;
        delete object.feePayerSignatures;

        const canonical = _.clone(tc.canonical);
        canonical.txSignatures = null;
        if (canonical.feePayerSignatures) {
          canonical.feePayerSignatures = null;
        }

        // Object -> RLP
        const tx = KlaytnTxFactory.fromObject(object);
        assert.instanceOf(tx, tc.clazz);
        assert.deepEqual(tx.toObject(), canonical);
        assert.equal(tx.sigRLP(), tc.sigRLP);
      });
    }
  });
  describe("without feepayer signatures", () => {
    for (const tc of testcases) {
      if (!isFeePayerSigTxType(tc.clazz.type)) {
        continue;
      }
      it(tc.clazz.typeName, () => {
        const object = _.clone(tc.object);
        delete object.feePayerSignatures;

        const canonical = _.clone(tc.canonical);
        canonical.feePayerSignatures = null;

        // Object -> RLP
        const tx = KlaytnTxFactory.fromObject(object);
        assert.instanceOf(tx, tc.clazz);
        assert.deepEqual(tx.toObject(), canonical);
        assert.equal(tx.sigRLP(), tc.sigRLP);
        assert.equal(tx.sigFeePayerRLP(), tc.sigFeePayerRLP);
        assert.equal(tx.senderTxHashRLP(), tc.senderTxHashRLP);

        // (signed) RLP -> Object
        const tx2 = KlaytnTxFactory.fromRLP(tc.senderTxHashRLP as string) as KlaytnTx;
        assert.instanceOf(tx2, tc.clazz);
        assert.equal(tx2.senderTxHashRLP(), tx.senderTxHashRLP());
      });
    }
  });
  describe("with all signatures", () => {
    for (const tc of testcases) {
      it(tc.clazz.typeName, () => {
        const object = _.clone(tc.object);
        const canonical = _.clone(tc.canonical);

        // Object -> RLP
        const tx = KlaytnTxFactory.fromObject(object);
        assert.instanceOf(tx, tc.clazz);
        assert.deepEqual(tx.toObject(), canonical);
        assert.equal(tx.sigRLP(), tc.sigRLP);
        assert.equal(tx.txHashRLP(), tc.txHashRLP);
        if (isFeePayerSigTxType(tc.clazz.type)) {
          assert.equal(tx.sigFeePayerRLP(), tc.sigFeePayerRLP);
          assert.equal(tx.senderTxHashRLP(), tc.senderTxHashRLP);
        }

        // (signed) RLP -> Object
        const tx2 = KlaytnTxFactory.fromRLP(tc.txHashRLP) as KlaytnTx;
        assert.instanceOf(tx2, tc.clazz);
        assert.equal(tx2.txHashRLP(), tc.txHashRLP);
      });
    }
  });

  it("alias input to data", () => {
    const typesWithInput = [
      TxType.ValueTransferMemo,
      TxType.SmartContractDeploy,
      TxType.SmartContractExecution, // TODO: add more
    ];
    _.each(typesWithInput, (type) => {
      assert.equal(KlaytnTxFactory.fromObject({ type, input: "0x6162" }).getField("data"), "0x6162");
      assert.equal(KlaytnTxFactory.fromObject({ type, data: "0x6162" }).getField("data"), "0x6162");
    });
  });

  it("empty to field in SmartContractDeploy", () => {
    const deployTypes = [ // TODO: add 0x29, 0x2a
      TxType.SmartContractDeploy,
    ];
    _.each(deployTypes, (type) => {
      assert.equal(KlaytnTxFactory.fromObject({ type, to: null }).getField("to"), "0x");
      assert.equal(KlaytnTxFactory.fromObject({ type, to: "0x" }).getField("to"), "0x");
      assert.equal(KlaytnTxFactory.fromObject({ type, to: "0x0000000000000000000000000000000000000000" }).getField("to"), "0x");
      assert.equal(KlaytnTxFactory.fromObject({ type, to: "0x7b65B75d204aBed71587c9E519a89277766EE1d0" }).getField("to"), "0x");
    });
  });
});