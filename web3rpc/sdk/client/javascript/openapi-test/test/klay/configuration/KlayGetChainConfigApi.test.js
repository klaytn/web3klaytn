const OpenSdk = require("@klaytn/web3rpc");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk.KlayApi(new OpenSdk.ApiClient(RPC));

describe('klay_getChainConfig API', () => {
    test('should return klay_getChainConfig', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined()
            expect(typeof data.chainId === 'number').toBe(true)
            done();
        };
        const blockNumberOrTag = 100
        sdk.getChainConfig({ blockNumberOrTag }, callbackOne);
    });
});

