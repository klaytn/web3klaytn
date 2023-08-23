const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('txpool_content API', () => {
    test('should return txpool_content', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined()
            expect(data).toHaveProperty('pending' || 'queued')
            done();
        };

        sdk.txpool.content({}, callbackOne);
    });
});

