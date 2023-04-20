const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('personal_unlockAccount API', () => {
    test('should return personal_unlockAccount', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data.jsonrpc).toBe("2.0");
            expect(data.result).toBeDefined()
            done();
        };
        
        const address = "0x6b1ac7bda0073095df1d434c39d66fb31a592bdd";
        const passphrase = "helloWorld";
        const duration = 30;

        sdk.personal.unlockAccount(address, passphrase, {duration}, callbackOne);
    });
});

