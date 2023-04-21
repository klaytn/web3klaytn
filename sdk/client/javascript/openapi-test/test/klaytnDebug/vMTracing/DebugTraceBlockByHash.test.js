const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('debug_traceBlockByHash API', () => {
    test('should return debug_traceBlockByHash', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data.jsonrpc).toBe("2.0");
            expect(data.result).toBeDefined()
            done();
        };

        const blockHash = "0x651722eb826af57fd95a2381c9cc0c162f90087d8283d02945c42b48229edf86";

        sdk.debug.traceBlockByHash(blockHash, {}, callbackOne);
    });
});

