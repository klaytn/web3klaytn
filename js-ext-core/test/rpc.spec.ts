import { assert } from "chai";

import { getRpcTxObject } from "../src";

describe("getRpcTxObject", () => {
  it("success", () => {
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
});
