const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");

// need to run local node
const sdk = new OpenSdk(new OpenSdk.ApiClient("http://localhost:8551"));

describe("debug_traceTransaction API", () => {
  test("should return debug_traceTransaction", (done) => {
    let callbackOne = function (error, data, response) {
      expect(error).toBeNull();
      expect(data).toBeDefined();
      expect(typeof data === "object").toBeTruthy();
      expect(typeof data.gas === "number").toBeTruthy();
      done();
    };

    const txHash =
      "0xa4c5d58408d2c0454f14ce9cc538b916385621bbc1c26abe2e28b80bdcb889b1";

    sdk.debug.traceTransaction(txHash, { options: {} }, callbackOne);
  });
});
