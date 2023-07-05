const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { GOVERNANCE_RPC } = require("../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(GOVERNANCE_RPC));

describe('governance_totalVotingPower API', () => {
    test('should return governance_totalVotingPower', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined()
            done();
        };

        sdk.governance.totalVotingPower({}, callbackOne);
    });
});

