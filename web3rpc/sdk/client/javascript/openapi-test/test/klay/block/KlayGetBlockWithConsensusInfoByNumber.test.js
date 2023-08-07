const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { BAOBAB_RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(BAOBAB_RPC));

describe('klay_getBlockWithConsensusInfoByNumber API', () => {
    test('should return block info.', (done) => {

        let callbackOne = function (error, data, response) {

            expect(error).toBeNull();
            expect(data).toBeDefined();
            expect(data.hash).toBeDefined();
            expect(/^0x[a-fA-F0-9]+/.test(data.hash)).toBe(true);

            done();
        };
        const blockNumber = 1;
        sdk.klay.getBlockWithConsensusInfoByNumber(blockNumber, {}, callbackOne);
    });
});
