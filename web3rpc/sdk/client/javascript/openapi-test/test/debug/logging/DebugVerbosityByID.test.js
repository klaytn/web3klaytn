const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('debug_verbosityByID API', () => {
    test('should return debug_verbosityByID', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined()
            done();
        };

        const id = 1;
        const level = 3;

        sdk.debug.verbosityByID(id, level, {}, callbackOne);
    });
});

