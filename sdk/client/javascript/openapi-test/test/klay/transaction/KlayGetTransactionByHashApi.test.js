const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('klay_getTransactionByHash API', () => {
    test('should return klay_getTransactionByHash', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data.jsonrpc).toBe("2.0");
            expect(data.result).toBeDefined()
            done();
        };
        const transactionHash = '0x21b2919b89278ca786226f10edbaadced7381dbd73df546a4823547aaebffa58'

        sdk.klay.getTransactionByHash(transactionHash, {}, callbackOne);
    });
});
