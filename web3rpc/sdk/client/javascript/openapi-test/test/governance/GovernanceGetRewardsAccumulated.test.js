const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('governance_getRewardsAccumulated API', () => {
    test('should return governance_getRewardsAccumulated', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined();
            expect(typeof data.totalMinted === 'number'.toBe(true));
            done();
        };

        const firstBlock = 123400489;
        const lastBlock = 123416489;

        sdk.governance.itemsAt(firstBlock, lastBlock, {}, callbackOne);
    });
});

