const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");

const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));

describe('klay_getCouncilSize API', () => {
    test('should return klay_getCouncilSize', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data.jsonrpc).toBe("2.0");
            expect(data.result).toBeDefined()
            done();
        };
        const blockNumberOrTag = '0x1b4'
        sdk.klay.getCouncilSize(blockNumberOrTag, {}, callbackOne);
    });
});
