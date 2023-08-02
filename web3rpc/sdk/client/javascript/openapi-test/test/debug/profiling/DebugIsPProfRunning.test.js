const OpenSdk = require("@klaytn/web3rpc");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk.DebugApi(new OpenSdk.ApiClient(RPC));

describe('debug_isPProfRunning API', () => {
    test('should return debug_isPProfRunning', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined();
            expect(typeof data).toBe('boolean');
            done();
        };

        sdk.isPProfRunning({}, callbackOne);
    });
});

