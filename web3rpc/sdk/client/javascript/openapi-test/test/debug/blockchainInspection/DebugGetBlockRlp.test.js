const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('debug_getBlockRlp API', () => {
    test('should return debug_getBlockRlp', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined();
            expect(typeof data === 'string').toBe(true);
            done();
        };

        const blockNumber = "0x1"

        sdk.debug.getBlockRlp(blockNumber, {}, callbackOne);
    });
});

