const OpenSdk = require("@klaytn/web3rpc");
const { expect } = require("@jest/globals");
const { BAOBAB_RPC } = require("../../constant");

const sdk = new OpenSdk.KlayApi(new OpenSdk.ApiClient(BAOBAB_RPC));

describe('klay_getTransactionByHash API', () => {
    test('should return klay_getTransactionByHash', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined()
            if (data !== null) {
                expect(/^0x[a-f0-9]+/.test(data.blockHash)).toBe(true);
            }
            done();
        };
        const transactionHash = '0xa40911eedd636d62f09d5f670856e8f168a4372ca69119796c95df547fd6010c'

        sdk.getTransactionByHash(transactionHash, {}, callbackOne);
    });
});
