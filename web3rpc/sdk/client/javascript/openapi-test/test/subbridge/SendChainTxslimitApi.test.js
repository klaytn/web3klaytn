const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe("subbridge_sendChainTxslimit API", () => {
  test("should return subbridge_sendChainTxslimit", (done) => {
    let callbackOne = function (error, data, response) {
      expect(error).toBeNull();
      expect(data).toBeDefined();
      expect(typeof data === "number").toBeTruthy();

      done();
    };

    sdk.subbridge.sendChainTxslimit({}, callbackOne);
  });
});
