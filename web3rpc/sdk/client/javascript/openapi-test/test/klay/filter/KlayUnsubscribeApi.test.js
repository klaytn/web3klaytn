const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('klay_unsubscribe API', () => {
    test.skip('should return klay_unsubscribe', (done) => {

        let callbackOne = function (error, data, response) {

            expect(error).toBeNull();
            expect(data).toBeDefined()

            done();
        };
        const id = 'logs'
        sdk.klay.unsubscribe(id, {}, callbackOne);
    });
});
