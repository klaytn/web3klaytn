const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { BAOBAB_RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(BAOBAB_RPC));

describe('Klay getHeaderByNumber API', () => {
    test('should return getHeaderByNumber.', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined();
            expect(data.hash).toMatch(new RegExp(`^0x?`));
            done();
        };
        const blockNumber = 1
        sdk.klay.getHeaderByNumber(blockNumber, {}, callbackOne);
    });
});
