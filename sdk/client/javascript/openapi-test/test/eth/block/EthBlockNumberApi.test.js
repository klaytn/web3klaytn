const OpenSDK = require("opensdk-javascript-test");
const { expect } = require("@jest/globals");
const {ApiClient}=require('opensdk-javascript-eth')
const sdk = new OpenSDK(new ApiClient("https://api.baobab.klaytn.net:8651"));
describe('Eth block number API', () => {
    test('using eth namespace, should return block number', (done) => {

        let callbackOne = function (error, data, response) {

            expect(error).toBeNull();
            expect(data.jsonrpc).toBe("2.0");
            expect(data.result).toBeDefined()
            console.log('API called successfully. Returned data: ' + JSON.stringify(data));
            done();
        };
        sdk.eth.blockNumber({}, callbackOne);
    });
});
