const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('debug_stopCPUProfile API', () => {
    test('should return debug_stopCPUProfile', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined()
            done();
        };

        // Must perform start before stop and opposite 
        // Call startCPUProfile()
        sdk.debug.stopCPUProfile({}, callbackOne);
    });
});

