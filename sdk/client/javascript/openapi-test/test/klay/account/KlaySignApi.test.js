const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('klay_sign API', () => {
    test.skip('should return klay_sign', (done) => {

        let callbackOne = function (error, data, response) {
            // expect(error).toBeNull();
            // expect(data.jsonrpc).toBe("2.0");
            // expect(data.result).toBeDefined()
            console.log('API called successfully. Returned data: ' + JSON.stringify(data));
            done();
        };
        const account = '0xbba981bbe3f9590bc1a6e81a3ac62b93a47c94bc'
        const message = '0xdeadbeaf'
        sdk.klay.sign(account, message, {}, callbackOne);
    });
});

