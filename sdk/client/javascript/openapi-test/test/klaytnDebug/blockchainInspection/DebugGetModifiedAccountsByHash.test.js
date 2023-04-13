const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('debug_getModifiedAccountsByHash API', () => {
    test('should return debug_getModifiedAccountsByHash', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data.jsonrpc).toBe("2.0");
            expect(data.result).toBeDefined()
            done();
        };

        const startBlockHash = "0xf07cd36ec44fc4b540dd9423317fd49171f03cc6063e8b517dfc9fe14d08ab7a"
        const endBlockHash = "0xef15330537698b6cdfe31966cd0e0264af191c828a03a1a40e23ad465917b215"

        sdk.debug.getModifiedAccountsByHash(startBlockHash, {endBlockHash}, callbackOne);
    });
});

