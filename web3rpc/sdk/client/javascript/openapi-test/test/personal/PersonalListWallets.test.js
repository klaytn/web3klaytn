const OpenSdk = require("@klaytn/web3rpc");
const { expect } = require("@jest/globals");
const { RPC } = require("../constant");

const sdk = new OpenSdk.PersonalApi(new OpenSdk.ApiClient(RPC));

describe('personal_listWallets API', () => {
    test('should return personal_listWallets', (done) => {

        let callbackOne = function (error, data, response) {
            expect(data).toBeDefined()
            expect(error).toBeNull();
            expect(Array.isArray(data) && data.length > 0).toBe(true);
            done();
        };

        sdk.listWallets({}, callbackOne);
    });
});

