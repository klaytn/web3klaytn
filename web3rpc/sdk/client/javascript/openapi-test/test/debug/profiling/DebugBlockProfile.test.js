const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('debug_blockProfile API', () => {
    test('should return debug_blockProfile', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined();
            expect(data).toBe(null);
            done();
        };

        const file = "block.profile";
        const seconds = 10;

        sdk.debug.blockProfile(file, seconds, {}, callbackOne);
    });
});

