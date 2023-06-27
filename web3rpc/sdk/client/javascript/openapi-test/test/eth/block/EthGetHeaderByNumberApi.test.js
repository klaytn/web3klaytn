const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('eth_getHeaderByNumber API', () => {
    test('should return eth_getHeaderByNumber', (done) => {

        let callbackOne = function (error, data, response) {
        
            expect(error).toBeNull();
            expect(data).toBeDefined();
            if (data !== null) {
                expect(data.number).toMatch(/^0x.*$/gm)
            };
            done();
        };
        const blockNumber = 1
        sdk.eth.getHeaderByNumber(blockNumber, {}, callbackOne);
    });
});
