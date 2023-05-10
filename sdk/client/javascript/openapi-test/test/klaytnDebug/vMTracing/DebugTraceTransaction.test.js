const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { BAOBAB_RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(BAOBAB_RPC));

describe('debug_traceTransaction API', () => {
    test('should return debug_traceTransaction', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined()
            done();
        };

        const txHash = "0xa9acfc383bb777cdeaa4e860db28209bb1e3afccd3c623aad0732367566ec015";

        sdk.debug.traceTransaction(txHash, {}, callbackOne);
    });
});

