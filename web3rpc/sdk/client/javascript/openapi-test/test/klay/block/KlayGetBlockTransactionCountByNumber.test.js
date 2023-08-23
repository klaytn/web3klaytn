const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { BAOBAB_RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(BAOBAB_RPC));

describe('Klay getBlockTransactionCountByNumber API', () => {
    test('should return block transaction count.', (done) => {

        let callbackOne = function (error, data, response) {

            expect(error).toBeNull();
            expect(data).toBeDefined();
            expect(/^0x[a-fA-F0-9]+/.test(data)).toBe(true);
            done();
        };
        const blockNumber = 1
        sdk.klay.getBlockTransactionCountByNumber(blockNumber, {}, callbackOne);
    });
});
