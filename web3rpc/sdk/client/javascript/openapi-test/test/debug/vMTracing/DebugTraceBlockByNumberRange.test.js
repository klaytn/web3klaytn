const OpenSdk = require("@klaytn/web3rpc");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk.DebugApi(new OpenSdk.ApiClient(RPC));

describe('debug_traceBlockByNumberRange API', () => {
    test('should return debug_traceBlockByNumberRange', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined();
            expect(typeof data === 'object').toBeTruthy();
            const values = Object.values(data);
            if (values.length > 0) {
                expect(/^0x[0-9a-fA-F]+$/.test(values[0].hash)).toBeTruthy();
            }
            done();
        };

        const startBlock = 21;
        const endBlock = 30;

        sdk.traceBlockByNumberRange(startBlock, endBlock, {}, callbackOne);
    });
});

