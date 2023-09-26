const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('Klay getRewards API', () => {
    test('should return info of a block number', (done) => {
        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined();
            expect(data.rewards).toBeDefined();
            expect(typeof data.rewards === 'object').toBe(true);
            done();
        };
        const blockNumberOrTag = 'latest';
        sdk.klay.getRewards(blockNumberOrTag,{}, callbackOne);
    });
});
