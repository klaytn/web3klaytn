const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('debug_dumpStateTrie API', () => {
    test('should return debug_dumpStateTrie', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined();
            expect(typeof data.root === 'string').toBe(true);
            done();
        };

        const blockNumber = "0x80"

        sdk.debug.dumpStateTrie(blockNumber, {}, callbackOne);
    });
});

