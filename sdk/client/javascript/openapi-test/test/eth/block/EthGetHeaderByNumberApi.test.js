const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('eth_getHeaderByNumber API', () => {
    test('should return eth_getHeaderByNumber', (done) => {

        let callbackOne = function (error, data, response) {
        
            expect(error).toBeNull();
            expect(data.jsonrpc).toBe("2.0");
            expect(data.result).toBeDefined()
            done();
        };
        const blockNumber = 1
        sdk.eth.getHeaderByNumber(blockNumber, {}, callbackOne);
    });
});
