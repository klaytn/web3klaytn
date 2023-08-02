const OpenSdk = require("@klaytn/web3rpc");
const { expect } = require("@jest/globals");
const { GOVERNANCE_RPC } = require("../constant");

const sdk = new OpenSdk.GovernanceApi(new OpenSdk.ApiClient(GOVERNANCE_RPC));

describe('governance_myVotingPower API', () => {
    test('should return governance_myVotingPower', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined()
            expect(typeof data === 'number').toBe(true)
            done();
        };

        sdk.myVotingPower({}, callbackOne);
    });
});

