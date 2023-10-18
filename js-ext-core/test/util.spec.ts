import { BigNumber } from "@ethersproject/bignumber";
import { formatUnits as formatEthUnits, parseUnits as parseEthUnits, formatEther, parseEther } from "@ethersproject/units";
import { assert } from "chai";

import {
  TxType,
  isBasicTxType,
  isFeeDelegationTxType,
  isKlaytnTxType,
  isPartialFeeDelegationTxType,
  getSignatureTuple,
  getRpcTxObject,
  formatKlayUnits,
  formatKlay,
  parseKlayUnits,
  parseKlay,
} from "../src";


describe("util", () => {
  it("TxType", () => {
    // Eth types are not Klaytn TxType
    assert.isFalse(isKlaytnTxType(0));
    assert.isFalse(isBasicTxType(0));
    assert.isFalse(isFeeDelegationTxType(1));
    assert.isFalse(isPartialFeeDelegationTxType(2));

    let ty = TxType.ValueTransfer;
    assert.isTrue(isBasicTxType(ty));
    assert.isFalse(isFeeDelegationTxType(ty));
    assert.isFalse(isPartialFeeDelegationTxType(ty));

    ty = TxType.FeeDelegatedSmartContractExecution;
    assert.isFalse(isBasicTxType(ty));
    assert.isTrue(isFeeDelegationTxType(ty));
    assert.isFalse(isPartialFeeDelegationTxType(ty));

    ty = TxType.FeeDelegatedCancelWithRatio;
    assert.isFalse(isBasicTxType(ty));
    assert.isFalse(isFeeDelegationTxType(ty));
    assert.isTrue(isPartialFeeDelegationTxType(ty));
  });

  it("getSignatureTuple", () => {
    const vNum = 27;
    const vHex = "0x1b";
    const rHex = "0x66809fb130a6ea4ae4e823baa92573a5f1bfb4e88e64048aecfb18a2b4012b99";
    const sHex = "0x75c2c3e5f7b0a182c767137c488649cd5104a5e747371fd922d618e328e5c508";
    const canonical = [vHex, rHex, sHex];

    const testcases = [
      // tuple
      [vHex, rHex, sHex],

      // object
      { v: vNum, r: rHex, s: sHex },
      { recoveryParam: 0, r: rHex, s: sHex },

      // compact
      ("0x" + rHex.substring(2) + sHex.substring(2)),
      ("0x" + rHex.substring(2) + sHex.substring(2) + vHex.substring(2)),
    ];

    for (const tc of testcases) {
      let tuple = getSignatureTuple(tc as any);
      assert.deepEqual(tuple, canonical);
    }
  });

  it("getRpcTxObject", () => {
    let tx = {
      chainId: 42,
      gasLimit: 0x1111,
      gasPrice: 0x222,
      type: 2,
      maxFeePerGas: 0x33,
      maxPriorityFeePerGas: 0x4,
      nonce: 0,
      value: 0,

      from: "0x00000000000000000000000000000000000000aa",
      to: "0x00000000000000000000000000000000000000bb",
      data: "0x",
    };

    let formatted = getRpcTxObject(tx);
    assert.deepEqual(formatted, {
      chainId: "0x2a",
      gas: "0x1111",
      gasPrice: "0x222",
      type: "0x2",
      maxFeePerGas: "0x33",
      maxPriorityFeePerGas: "0x4", // numeric (QUANTITY) encoded without leading zeros
      nonce: "0x0",
      value: "0x0", // zero numeric (QUANTITY) encoded to 0x0

      from: "0x00000000000000000000000000000000000000aa",
      to: "0x00000000000000000000000000000000000000bb",
      data: "0x", // empty bytestring (DATA) encoded to 0x
    });
  });

  describe("formatUnits", () => {
    it("klay units", () => {
      // unit names are case-insensitive.
      const peb = BigNumber.from("1000000000000000000"); // 1e18 peb

      assert.equal(formatKlayUnits(peb, "ston"), "1000000000.0"); // = 1e9 ston
      assert.equal(formatKlayUnits(peb, "gpeb"), "1000000000.0"); // = 1e9 gpeb

      assert.equal(formatKlayUnits(peb, "klay"), "1.0"); // = 1 KLAY
      assert.equal(formatKlayUnits(peb, "KLAY"), "1.0"); // = 1 KLAY
      assert.equal(formatKlay(peb), "1.0");

      assert.equal(formatKlayUnits(peb, "mKLAY"), "1000.0"); // = 1e3 mKLAY
      assert.equal(formatKlayUnits(peb, "MKLAY"), "0.000001"); // = 1e-6 MKLAY
    });

    it("eth units", () => {
      const wei = BigNumber.from("1000000000000000000"); // 1e18 wei
      assert.equal(formatKlayUnits(wei, "gwei"), formatEthUnits(wei, "gwei"));
      assert.equal(formatKlayUnits(wei, "ether"), formatEthUnits(wei, "ether"));
      assert.equal(formatKlay(wei), formatEther(wei));
    });
  });

  describe("parseUnits", () => {
    it("klay units", () => {
      assert.equal(parseKlayUnits("25.0", "ston").toString(), "25000000000"); // 25 ston = 25e9 peb
      assert.equal(parseKlayUnits("25.0", "gpeb").toString(), "25000000000"); // 25 gpeb = 25e9 peb

      assert.equal(parseKlayUnits("123.456", "klay").toString(), "123456000000000000000"); // 123.456 KLAY = 123.456e18 peb
      assert.equal(parseKlayUnits("123.456", "KLAY").toString(), "123456000000000000000"); // 123.456 KLAY = 123.456e18 peb
      assert.equal(parseKlay("123.456").toString(), "123456000000000000000");

      assert.equal(parseKlayUnits("1000.0", "mKLAY").toString(), "1000000000000000000"); // 1000 mKLAY = 1e18 peb
      assert.equal(parseKlayUnits("5", "MKLAY").toString(), "5000000000000000000000000"); // 5 MKLAY = 5e24 peb
    });

    it("eth units", () => {
      assert.equal(parseKlayUnits("77", "gwei").toString(), parseEthUnits("77", "gwei").toString());
      assert.equal(parseKlayUnits("77", "ether").toString(), parseEthUnits("77", "ether").toString());
      assert.equal(parseKlay("77").toString(), parseEther("77").toString());
    });
  });
});