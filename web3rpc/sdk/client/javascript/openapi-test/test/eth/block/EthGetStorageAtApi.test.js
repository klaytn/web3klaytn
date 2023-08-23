const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('eth_getStorageAt API', () => {
    test('should return eth_getStorageAt', (done) => {

        let callbackOne = function (error, data, response) {

            expect(error).toBeNull();
            expect(data).toBeDefined()
            expect(data).toMatch(/^0x.*$/gm)
            done();
        };
        const address = '0x295a70b2de5e3953354a6a8344e616ed314d7251'
        const quantity = '0x0'
        const blockNumberOrHashOrTag = 'latest'
        sdk.eth.getStorageAt(address, quantity, blockNumberOrHashOrTag, {}, callbackOne);
    });
});
