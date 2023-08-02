const OpenSdk = require("@klaytn/web3rpc");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk.DebugApi(new OpenSdk.ApiClient(RPC));

describe('debug_memStats API', () => {
    test('should return debug_memStats', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined();
            expect(typeof data === 'object').toBe(true);
            expect(data.Alloc).toBeDefined();
            expect(typeof data.Alloc === 'number').toBe(true);
            done();
        };

        sdk.memStats({}, callbackOne);
    });
});

