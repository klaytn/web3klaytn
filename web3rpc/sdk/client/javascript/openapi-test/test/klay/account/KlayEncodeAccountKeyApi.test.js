const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { BAOBAB_RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(BAOBAB_RPC));

describe('Klay account encode account key API', () => {
    test('should return klay_encodeAccountKey', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined()
            done();
        };
        const accountKey = {"keyType": 0, "key": {}}

        sdk.klay.encodeAccountKey(accountKey, {}, callbackOne);
    });
});
