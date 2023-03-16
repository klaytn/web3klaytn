const Caver = require("caver-javascript");
const { expect } = require("@jest/globals");

let api = new Caver.EthAccountApi(new Caver.ApiClient("https://api.baobab.klaytn.net:8651"));

describe('Eth account API', () => {
    test('should return list of accounts.', (done) => {

        let callbackOne = function (error, data, response) {

            expect(error).toBeNull();
            expect(data.jsonrpc).toBe("2.0");
            expect(data.result).toBeDefined()
            console.log('API called successfully. Returned data: ' + JSON.stringify(data));
            done();
        };
        api.ethAccounts({}, callbackOne);
    });
});
