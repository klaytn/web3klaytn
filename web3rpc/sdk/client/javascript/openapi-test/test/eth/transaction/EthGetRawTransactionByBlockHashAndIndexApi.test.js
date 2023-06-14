const OpenSdk = require("opensdk-javascript");
const { expect } = require("@jest/globals");
const { RPC, BAOBAB_RPC } = require("../../constant");

const sdk = new OpenSdk(new OpenSdk.ApiClient(BAOBAB_RPC));

describe('eth_getRawTransactionByBlockHashAndIndex API', () => {
    test('should return eth_getRawTransactionByBlockHashAndIndex', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined()
            done();
        };
        const blockHash = '0x4c4cbf242a80183d2ea2daf047c578d5fc89c0b14c4262606c8b6bb0b36715be'
        const index = '0x0'
        sdk.eth.getRawTransactionByBlockHashAndIndex(blockHash, index, {}, callbackOne);
    });
});
