const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('eth_newFilter API', () => {
    test.skip('should return eth_newFilter', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data.jsonrpc).toBe("2.0");
            expect(data.result).toBeDefined()
            done();
        };
        const opts = {
            "fromBlock": "earliest",
            "toBlock": "latest",
            "address": "0x87ac99835e67168d4f9a40580f8f5c33550ba88b",
            "topics": [
                "0xd596fdad182d29130ce218f4c1590c4b5ede105bee36690727baa6592bd2bfc8"
            ]
        }
        // params error
        sdk.eth.newFilter({ fromBlock: opts }, callbackOne);
    });
});
