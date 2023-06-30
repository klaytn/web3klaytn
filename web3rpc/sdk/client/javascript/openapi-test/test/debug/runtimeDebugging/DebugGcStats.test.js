const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('debug_gcStats API', () => {
    test('should return debug_gcStats', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined();
            expect(typeof data).toBe('object');
            expect(typeof data.NumGC).toBe('number');
            done();
        };

        sdk.debug.gcStats({}, callbackOne);
    });
});

