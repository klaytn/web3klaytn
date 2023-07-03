const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('admin_stateMigrationStatus API', () => {
    test('should return admin_stateMigrationStatus', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined();
            expect(typeof data === 'object').toBeTruthy();
            expect(typeof data.committed === 'number').toBeTruthy();
            done();
        };

        sdk.admin.stateMigrationStatus({}, callbackOne);
    });
});
