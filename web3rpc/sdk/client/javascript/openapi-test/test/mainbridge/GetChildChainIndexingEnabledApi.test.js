const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe("mainbridge_getChildChainIndexingEnabled API", () => {
  test("should return mainbridge_getChildChainIndexingEnabled", (done) => {
    let callbackOne = function (error, data, response) {
      expect(error).toBeNull();
      expect(data).toBeDefined();
      expect(typeof data === "boolean").toBeTruthy();

      done();
    };

    sdk.mainbridge.getChildChainIndexingEnabled({}, callbackOne);
  });
});
