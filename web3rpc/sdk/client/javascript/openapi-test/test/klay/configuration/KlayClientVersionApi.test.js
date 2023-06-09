const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");

const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));

describe('Klay clientVersion  API', () => {
    test('should return clientVersion', (done) => {

        let callbackOne = function (error, data, response) {

            expect(error).toBeNull();
            expect(data).toBeDefined()    
            done();
        };
        sdk.klay.clientVersion({}, callbackOne);
    });
});
