const OpenSdk = require("@klaytn/web3rpc");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk.DebugApi(new OpenSdk.ApiClient(RPC));

describe('debug_traceBlockByNumber API', () => {
    test('should return debug_traceBlockByNumber', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined();
            expect(Array.isArray(data)).toBeTruthy();
            if (data.length > 0) {
                expect(typeof data[0] === 'object').toBeTruthy();
                expect(typeof data[0].result === 'object').toBeTruthy();
            }
            done();
        };

        const block = 2459;

        sdk.traceBlockByNumber(block, {}, callbackOne);
    });
});

