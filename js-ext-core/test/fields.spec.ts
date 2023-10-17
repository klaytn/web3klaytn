import { BigNumber } from "@ethersproject/bignumber";
import { assert } from "chai";

import { FieldType, FieldTypeAddress, FieldTypeBool, FieldTypeBytes, FieldTypeSignatureTuples, FieldTypeUint256, FieldTypeUint64, FieldTypeUint8 } from "../src";

function assertField(fieldType: FieldType, value: any, expected: any) {
  assert.deepEqual(fieldType.canonicalize(value), expected);
}

describe("Fields", () => {
  it("FieldTypeAddress", () => {
    assertField(FieldTypeAddress, "0x", "0x0000000000000000000000000000000000000000");
    assertField(FieldTypeAddress, "0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "0xaAaAaAaaAaAaAaaAaAAAAAAAAaaaAaAaAaaAaaAa");
  });

  it("FieldTypeBytes", () => {
    assertField(FieldTypeBytes, "0x", "0x");
    assertField(FieldTypeBytes, "0x1234", "0x1234");
    assertField(FieldTypeBytes, Buffer.from("xyz"), "0x78797a");
  });

  it("FieldTypeUint", () => {
    // Because FieldTypes are supposed to be RLP-friendly,
    // numbers are always padded to even number of hex digits.
    assertField(FieldTypeUint8, 0, "0x");
    assertField(FieldTypeUint8, 2, "0x02");
    assertField(FieldTypeUint8, 27, "0x1b");
    assertField(FieldTypeUint64, BigNumber.from(30123456), "0x01cba5c0");
    assertField(FieldTypeUint256, "25000000000", "0x05d21dba00");
  });

  it("FieldTypeBool", () => {
    assertField(FieldTypeBool, true, "0x01");
    assertField(FieldTypeBool, false, "0x");
  });

  it("FieldTypeSignatureTuples", () => {
    // Comprehensive tests are in sig.spec.ts.
    const vNum = 27;
    const vHex = "0x1b";
    const r1 = "0x66809fb130a6ea4ae4e823baa92573a5f1bfb4e88e64048aecfb18a2b4012b99";
    const s1 = "0x75c2c3e5f7b0a182c767137c488649cd5104a5e747371fd922d618e328e5c508";
    const r2 = "0xfb2c3d53d2f6b7bb1deb5a09f80366a5a45429cc1e3956687b075a9dcad20434";
    const s2 = "0x5c6187822ee23b1001e9613d29a5d6002f990498d2902904f7f259ab3358216e";
    assertField(FieldTypeSignatureTuples,
      [{ v: vNum, r: r1, s: s1 }, { v: vNum, r: r2, s: s2 }],
      [[vHex, r1, s1], [vHex, r2, s2]]);
  });
});