const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('admin_getSpamThrottlerWhiteList API', () => {
    test('should return admin_getSpamThrottlerWhiteList', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined()
            done();
        };
        // TODO: start spam throttler
        sdk.admin.getSpamThrottlerWhiteList({}, callbackOne);
    });
});
