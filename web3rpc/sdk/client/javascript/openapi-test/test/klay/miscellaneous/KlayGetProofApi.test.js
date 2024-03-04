const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { BAOBAB_RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(BAOBAB_RPC));

describe("klay_getProof API", () => {
  test("should return klay_getProof", (done) => {
    let callbackOne = function (error, data, response) {
      expect(error).toBeNull();
      expect(data).toBeDefined();
      expect(data.codeHash).toMatch(/^0x.*$/gm);
      done();
    };
    const account = "0x0000000000000000000000000000000000000400";
    const keys = ["0x0"];
    const blockNumber = "latest";
    sdk.klay.getProof(account, keys, blockNumber, {}, callbackOne);
  });
});
