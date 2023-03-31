const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");

const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));

describe('klay_getFilterLogs API', () => {
    test.skip('should return klay_getFilterLogs', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data.jsonrpc).toBe("2.0");
            expect(data.result).toBeDefined()
            done();
        };
        const quantity = "0xd32fd16b6906e67f6e2b65dcf48fc272"
        sdk.klay.getFilterLogs(quantity, {}, callbackOne);
    });
});
