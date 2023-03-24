const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");

const api = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));

describe('Klay account created API', () => {
    test('should return boolean', (done) => {

        let callbackOne = function (error, data, response) {

            expect(error).toBeNull();
            expect(data.jsonrpc).toBe("2.0");
            expect(data.result).toBe(false)
            console.log('API called successfully. Returned data: ' + JSON.stringify(data));
            done();
        };
        const address='0xa4f42d4d2a3a13874406435500950c9bf2d783db'
        const blockTag='latest'
        api.klay.accountCreated(address,blockTag,{}, callbackOne);
    });
});
