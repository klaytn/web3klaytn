const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('debug_traceBlockByNumber API', () => {
    test('should return debug_traceBlockByNumber', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined()
            done();
        };

        const block = 2459;

        sdk.debug.traceBlockByNumber(block, {}, callbackOne);
    });
});

