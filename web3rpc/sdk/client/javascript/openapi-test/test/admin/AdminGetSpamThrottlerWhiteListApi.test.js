const OpenSdk = require("@klaytn/web3rpc");
const { expect } = require("@jest/globals");
const { RPC } = require("../constant");

const sdk = new OpenSdk.AdminApi(new OpenSdk.ApiClient(RPC));

describe('admin_getSpamThrottlerWhiteList API', () => {
    test('should return admin_getSpamThrottlerWhiteList', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined();
            expect(Array.isArray(data)).toBeTruthy();
            done();
        };
        // TODO: start spam throttler
        sdk.getSpamThrottlerWhiteList({}, callbackOne);
    });
});
