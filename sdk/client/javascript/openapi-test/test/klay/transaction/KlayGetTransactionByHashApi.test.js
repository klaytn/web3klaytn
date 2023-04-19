const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('klay_getTransactionByHash API', () => {
    test('should return klay_getTransactionByHash', (done) => {

        let callbackOne = function (error, data, response) {
            console.log(JSON.stringify(data.result));
            expect(error).toBeNull();
            expect(data.jsonrpc).toBe("2.0");
            expect(data.result).toBeDefined()
            done();
        };
        const transactionHash = '0xa40911eedd636d62f09d5f670856e8f168a4372ca69119796c95df547fd6010c'

        sdk.klay.getTransactionByHash(transactionHash, {}, callbackOne);
    });
});
