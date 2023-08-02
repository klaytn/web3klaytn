const OpenSdk = require("@klaytn/web3rpc");
const { expect } = require("@jest/globals");
const { RPC } = require("../constant");

const sdk = new OpenSdk.PersonalApi(new OpenSdk.ApiClient(RPC));

describe('personal_deriveAccount API', () => {
    test.skip('should return personal_deriveAccount', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined()
            done();
        };

        const url = "url";
        const path = "path";
        const pin = true;

        sdk.deriveAccount(url, path, {pin}, callbackOne);
    });
});

