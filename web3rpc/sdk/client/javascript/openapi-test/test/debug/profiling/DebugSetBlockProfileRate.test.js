const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('debug_setBlockProfileRate API', () => {
    test('should return debug_setBlockProfileRate', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined()
            done();
        };

        const rate = 3;

        sdk.debug.setBlockProfileRate(rate, {}, callbackOne);
    });
});

