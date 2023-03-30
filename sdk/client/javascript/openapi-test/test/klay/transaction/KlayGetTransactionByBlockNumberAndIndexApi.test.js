const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('klay_getTransactionByBlockNumberAndIndex API', () => {
    test.skip('should return klay_getTransactionByBlockNumberAndIndex', (done) => {

        let callbackOne = function (error, data, response) {
            console.log(error,data);
            expect(error).toBeNull();
            expect(data.jsonrpc).toBe("2.0");
            expect(data.result).toBeDefined()
            done();
        };
        const blockHash = 118593751
        const transactionIndexPosition = '0x0'

        sdk.klay.getTransactionByBlockNumberAndIndex(blockHash, transactionIndexPosition, {}, callbackOne);
    });
});
