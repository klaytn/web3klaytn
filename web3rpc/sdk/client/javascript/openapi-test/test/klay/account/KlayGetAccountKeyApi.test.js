const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { BAOBAB_RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(BAOBAB_RPC));

describe('klay_getAccountKey API', () => {
    test('should return accountKey', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined()
            expect(data.keyType).toBeDefined()
            expect(typeof data.keyType === 'number').toBe(true)
            done();
        };
        const address = '0xa36a5fdc679ecaabe057556ccec2f3558068bdc8'
        const blockNumberOrHash = 'latest'
        sdk.klay.getAccountKey(address,blockNumberOrHash, {}, callbackOne);
    });
});
