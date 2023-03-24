const OpenSdk = require("opensdk-javascript");
const {expect} = require("@jest/globals");

const api = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));

describe('accountCreated API', () => {
    test.skip('should return false for Not_Found', (done) => {
        
        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data.jsonrpc).toBe("2.0");
            console.log('API called successfully. Returned data: ' + JSON.stringify(data));
            done();
        };
        api.klay.accounts({}, callbackOne);
    });
});
