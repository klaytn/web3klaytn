const OpenSdk = require("@klaytn/web3rpc");
const { expect } = require("@jest/globals");
const { RPC, GOVERNANCE_RPC } = require("../constant");

const sdk = new OpenSdk.GovernanceApi(new OpenSdk.ApiClient(GOVERNANCE_RPC));

describe('governance_myVotes API', () => {
    test('should return governance_myVotes', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined()
            expect(Array.isArray(data)).toBe(true);
            done();
        };

        sdk.myVotes({}, callbackOne);
    });
});

