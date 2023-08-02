const OpenSdk = require("@klaytn/web3rpc");
const { expect } = require("@jest/globals");
const { RPC } = require("../constant");

const sdk = new OpenSdk.GovernanceApi(new OpenSdk.ApiClient(RPC));

describe('governance_itemCacheFromDb API', () => {
    test('should return governance_itemCacheFromDb', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined()
            expect(data['governance.governingnode']).toMatch(/^0x.*$/gm);
            done();
        };

        const blockNumber = 0

        sdk.itemCacheFromDb(blockNumber, {}, callbackOne);
    });
});

