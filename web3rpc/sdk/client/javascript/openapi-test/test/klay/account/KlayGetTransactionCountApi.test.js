const OpenSdk = require("@klaytn/web3rpc");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk.KlayApi(new OpenSdk.ApiClient(RPC));

describe('klay_getTransactionCount API', () => {
    test('should return klay_getTransactionCount', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined();
            expect(/^0x[a-f0-9]+/.test(data)).toBe(true);
            done();
        };

        const address = '0xc94770007dda54cF92009BFF0dE90c06F603a09f'
        const blockNumberOrHashOrTag = 'latest'
        sdk.getTransactionCount(address, blockNumberOrHashOrTag, {}, callbackOne);
    });
});

