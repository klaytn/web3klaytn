const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('klay_getStakingInfo API', () => {
    test('should return klay_getStakingInfo', (done) => {

        let callbackOne = function (error, data, response) {

            expect(error).toBeNull();
            expect(data).toBeDefined()
            done();
        };
        const blockNumberOrTag = 'latest'
        sdk.klay.getStakingInfo(blockNumberOrTag, {}, callbackOne);
    });
});

