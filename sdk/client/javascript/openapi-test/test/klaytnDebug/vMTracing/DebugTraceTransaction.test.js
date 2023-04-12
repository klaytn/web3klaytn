const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('debug_traceTransaction API', () => {
    test('should return debug_traceTransaction', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data.jsonrpc).toBe("2.0");
            // expect(data.result).toBeDefined()
            done();
        };

        const txHash = "0x07f6057bc93aca52e53cdbfac9b9830f6a9cae2b3f48f0b47e4cb54959143d09";

        sdk.debug.traceTransaction(txHash, {}, callbackOne);
    });
});

