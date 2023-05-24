const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('debug_stopGoTrace API', () => {
    test('should return debug_stopGoTrace', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined()
            done();
        };

        // TODO: Turn on debug_startGoTrace
        sdk.debug.stopGoTrace({}, callbackOne);
    });
});

