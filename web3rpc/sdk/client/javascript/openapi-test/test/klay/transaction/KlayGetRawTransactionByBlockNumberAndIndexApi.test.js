const OpenSdk = require("@klaytn/web3rpc");
const { expect } = require("@jest/globals");
const { BAOBAB_RPC } = require("../../constant");

const sdk = new OpenSdk.KlayApi(new OpenSdk.ApiClient(BAOBAB_RPC));

describe('klay_getRawTransactionByBlockNumberAndIndex API', () => {
    test('should return klay_getRawTransactionByBlockNumberAndIndex', (done) => {

        let callbackOne = function (error, data, response) {
            expect(error).toBeNull();
            expect(data).toBeDefined();
            expect(data).toMatch(/^0x[a-fA-F0-9]+/);
            done();
        };
        const blockNumber = 118593751
        const transactionIndexPosition = '0x0'
        sdk.getRawTransactionByBlockNumberAndIndex(blockNumber, transactionIndexPosition, {}, callbackOne);
    });
});

