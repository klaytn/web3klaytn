const OpenSdk = require("@klaytn/web3rpc");
const { expect } = require("@jest/globals");
const { RPC } = require("../constant");

const sdk = new OpenSdk.GovernanceApi(new OpenSdk.ApiClient(RPC));

describe('governance_idxCacheFromDb API', () => {
    test('should return governance_idxCacheFromDb', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined();
            expect(Array.isArray(data) && data.length > 0).toBe(true);
            done();
        };

        sdk.idxCacheFromDb({}, callbackOne);
    });
});

