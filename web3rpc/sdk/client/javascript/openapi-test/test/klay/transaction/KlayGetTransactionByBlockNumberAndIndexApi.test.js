const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('klay_getTransactionByBlockNumberAndIndex API', () => {
    test('should return klay_getTransactionByBlockNumberAndIndex', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined()
            done();
        };
        const blockNumber = 118593751
        const transactionIndexPosition = '0x0'

        sdk.klay.getTransactionByBlockNumberAndIndex(blockNumber, transactionIndexPosition, {}, callbackOne);
    });
});
