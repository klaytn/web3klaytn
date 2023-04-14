const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");
const { getRawTransaction } = require("../../../helpers/eth");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('eth_sendRawTransaction API', () => {
    test('should return eth_sendRawTransaction', (done) => {

        let callbackOne = function (error, data, response) {

            expect(error).toBeNull();
            expect(data.jsonrpc).toBe("2.0");
            expect(data.result).toBeDefined()
            done();
        };
        getRawTransaction().then(res => {
            sdk.eth.sendRawTransaction(res.rawTransaction, {}, callbackOne);
        })

    });
});
