const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { BAOBAB_RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(BAOBAB_RPC));

describe('debug_traceTransaction API', () => {
    test('should return debug_traceTransaction', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data.jsonrpc).toBe("2.0");
            expect(data.result).toBeDefined()
            done();
        };

        const txHash = "0x344fc43b5b87984d5a50fe2c54e121f94945ba9ff9da20f9de0f1b4914f47055";

        sdk.debug.traceTransaction(txHash, {}, callbackOne);
    });
});

