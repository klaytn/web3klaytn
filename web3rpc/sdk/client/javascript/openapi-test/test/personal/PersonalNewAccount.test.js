const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('personal_newAccount API', () => {
    test('should return personal_newAccount', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined()
            done();
        };
        
        const passphrase = "helloWorld"

        sdk.personal.newAccount({passphrase}, callbackOne);
    });
});

