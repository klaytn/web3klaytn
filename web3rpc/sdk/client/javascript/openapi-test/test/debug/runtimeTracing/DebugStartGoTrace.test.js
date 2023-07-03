const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('debug_startGoTrace API', () => {
    test('should return debug_startGoTrace', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined();
            expect(data).toBe(null);
            done();
        };

        const file = "go.trace";
        
        // TODO: Turn on debug_goTrace
        sdk.debug.startGoTrace(file, {}, callbackOne);
    });
});

