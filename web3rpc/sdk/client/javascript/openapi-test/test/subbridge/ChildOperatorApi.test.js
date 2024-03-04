const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe("subbridge_childOperator API", () => {
  test("should return subbridge_childOperator", (done) => {
    let callbackOne = function (error, data, response) {
      expect(error).toBeNull();
      expect(data).toBeDefined();
      expect(typeof data === "string").toBeTruthy();

      done();
    };

    sdk.subbridge.childOperator({}, callbackOne);
  });
});
