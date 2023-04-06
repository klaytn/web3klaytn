const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('eth_getFilterChanges API', () => {
    test.skip('should return eth_getFilterChanges', (done) => {

        let callbackOne = function (error, data, response) {
            
            expect(error).toBeNull();
            expect(data.jsonrpc).toBe("2.0");
            expect(data.result).toBeDefined()

            done();
        };
        const id = '0xc97f842e018068d28dfdd9acc2ec2f92'
        sdk.eth.getFilterChanges(id, {}, callbackOne);
    });
});
