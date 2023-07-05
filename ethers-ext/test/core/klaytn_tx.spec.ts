import { assert } from "chai";
import { KlaytnTxFactory } from "../../src/core";

// Non-canonical types, as user-supplied values.
const nonce = 1234;
const gasPrice = 25e9;
const gasLimit = 30000;
const value = 1e12;
const chainId = 31337;
const from = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
const to = "0x70997970C51812dc3A010C7d01b50e0d17dc79C8";
const txSignatures = [[
  "0x1b",
  "0x66809fb130a6ea4ae4e823baa92573a5f1bfb4e88e64048aecfb18a2b4012b99",
  "0x75c2c3e5f7b0a182c767137c488649cd5104a5e747371fd922d618e328e5c508",
]];

interface txTestCase {
  name: string;
  obj: any;
  sigRLP: string;
  txRLP: string;
  // TODO: feePayer test cases
}

const txTestCases: txTestCase[] = [
  {
    name: "TxTypeValueTransfer",
    obj: { type: 0x08, nonce, gasPrice, gasLimit, to, value, from, chainId, txSignatures },
    sigRLP: "0xf846b83ff83d088204d28505d21dba008275309470997970c51812dc3a010c7d01b50e0d17dc79c885e8d4a5100094f39fd6e51aad88f6f4ce6ab8827279cfffb92266827a698080",
    txRLP: "0x08f8838204d28505d21dba008275309470997970c51812dc3a010c7d01b50e0d17dc79c885e8d4a5100094f39fd6e51aad88f6f4ce6ab8827279cfffb92266f845f8431ba066809fb130a6ea4ae4e823baa92573a5f1bfb4e88e64048aecfb18a2b4012b99a075c2c3e5f7b0a182c767137c488649cd5104a5e747371fd922d618e328e5c508",
  },
];

describe("TypedTxFactory", () => {

  // Generate mocha tests from test cases
  for (const tc of txTestCases) {
    it(tc.name, () => {
      let tx = KlaytnTxFactory.fromObject(tc.obj);
      assert.equal(tx.getField(tc.name), tc.name);
      assert.equal(tx.sigRLP(), tc.sigRLP);
      assert.equal(tx.txHashRLP(), tc.txRLP);

      tx = KlaytnTxFactory.fromRLP(tc.txRLP);
      assert.equal(tx.txHashRLP(), tc.txRLP);
    });
  }
});
