const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('debug_mutexProfile API', () => {
    test('should return debug_mutexProfile', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined();
            expect(data).toBe(null);
            done();
        };

        const file = "mutex.profile";
        const seconds = 10;

        sdk.debug.mutexProfile(file, seconds, {}, callbackOne);
    });
});

