const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('debug_verbosityByName API', () => {
    test.skip('should return debug_verbosityByName', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined()
            expect(data).toBe(null);
            done();
        };

        const name = "name";
        const level = 3;

        sdk.debug.verbosityByName(name, level, {}, callbackOne);
    });
});

