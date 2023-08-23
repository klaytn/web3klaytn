const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { BAOBAB_RPC } = require("../../constant");

const sdk = new OpenSdk.klay(new OpenSdk.ApiClient(BAOBAB_RPC));

describe('Klay block number API', () => {
    test('should return block number', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined();
            expect(typeof data === 'number' || /^0x[0-9a-fA-F]+$/.test(data)).toBe(true);
            done();
        };
        sdk.blockNumber({}, callbackOne);
    });
});
