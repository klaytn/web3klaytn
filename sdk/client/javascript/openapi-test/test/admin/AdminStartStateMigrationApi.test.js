const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('admin_startStateMigration API', () => {
    test('should return admin_startStateMigration', (done) => {

        let callbackOne = function (error, data, response) {

            expect(error).toBeNull();
            expect(data).toBeDefined()

            done();
        };
        
        // Must perform start before stop and opposite 
        // Call StopStateMigration()
        sdk.admin.startStateMigration({}, callbackOne);
    });
});
