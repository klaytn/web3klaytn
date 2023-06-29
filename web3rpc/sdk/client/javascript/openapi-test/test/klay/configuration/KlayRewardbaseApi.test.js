const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('klay_rewardbase API', () => {
    test('should return klay_rewardbase', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined()
            expect(/^0x[a-fA-F0-9]+/.test(data)).toBe(true);
            done();
        };

        sdk.klay.rewardbase({}, callbackOne);
    });
});