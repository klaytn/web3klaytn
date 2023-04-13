const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('debug_startCollectingTrieStats API', () => {
    test('should return debug_startCollectingTrieStats', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data.jsonrpc).toBe("2.0");
            expect(data.result).toBeDefined()
            done();
        };

        const address = "0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b"

        sdk.debug.startCollectingTrieStats(address, {}, callbackOne);
    });
});

