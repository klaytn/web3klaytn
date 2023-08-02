const OpenSdk = require("@klaytn/web3rpc");
const { expect } = require("@jest/globals");
const { RPC } = require("../constant");

const sdk = new OpenSdk.AdminApi(new OpenSdk.ApiClient(RPC));

describe('admin_getSpamThrottlerThrottleList API', () => {
    test('should return admin_getSpamThrottlerThrottleList', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined();
            expect(Array.isArray(data)).toBeTruthy();
            done();
        };

        sdk.getSpamThrottlerThrottleList({}, callbackOne);
    });
});
