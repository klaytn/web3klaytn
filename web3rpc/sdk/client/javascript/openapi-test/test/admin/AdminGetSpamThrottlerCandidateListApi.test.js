const OpenSdk = require("@klaytn/web3rpc");
const { expect } = require("@jest/globals");
const { RPC } = require("../constant");

const sdk = new OpenSdk.AdminApi(new OpenSdk.ApiClient(RPC));

describe('admin_getSpamThrottlerCandidateList API', () => {
    test('should return admin_getSpamThrottlerCandidateList', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined();
            expect(typeof data === 'object').toBeTruthy();
            done();
        };

        sdk.getSpamThrottlerCandidateList({}, callbackOne);
    });
});
