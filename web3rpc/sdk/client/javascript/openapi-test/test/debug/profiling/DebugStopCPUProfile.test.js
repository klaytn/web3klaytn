const OpenSdk = require("@klaytn/web3rpc");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk.DebugApi(new OpenSdk.ApiClient(RPC));

describe('debug_stopCPUProfile API', () => {
    test('should return debug_stopCPUProfile', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined();
            expect(data).toBe(null);
            done();
        };

        // Must perform start before stop and opposite 
        // Call startCPUProfile()
        sdk.stopCPUProfile({}, callbackOne);
    });
});

