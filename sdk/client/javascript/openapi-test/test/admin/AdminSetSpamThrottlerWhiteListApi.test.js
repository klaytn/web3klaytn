const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('admin_setSpamThrottlerWhiteList API', () => {
    test('should return admin_setSpamThrottlerWhiteList', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data.jsonrpc).toBe("2.0");
            expect(data.result).toBeDefined()
            done();
        };
        const address = ['0xfdeedbb2fe5b48d5b49e435ba00e0358740d0cf5']
        sdk.admin.setSpamThrottlerWhiteList(address, {}, callbackOne);
    });
});
