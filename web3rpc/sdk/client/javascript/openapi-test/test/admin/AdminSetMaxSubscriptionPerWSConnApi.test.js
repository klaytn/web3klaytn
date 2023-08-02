const OpenSdk = require("@klaytn/web3rpc");
const { expect } = require("@jest/globals");
const { RPC } = require("../constant");

const sdk = new OpenSdk.AdminApi(new OpenSdk.ApiClient(RPC));

describe('admin_setMaxSubscriptionPerWSConn API', () => {
    test('should return admin_setMaxSubscriptionPerWSConn', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined();
            expect(data).toBeNull();
            done();
        };

        sdk.setMaxSubscriptionPerWSConn(5, {}, callbackOne);
    });
});
