const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { BAOBAB_RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(BAOBAB_RPC));

describe('klay_getBlockWithConsensusInfoByHash API', () => {
    test('should return klay_getBlockWithConsensusInfoByHash', (done) => {

        let callbackOne = function (error, data, response) {

            expect(error).toBeNull();
            expect(data).toBeDefined()

            done();
        };
        const blockHash = '0xba647d41423faeebe8a7c64737d284fc2eba6f0388a3e1ebf6243db509ec1577'
        sdk.klay.getBlockWithConsensusInfoByHash(blockHash, {}, callbackOne);
    });
});
