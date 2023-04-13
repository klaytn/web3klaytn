const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('debug_getModifiedAccountsByNumber API', () => {
    test('should return debug_getModifiedAccountsByNumber', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data.jsonrpc).toBe("2.0");
            expect(data.result).toBeDefined()
            done();
        };

        const startBlockNum = 171904
        const endBlockNum = 172160

        sdk.debug.getModifiedAccountsByNumber(startBlockNum, {endBlockNum}, callbackOne);
    });
});

