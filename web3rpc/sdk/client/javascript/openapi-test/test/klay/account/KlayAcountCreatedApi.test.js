const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { BAOBAB_RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(BAOBAB_RPC));

describe('Klay account created API', () => {
    test('should return boolean', (done) => {

        let callbackOne = function (error, data, response) {

            expect(error).toBeNull();
            expect(data).toBeDefined();
            expect(typeof data === 'boolean').toBe(true);
            done();
        };
        const address = '0xa4f42d4d2a3a13874406435500950c9bf2d783db'
        const blockTag = 'latest'
        sdk.klay.accountCreated(address, blockTag, {}, callbackOne);
    });
});
