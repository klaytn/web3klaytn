const OpenSdk = require("opensdk-javascript");
const {expect} = require("@jest/globals");

const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));

describe('Klay getRewards API', () => {
    test.skip('should return info of a block number', (done) => {
        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data.jsonrpc).toBe("2.0");
            done();
        };
        sdk.klay.getRewards(1, callbackOne);
    });
});
