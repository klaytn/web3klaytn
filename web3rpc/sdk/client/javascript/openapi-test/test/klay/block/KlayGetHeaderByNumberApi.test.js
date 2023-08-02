const OpenSdk = require("@klaytn/web3rpc");
const { expect } = require("@jest/globals");

const sdk = new OpenSdk.KlayApi(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));

describe('Klay getHeaderByNumber API', () => {
    test('should return getHeaderByNumber.', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined();
            expect(data.hash).toMatch(new RegExp(`^0x?`));
            done();
        };
        const blockNumber = 1
        sdk.getHeaderByNumber(blockNumber, {}, callbackOne);
    });
});
