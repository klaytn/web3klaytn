const OpenSdk = require("@klaytn/web3rpc");
const { expect } = require("@jest/globals");
const { RPC } = require("../constant");

const sdk = new OpenSdk.AdminApi(new OpenSdk.ApiClient(RPC));

describe('admin_setSpamThrottlerWhiteList API', () => {
    test('should return admin_setSpamThrottlerWhiteList', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined();
            expect(data).toBeNull();
            done();
        };
        const address = ['0xfdeedbb2fe5b48d5b49e435ba00e0358740d0cf5']
        sdk.setSpamThrottlerWhiteList(address, {}, callbackOne);
    });
});
