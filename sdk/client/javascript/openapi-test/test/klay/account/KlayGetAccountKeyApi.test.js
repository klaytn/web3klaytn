const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");

const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));

describe('klay_getAccountKey API', () => {
    test('should return accountKey', (done) => {

        let callbackOne = function (error, data, response) {
            console.log(data);
            expect(error).toBeNull();
            expect(data.jsonrpc).toBe("2.0");
            expect(data.result).toBeDefined()
            done();
        };
        const address = '0x68756d616e616161000000000000000000000000'
        const blockNumberOrHash = 'latest'
        sdk.klay.getAccountKey(address,blockNumberOrHash, {}, callbackOne);
    });
});
