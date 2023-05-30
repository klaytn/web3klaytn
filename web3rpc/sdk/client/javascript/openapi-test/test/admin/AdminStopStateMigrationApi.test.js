const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('admin_stopStateMigration API', () => {
    test.skip('should return admin_stopStateMigration', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined()
            done();
        };

        // Must perform start before stop and opposite 
        // Call StartStateMigration()
        sdk.admin.stopStateMigration({}, callbackOne);
    });
});
