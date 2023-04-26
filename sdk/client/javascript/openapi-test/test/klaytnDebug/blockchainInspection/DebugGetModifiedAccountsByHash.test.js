const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('debug_getModifiedAccountsByHash API', () => {
    test('should return debug_getModifiedAccountsByHash', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data.jsonrpc).toBe("2.0");
            expect(data.result).toBeDefined()
            done();
        };

        const startBlockHash = "0x165c29e453dff6e1d9838d9e975a438b6f11a2c0a281b0d5b97c8d3110a79ac5"
        const endBlockHash = "0x2a8acdc3e9bb735918dc6a0141b9939976f446fde0b39336d74278da93b8d41d"

        sdk.debug.getModifiedAccountsByHash(startBlockHash, {endBlockHash}, callbackOne);
    });
});

