const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");

const sdk = new OpenSdk.klay(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));

describe('Klay block number API', () => {
    test('should return block number', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined()      
            done();
        };
        sdk.blockNumber({}, callbackOne);
    });
});
