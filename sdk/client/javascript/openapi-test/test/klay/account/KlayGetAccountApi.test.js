const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");

const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));

describe('Klay geAccount API', () => {
    test('should return account.', (done) => {

        let callbackOne = async function (error, data, response) {
            await expect(error).toBeNull();
            await expect(data.jsonrpc).toBe("2.0");
            expect(data.result).toBeDefined()
            //console.log('API called successfully. Returned data: ' + JSON.stringify(data));
            await done();
        };
        const address = '0x1cbd3b2770909d4e10f157cabc84c7264073c9ec'
        const blockNumberOrHash = 'latest'
        sdk.klay.getAccount(address, blockNumberOrHash, {}, callbackOne);
    });
});
