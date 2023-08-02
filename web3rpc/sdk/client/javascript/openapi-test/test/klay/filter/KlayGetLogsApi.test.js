const OpenSdk = require("@klaytn/web3rpc");
const { expect } = require("@jest/globals");
const { BAOBAB_RPC } = require("../../constant");

const sdk = new OpenSdk.KlayApi(new OpenSdk.ApiClient(BAOBAB_RPC));

describe('klay_getLogs API', () => {
    test('should return klay_getLogs', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined();
            expect(Array.isArray(data)).toBe(true);
            done();
        };
        const filterOptions = {
            "fromBlock": "latest",
            "toBlock": "latest",
            "address": "0x87ac99835e67168d4f9a40580f8f5c33550ba88b"
        }
        sdk.getLogs(filterOptions, {}, callbackOne);
    });
});
