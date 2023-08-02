const OpenSdk = require("@klaytn/web3rpc");
const { expect } = require("@jest/globals");
const { BAOBAB_RPC } = require("../../constant");

const sdk = new OpenSdk.DebugApi(new OpenSdk.ApiClient(BAOBAB_RPC));

describe('debug_getModifiedAccountsByNumber API', () => {
    test('should return debug_getModifiedAccountsByNumber', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined();
            expect(Array.isArray(data)).toBe(true);
            done();
        };

        const startBlockNum = 171904
        const endBlockNum = 172160

        sdk.getModifiedAccountsByNumber(startBlockNum, {endBlockNum}, callbackOne);
    });
});

