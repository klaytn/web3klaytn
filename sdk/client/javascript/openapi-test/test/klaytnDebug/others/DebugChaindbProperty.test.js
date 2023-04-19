const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('debug_chaindbProperty API', () => {
    test('should return debug_chaindbProperty', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data.jsonrpc).toBe("2.0");
            expect(data.result).toBeDefined()
            done();
        };

        const property = "0xe17d821e9a8a8736b9aea8c2de1f3a4934ac0a2f";

        sdk.debug.chaindbProperty(property, {}, callbackOne);
    });
});

