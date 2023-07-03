const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

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
        sdk.admin.stopHTTP({}, callbackOne);
    });
});