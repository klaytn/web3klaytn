const OpenSdk = require("@klaytn/web3rpc");
const { expect } = require("@jest/globals");

const sdk = new OpenSdk.KlayApi(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));

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
        sdk.getBlockWithConsensusInfoByNumber(blockNumber, {}, callbackOne);
    });
});
