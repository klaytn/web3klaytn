const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('eth_getFilterLogs API', () => {
    test.skip('should return eth_getFilterLogs', (done) => {

        let callbackOne = function (error, data, response) {
            console.log(error,data);    
            expect(error).toBeNull();
            expect(data.jsonrpc).toBe("2.0");
            expect(data.result).toBeDefined()

            done();
        };
        const id = '0xc97f842e018068d28dfdd9acc2ec2f92'
        sdk.eth.getFilterLogs(id, {}, callbackOne);
    });
});
