const OpenSdk = require("@klaytn/web3rpc");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk.DebugApi(new OpenSdk.ApiClient(RPC));

describe('debug_setGCPercent API', () => {
    test('should return debug_setGCPercent', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined()
            expect(typeof data === 'number').toBe(true);
            done();
        };

        const percent = 100;

        sdk.setGCPercent(percent, {}, callbackOne);
    });
});

