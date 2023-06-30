const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('debug_metrics API', () => {
    test('should return debug_metrics', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined();
            expect(typeof data === 'object').toBe(true);
            done();
        };

        const raw = true;

        sdk.debug.metrics(raw, {}, callbackOne);
    });
});

