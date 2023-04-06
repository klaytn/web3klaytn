const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('eth_getBlockTransactionCountByNumber API', () => {
    test.skip('should return eth_getBlockTransactionCountByNumber', (done) => {

        let callbackOne = function (error, data, response) {

            expect(error).toBeNull();
            expect(data.jsonrpc).toBe("2.0");
            expect(data.result).toBeDefined()

            done();
        };
        const blockNumber = "0xe8"

        sdk.eth.getBlockTransactionCountByNumber(blockNumber, {}, callbackOne);
    });
});
