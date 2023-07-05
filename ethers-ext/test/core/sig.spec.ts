import { assert } from "chai";
import { getSignatureTuple } from "../../src/core/sig";

describe("getSignatureTuple", () => {
  it("success", () => {
    const vNum = 27;
    const vHex = "0x1b";
    const rHex = "0x66809fb130a6ea4ae4e823baa92573a5f1bfb4e88e64048aecfb18a2b4012b99";
    const sHex = "0x75c2c3e5f7b0a182c767137c488649cd5104a5e747371fd922d618e328e5c508";
    const canonical = [ vHex, rHex, sHex ];

    const testcases = [
      // tuple
      [ vHex, rHex, sHex ],

      // object
      { v: vNum, r: rHex, s: sHex },
      { recoveryParam: 0, r: rHex, s: sHex },

      // compact
      ("0x" + rHex.substr(2) + sHex.substr(2)),
      ("0x" + rHex.substr(2) + sHex.substr(2) + vHex.substr(2)),
    ];

    for (const tc of testcases) {
      let tuple = getSignatureTuple(tc as any);
    }
  });
});
