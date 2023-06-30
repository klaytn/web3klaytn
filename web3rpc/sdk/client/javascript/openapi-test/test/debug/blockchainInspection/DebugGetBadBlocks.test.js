const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('debug_getBadBlocks API', () => {
    test('should return debug_getBadBlocks', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined();
            expect(Array.isArray(data)).toBe(true);
            if (data.length > 0) {
                expect(/^0x[0-9a-fA-F]+$/.test(data[0].hash)).toBe(true);
            }
            done();
        };

        sdk.debug.getBadBlocks({}, callbackOne);
    });
});

