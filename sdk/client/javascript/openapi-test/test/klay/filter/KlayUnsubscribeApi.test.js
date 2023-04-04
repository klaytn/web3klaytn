const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('klay_unsubscribe API', () => {
    test.skip('should return klay_unsubscribe', (done) => {

        let callbackOne = function (error, data, response) {

            expect(error).toBeNull();
            expect(data.jsonrpc).toBe("2.0");
            expect(data.result).toBeDefined()

            done();
        };
        const id = 'logs'
        sdk.klay.unsubscribe(id, {}, callbackOne);
    });
});
