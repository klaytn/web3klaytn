const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('klay_upperBoundGasPrice API', () => {
    test('should return klay_upperBoundGasPrice', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined();
            expect(/^0x[a-fA-F0-9]+/.test(data)).toBe(true);
            done();
        };

        sdk.klay.upperBoundGasPrice({}, callbackOne);
    });
});
