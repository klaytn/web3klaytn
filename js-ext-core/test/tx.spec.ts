import { assert } from "chai";
import { BigNumber } from "@ethersproject/bignumber";
import _ from "lodash";

import {
  KlaytnTx,
  KlaytnTxFactory,
  TxType,
  TxTypeValueTransfer,
  TxTypeValueTransferMemo,
  TxTypeSmartContractDeploy,
  TxTypeSmartContractExecution,
  TxTypeAccountUpdate,
  TxTypeCancel,
  TxTypeFeeDelegatedValueTransfer,
  TxTypeFeeDelegatedValueTransferMemo,
  TxTypeFeeDelegatedSmartContractDeploy,
  TxTypeFeeDelegatedSmartContractExecution,
  TxTypeFeeDelegatedAccountUpdate,
  TxTypeFeeDelegatedCancel,
  TxTypeFeeDelegatedValueTransferWithRatio,
  TxTypeFeeDelegatedValueTransferMemoWithRatio,
  TxTypeFeeDelegatedSmartContractDeployWithRatio,
  TxTypeFeeDelegatedSmartContractExecutionWithRatio,
  TxTypeFeeDelegatedAccountUpdateWithRatio,
  TxTypeFeeDelegatedCancelWithRatio,
  isFeePayerSigTxType,
  parseTransaction
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
  },
  {
    clazz: TxTypeFeeDelegatedValueTransferMemo,
    object: {
      type: 0x11,
      nonce: 1234,
      gasPrice: 0x19,
      gasLimit: 0xf4240,
      to: "0x7b65B75d204aBed71587c9E519a89277766EE1d0",
      value: 10,
      from: "0xa94f5374Fce5edBC8E2a8697C15331677e6EbF0B",
      feePayer: "0x5A0043070275d9f6054307Ee7348bD660849D90f",
      data: "0x68656c6c6f",
      chainId: 0x1,
      txSignatures: [{v: 0x26, r: "0x64e213aef0167fbd853f8f9989ef5d8b912a77457395ccf13d7f37009edd5c5b", s: "0x5d0c2e55e4d8734fe2516ed56ac628b74c0eb02aa3b6eda51e1e25a1396093e1"}],
      feePayerSignatures: [{v: 0x26, r: "0x87390ac14d3c34440b6ddb7b190d3ebde1a07d9a556e5a82ce7e501f24a060f9", s: "0x37badbcb12cda1ed67b12b1831683a08a3adadee2ea760a07a46bdbb856fea44"}],
    },
    canonical: {
      type: "0x11",
      nonce: "0x04d2",
      gasLimit: "0x0f4240",
      gasPrice: "0x19",
      to: "0x7b65B75d204aBed71587c9E519a89277766EE1d0",
      value: "0x0a",
      from: "0xa94f5374Fce5edBC8E2a8697C15331677e6EbF0B",
      feePayer: "0x5A0043070275d9f6054307Ee7348bD660849D90f",
      data: "0x68656c6c6f",
      chainId: "0x01",
      txSignatures: [["0x26", "0x64e213aef0167fbd853f8f9989ef5d8b912a77457395ccf13d7f37009edd5c5b", "0x5d0c2e55e4d8734fe2516ed56ac628b74c0eb02aa3b6eda51e1e25a1396093e1"]],
      feePayerSignatures: [["0x26", "0x87390ac14d3c34440b6ddb7b190d3ebde1a07d9a556e5a82ce7e501f24a060f9", "0x37badbcb12cda1ed67b12b1831683a08a3adadee2ea760a07a46bdbb856fea44"]],
    },
    sigRLP: "0xf841b83cf83a118204d219830f4240947b65b75d204abed71587c9e519a89277766ee1d00a94a94f5374fce5edbc8e2a8697c15331677e6ebf0b8568656c6c6f018080",
    sigFeePayerRLP: "0xf856b83cf83a118204d219830f4240947b65b75d204abed71587c9e519a89277766ee1d00a94a94f5374fce5edbc8e2a8697c15331677e6ebf0b8568656c6c6f945a0043070275d9f6054307ee7348bd660849d90f018080", 
    senderTxHashRLP: "0x11f8808204d219830f4240947b65b75d204abed71587c9e519a89277766ee1d00a94a94f5374fce5edbc8e2a8697c15331677e6ebf0b8568656c6c6ff845f84326a064e213aef0167fbd853f8f9989ef5d8b912a77457395ccf13d7f37009edd5c5ba05d0c2e55e4d8734fe2516ed56ac628b74c0eb02aa3b6eda51e1e25a1396093e1",
    txHashRLP: "0x11f8dc8204d219830f4240947b65b75d204abed71587c9e519a89277766ee1d00a94a94f5374fce5edbc8e2a8697c15331677e6ebf0b8568656c6c6ff845f84326a064e213aef0167fbd853f8f9989ef5d8b912a77457395ccf13d7f37009edd5c5ba05d0c2e55e4d8734fe2516ed56ac628b74c0eb02aa3b6eda51e1e25a1396093e1945a0043070275d9f6054307ee7348bd660849d90ff845f84326a087390ac14d3c34440b6ddb7b190d3ebde1a07d9a556e5a82ce7e501f24a060f9a037badbcb12cda1ed67b12b1831683a08a3adadee2ea760a07a46bdbb856fea44",
  },
  {
    clazz: TxTypeFeeDelegatedSmartContractDeploy,
    object: {  //'0x99450b067297bbbf3a97ab3d6680ee8a55831c660a1e9f049dd5500327c8b130'
      type: 0x29,
      nonce: 563,
      gasPrice: '0xba43b7400',
      gasLimit: 325793,
      value: 0,
      from: "0xa2a8854b1802d8cd5de631e690817c253d6a9153",
      feePayer: '0xCb0eb737dfda52756495A5e08A9b37AAB3b271dA',
      data: "0x608060405234801561001057600080fd5b5060f78061001f6000396000f3fe6080604052348015600f57600080fd5b5060043610603c5760003560e01c80633fb5c1cb1460415780638381f58a146053578063d09de08a14606d575b600080fd5b6051604c3660046083565b600055565b005b605b60005481565b60405190815260200160405180910390f35b6051600080549080607c83609b565b9190505550565b600060208284031215609457600080fd5b5035919050565b60006001820160ba57634e487b7160e01b600052601160045260246000fd5b506001019056fea2646970667358221220e0f4e7861cb6d7acf0f61d34896310975b57b5bc109681dbbfb2e548ef7546b364736f6c63430008120033",
      humanReadable: false,
      codeFormat: 0,
      chainId: 1001,
      txSignatures: [{v: 0x7f6, r: "0x735b4c96ba68f0853c2ca6836b8fd8246226a453ae82494a00e3e2d1aef3829a", s: "0x05919cbccf2a7a9533719d71502510018f313eb2cef504a4386efe7b615ce570"}],
      feePayerSignatures: [{v: 0x7f5, r: "0x7799cedd67d7f9b603f2fae6e746aff154530a33d96cd35ee57fad66dd70015f", s: "0x107e893f829df641a00e8c713d2ec795b7153af205d7b6733ec240a5ae3935d8"}],
    },
    canonical: {
      type: "0x29",
      nonce: "0x0233",
      gasLimit: "0x04f8a1",
      gasPrice: "0x0ba43b7400",
      value: "0x",
      to: "0x",
      from: "0xA2a8854b1802D8Cd5De631E690817c253d6a9153",
      feePayer: "0xCb0eb737dfda52756495A5e08A9b37AAB3b271dA",
      data: "0x608060405234801561001057600080fd5b5060f78061001f6000396000f3fe6080604052348015600f57600080fd5b5060043610603c5760003560e01c80633fb5c1cb1460415780638381f58a146053578063d09de08a14606d575b600080fd5b6051604c3660046083565b600055565b005b605b60005481565b60405190815260200160405180910390f35b6051600080549080607c83609b565b9190505550565b600060208284031215609457600080fd5b5035919050565b60006001820160ba57634e487b7160e01b600052601160045260246000fd5b506001019056fea2646970667358221220e0f4e7861cb6d7acf0f61d34896310975b57b5bc109681dbbfb2e548ef7546b364736f6c63430008120033",
      humanReadable: "0x",
      codeFormat: "0x",
      chainId: "0x03e9",
      txSignatures: [["0x07f6", "0x735b4c96ba68f0853c2ca6836b8fd8246226a453ae82494a00e3e2d1aef3829a", "0x05919cbccf2a7a9533719d71502510018f313eb2cef504a4386efe7b615ce570"]],
      feePayerSignatures: [["0x07f5", "0x7799cedd67d7f9b603f2fae6e746aff154530a33d96cd35ee57fad66dd70015f", "0x107e893f829df641a00e8c713d2ec795b7153af205d7b6733ec240a5ae3935d8"]],
    },
    sigRLP: "",
    sigFeePayerRLP: "",
    senderTxHashRLP: "0x29f90188820233850ba43b74008304f8a1808094a2a8854b1802d8cd5de631e690817c253d6a9153b90116608060405234801561001057600080fd5b5060f78061001f6000396000f3fe6080604052348015600f57600080fd5b5060043610603c5760003560e01c80633fb5c1cb1460415780638381f58a146053578063d09de08a14606d575b600080fd5b6051604c3660046083565b600055565b005b605b60005481565b60405190815260200160405180910390f35b6051600080549080607c83609b565b9190505550565b600060208284031215609457600080fd5b5035919050565b60006001820160ba57634e487b7160e01b600052601160045260246000fd5b506001019056fea2646970667358221220e0f4e7861cb6d7acf0f61d34896310975b57b5bc109681dbbfb2e548ef7546b364736f6c634300081200338080f847f8458207f6a0735b4c96ba68f0853c2ca6836b8fd8246226a453ae82494a00e3e2d1aef3829aa005919cbccf2a7a9533719d71502510018f313eb2cef504a4386efe7b615ce570",
    txHashRLP: "0x29f901e6820233850ba43b74008304f8a1808094a2a8854b1802d8cd5de631e690817c253d6a9153b90116608060405234801561001057600080fd5b5060f78061001f6000396000f3fe6080604052348015600f57600080fd5b5060043610603c5760003560e01c80633fb5c1cb1460415780638381f58a146053578063d09de08a14606d575b600080fd5b6051604c3660046083565b600055565b005b605b60005481565b60405190815260200160405180910390f35b6051600080549080607c83609b565b9190505550565b600060208284031215609457600080fd5b5035919050565b60006001820160ba57634e487b7160e01b600052601160045260246000fd5b506001019056fea2646970667358221220e0f4e7861cb6d7acf0f61d34896310975b57b5bc109681dbbfb2e548ef7546b364736f6c634300081200338080f847f8458207f6a0735b4c96ba68f0853c2ca6836b8fd8246226a453ae82494a00e3e2d1aef3829aa005919cbccf2a7a9533719d71502510018f313eb2cef504a4386efe7b615ce57094cb0eb737dfda52756495a5e08a9b37aab3b271daf847f8458207f5a07799cedd67d7f9b603f2fae6e746aff154530a33d96cd35ee57fad66dd70015fa0107e893f829df641a00e8c713d2ec795b7153af205d7b6733ec240a5ae3935d8",
  },
  {
    clazz: TxTypeFeeDelegatedSmartContractExecution,
    object: {
      type: 0x31,
      nonce: 1234,
      gasPrice: 0x19,
      gasLimit: 0xf4240,
      to: "0x7b65B75d204aBed71587c9E519a89277766EE1d0",
      value: 10,
      from: "0xa94f5374Fce5edBC8E2a8697C15331677e6EbF0B",
      feePayer: "0x5A0043070275d9f6054307Ee7348bD660849D90f",
      data: "0x6353586b0000000000000000000000000fcda0f2efbe1b4e61b487701ce4f2f8abc3723d",
      chainId: 0x1,
      txSignatures: [{v: 0x25, r: "0x253aea7d2c37160da45e84afbb45f6b3341cf1e8fc2df4ecc78f14adb512dc4f", s: "0x22465b74015c2a8f8501186bb5e200e6ce44be52e9374615a7e7e21c41bc27b5"}],
      feePayerSignatures: [{v: 0x26, r: "0xe7c51db7b922c6fa2a941c9687884c593b1b13076bdf0c473538d826bf7b9d1a", s: "0x5b0de2aabb84b66db8bf52d62f3d3b71b592e3748455630f1504c20073624d80"}],
    },
    canonical: {
      type: "0x31",
      nonce: "0x04d2",
      gasLimit: "0x0f4240",
      gasPrice: "0x19",
      to: "0x7b65B75d204aBed71587c9E519a89277766EE1d0",
      value: "0x0a",
      from: "0xa94f5374Fce5edBC8E2a8697C15331677e6EbF0B",
      feePayer: "0x5A0043070275d9f6054307Ee7348bD660849D90f", 
      data: "0x6353586b0000000000000000000000000fcda0f2efbe1b4e61b487701ce4f2f8abc3723d",
      chainId: "0x01",
      txSignatures: [["0x25", "0x253aea7d2c37160da45e84afbb45f6b3341cf1e8fc2df4ecc78f14adb512dc4f", "0x22465b74015c2a8f8501186bb5e200e6ce44be52e9374615a7e7e21c41bc27b5"]],
      feePayerSignatures: [["0x26","0xe7c51db7b922c6fa2a941c9687884c593b1b13076bdf0c473538d826bf7b9d1a", "0x5b0de2aabb84b66db8bf52d62f3d3b71b592e3748455630f1504c20073624d80"]],
    },
    sigRLP: "0xf860b85bf859318204d219830f4240947b65b75d204abed71587c9e519a89277766ee1d00a94a94f5374fce5edbc8e2a8697c15331677e6ebf0ba46353586b000000000000000000000000bc5951f055a85f41a3b62fd6f68ab7de76d299b2018080",
    sigFeePayerRLP: "0xf875b85bf859318204d219830f4240947b65b75d204abed71587c9e519a89277766ee1d00a94a94f5374fce5edbc8e2a8697c15331677e6ebf0ba46353586b000000000000000000000000bc5951f055a85f41a3b62fd6f68ab7de76d299b2945a0043070275d9f6054307ee7348bd660849d90f018080",
    senderTxHashRLP: "0x31f89f8204d219830f4240947b65b75d204abed71587c9e519a89277766ee1d00a94a94f5374fce5edbc8e2a8697c15331677e6ebf0ba46353586b000000000000000000000000bc5951f055a85f41a3b62fd6f68ab7de76d299b2f845f84325a0253aea7d2c37160da45e84afbb45f6b3341cf1e8fc2df4ecc78f14adb512dc4fa022465b74015c2a8f8501186bb5e200e6ce44be52e9374615a7e7e21c41bc27b5",
    txHashRLP: "0x31f8fb8204d219830f4240947b65b75d204abed71587c9e519a89277766ee1d00a94a94f5374fce5edbc8e2a8697c15331677e6ebf0ba46353586b000000000000000000000000bc5951f055a85f41a3b62fd6f68ab7de76d299b2f845f84325a0253aea7d2c37160da45e84afbb45f6b3341cf1e8fc2df4ecc78f14adb512dc4fa022465b74015c2a8f8501186bb5e200e6ce44be52e9374615a7e7e21c41bc27b5945a0043070275d9f6054307ee7348bd660849d90ff845f84326a0e7c51db7b922c6fa2a941c9687884c593b1b13076bdf0c473538d826bf7b9d1aa05b0de2aabb84b66db8bf52d62f3d3b71b592e3748455630f1504c20073624d80",
  },
  {
    clazz: TxTypeFeeDelegatedAccountUpdate,
    object: {
      type: 0x21,
      nonce: 1234,
      gasPrice: 0x19,
      gasLimit: 0xf4240,
      from: "0xa94f5374Fce5edBC8E2a8697C15331677e6EbF0B",
      feePayer: "0x5A0043070275d9f6054307Ee7348bD660849D90f",
      key: { type: 2, key: "0x033a514176466fa815ed481ffad09110a2d344f6c9b78c1d14afc351c3a51be33d" },
      chainId: 0x1,
      txSignatures: [{v: 0x26, r: "0xab69d9adca15d9763c4ce6f98b35256717c6e932007658f19c5a255de9e70dda", s: "0x26aa676a3a1a6e96aff4a3df2335788d614d54fb4db1c3c48551ce1fa7ac5e52"}],
      feePayerSignatures: [{v: 0x26, r: "0xf295cd69b4144d9dbc906ba144933d2cc535d9d559f7a92b4672cc5485bf3a60", s: "0x784b8060234ffd64739b5fc2f2503939340ab4248feaa6efcf62cb874345fe40"}],
    },
    canonical: {
      type: "0x21",
      nonce: "0x04d2",
      gasLimit: "0x0f4240",
      gasPrice: "0x19",
      from: "0xa94f5374Fce5edBC8E2a8697C15331677e6EbF0B",
      feePayer: "0x5A0043070275d9f6054307Ee7348bD660849D90f",
      key: "0x02a1033a514176466fa815ed481ffad09110a2d344f6c9b78c1d14afc351c3a51be33d",
      chainId: "0x01",
      txSignatures: [["0x26", "0xab69d9adca15d9763c4ce6f98b35256717c6e932007658f19c5a255de9e70dda", "0x26aa676a3a1a6e96aff4a3df2335788d614d54fb4db1c3c48551ce1fa7ac5e52"]],
      feePayerSignatures: [["0x26", "0xf295cd69b4144d9dbc906ba144933d2cc535d9d559f7a92b4672cc5485bf3a60", "0x784b8060234ffd64739b5fc2f2503939340ab4248feaa6efcf62cb874345fe40"]]
    },
    sigRLP: "0xf849b844f842218204d219830f424094a94f5374fce5edbc8e2a8697c15331677e6ebf0ba302a1033a514176466fa815ed481ffad09110a2d344f6c9b78c1d14afc351c3a51be33d018080",
    sigFeePayerRLP: "0xf85eb844f842218204d219830f424094a94f5374fce5edbc8e2a8697c15331677e6ebf0ba302a1033a514176466fa815ed481ffad09110a2d344f6c9b78c1d14afc351c3a51be33d945a0043070275d9f6054307ee7348bd660849d90f018080",
    senderTxHashRLP: "0x21f8888204d219830f424094a94f5374fce5edbc8e2a8697c15331677e6ebf0ba302a1033a514176466fa815ed481ffad09110a2d344f6c9b78c1d14afc351c3a51be33df845f84326a0ab69d9adca15d9763c4ce6f98b35256717c6e932007658f19c5a255de9e70ddaa026aa676a3a1a6e96aff4a3df2335788d614d54fb4db1c3c48551ce1fa7ac5e52",
    txHashRLP: "0x21f8e48204d219830f424094a94f5374fce5edbc8e2a8697c15331677e6ebf0ba302a1033a514176466fa815ed481ffad09110a2d344f6c9b78c1d14afc351c3a51be33df845f84326a0ab69d9adca15d9763c4ce6f98b35256717c6e932007658f19c5a255de9e70ddaa026aa676a3a1a6e96aff4a3df2335788d614d54fb4db1c3c48551ce1fa7ac5e52945a0043070275d9f6054307ee7348bd660849d90ff845f84326a0f295cd69b4144d9dbc906ba144933d2cc535d9d559f7a92b4672cc5485bf3a60a0784b8060234ffd64739b5fc2f2503939340ab4248feaa6efcf62cb874345fe40",
  },
  {
    clazz: TxTypeFeeDelegatedCancel,
    object: {
      type: 0x39,
      nonce: 1234,
      gasPrice: 0x19,
      gasLimit: 0xf4240,
      from: "0xa94f5374Fce5edBC8E2a8697C15331677e6EbF0B",
      feePayer: "0x5A0043070275d9f6054307Ee7348bD660849D90f",
      chainId: 0x1,
      txSignatures: [{v: 0x26, r: "0x8409f5441d4725f90905ad87f03793857d124de7a43169bc67320cd2f020efa9", s: "0x60af63e87bdc565d7f7de906916b2334336ee7b24d9a71c9521a67df02e7ec92"}],
      reePayerSignatures: [{v: 0x26, r: "0x44d5b25e8c649a1fdaa409dc3817be390ad90a17c25bc17c89b6d5d248495e0", s: "0x73938e690d27b5267c73108352cf12d01de7fd0077b388e94721aa1fa32f85ec"}]
    },
    canonical: {
      type: "0x39",
      nonce: "0x04d2",
      gasLimit: "0x0f4240",
      gasPrice: "0x19",
      from: "0xa94f5374Fce5edBC8E2a8697C15331677e6EbF0B",
      feePayer: "0x5A0043070275d9f6054307Ee7348bD660849D90f",
      chainId: "0x01",
      txSignatures: [["0x26", "0x8409f5441d4725f90905ad87f03793857d124de7a43169bc67320cd2f020efa9", "0x60af63e87bdc565d7f7de906916b2334336ee7b24d9a71c9521a67df02e7ec92"]],
      reePayerSignatures: [["0x26", "0x44d5b25e8c649a1fdaa409dc3817be390ad90a17c25bc17c89b6d5d248495e0", "0x73938e690d27b5267c73108352cf12d01de7fd0077b388e94721aa1fa32f85ec"]]
    },
    sigRLP: "0xe39fde398204d219830f424094a94f5374fce5edbc8e2a8697c15331677e6ebf0b018080",
    sigFeePayerRLP: "0xf8389fde398204d219830f424094a94f5374fce5edbc8e2a8697c15331677e6ebf0b945a0043070275d9f6054307ee7348bd660849d90f018080",
    senderTxHashRLP: "0x39f8648204d219830f424094a94f5374fce5edbc8e2a8697c15331677e6ebf0bf845f84326a08409f5441d4725f90905ad87f03793857d124de7a43169bc67320cd2f020efa9a060af63e87bdc565d7f7de906916b2334336ee7b24d9a71c9521a67df02e7ec92",
    txHashRLP: "0x39f8c08204d219830f424094a94f5374fce5edbc8e2a8697c15331677e6ebf0bf845f84326a08409f5441d4725f90905ad87f03793857d124de7a43169bc67320cd2f020efa9a060af63e87bdc565d7f7de906916b2334336ee7b24d9a71c9521a67df02e7ec92945a0043070275d9f6054307ee7348bd660849d90ff845f84326a0044d5b25e8c649a1fdaa409dc3817be390ad90a17c25bc17c89b6d5d248495e0a073938e690d27b5267c73108352cf12d01de7fd0077b388e94721aa1fa32f85ec",
  },
  
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

  describe("parseTransaction", () => {
    it("klaytn txtype", () => {
      const rlp = testcases[0].txHashRLP;
      const obj = testcases[0].canonical;
      assert.deepEqual(parseTransaction(rlp), obj);
    });
    it("klaytn txtype", () => {
      const rlp = testcases[1].txHashRLP;
      const obj = testcases[1].canonical;
      assert.deepEqual(parseTransaction(rlp), obj);
    });
    it.only("eth txtype", () => {
      // let wallet = ethers.Wallet.createRandom();
      // wallet.signTransaction({ to: wallet.address, value: 0x1234 });
      const rlp = "0xf85f808080944f097405c6486cfd00d2daae9bec709590832eb3821234801ca0ba1fa1a6de839161a29db9f6733aab8d789eeb65ffa139b245d09e65398b75e3a00f46258a9f2f358041de590156396a9426f98d9a3bdbd22ed91c609b2359075d";
      const obj = {
        nonce: 0,
        gasPrice: BigNumber.from(0),
        gasLimit: BigNumber.from(0),
        to: '0x4F097405C6486Cfd00d2dAae9bEC709590832eb3',
        value: BigNumber.from(0x1234),
        data: '0x',
        chainId: 0,
        v: 28,
        r: '0xba1fa1a6de839161a29db9f6733aab8d789eeb65ffa139b245d09e65398b75e3',
        s: '0x0f46258a9f2f358041de590156396a9426f98d9a3bdbd22ed91c609b2359075d',
        from: '0x4F097405C6486Cfd00d2dAae9bEC709590832eb3',
        hash: '0xa0a675580c5ad468f51ba3029b2769a8fbaf6af6a97d802f49d3c8ab897d2372',
        type: null
      };
      assert.deepEqual(parseTransaction(rlp), obj);
    });
  });
});
