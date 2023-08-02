const OpenSdk = require("@klaytn/web3rpc");
const { expect } = require("@jest/globals");
const { BAOBAB_RPC } = require("../../constant");

const sdk = new OpenSdk.DebugApi(new OpenSdk.ApiClient(BAOBAB_RPC));

describe('debug_dumpBlock API', () => {
    test('should return debug_dumpBlock', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined();
            expect(typeof data.root === 'string').toBe(true);
            done();
        };

        const blockNumber = "0x80"

        sdk.dumpBlock(blockNumber, {}, callbackOne);
    });
});

