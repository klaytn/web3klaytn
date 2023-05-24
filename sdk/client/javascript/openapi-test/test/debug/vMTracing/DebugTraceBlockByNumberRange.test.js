const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('debug_traceBlockByNumberRange API', () => {
    test('should return debug_traceBlockByNumberRange', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined()
            done();
        };

        const startBlock = 21;
        const endBlock = 30;

        sdk.debug.traceBlockByNumberRange(startBlock, endBlock, {}, callbackOne);
    });
});

