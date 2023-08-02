const OpenSdk = require("@klaytn/web3rpc");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk.DebugApi(new OpenSdk.ApiClient(RPC));

describe('debug_startCollectingTrieStats API', () => {
    test('should return debug_startCollectingTrieStats', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined();
            expect(data).toBe(null);
            done();
        };

        const address = "0x0000000000000000000000000000000000000000";

        sdk.startCollectingTrieStats(address, {}, callbackOne);
    });
});

