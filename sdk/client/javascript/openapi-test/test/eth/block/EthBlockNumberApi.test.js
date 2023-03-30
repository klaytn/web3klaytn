const OpenSDK = require("opensdk-javascript");
const { expect } = require("@jest/globals");

const sdk = new OpenSDK(new OpenSDK.ApiClient("https://api.baobab.klaytn.net:8651"));
describe('Eth block number API', () => {
    test('using eth namespace, should return block number', (done) => {

        let callbackOne = function (error, data, response) {

            expect(error).toBeNull();
            expect(data.jsonrpc).toBe("2.0");
            expect(data.result).toBeDefined()          
            done();
        };
        sdk.eth.blockNumber({}, callbackOne);
    });
});
