const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('admin_getSpamThrottlerCandidateList API', () => {
    test('should return admin_getSpamThrottlerCandidateList', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined();
            expect(Array.isArray(data)).toBeTruthy();
            done();
        };

        sdk.admin.getSpamThrottlerCandidateList({}, callbackOne);
    });
});
