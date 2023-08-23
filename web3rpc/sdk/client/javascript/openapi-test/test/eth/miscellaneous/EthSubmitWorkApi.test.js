const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('eth_submitWork API', () => {
    test('should return eth_submitWork', (done) => {

        let callbackOne = function (error, data, response) {

            expect(error).toBeNull();
            expect(data).toBeDefined()
            expect(typeof data === 'boolean').toBeTruthy()
            done();
        };
        const nonce = '0x0000000000000001'
        const powHash = '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef'
        const mixDigest = '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef'
        sdk.eth.submitWork(nonce, powHash, mixDigest, {}, callbackOne);
    });
});
