const OpenSdk = require("@klaytn/web3rpc");
const { expect } = require("@jest/globals");

const sdk = new OpenSdk.KlayApi(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));

describe('klay_getCouncilSize API', () => {
    test('should return klay_getCouncilSize', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined();
            expect(typeof data === 'number').toBe(true);
            done();
        };
        const blockNumberOrTag = '0x1b4'
        sdk.getCouncilSize({ blockNumberOrTag }, callbackOne);
    });
});
