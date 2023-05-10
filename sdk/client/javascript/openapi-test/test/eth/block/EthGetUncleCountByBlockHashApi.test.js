const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('eth_getUncleCountByBlockHash API', () => {
    test('should return eth_getUncleCountByBlockHash', (done) => {

        let callbackOne = function (error, data, response) {

            expect(error).toBeNull();
            expect(data).toBeDefined()
            done();
        };
        const blockHash = '0xc9dbfbab67e9a0508bcb3f95ae408023668cef431b805592781a821926715b8a'
        sdk.eth.getUncleCountByBlockHash(blockHash, {}, callbackOne);
    });
});
