const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('personal_openWallet API', () => {
    test('should return personal_openWallet', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data.jsonrpc).toBe("2.0");
            expect(data.result).toBeDefined()
            done();
        };
        
        const url = "keystore://"
        const passphrase = "gr8=B!0@uc$b"

        sdk.personal.openWallet(url, passphrase, {}, callbackOne);
    });
});

