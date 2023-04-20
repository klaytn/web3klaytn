const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('personal_newAccount API', () => {
    test('should return personal_newAccount', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data.jsonrpc).toBe("2.0");
            expect(data.result).toBeDefined()
            done();
        };
        
        const keyData = "24c34f686a5848edb19180fb723b5db21c626f253e8b63bf8a0054ea67852c0a";
        const oldPassphrase = "hello@123";
        const newPassphrase = "hello@123";

        sdk.personal.replaceRawKey(keyData, oldPassphrase, newPassphrase, {}, callbackOne);
    });
});

