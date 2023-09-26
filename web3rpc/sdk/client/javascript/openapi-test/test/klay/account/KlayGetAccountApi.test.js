const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { BAOBAB_RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(BAOBAB_RPC));

describe('Klay getAccount API', () => {
    test('should return account.', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined()
            expect(data.accType).toBeDefined()
            expect(typeof data.accType === 'number').toBe(true)
            done();
        };
        const address = '0x1cbd3b2770909d4e10f157cabc84c7264073c9ec'
        const blockNumberOrHash = 'latest'
        sdk.klay.getAccount(address, blockNumberOrHash, {}, callbackOne);
    });
});
