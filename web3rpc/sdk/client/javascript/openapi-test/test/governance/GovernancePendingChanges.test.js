const OpenSdk = require("@klaytn/web3rpc");
const { expect } = require("@jest/globals");
const { GOVERNANCE_RPC } = require("../constant");

const sdk = new OpenSdk.GovernanceApi(new OpenSdk.ApiClient(GOVERNANCE_RPC));

describe('governance_pendingChanges API', () => {
    test('should return governance_pendingChanges', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined();
            expect(typeof data === 'object').toBe(true)
            done();
        };

        sdk.pendingChanges({}, callbackOne);
    });
});

