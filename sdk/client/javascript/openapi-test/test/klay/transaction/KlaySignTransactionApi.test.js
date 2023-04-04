const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('klay_signTransaction API', () => {
    test.skip('should return klay_signTransaction', (done) => {

        let callbackOne = function (error, data, response) {

            expect(error).toBeNull();
            expect(data.jsonrpc).toBe("2.0");
            expect(data.result).toBeDefined()
            done();
        };
        const transactionData = {
            "from": "0xbba981bbe3f9590bc1a6e81a3ac62b93a47c94bc",
            "to": "0x8d61a599f489f3376afe22e8c3fae819b981c91b",
            "value": "0x10000",
            "gas": "0x1000000",
            "nonce": "0x2",
            "gasprice": "0x25000000000"
        }
        sdk.klay.signTransaction(transactionData, {}, callbackOne);
    });
});

