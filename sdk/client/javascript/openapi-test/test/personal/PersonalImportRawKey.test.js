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

        const privateKey = "cd87934ee007b7a458fa00dc0314fff8b2bd43b3071f46c820c379e483b4fd8e";
        const passphrase = "gr8=B!0@uc$b"

        sdk.personal.importRawKey(privateKey, passphrase, {}, callbackOne);
    });
});

