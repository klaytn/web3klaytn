const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('eth_getTransactionByHash API', () => {
    test('should return eth_getTransactionByHash', (done) => {

        let callbackOne = function (error, data, response) {

            expect(error).toBeNull();
            expect(data).toBeDefined()
            if (data !== null) {
                expect(data.blockNumber).toMatch(/^0x.*$/gm)
            };
            done();
        };
        const transactionHash = '0xc6acc62baaa57483da8d5e08aaed1907d82f0e25bd553ce3745ef1bc7b7f4476'
        sdk.eth.getTransactionByHash(transactionHash, {}, callbackOne);
    });
});
