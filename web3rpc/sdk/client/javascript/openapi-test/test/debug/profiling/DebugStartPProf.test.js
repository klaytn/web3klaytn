const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('debug_startPProf API', () => {
    test('should return debug_startPProf', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined();
            expect(data).toBe(null);
            done();
        };

        const address = "localhost";
        const port = 6060;

        sdk.debug.startPProf({address, port}, callbackOne);
    });
});

