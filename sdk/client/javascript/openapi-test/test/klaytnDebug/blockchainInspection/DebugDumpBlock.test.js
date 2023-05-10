const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { BAOBAB_RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(BAOBAB_RPC));

describe('debug_dumpBlock API', () => {
    test('should return debug_dumpBlock', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined()
            done();
        };

        const blockNumber = "0x80"

        sdk.debug.dumpBlock(blockNumber, {}, callbackOne);
    });
});

