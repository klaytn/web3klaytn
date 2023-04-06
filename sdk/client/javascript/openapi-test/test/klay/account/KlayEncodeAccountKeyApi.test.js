const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");

const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));

describe('Klay account encode account key API', () => {
    test.skip('should return result', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data.jsonrpc).toBe("2.0");
            expect(data.result).toBeDefined()
            done();
        };
        const accountKey = { "keyType": 0, "key": {} }

        sdk.klay.encodeAccountKey(accountKey, {}, callbackOne);
    });
});
