const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('debug_cpuProfile API', () => {
    test('should return debug_cpuProfile', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined()
            done();
        };

        const file = "block.profile";
        const seconds = 10;

        sdk.debug.cpuProfile(file, seconds, {}, callbackOne);
    });
});

