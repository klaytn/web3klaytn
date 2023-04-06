const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('eth_getTransactionByBlockHashAndIndex API', () => {
    test.skip('should return eth_getTransactionByBlockHashAndIndex', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data.jsonrpc).toBe("2.0");
            expect(data.result).toBeDefined()
            done();
        };
        const blockHash = '0xc9dbfbab67e9a0508bcb3f95ae408023668cef431b805592781a821926715b8a'
        const index = '0x0'
        sdk.eth.getTransactionByBlockHashAndIndex(blockHash, index, {}, callbackOne);
    });
});
