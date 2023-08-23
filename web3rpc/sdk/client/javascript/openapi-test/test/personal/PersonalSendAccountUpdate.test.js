const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC, BAOBAB_RPC } = require("../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('personal_sendAccountUpdate API', () => {
    test('should return personal_sendAccountUpdate', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined()
            expect(data).toMatch(/^0x[0-9a-fA-F]+$/)
            done();
        };
        
        const tx =   {
            "from":"0x5c692652c5df87775737bbd3ce8a164e9572fb58",
            "key":"0x01c0"
        };
        const passphrase = "helloWorld";

        sdk.personal.sendAccountUpdate(tx, passphrase, {}, callbackOne);
    });
});

