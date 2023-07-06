const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { BAOBAB_RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(BAOBAB_RPC));

describe('klay_getStakingInfo API', () => {
    test('should return klay_getStakingInfo', (done) => {

        let callbackOne = function (error, data, response) {

            expect(error).toBeNull();
            expect(data).toBeDefined()
            if (data !== null) {
                expect(typeof data.blockNum === 'number' || /^0x[0-9a-fA-F]+$/.test(data.blockNum)).toBe(true);
            }
            done();
        };
        const blockNumberOrTag = 'latest'
        sdk.klay.getStakingInfo(blockNumberOrTag, {}, callbackOne);
    });
});

