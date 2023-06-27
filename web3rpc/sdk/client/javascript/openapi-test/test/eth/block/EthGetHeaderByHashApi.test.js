const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('eth_getHeaderByHash API', () => {
    test('should return eth_getHeaderByHash', (done) => {

        let callbackOne = function (error, data, response) {

            expect(error).toBeNull();
            expect(data).toBeDefined();
            if (data !== null) {
                expect(data.number).toMatch(/^0x.*$/gm)
            };

            done();
        };
        const blockHash = '0xba647d41423faeebe8a7c64737d284fc2eba6f0388a3e1ebf6243db509ec1577'
        sdk.eth.getHeaderByHash(blockHash, {}, callbackOne);
    });
});
