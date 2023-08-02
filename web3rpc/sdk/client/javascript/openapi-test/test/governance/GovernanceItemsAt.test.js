const OpenSdk = require("@klaytn/web3rpc");
const { expect } = require("@jest/globals");
const { RPC } = require("../constant");

const sdk = new OpenSdk.GovernanceApi(new OpenSdk.ApiClient(RPC));

describe('governance_itemsAt API', () => {
    test('should return governance_itemsAt', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined();
            expect(data['governance.governingnode']).toMatch(/^0x.*$/gm);
            done();
        };

        const blockNumber = 89;

        sdk.itemsAt(blockNumber, {}, callbackOne);
    });
});

