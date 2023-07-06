const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('governance_getStakingInfo API', () => {
    test('should return governance_getStakingInfo', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined()
            if (data !== null) {
                expect(typeof data.blockNum === 'number' || /^0x[0-9a-fA-F]+$/.test(data.blockNum)).toBe(true);
            }
            done();
        };

        const blockNumber = "latest";

        sdk.governance.getStakingInfo(blockNumber, {}, callbackOne);
    });
});

