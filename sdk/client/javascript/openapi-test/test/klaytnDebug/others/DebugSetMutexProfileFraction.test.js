const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('debug_setMutexProfileFraction API', () => {
    test('should return debug_setMutexProfileFraction', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data.jsonrpc).toBe("2.0");
            expect(data.result).toBeDefined()
            done();
        };

        const rate = 2;

        sdk.debug.setMutexProfileFraction(rate, {}, callbackOne);
    });
});

