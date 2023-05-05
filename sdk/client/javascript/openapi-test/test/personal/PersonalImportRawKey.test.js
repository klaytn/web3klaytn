const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('personal_importRawKey API', () => {
    test('should return personal_importRawKey', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data.jsonrpc).toBe("2.0");
            expect(data.result).toBeDefined()
            done();
        };

        const privateKey = "ce4ab585ec68f7023d64211a47b52d6c05e456164373ea86f87214d92ce04725";
        const passphrase = "hello@1234"

        sdk.personal.importRawKey(privateKey, passphrase, {}, callbackOne);
    });
});

