const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('debug_startCollectingTrieStats API', () => {
    test.skip('should return debug_startCollectingTrieStats', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data.jsonrpc).toBe("2.0");
            expect(data.result).toBeDefined()
            done();
        };

        const address = "0x487f2dfef230c2120b8cc55c5087b103146536ec"

        sdk.debug.startCollectingTrieStats(address, {}, callbackOne);
    });
});

