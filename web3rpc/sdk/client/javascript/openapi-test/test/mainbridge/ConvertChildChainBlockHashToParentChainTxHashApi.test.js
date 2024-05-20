const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe("mainbridge_convertChildChainBlockHashToParentChainTxHash API", () => {
  test("should return mainbridge_convertChildChainBlockHashToParentChainTxHash", (done) => {
    let callbackOne = function (error, data, response) {
      expect(error).toBeNull();
      expect(data).toBeDefined();
      expect(typeof data === "string").toBeTruthy();

      done();
    };
    const blockHash =
      "0xeadc6a3a29a20c13824b5df1ba05cca1ed248d046382a4f2792aac8a6e0d1880";
    sdk.mainbridge.convertChildChainBlockHashToParentChainTxHash(
      blockHash,
      {},
      callbackOne
    );
  });
});
