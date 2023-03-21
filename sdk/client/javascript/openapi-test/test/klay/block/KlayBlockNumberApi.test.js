const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");

const api = new OpenSdk.KlayBlockApi(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));

describe('Klay block number API', () => {
    test('should return block number', (done) => {

        let callbackOne = function (error, data, response) {

            expect(error).toBeNull();
            expect(data.jsonrpc).toBe("2.0");
            expect(data.result).toBeDefined()
            console.log('API called successfully. Returned data: ' + JSON.stringify(data));
            done();
        };
        api.blockNumber({}, callbackOne);
    });
});
