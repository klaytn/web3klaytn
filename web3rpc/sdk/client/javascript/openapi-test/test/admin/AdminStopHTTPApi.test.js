const OpenSdk = require("@klaytn/web3rpc");
const { expect } = require("@jest/globals");
const { RPC } = require("../constant");

const sdk = new OpenSdk.AdminApi(new OpenSdk.ApiClient(RPC));

describe('admin_stopHTTP API', () => {
    test.skip('should return admin_stopHTTP', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined();
            expect(typeof data === 'boolean').toBeTruthy();

            done();
        };

        // Must perform start before stop and opposite
        // Call AdminStartHTTP()
        sdk.stopHTTP({}, callbackOne);
    });
});