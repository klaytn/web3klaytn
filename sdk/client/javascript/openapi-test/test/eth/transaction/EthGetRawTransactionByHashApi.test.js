const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(RPC));

describe('eth_getRawTransactionByHash API', () => {
    test('should return eth_getRawTransactionByHash', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data.jsonrpc).toBe("2.0");
            expect(data.result).toBeDefined()
            done();
        };
        const transactionHash = '0x5bbcde52084defa9d1c7068a811363cc27a25c80d7e495180964673aa5f47687'

        sdk.eth.getRawTransactionByHash(transactionHash, {}, callbackOne);
    });
});
