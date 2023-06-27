const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('eth_feeHistory API', () => {
    test('should return eth_feeHistory', (done) => {

        let callbackOne = function (error, data, response) {

            expect(error).toBeNull();
            expect(data).toBeDefined();
            expect(typeof data.oldestBlock === 'number' || /^0x[0-9a-fA-F]+$/.test(data.oldestBlock)).toBe(true);
            done();
        };
        const blockCount = '0x10'
        const lastBlock = 'latest'
        const rewardPercentiles = [0.1, 0.2, 0.3]
        sdk.eth.feeHistory(blockCount, lastBlock, rewardPercentiles, {}, callbackOne);
    });
});

