const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");

const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));

describe('Klay getBalance API', () => {
    test('should return account.', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined()
            done();
        };
        const address = '0x1cbd3b2770909d4e10f157cabc84c7264073c9ec'
        const blockNumberOrHash = 'latest'
        sdk.klay.getBalance(address, blockNumberOrHash, {}, callbackOne);
    });
});
