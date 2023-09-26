const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC, BAOBAB_RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(BAOBAB_RPC));

describe('eth_getRawTransactionByHash API', () => {
    test('should return eth_getRawTransactionByHash', (done) => {

        let callbackOne = function (error, data, response) {
            console.log(data, typeof data);
            expect(error).toBeNull();
            expect(data).toBeDefined()
            expect(data).toMatch(/^0x.*$/gm)

            done();
        };
        const transactionHash = '0x5bbcde52084defa9d1c7068a811363cc27a25c80d7e495180964673aa5f47687'

        sdk.eth.getRawTransactionByHash(transactionHash, {}, callbackOne);
    });
});
