const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe("mainbridge_addPeer API", () => {
  test("should return mainbridge_", (done) => {
    let callbackOne = function (error, data, response) {
      expect(error).toBeNull();
      expect(data).toBeDefined();
      expect(typeof data === "boolean").toBeTruthy();

      done();
    };

    const toRemovePeerUrl =
      "kni://4f2f47f3bf35a2c576d3345e6e9c49b147d510c05832d2458709f63c3c90c76ead205975d944ed65e77dd4c6f63ebe1ef21d60da95952bc1e200e7487f4d9e1b@123.456.789.012:32323?discport=0";
    sdk.mainbridge.addPeerFromUrl(toRemovePeerUrl, {}, callbackOne);
  });
});
