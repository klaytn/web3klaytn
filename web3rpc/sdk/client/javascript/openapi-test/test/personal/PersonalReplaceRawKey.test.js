const OpenSdk = require("@klaytn/web3rpc");
const { expect } = require("@jest/globals");
const { RPC } = require("../constant");

const sdk = new OpenSdk.PersonalApi(new OpenSdk.ApiClient(RPC));

describe('personal_newAccount API', () => {
    test('should return personal_newAccount', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined()
            expect(data).toMatch(/^0x.*$/gm)
            done();
        };
        
        const keyData = "ba4a5bbc0dc57d6348047be71773686d1739bf0a5ac6ca4c390f0e4d596a09a6";
        const oldPassphrase = "hello@1234";
        const newPassphrase = "hello@1234";

        sdk.replaceRawKey(keyData, oldPassphrase, newPassphrase, {}, callbackOne);
    });
});

