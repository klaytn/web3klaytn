const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('debug_goTrace API', () => {
    test('should return debug_goTrace', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined()
            done();
        };

        const file = "go.trace";
        const seconds = 5;

        sdk.debug.goTrace(file, seconds, {}, callbackOne);
    });
});

