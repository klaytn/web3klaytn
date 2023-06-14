const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('eth_getUncleCountByBlockNumber API', () => {
    test('should return eth_getUncleCountByBlockNumber', (done) => {

        let callbackOne = function (error, data, response) {

            expect(error).toBeNull();
            expect(data).toBeDefined()
            done();
        };
        const blockNumber = 119189116
        sdk.eth.getUncleCountByBlockNumber(blockNumber, {}, callbackOne);
    });
});
