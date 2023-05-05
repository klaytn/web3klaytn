const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('debug_startCPUProfile API', () => {
    test('should return debug_startCPUProfile', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data.jsonrpc).toBe("2.0");
            expect(data.result).toBeDefined()
            done();
        };

        // Must perform start before stop and opposite 
        // Call stopCPUProfile()
        const file = "cpu.profile";
        sdk.debug.startCPUProfile(file, {}, callbackOne);
    }); 
});

