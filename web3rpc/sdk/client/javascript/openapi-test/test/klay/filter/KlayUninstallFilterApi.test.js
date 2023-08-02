const OpenSdk = require("@klaytn/web3rpc");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk.KlayApi(new OpenSdk.ApiClient(RPC));

describe('klay_uninstallFilter API', () => {
    test('should return klay_uninstallFilter', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined();
            expect(typeof data === 'boolean').toBe(true);
            done();
        };
        const quantity = '0xd32fd16b6906e67f6e2b65dcf48fc272'
        sdk.uninstallFilter(quantity, {}, callbackOne);
    });
});

