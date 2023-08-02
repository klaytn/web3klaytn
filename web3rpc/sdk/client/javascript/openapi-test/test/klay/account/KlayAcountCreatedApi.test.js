const OpenSdk = require("@klaytn/web3rpc");
const { expect } = require("@jest/globals");

const sdk = new OpenSdk.KlayApi(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));

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
        sdk.accountCreated(address, blockTag, {}, callbackOne);
    });
});
