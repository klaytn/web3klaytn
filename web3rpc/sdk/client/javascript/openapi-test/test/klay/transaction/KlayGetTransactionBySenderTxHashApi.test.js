const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('klay_getTransactionBySenderTxHash API', () => {
    test('should return klay_getTransactionBySenderTxHash', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined();
            if (data !== null) {
                expect(/^0x[a-f0-9]+/.test(data.blockHash)).toBe(true);
            }
            done();
        };
        const transactionHash = "0x21b2919b89278ca786226f10edbaadced7381dbd73df546a4823547aaebffa58"

        sdk.klay.getTransactionBySenderTxHash(transactionHash, {}, callbackOne);
    });
});
