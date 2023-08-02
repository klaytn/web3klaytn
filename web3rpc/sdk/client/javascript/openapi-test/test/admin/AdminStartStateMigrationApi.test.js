const OpenSdk = require("@klaytn/web3rpc");
const { expect } = require("@jest/globals");
const { RPC } = require("../constant");

const sdk = new OpenSdk.AdminApi(new OpenSdk.ApiClient(RPC));

describe('admin_startStateMigration API', () => {
    test('should return admin_startStateMigration', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined();
            expect(data).toBeNull();
            done();
        };

        // Must perform start before stop and opposite
        // Call StopStateMigration()
        sdk.startStateMigration({}, callbackOne);
    });
});
