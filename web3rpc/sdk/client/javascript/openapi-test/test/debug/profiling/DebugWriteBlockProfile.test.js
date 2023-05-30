const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('debug_writeBlockProfile API', () => {
    test('should return debug_writeBlockProfile', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined()
            done();
        };

        const file = "block.profile";
        sdk.debug.writeBlockProfile(file, {}, callbackOne);
    });
});

