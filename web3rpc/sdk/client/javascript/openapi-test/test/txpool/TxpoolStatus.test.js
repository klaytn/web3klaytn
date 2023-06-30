const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('txpool_status API', () => {
    test('should return txpool_status', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined()
            expect(typeof data.pending === 'number' || /^0x[0-9a-fA-F]+$/.test(data.pending)).toBe(true);
            done();
        };

        sdk.txpool.status({}, callbackOne);
    });
});

