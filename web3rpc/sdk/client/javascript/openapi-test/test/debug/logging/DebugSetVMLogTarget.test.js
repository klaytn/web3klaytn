const OpenSdk = require("@klaytn/web3rpc");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk.DebugApi(new OpenSdk.ApiClient(RPC));

describe('debug_setVMLogTarget API', () => {
    test('should return debug_setVMLogTarget', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined();
            expect(typeof data === 'srting').toBeTruthy();
            done();
        };

        const target = 3;

        sdk.setVMLogTarget(target, {}, callbackOne);
    });
});

