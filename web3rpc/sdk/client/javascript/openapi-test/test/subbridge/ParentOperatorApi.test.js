const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe("subbridge_ API", () => {
  test("should return subbridge_", (done) => {
    let callbackOne = function (error, data, response) {
      expect(error).toBeNull();
      expect(data).toBeDefined();
      expect(typeof data === "string").toBeTruthy();

      done();
    };

    sdk.subbridge.parentOperator({}, callbackOne);
  });
});
