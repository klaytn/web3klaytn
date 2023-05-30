const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('klay_getTransactionReceipt API', () => {
    test('should return klay_getTransactionReceipt', (done) => {

        let callbackOne = function (error, data, response) {
            
            expect(error).toBeNull();
            expect(data).toBeDefined()
            done();
        };
        const transactionHash = '0x2781f2f57b2587f6d9ad80a9e5f60158439d2548eebbc23bd806ecb856fe724e'
        sdk.klay.getTransactionReceipt(transactionHash, {}, callbackOne);
    });
});

