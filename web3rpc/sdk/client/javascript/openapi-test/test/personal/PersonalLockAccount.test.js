const OpenSdk = require("@klaytn/web3rpc");
const { expect } = require("@jest/globals");
const { RPC } = require("../constant");

const sdk = new OpenSdk.PersonalApi(new OpenSdk.ApiClient(RPC));

describe('personal_lockAccount API', () => {
    test('should return personal_lockAccount', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined()
            expect(typeof data === 'boolean').toBeTruthy()
            done();
        };
        
        const address = "0xfa415bb3e6231f488ff39eb2897db0ef3636dd32"

        sdk.lockAccount(address, {}, callbackOne);
    });
});

