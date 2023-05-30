const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('admin_setMaxSubscriptionPerWSConn API', () => {
    test('should return admin_setMaxSubscriptionPerWSConn', (done) => {

        let callbackOne = function (error, data, response) {
            
            expect(error).toBeNull();
            expect(data).toBeDefined()
            done();
        };

        sdk.admin.setMaxSubscriptionPerWSConn(5, {}, callbackOne);
    });
});
