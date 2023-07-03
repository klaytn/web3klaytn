const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('admin_nodeInfo API', () => {
    test('should return admin_nodeInfo', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined();
            expect(typeof data === 'object').toBeTruthy();
            expect(typeof data.name === 'string').toBeTruthy();
            done();
        };

        sdk.admin.nodeInfo({}, callbackOne);
    });
});
