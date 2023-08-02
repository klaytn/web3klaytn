const OpenSdk = require("@klaytn/web3rpc");
const { expect } = require("@jest/globals");
const { RPC } = require("../constant");

const sdk = new OpenSdk.GovernanceApi(new OpenSdk.ApiClient(RPC));

describe('governance_chainConfig API', () => {
    test('should return governance_chainConfig', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined()
            expect(typeof data.chainId === 'number').toBe(true)
            done();
        };

        sdk.chainConfig({}, callbackOne);
    });
});

