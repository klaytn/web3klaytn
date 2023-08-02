const OpenSdk = require("@klaytn/web3rpc");
const { expect } = require("@jest/globals");
const { BAOBAB_RPC } = require("../../constant");

const sdk = new OpenSdk.KlayApi(new OpenSdk.ApiClient(BAOBAB_RPC));

describe('klay_getTransactionByBlockHashAndIndex API', () => {
    test('should return klay_getTransactionByBlockHashAndIndex', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined()
            expect(data.blockHash).toMatch(/^0x[a-fA-F0-9]+/)
            done();
        };
        const blockHash = '0x4c4cbf242a80183d2ea2daf047c578d5fc89c0b14c4262606c8b6bb0b36715be'
        const transactionIndexPosition = '0x0'

        sdk.getTransactionByBlockHashAndIndex(blockHash, transactionIndexPosition, {}, callbackOne);
    });
});
