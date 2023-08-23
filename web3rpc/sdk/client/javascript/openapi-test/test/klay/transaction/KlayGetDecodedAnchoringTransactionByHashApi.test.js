const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { BAOBAB_RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(BAOBAB_RPC));

describe('klay_getDecodedAnchoringTransactionByHash API', () => {
    test('should return klay_getDecodedAnchoringTransactionByHash', (done) => {

        let callbackOne = function (error, data, response) {
            console.log(data);
            expect(error).toBeNull();
            expect(data).toBeDefined();
            expect(data.blockCount).toBeDefined();
            expect(typeof data.blockCount === 'number').toBe(true);
            done();
        };
        const hashOfTransaction = '0x026b64e16b86633c0199f78f37a64840d3601d83e5c799f115b63024764524ca'
        sdk.klay.getDecodedAnchoringTransactionByHash(hashOfTransaction, {}, callbackOne);
    });
});
