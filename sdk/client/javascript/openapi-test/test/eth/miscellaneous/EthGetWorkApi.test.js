const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('eth_getWork API', () => {
    test.skip('should return eth_getWork', (done) => {

        let callbackOne = function (error, data, response) {
           
            expect(error).toBeNull();
            expect(data.jsonrpc).toBe("2.0");
            expect(data.result).toBeDefined()
            done();
        };

        sdk.eth.getWork({}, callbackOne);
    });
});
