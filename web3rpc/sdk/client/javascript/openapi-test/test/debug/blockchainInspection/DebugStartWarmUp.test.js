const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('debug_startWarmUp API', () => {
    test('should return debug_startWarmUp', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined();
            expect(data).toBeNull();
            done();
        };

        sdk.debug.startWarmUp({}, callbackOne);
    });
});

