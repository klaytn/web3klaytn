const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { GOVERNANCE_RPC } = require("../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(GOVERNANCE_RPC));

describe('governance_vote API', () => {
    test('should return governance_vote', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined();
            expect(typeof data === 'string').toBe(true);
            done();
        };

        const key = "governance.governanceMode";
        const value = "ballot";

        sdk.governance.vote(key, value, {}, callbackOne);
    });
});

