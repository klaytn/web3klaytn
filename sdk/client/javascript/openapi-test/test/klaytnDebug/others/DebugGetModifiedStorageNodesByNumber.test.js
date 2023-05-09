const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('debug_getModifiedStorageNodesByNumber.test API', () => {
    test.skip('should return debug_getModifiedStorageNodesByNumber', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data.jsonrpc).toBe("2.0");
            expect(data.result).toBeDefined()
            done();
        };

        const contractAddress = "0x73a7d19d14f7dfac5b799e405e22133b2adc57a6";
        const startBlockNum = 100;
        const endBlockNum = 200;

        sdk.debug.getModifiedStorageNodesByNumber(contractAddress, startBlockNum, endBlockNum, {}, callbackOne);
    });
});

