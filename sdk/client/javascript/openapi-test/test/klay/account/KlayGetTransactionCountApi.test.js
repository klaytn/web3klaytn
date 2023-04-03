const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('klay_getTransactionCount API', () => {
    test('should return klay_getTransactionCount', (done) => {

        let callbackOne = function (error, data, response) {

            expect(error).toBeNull();
            expect(data.jsonrpc).toBe("2.0");
            expect(data.result).toBeDefined()
            done();
        };

        const address = '0xc94770007dda54cF92009BFF0dE90c06F603a09f'
        const blockNumberOrHashOrTag = 'latest'
        sdk.klay.getTransactionCount(address, blockNumberOrHashOrTag, {}, callbackOne);
    });
});

