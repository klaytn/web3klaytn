const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('klay_getBlockWithConsensusInfoByNumberRange API', () => {
    test('should return klay_getBlockWithConsensusInfoByNumberRange', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined()
            expect(data['0x1'].hash).toMatch(/^0x[a-fA-F0-9]+/)
            done();
        };
        const blockHashOrBlockNumber=1
        const range=10
        sdk.klay.getBlockWithConsensusInfoByNumberRange(blockHashOrBlockNumber,range, {}, callbackOne);
    });
});