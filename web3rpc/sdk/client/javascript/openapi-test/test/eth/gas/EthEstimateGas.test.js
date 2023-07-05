const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { BAOBAB_RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(BAOBAB_RPC));

describe('eth_estimateGas API', () => {
    test('should return eth_estimateGas', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined()
            done();
        };
        const callObject = {
            "from": "0x51239f87c33e95e3bdb72e31d06b5306bcec81cc",
            "to": "0x87ac99835e67168d4f9a40580f8f5c33550ba88b",
            "gas": "0x100000",
            "gasPrice": "0x5d21dba00",
            "value": "0x0",
            "input": "0x8ada066e"
        }
        sdk.eth.estimateGas(callObject, {}, callbackOne);
    });
});

