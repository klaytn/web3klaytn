const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('eth_getTransactionByBlockNumberAndIndex API', () => {
    test('should return eth_getTransactionByBlockNumberAndIndex', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data.jsonrpc).toBe("2.0");
            expect(data.result).toBeDefined()
            done();
        };
        const blockNumber = 118593751
        const index = '0x0'
        sdk.eth.getTransactionByBlockNumberAndIndex(blockNumber, index, {}, callbackOne);
    });
});
