const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('eth_getLogs API', () => {
    test('should return eth_getLogs', (done) => {

        let callbackOne = function (error, data, response) {

            expect(error).toBeNull();
            expect(data.jsonrpc).toBe("2.0");
            expect(data.result).toBeDefined()
            done();
        };
        const filterOptions = {
            "fromBlock": "latest",
            "toBlock": "latest",
            "address": "0x87ac99835e67168d4f9a40580f8f5c33550ba88b"
        }
        sdk.eth.getLogs(filterOptions, {}, callbackOne);
    });
});
