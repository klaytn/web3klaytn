const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('klay_getChainConfig API', () => {
    test('should return klay_getChainConfig', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined()
            done();
        };
        const blockNumberOrTag = 100
        sdk.klay.getChainConfig({ blockNumberOrTag }, callbackOne);
    });
});

